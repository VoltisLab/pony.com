'use client';
import React from 'react';
import { motion } from 'framer-motion';

interface InfiniteScrollTextProps {
  items: string[];
  speed?: number;
  className?: string;
  itemClassName?: string;
}

const InfiniteScrollText: React.FC<InfiniteScrollTextProps> = ({
  items,
  speed = 30,
  className = '',
  itemClassName = '',
}) => {
  const duplicatedItems = [...items, ...items, ...items];

  return (
    <div className={`overflow-hidden whitespace-nowrap ${className}`}>
      <motion.div
        className="flex"
        animate={{
          x: [0, -100 * (items.length / 3) + '%'],
        }}
        transition={{
          x: {
            repeat: Infinity,
            repeatType: "loop",
            duration: speed,
            ease: "linear",
          },
        }}
      >
        {duplicatedItems.map((item, index) => (
          <span
            key={index}
            className={`inline-block mx-8 ${itemClassName}`}
          >
            {item}
          </span>
        ))}
      </motion.div>
    </div>
  );
};

export default InfiniteScrollText;