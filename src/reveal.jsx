import React, { useEffect, useRef, useState } from 'react';

const Reveal = ({ children, className = '', style, delay = 0 }) => {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true);
            observer.unobserve(node);
          }
        });
      },
      { threshold: 0.1 }
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  const cls = `reveal ${visible ? 'reveal-visible' : ''} ${className}`.trim();
  const s = delay ? { ...style, transitionDelay: `${delay}ms` } : style;

  return (
    <div ref={ref} className={cls} style={s}>
      {children}
    </div>
  );
};

export default Reveal;
