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
          className="py-4"
          itemClassName="text-gray-500 text-sm font-medium"
        />
      </div>
      
      {/* Full width container for the main content */}
      <div className="w-full h-[436px]">
        <motion.div 
          className="flex h-full gap-5"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          {/* Left Section - Text */}
          <motion.div 
            className="flex-2 relative flex bg-white items-end justify-start px-4 sm:px-8 md:px-12 lg:px-20"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="max-w-full mb-8 sm:mb-12 lg:mb-16">
              <motion.h1 
                className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold leading-tight mb-4 sm:mb-6"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
              >
                No Awkward Starts. Just Real<br />
                Connections.
              </motion.h1>
              <motion.p 
                className="text-base sm:text-lg md:text-xl lg:text-xl xl:text-2xl text-black leading-relaxed"
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
            <div className="w-full h-full relative">
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