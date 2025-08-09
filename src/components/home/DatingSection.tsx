'use client';
import React from 'react';
import Image from 'next/image';
import InfiniteScrollText from '../shared/InfiniteScrollText';
import { motion } from 'framer-motion';

interface DatingSectionProps {
  leftImage?: string;
  title?: string;
  description?: string;
  googlePlayImage?: string;
  appStoreImage?: string;
  scrollingTags?: string[];
}

const DatingSection: React.FC<DatingSectionProps> = ({
  leftImage = '/leftimage.png',
  title = 'Dating on PONY',
//   description = "In our community, dating isn't about swiping endlessly. We believe the strongest relationships begin with shared passions - whether that\'s music, food, pets, fitness, or films. When you join, you select your core interests, and we match you with people who vibe with the same.",
  googlePlayImage = '/gplay.png',
  appStoreImage = '/apppay.png',
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
    <section className="py-8 sm:py-12 overflow-hidden bg-black">
      <div className="max-w-[1920px] mx-auto">
        <motion.div 
          className="flex flex-col xl:flex-row gap-5 max-h-[436px]"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          {/* Left Image */}
          <motion.div 
            className="flex-1 h-[436px] relative"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="w-full h-full relative rounded-r-2xl overflow-hidden">
              <Image
                src={leftImage}
                alt="Dating couple"
                fill
                className="object-cover"
              />
            </div>
          </motion.div>
          
          {/* Right Content */}
          <motion.div 
            className="flex-1 bg-white flex items-end justify-center px-6 sm:px-8 md:px-12 lg:px-16 xl:px-20 py-12 sm:py-16 md:py-20 xl:pb-16 rounded-l-2xl"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <div className="max-w-2xl text-center">
              <motion.h2 
                className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 sm:mb-8"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                viewport={{ once: true }}
              >
                {title}
              </motion.h2>
              <motion.p 
                className="text-base sm:text-lg leading-relaxed mb-8 sm:mb-10"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                viewport={{ once: true }}
              >
                In our community, dating isn&apos;t about swiping endlessly. We believe the strongest relationships begin with shared passions - whether that&apos;s music, food, pets, fitness, or films. When you join, you select your core interests, and we <span className='text-[#F25656]'>match</span> you with people who vibe with the same.
              </motion.p>
              
              {/* App Store Buttons */}
              <motion.div 
                className="flex flex-col sm:flex-row gap-4 justify-center items-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1 }}
                viewport={{ once: true }}
              >
                <motion.a 
                  href="#" 
                  className="inline-block hover:opacity-80 transition-opacity"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Image
                    src={googlePlayImage}
                    alt="Get it on Google Play"
                    width={100}
                    height={48}
                    className="h-12 sm:h-14 md:h-16 w-auto"
                  />
                </motion.a>
                <motion.a 
                  href="#" 
                  className="inline-block hover:opacity-80 transition-opacity"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Image
                    src={appStoreImage}
                    alt="Download on the App Store"
                    width={90}
                    height={48}
                    className="h-12 sm:h-14 md:h-16 w-auto"
                  />
                </motion.a>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </div>
      
      {/* Infinite Scrolling Tags */}
      <div className="max-w-[1920px] mx-auto">
        <InfiniteScrollText
          items={scrollingTags}
          speed={25}
          className="py-4"
          itemClassName="text-gray-400 text-sm font-medium"
        />
      </div>
    </section>
  );
};

export default DatingSection;