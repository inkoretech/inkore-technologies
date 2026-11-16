import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { SplitText } from 'gsap/SplitText';

gsap.registerPlugin(ScrollTrigger, SplitText);

/**
 * Page-wide GSAP scroll effects (re-run on every route):
 *  - .line-mask headings: each line rises from behind a mask (expo.out, staggered)
 *  - [data-split] paragraphs: split into masked lines and revealed the same way
 *  - [data-speed] elements: scrubbed vertical parallax (desktop only)
 *  - [data-marquee] tracks: nudged sideways as the page scrolls
 *  - [data-nav="dark"] sections: switch the navbar to its dark theme while underneath
 */
export function useGsapScroll() {
  const { pathname } = useLocation();

  useEffect(() => {
    let ctx;
    const splits = [];

    // wait a frame so the new route has rendered
    const id = setTimeout(() => {
      ctx = gsap.context(() => {
        const mm = gsap.matchMedia();

        mm.add('(prefers-reduced-motion: no-preference)', () => {
          /* Heading lines */
          gsap.utils.toArray('.line-mask').forEach((mask) => {
            if (mask.closest('.hero')) return;
            const inner = mask.firstElementChild;
            if (!inner) return;
            gsap.fromTo(inner, { yPercent: 110, y: 0 }, {
              yPercent: 0,
              y: 0,
              duration: 1.1,
              ease: 'expo.out',
              delay: (Array.prototype.indexOf.call(mask.parentElement.children, mask)) * 0.07,
              scrollTrigger: { trigger: mask.parentElement, start: 'top 88%', once: true },
            });
          });

          /* Paragraph line reveals */
          gsap.utils.toArray('[data-split]').forEach((el) => {
            const split = SplitText.create(el, { type: 'lines', mask: 'lines', linesClass: 'split-line' });
            splits.push(split);
            el.classList.add('is-split');
            gsap.from(split.lines, {
              yPercent: 105,
              duration: 1,
              ease: 'expo.out',
              stagger: 0.07,
              scrollTrigger: { trigger: el, start: 'top 88%', once: true },
            });
          });

          /* Marquees drift with scroll direction */
          gsap.utils.toArray('[data-marquee]').forEach((el) => {
            const dir = el.dataset.marquee === 'right' ? 1 : -1;
            gsap.fromTo(el, { x: 0 }, {
              x: `${dir * 12}vw`,
              ease: 'none',
              scrollTrigger: { trigger: el, start: 'top bottom', end: 'bottom top', scrub: 0 },
            });
          });

          /* Navbar theme over dark sections */
          gsap.utils.toArray('[data-nav="dark"]').forEach((sec) => {
            ScrollTrigger.create({
              trigger: sec,
              start: 'top 40px',
              end: 'bottom 40px',
              toggleClass: { targets: document.body, className: 'nav-on-dark' },
            });
          });
        });

        /* Column parallax — desktop only */
        mm.add('(prefers-reduced-motion: no-preference) and (min-width: 900px)', () => {
          gsap.utils.toArray('[data-speed]').forEach((el) => {
            const y = parseFloat(el.dataset.speed) || 0;
            gsap.fromTo(el, { y: -y / 2 }, {
              y: y / 2,
              ease: 'none',
              scrollTrigger: {
                trigger: el.parentElement,
                start: 'clamp(top bottom)',
                end: 'clamp(bottom top)',
                scrub: true,
              },
            });
          });
        });
      });

      // fonts/images can shift layout — recalc once everything has loaded
      ScrollTrigger.refresh();
    }, 60);

    const onLoad = () => ScrollTrigger.refresh();
    window.addEventListener('load', onLoad);
    document.fonts?.ready.then(onLoad);

    return () => {
      clearTimeout(id);
      window.removeEventListener('load', onLoad);
      document.body.classList.remove('nav-on-dark');
      splits.forEach((s) => s.revert());
      document.querySelectorAll('.is-split').forEach((el) => el.classList.remove('is-split'));
      ctx?.revert();
    };
  }, [pathname]);
}
