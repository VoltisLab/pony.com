'use client';
import React from 'react';
import Image from 'next/image';
import InfiniteScrollText from '../shared/InfiniteScrollText';
import { motion } from 'framer-motion';
import AppStoreButtons from '../shared/Badge';

interface DatingSectionProps {
  leftImage?: string;
  title?: string;
  description?: string;
  scrollingTags?: string[];
}

const DatingSection: React.FC<DatingSectionProps> = ({
  leftImage = '/leftimage.png',
  title = 'Dating on PONY',
  scrollingTags = [
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
  ],
}) => {
  return (
    <section className="py-0 pt-2 lg:pt-8 sm:py-12 overflow-hidden bg-black">
      <div className="max-w-screen mx-auto">
        <motion.div
          className="flex flex-col-reverse lg:flex-row gap-2 lg:gap-[1.5vw] lg:h-[70vh] "
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          {/* Left Image */}
          <motion.div
            className="flex-1 h-[436px] relative lg:h-[70vh] "
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="w-full h-[400px] lg:h-[70vh]  relative lg:rounded-r-[1.2vw] lg:overflow-hidden">
              <Image
                src={leftImage}
                alt="Dating couple"
                fill
                className="object-cover"
                priority
              />
            </div>
          </motion.div>

          {/* Right Content */}
          <motion.div
            className="flex-1 bg-white flex items-end lg:h-[70vh]  justify-center px-8 md:px-16 xl:px-[4.2vw] pt-28 md:pt-0 pb-1 lg:pb-[1.25vw] lg:rounded-l-[1.2vw]"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <div className="max-w-2xl lg:max-w-[46vw] text-center flex flex-col items-center justify-end">
              <motion.h2
                className="text-2xl sm:text-3xl w-[120px] md:w-fit md:text-4xl lg:text-[3.5vw] font-bold mb-6 sm:mb-8 lg:mb-[1vw]"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                viewport={{ once: true }}
              >
                {title}
              </motion.h2>

              <motion.p
                className="text-sm lg:text-[1.25vw] font-medium leading-relaxed mb-1 sm:mb-10"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                viewport={{ once: true }}
              >
                In our community, dating isn&apos;t about swiping endlessly. We believe the strongest relationships begin with shared passions - whether that&apos;s music, food, pets, fitness, or films. When you join, you select your core interests, and we <span className="text-[#F25656]">match</span> you with people who vibe with the same.
              </motion.p>

              {/* App Store Buttons — Desktop/Tablet */}
           <AppStoreButtons/>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Infinite Scrolling Tags */}
      <div className="max-w-full hidden md:flex mx-auto xl:mt-0 mt-10">
        <InfiniteScrollText
          items={scrollingTags}
          speed={45}
          className="py-6 lg:py-[1vw]"
          itemClassName="text-gray-400 text-sm font-medium"
        />
      </div>
    </section>
  );
};

export default DatingSection;
