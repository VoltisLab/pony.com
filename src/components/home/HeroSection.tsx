import React from 'react';
import Image from 'next/image';
import Button from '../shared/Button';

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
    <section className="relative w-full h-screen overflow-hidden mt-2">
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
      <div className="relative z-10 flex items-center justify-center h-full mt-36 px-6 lg:px-8">
        <div className="text-center ">
          <h1 className="text-[40px] md:text-[80px] xl:text-[120px] font-bold text-white mb-6 leading-tight">
            {title}
          </h1>
          <p className="text-[30px] md:text-[40px] xl:text-[50px] text-white/90 mb-12 font-light">
            {subtitle}
          </p>
          <div className="flex justify-center">
            <Button
              variant="primary"
              size="lg"
              onClick={onButtonClick}
              className="shadow-2xl hover:shadow-3xl transform hover:scale-105"
            >
              {buttonText}
            </Button>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      {/* <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
        <div className="animate-bounce">
          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div> */}
    </section>
  );
};

export default HeroSection;