'use client';
import React from 'react';
import Image from 'next/image';
import Button from '../shared/Button';
import { motion } from 'framer-motion';

interface HeroSectionProps {
  backgroundImage?: string;
  title?: string;
  subtitle?: string;
  buttonText?: string;
  onButtonClick?: () => void;
}

const HeroSection: React.FC<HeroSectionProps> = ({
  backgroundImage = '/heroimage.png',
  title = 'Interests Make Connections.',
  subtitle = 'Start with Substance.',
  buttonText = 'Download',
  onButtonClick,
}) => {
  return (
    <section className="relative w-full lg:h-screen h-[65vh] overflow-hidden md:mt-2">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src={backgroundImage}
          alt="Hero background"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/40" />
      </div>
      
      {/* Hero Content */}
      <div className="relative z-10 flex items-center gap-20 justify-center h-full mt-0 sm:mt-20 md:mt-24 lg:mt-36 px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <motion.h1 
            className="text-2xl sm:text-4xl md:text-6xl lg:text-[80px] font-bold text-white mb-0 sm:mb-6 leading-tight px-2"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            {title}
          </motion.h1>
          <motion.p 
            className="text-sm sm:text-2xl md:text-3xl lg:text-[40px] xl:text-[50px] text-white/90 mb-8 sm:mb-10 lg:mb-12 font-light px-4"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          >
            {subtitle}
          </motion.p>
          <motion.div 
            className="flex justify-center mt-18 md: mt-0"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          >
            <Button
              variant="primary"
              size="lg"
              onClick={onButtonClick}
              className="shadow-2xl hover:shadow-3xl transform hover:scale-105 text-sm sm:text-base md:text-lg"
            >
              {buttonText}
            </Button>
          </motion.div>
        </div>
      </div>
      
      {/* Scroll indicator */}
     
    </section>
  );
};

export default HeroSection;