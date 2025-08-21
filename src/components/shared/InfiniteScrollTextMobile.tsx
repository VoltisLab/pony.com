'use client';
import React from 'react';
import { Dot } from 'lucide-react';

interface InfiniteScrollTextProps {
  items: string[];
  speed?: number;
  className?: string;
  itemClassName?: string;
}

const InfiniteScrollTextMobile: React.FC<InfiniteScrollTextProps> = ({
  items,
  speed,// Duration in seconds for one complete cycle
  className = '',
  itemClassName = '',
}) => {
  // Double the items for seamless loop
  const doubledItems = [...items, ...items];

  return (
    <>
      <style>{`
        @keyframes scroll-left {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        
        .scroll-container {
          animation: scroll-left ${speed}s linear infinite;
          display: flex;
          width: max-content;
        }
      `}</style>
      
      <div className={`overflow-hidden whitespace-nowrap ${className}`}>
        <div className="scroll-container">
          {doubledItems.map((item, index) => (
            <div 
              key={`${item}-${index}`} 
              className={`flex items-center flex-shrink-0 ${itemClassName}`}
            >
              <Dot 
                color='#878484' 
                className='h-5 w-5 lg:h-[1.5vw] lg:w-[1.5vw] flex-shrink-0' 
                size={25}
              />
              <span className="inline-block leading-[160%] mx-4 text-gray-400 text-sm flex-shrink-0 whitespace-nowrap">
                {item}
              </span>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default InfiniteScrollTextMobile;