'use client';
import React from 'react';
import Image from 'next/image';
import InfiniteScrollText from '../shared/InfiniteScrollText';
import { motion } from 'framer-motion';

const ConnectionSection = () => {
  const scrollingTags = [
    'Pet Lovers','Football Fans','Foodies','Humour Matches','Same Music Taste',
    'Gamers','Entrepreneurs','Travel Partners','Fitness Enthusiasts','Book Lovers',
    'Art Appreciators','Tech Geeks'
  ];

  return (
    <section className="w-full bg-black overflow-hidden">
      <div>
        <InfiniteScrollText
          items={scrollingTags}
          speed={20}
          className="py-6 lg:py-[1vw]"
          itemClassName="text-gray-500 text-sm font-medium"
        />
      </div>

      {/* Main content */}
      <div className="w-full h-screen md:h-[336px] lg:h-[38vw]">
        <motion.div
          className="flex flex-col lg:flex-row h-full gap-2 lg:gap-[1.2vw]"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          {/* Left: text (≈70%) */}
          <motion.div
            className="lg:basis-[65%] relative flex bg-white h-[50vh] lg:h-full items-end justify-center lg:justify-start px-4 sm:px-8 md:px-12 lg:px-[5vw]"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="max-w-full w-full lg:w-fit mb-5 md:mb-12 lg:mb-[2vw] flex flex-col items-center justify-center lg:items-start">
              <motion.h1
                className="text-xl w-[70vw] lg:w-[100%] text-center lg:text-start sm:text-3xl md:text-4xl lg:text-[3.5vw] font-semibold leading-tight mb-4 sm:mb-6 lg:mb-[1vw]"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
              >
                No Awkward Starts. Just Real<br />Connections.
              </motion.h1>

              <motion.p
                className="text-[10px] sm:text-lg md:text-xl lg:text-[1.6vw] text-black leading-relaxed"
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

          {/* Right: image (≈30%) */}
          <motion.div
            className="lg:basis-[35%] relative h-[50vh] lg:h-full"
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
                sizes="(min-width:1024px) 30vw, 100vw"
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
