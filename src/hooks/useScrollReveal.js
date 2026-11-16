import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const SELECTOR = '.reveal-on-scroll';
const CLEANUP = ['reveal-on-scroll', 'reveal-left', 'reveal-right', 'reveal-up', 'reveal-scale', 'reveal-clip',
  'delay-1', 'delay-2', 'delay-3', 'delay-4', 'delay-5', 'delay-6'];

/**
 * Scroll-triggered reveal animations.
 * - `.reveal-on-scroll` (+ reveal-left/right/up/scale/clip, delay-N) fades/slides in.
 * - `.line-mask` slides its inner text up from behind a mask (stagger by order in parent).
 * After an element has revealed, its animation classes are removed so hover effects work normally.
 * New elements added later (filters, route changes) are picked up automatically.
 */
export function useScrollReveal() {
  const location = useLocation();

  useEffect(() => {
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    const finish = (el) => {
      if (el.classList.contains('line-mask')) return; // masks keep their state
      const delay = parseFloat(getComputedStyle(el).transitionDelay) || 0;
      setTimeout(() => {
        el.classList.remove(...CLEANUP, 'reveal-visible');
      }, (delay + 0.95) * 1000);
    };

    const show = (el) => {
      if (el.classList.contains('reveal-visible')) return;
      el.classList.add('reveal-visible');
      finish(el);
    };

    // Clip-path hides an element from IntersectionObserver, so clipped elements
    // are tracked through their parent (proxy) instead.
    const proxies = new Map();
    const bound = new WeakSet();

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          // also reveal anything the user has already scrolled past quickly
          if (entry.isIntersecting || entry.boundingClientRect.bottom < 0) {
            const targets = proxies.get(entry.target) || [entry.target];
            targets.forEach(show);
            proxies.delete(entry.target);
            io.unobserve(entry.target);
          }
        });
      },
      { rootMargin: '0px 0px -8% 0px', threshold: 0.12 }
    );

    const register = (root) => {
      const nodes = root.matches?.(SELECTOR) ? [root] : [];
      root.querySelectorAll?.(SELECTOR).forEach((n) => nodes.push(n));
      nodes.forEach((el) => {
        if (bound.has(el) || el.classList.contains('reveal-visible')) return;
        bound.add(el);
        // stagger multiple line masks inside the same heading
        if (el.classList.contains('line-mask')) {
          const idx = Array.prototype.indexOf.call(el.parentElement.children, el);
          el.style.setProperty('--line-delay', `${idx * 0.12}s`);
        }
        if (reduce) { show(el); return; }
        // Anything already on screen at load animates in right away
        const r = el.getBoundingClientRect();
        if (r.top < window.innerHeight && r.bottom > 0 && window.scrollY < 10) {
          setTimeout(() => show(el), 30);
          return;
        }
        if (el.classList.contains('reveal-clip') && el.parentElement) {
          const proxy = el.parentElement;
          proxies.set(proxy, [...(proxies.get(proxy) || []), el]);
          io.observe(proxy);
        } else {
          io.observe(el);
        }
      });
    };

    const timer = setTimeout(() => register(document.body), 40);

    const mo = new MutationObserver((muts) => {
      muts.forEach((m) => m.addedNodes.forEach((n) => n.nodeType === 1 && register(n)));
    });
    mo.observe(document.body, { childList: true, subtree: true });

    return () => {
      clearTimeout(timer);
      io.disconnect();
      mo.disconnect();
    };
  }, [location.pathname]);
}
