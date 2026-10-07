import React, { useState, useEffect, useRef } from 'react';

export default function AnimatedCounter({ end, duration = 1800, suffix = '+' }) {
  const [count, setCount] = useState(end); // Default to target number so stats are immediately visible
  const counterRef = useRef(null);

  useEffect(() => {
    const target = end;
    let startTimestamp = null;
    let animationFrameId = null;

    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry && entry.isIntersecting) {
          setCount(0);
          startTimestamp = null;
          const step = (timestamp) => {
            if (!startTimestamp) startTimestamp = timestamp;
            const progress = Math.min((timestamp - startTimestamp) / duration, 1);
            const easeProgress = 1 - Math.pow(1 - progress, 3);
            setCount(Math.floor(easeProgress * target));
            if (progress < 1) {
              animationFrameId = window.requestAnimationFrame(step);
            }
          };
          animationFrameId = window.requestAnimationFrame(step);
        } else {
          setCount(target);
        }
      },
      { threshold: 0.1 }
    );

    if (counterRef.current) {
      observer.observe(counterRef.current);
    }

    return () => {
      if (animationFrameId) window.cancelAnimationFrame(animationFrameId);
      observer.disconnect();
    };
  }, [end, duration]);

  return (
    <span ref={counterRef}>
      {count}{suffix}
    </span>
  );
}
