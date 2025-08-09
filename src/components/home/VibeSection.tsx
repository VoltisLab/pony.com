'use client';
import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

interface VibeSectionProps {
  title?: string;
  subtitle?: string;
  description?: string;
  rightImage1?: string;
  rightImage2?: string;
  rightImage3?: string;
  scrollingTags?: string[];
}

const VibeSection: React.FC<VibeSectionProps> = ({
  title = '"We group people by actual vibe, not just who\'s nearby."',
  subtitle = 'Pick your vibe, don\'t look back.',
  description = 'We don\'t think chemistry comes from geography. That\'s why your matches are based on your world, your energy, and your rhythm.',
  rightImage1 = '/v3.png',
  rightImage2 = '/v1.png',
  rightImage3 = '/v2.png',

}) => {
  return (
    <section className="bg-black text-white py-12 overflow-hidden">
      
      <div className="max-w-[1920px] mx-auto md:px-16 px-5 xl:px-20">
        <motion.div 
          className="grid xl:grid-cols-2 gap-8 sm:gap-12 md:gap-16 xl:gap-20 items-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          {/* Left Content */}
          <motion.div 
            className="space-y-6 sm:space-y-8 md:space-y-10 max-w-md xl:max-w-xl"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div>
              <motion.h2 
                className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-6 sm:mb-8 leading-tight"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
              >
                {title}
              </motion.h2>
              <motion.p 
                className="font-semibold text-base sm:text-lg md:text-xl lg:text-2xl text-white leading-relaxed mb-6 sm:mb-8"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                viewport={{ once: true }}
              >
                {description}
              </motion.p>
            </div>
          </motion.div>
          
          {/* Right Images */}
          <motion.div 
            className="relative"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <div className="grid grid-cols-3 gap-3 sm:gap-4 md:gap-5">
              <motion.div 
                className="relative w-full h-48 sm:h-56 md:h-64 lg:h-72 xl:h-80 rounded-xl sm:rounded-2xl overflow-hidden"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
              >
                <Image
                  src={rightImage1}
                  alt="Vibe match example 1"
                  fill
                  className="object-cover"
                />
              </motion.div>
              <motion.div 
                className="relative w-full h-48 sm:h-56 md:h-64 lg:h-72 xl:h-80 rounded-xl sm:rounded-2xl overflow-hidden"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.7 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
              >
                <Image
                  src={rightImage2}
                  alt="Vibe match example 2"
                  fill
                  className="object-cover"
                />
              </motion.div>
              <motion.div 
                className="relative w-full h-48 sm:h-56 md:h-64 lg:h-72 xl:h-80 rounded-xl sm:rounded-2xl overflow-hidden"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
              >
                <Image
                  src={rightImage3}
                  alt="Vibe match example 3"
                  fill
                  className="object-cover"
                />
              </motion.div>
            </div>

            <motion.div 
              className=""
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.9 }}
              viewport={{ once: true }}
            >
              <p className="text-white text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-sfpro text-center leading-[160%] font-medium bg-black/50 backdrop-blur-sm px-4 sm:px-6 py-3 sm:py-4 rounded-full">
                {subtitle}
              </p>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default VibeSection;