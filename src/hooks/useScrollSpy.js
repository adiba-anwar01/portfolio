import { useState, useEffect } from 'react';

export function useScrollSpy(sectionIds, offset = 80) {
  const [activeId, setActiveId] = useState('');

  useEffect(() => {
    const elements = sectionIds
      .map((id) => document.getElementById(id))
      .filter(Boolean);

    const observerOptions = {
      root: null,
      rootMargin: `-${offset}px 0px -40% 0px`,
      threshold: 0,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveId(entry.target.id);
        }
      });
    }, observerOptions);

    elements.forEach((el) => observer.observe(el));

    const handleScroll = () => {
      if (
        window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight - 10
      ) {
        setActiveId(sectionIds[sectionIds.length - 1]);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      observer.disconnect();
      window.removeEventListener('scroll', handleScroll);
    };
  }, [sectionIds, offset]);

  return activeId;
}
