import { motion, useReducedMotion } from 'motion/react';

// Use for short, headline-length strings only (roughly <= 10 words).
// Do not use on paragraph copy — see Part 3.4.
export default function TextReveal({ text, className = '' }) {
  const prefersReducedMotion = useReducedMotion();
  const words = text.split(' ');

  if (prefersReducedMotion) {
    return <h1 className={className}>{text}</h1>;
  }

  const container = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.04 } },
  };
  const child = {
    hidden: { opacity: 0, y: 16 },
    visible: { opacity: 1, y: 0, transition: { type: 'spring', damping: 14, stiffness: 120 } },
  };

  return (
    <motion.h1
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-10%' }}
      className={`flex flex-wrap ${className}`}
    >
      {words.map((word, i) => (
        <motion.span variants={child} key={i} className="mr-3 mb-1 inline-block">
          {word}
        </motion.span>
      ))}
    </motion.h1>
  );
}
