import { useState, useEffect } from 'react';

export function useScrollSpy(sectionIds, offset = 80) {
  const [activeId, setActiveId] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY < offset) {
        setActiveId('');
        return;
      }

      if (
        window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight - 10
      ) {
        setActiveId(sectionIds[sectionIds.length - 1]);
        return;
      }

      let currentId = '';
      for (const id of sectionIds) {
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          // If the section's top is past the offset (plus a little buffer)
          if (rect.top <= offset + 150) {
            currentId = id;
          }
        }
      }

      if (currentId) {
        setActiveId(currentId);
      }
    };

    // Run once on mount to set initial state
    handleScroll();

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [sectionIds, offset]);

  return activeId;
}
