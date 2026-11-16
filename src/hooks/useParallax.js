import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

/**
 * Lightweight scroll parallax: any element with data-parallax="0.15"
 * drifts vertically relative to its position in the viewport.
 * Disabled on small screens and when the user prefers reduced motion.
 */
export function useParallax() {
  const location = useLocation();

  useEffect(() => {
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduce) return undefined;

    let els = [];
    let raf = 0;

    const collect = () => { els = Array.from(document.querySelectorAll('[data-parallax]')); };

    const update = () => {
      raf = 0;
      const vh = window.innerHeight;
      const enabled = window.innerWidth > 768;
      els.forEach((el) => {
        if (!enabled) { el.style.transform = ''; return; }
        const speed = parseFloat(el.dataset.parallax) || 0;
        const r = el.getBoundingClientRect();
        if (r.bottom < -200 || r.top > vh + 200) return;
        const offset = (r.top + r.height / 2 - vh / 2) * speed;
        el.style.transform = `translate3d(0, ${offset.toFixed(1)}px, 0)`;
      });
    };

    const onScroll = () => { if (!raf) raf = requestAnimationFrame(update); };

    const t = setTimeout(() => { collect(); update(); }, 60);
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    return () => {
      clearTimeout(t);
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, [location.pathname]);
}
