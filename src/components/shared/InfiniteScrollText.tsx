'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { Dot } from 'lucide-react';

interface InfiniteScrollTextProps {
  items: string[];
  speed?: number;
  className?: string;
  itemClassName?: string;
}

const InfiniteScrollText: React.FC<InfiniteScrollTextProps> = ({
  items,
  speed = 3,
  className = '',
//   itemClassName = '',
}) => {
  const duplicatedItems = [...items, ...items, ...items];

  return (
    <div className={`overflow-hidden whitespace-nowrap  ${className}`}>
      <motion.div
        className="flex"
        animate={{
          x: [0, -100 * (items.length / 3) + '%'],
        }}
        transition={{
          x: {
            repeat: Infinity,
            repeatType: "loop",
            duration: 90,
            ease: "linear",
          },
        }}
      >
        {duplicatedItems.map((item, index) => (
          <div key={index} className='flex items-center'>
            <Dot color='#878484' className='h-5 w-5 lg:h-[1.5vw] lg:w-[1.5vw]' size={25}/>
            <span className={`inline-block mx-4 text-[#878484] text-xs lg:text-[1.6vw]`}>
            {item}
            </span>
          </div>
        
        ))}
      </motion.div>
    </div>
  );
};

export default InfiniteScrollText;