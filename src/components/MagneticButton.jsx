import { useRef, useState } from 'react';
import { motion, useReducedMotion } from 'motion/react';

export default function MagneticButton({ children, href, onClick, className = '' }) {
  const ref = useRef(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const prefersReducedMotion = useReducedMotion();

  const handleMouse = (e) => {
    if (prefersReducedMotion || !window.matchMedia('(pointer: fine)').matches) return;
    const { clientX, clientY } = e;
    const { height, width, left, top } = ref.current.getBoundingClientRect();
    setPosition({
      x: (clientX - (left + width / 2)) * 0.2,
      y: (clientY - (top + height / 2)) * 0.2,
    });
  };

  const reset = () => setPosition({ x: 0, y: 0 });
  const Tag = href ? motion.a : motion.button;

  return (
    <Tag
      ref={ref}
      href={href}
      onClick={onClick}
      onMouseMove={handleMouse}
      onMouseLeave={reset}
      animate={{ x: position.x, y: position.y }}
      transition={{ type: 'spring', stiffness: 150, damping: 15, mass: 0.1 }}
      className={`relative inline-block px-8 py-4 bg-[#0a1628] text-white rounded-full
                 font-medium tracking-wide overflow-hidden group cursor-pointer
                 focus-visible:outline focus-visible:outline-2
                 focus-visible:outline-offset-2 focus-visible:outline-[#df4f00] ${className}`}
    >
      <span className="relative z-10 transition-colors duration-300 group-hover:text-white">{children}</span>
      <div className="absolute inset-0 bg-[#df4f00] translate-y-full
                       group-hover:translate-y-0 transition-transform
                       duration-300 ease-out z-0" />
    </Tag>
  );
}
