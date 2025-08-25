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
    xl:h-full xl:mt-0 xl:sm:mt-20 xl:md:mt-24 w-full
    lg:mt-[6.8vw] lg:gap-[6vw] lg:px-[6vw]
    px-4 sm:px-6 
  "
>
  <div className="text-center w-full mx-auto">
    <motion.h1
      className="w-full text-center
        text-2xl sm:text-4xl md:text-6xl
        lg:text-[min(5.7vw,4rem)] xl:text-[min(5.5vw,4.5rem)] 2xl:text-[min(3vw,6.5rem)]
        leading-[160%]
        whitespace-nowrap
        font-bold text-white mb-0 sm:mb-2 px-2
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
        lg:text-[min(2.2vw,2rem)] xl:text-[min(2.5vw,2.2rem)] 2xl:text-[min(1.5vw,4rem)]
        whitespace-nowrap
        text-white/90 mb-8 sm:mb-10 lg:mb-[2.5vw] 2xl:mb-[1vw] text-center font-semibold px-4 pb-6 leading-[160%] 
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
          lg:text-[min(1.5vw,1.5rem)] lg:px-[min(2.5vw,2.5rem)] lg:py-[min(0.9vw,0.9rem)]
          rounded-full
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