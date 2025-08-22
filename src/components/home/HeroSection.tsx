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
    <section className="relative w-full md:min-h-screen lg:h-screen xl:min-h-screen overflow-hidden">
      {/* Background Image - Desktop */}
      <div className="absolute inset-0 z-0 xl:block hidden">
        <Image
          src={backgroundImage}
          alt="Hero background"
          fill
          className="object-cover object-center"
          priority
          sizes="100vw"
        />
        {/* <div className="absolute inset-0 bg-black/10" /> */}
      </div>

      {/* Background Image - Mobile */}
      <div className="xl:hidden block relative">
        <Image
          src={'/mobileHero.png'}
          alt="Hero background"
          height={498}
          width={375}
          className="object-contain w-full h-auto"
          priority
        
        />
      </div>

      {/* Hero Content */}
      <div
        className="
          absolute inset-0 z-10 flex items-center justify-center gap-20
          xl:h-full xl:mt-0 xl:sm:mt-20 xl:md:mt-24
          lg:mt-[6.8vw] lg:gap-[6vw] lg:px-[6vw]
          px-4 sm:px-6 
        "
      >
        <div className="text-center max-w-[92vw]">
          <motion.h1
            className="
              text-2xl sm:text-4xl md:text-6xl
              lg:text-[5.7vw] 
              lg:leading-[160%]
              font-bold text-white mb-0 sm:mb-2 tracking-wide leading-tight px-2
            "
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            {title}
          </motion.h1>

          <motion.p
            className="
              text-sm sm:text-2xl md:text-3xl
              lg:text-[2.2vw] xl:text-[2.5vw] 
              text-white/90 mb-8 sm:mb-10 lg:mb-[2.5vw] font-semibold px-4 pb-6 leading-[160%]
            "
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
          >
            {subtitle}
          </motion.p>

          <motion.div
            className="flex justify-center mt-8 md:mt-0"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: 'easeOut' }}
          >
            <Button
              variant="primary"
              size="lg"
              onClick={onButtonClick}
              className="
                shadow-2xl hover:shadow-3xl transform hover:scale-105
                text-sm sm:text-base md:text-lg
                lg:text-[1.05vw] lg:px-[2.5vw] lg:py-[0.9vw] rounded-full
              "
            >
              {buttonText}
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;