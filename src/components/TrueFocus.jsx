import React, { useState } from 'react';
import { motion } from 'motion/react';

export default function TrueFocus({
  sentence = "Verified Students • AI Compatibility • Secure Housing",
  separator = "•",
  className = ""
}) {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const items = sentence.split(separator).map((item) => item.trim());

  return (
    <div className={`inline-flex flex-wrap items-center justify-center gap-x-3 gap-y-2 ${className}`}>
      {items.map((item, index) => {
        const isHovered = hoveredIndex === index;
        const hasHover = hoveredIndex !== null;

        return (
          <React.Fragment key={`${item}-${index}`}>
            <motion.span
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              animate={{
                filter: hasHover && !isHovered ? 'blur(2.5px)' : 'blur(0px)',
                opacity: hasHover && !isHovered ? 0.45 : 1,
                scale: isHovered ? 1.05 : 1,
              }}
              transition={{ duration: 0.25, ease: 'easeOut' }}
              className="relative inline-block cursor-pointer px-3.5 py-1.5 rounded-xl text-zinc-800 font-semibold text-sm sm:text-base select-none transition-colors"
            >
              {item}

              {/* React Bits Focus Frame */}
              {isHovered && (
                <motion.span
                  layoutId="true-focus-frame"
                  className="absolute inset-0 rounded-xl border-2 border-[#df4f00] bg-[#df4f00]/8 -z-10 shadow-[0_0_16px_rgba(223,79,0,0.25)]"
                  transition={{ type: 'spring', stiffness: 400, damping: 28 }}
                />
              )}
            </motion.span>

            {index < items.length - 1 && (
              <span className="text-zinc-400 font-bold select-none px-0.5">{separator}</span>
            )}
          </React.Fragment>
        );
      })}
    </div>
  );
}
