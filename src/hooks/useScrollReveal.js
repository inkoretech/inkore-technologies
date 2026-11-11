import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export function useScrollReveal() {
  const location = useLocation();

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '0px 0px -50px 0px',
      threshold: 0.08
    };

    const handleIntersect = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('reveal-visible');
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersect, observerOptions);

    // Initial check for elements in viewport
    const timer = setTimeout(() => {
      const revealElements = document.querySelectorAll('.reveal-on-scroll');
      revealElements.forEach((el) => {
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom >= 0) {
          el.classList.add('reveal-visible');
        }
        observer.observe(el);
      });
    }, 80);

    return () => {
      clearTimeout(timer);
      observer.disconnect();
    };
  }, [location.pathname]);
}
