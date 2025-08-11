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
  speed = 30,
  className = '',
//   itemClassName = '',
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
          <div key={index} className='flex items-center'>
            <Dot color='#202020' className='h-5 w-5' size={25}/>
            <span className={`inline-block mx-4 text-[#202020] text-xs lg:text-[30px]`}>
            {item}
            </span>
          </div>
        
        ))}
      </motion.div>
    </div>
  );
};

export default InfiniteScrollText;