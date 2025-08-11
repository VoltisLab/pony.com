'use client';
import React from 'react';
import Image from 'next/image';
import InfiniteScrollText from '../shared/InfiniteScrollText';
import { motion } from 'framer-motion';

const ConnectionSection = () => {
  const scrollingTags = [
    'Pet Lovers',
    'Football Fans',
    'Foodies',
    'Humour Matches',
    'Same Music Taste',
    'Gamers',
    'Entrepreneurs',
    'Travel Partners',
    'Fitness Enthusiasts',
    'Book Lovers',
    'Art Appreciators',
    'Tech Geeks'
  ]
  
  return (
    <section className="w-full bg-black overflow-hidden">
      <div className="">
        <InfiniteScrollText
          items={scrollingTags}
          speed={20}
          className="lg:py-4"
          itemClassName="text-gray-500 text-sm font-medium"
        />
      </div>
      
      {/* Full width container for the main content */}
      <div className="w-full xl:h-[536px] md:h-[336px] h-screen">
        <motion.div 
          className="flex flex-col lg:flex-row h-full gap-2 xl:gap-5"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          {/* Left Section - Text */}
          <motion.div 
            className="flex-3 relative flex bg-white h-[50vh] lg:h-fit items-end justify-start px-4 sm:px-8 md:px-12 lg:px-20"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="max-w-full w-full lg:w-fit mb-5 md:mb-12 xl:mb-16 flex flex-col items-center justify-center lg:items-start  ">
              <motion.h1 
                className="text-xl lg:w-full w-[70vw] text-center lg:text-start sm:text-3xl md:text-4xl lg:text-5xl font-semibold leading-tight mb-4 sm:mb-6"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
              >
                No Awkward Starts. Just Real<br />
                Connections.
              </motion.h1>
              <motion.p 
                className="text-[10px] sm:text-lg md:text-xl lg:text-xl xl:text-2xl text-black leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                viewport={{ once: true }}
              >
                We remove the awkward, so you can focus on<br />
                what really matters: <span className="font-bold">Building Something Real.</span>
              </motion.p>
            </div>
          </motion.div>
          
          {/* Right Section - Image that extends to the edge */}
          <motion.div 
            className="flex-1 relative"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <div className="w-full lg:h-full h-[50vh] relative">
              <Image
                src="/picnic.png"
                alt="Couple enjoying picnic on beach"
                fill
                className="object-cover"
                priority
              />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ConnectionSection;