import React, { useEffect, useRef, useState } from 'react';

const Reveal = ({ children, className = '', style, delay = 0 }) => {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node || hasAnimated) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated) {
            // Add slight delay before showing to create cascade effect
            const timer = setTimeout(() => {
              setVisible(true);
              setHasAnimated(true);
            }, delay);

            // Cleanup timeout if component unmounts
            return () => clearTimeout(timer);
          }
        });
      },
      { 
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px' // Start animation slightly before element enters viewport
      }
    );

    observer.observe(node);

    return () => {
      observer.disconnect();
    };
  }, [delay, hasAnimated]);

  const cls = `reveal ${visible ? 'reveal-visible' : ''} ${className}`.trim();
  const combinedStyle = { ...style };

  return (
    <div ref={ref} className={cls} style={combinedStyle}>
      {children}
    </div>
  );
};

export default Reveal;