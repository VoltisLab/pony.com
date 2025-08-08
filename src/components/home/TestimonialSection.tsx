'use client'
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

const testimonials = [
  {
    id: 1,
    text: "I was matched with someone who loves Formula 1 and 70s rock. We went to a Queen's tribute concert for our first date. Pony makes it easy to skip the awkward small talk and jump into stuff we both care about."
  },
  {
    id: 2,
    text: "We both love hiking and discovered we had the same favorite trail. Our first date was a sunrise hike, and we've been inseparable ever since. Pony really knows how to match people with shared passions."
  },
  {
    id: 3,
    text: "As a foodie, I was skeptical about dating apps. But Pony matched me with someone who shares my love for trying new restaurants. Our first date was at this amazing fusion place we both wanted to try."
  },
  {
    id: 4,
    text: "We both have rescue dogs and love volunteering at animal shelters. Pony brought us together through our shared compassion for animals. Now we're planning our future with our furry family."
  },
  {
    id: 5,
    text: "Both gamers, we connected over our favorite RPGs. Our first date was a gaming marathon, and we've been leveling up our relationship ever since. Pony understands that real connections come from shared interests."
  }
];

const TestimonialSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [nextIndex, setNextIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
      setNextIndex((prev) => (prev + 1) % testimonials.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="w-full bg-black py-12 sm:py-16 md:py-20 xl:py-24">
      <div className="max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-20">
        {/* Mobile/Tablet Layout */}
        <div className="xl:hidden">
          <div className="flex flex-col items-center space-y-8">
            {/* Image */}
            <div className="w-full max-w-sm">
              <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden border-2 border-red-500">
                <Image
                  src="/cafe.png"
                  alt="Couple at cafe - woman with hijab, man with blue beanie"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            {/* Title and Testimonial */}
            <div className="w-full max-w-md text-center">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-white mb-6">
                PONY-<span className="text-[#ED1B24] font-medium">tale</span>
              </h2>
              
              <div className="bg-white rounded-2xl p-4 sm:p-6 shadow-2xl border border-[#ED1B24]">
                <div className="flex items-start gap-2">
                  <span className="text-red-500 text-2xl sm:text-3xl font-bold flex-shrink-0">"</span>
                  <p className="text-black text-sm sm:text-base leading-relaxed">
                    {testimonials[currentIndex].text.split('skip the awkward').map((part, index, array) => (
                      <React.Fragment key={index}>
                        {part}
                        {index < array.length - 1 && (
                          <span className="text-red-500 font-semibold">skip the awkward</span>
                        )}
                      </React.Fragment>
                    ))}
                  </p>
                  <span className="text-red-500 text-2xl sm:text-3xl font-bold flex-shrink-0">"</span>
                </div>
              </div>

              {/* Navigation Dots */}
              <div className="flex gap-2 mt-6 justify-center">
                {testimonials.map((_, index) => (
                  <motion.div
                    key={index}
                    className={`w-2 h-2 rounded-full transition-colors duration-300 ${
                      index === currentIndex ? 'bg-[#FFFFFF4D]' : 'bg-[#FFFFFF1A]'
                    }`}
                    animate={{
                      scale: index === currentIndex ? 1.2 : 1,
                    }}
                  />
                ))}
              </div>
            </div>

            {/* World Map */}
            <div className="w-full max-w-md">
              <div className="relative w-full aspect-square bg-black rounded-2xl border border-gray-800 p-4">
                <div className="w-full h-full rounded-xl relative overflow-hidden">
                  <Image
                    src="/map.png"
                    alt="World map with heart icons showing global connections"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Desktop Layout */}
        <div className="hidden xl:flex items-center h-full relative">
          {/* Left Section - Layered Images */}
          <div className="w-1/2 relative z-10">
            <div className="relative w-full max-w-xs">
              {/* Current Image */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={`image-${currentIndex}`}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                  className="w-full relative rounded-2xl overflow-hidden"
                >
                  <Image
                    src="/cafe.png"
                    alt="Couple at cafe - woman with hijab, man with blue beanie"
                    height={547}
                    width={512}
                    className="object-contain w-full h-auto"
                  />
                </motion.div>
              </AnimatePresence>

              {/* Single Faded Background Image */}
              <motion.div
                key={`image-bg-${nextIndex}`}
                className="absolute -top-10 -left-8 rounded-2xl overflow-hidden opacity-10 -z-10"
                style={{ 
                  width: '100%',
                  height: 'calc(100% * 547/512)'
                }}
              >
                <Image
                  src="/cafe.png"
                  alt="Background image"
                  height={547}
                  width={512}
                  className="object-contain w-full h-full"
                />
              </motion.div>
            </div>
          </div>

          {/* Middle Section - Text & Testimonial */}
          <div className="absolute left-[45%] top-2/3 transform -translate-x-1/2 -translate-y-1/2 z-20">
            <div className="flex flex-col items-start">
              {/* Layered PONY-tale Text */}
              <div className="relative mb-3">
                <AnimatePresence mode="wait">
                  <motion.h2
                    key={`title-${currentIndex}`}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.5, ease: "easeInOut" }}
                    className="text-4xl font-semibold text-white ml-8"
                  >
                    PONY-<span className="text-[#ED1B24] text-4xl font-medium">tale</span>
                  </motion.h2>
                </AnimatePresence>

                <motion.h2
                  key={`title-bg-${nextIndex}`}
                  className="text-4xl max-w-xl w-xl font-semibold text-white absolute -top-2 left-12 opacity-10 -z-10"
                >
                  PONY-<span className="text-4xl font-medium">tale</span>
                </motion.h2>
              </div>
              
              <div className="relative w-sm">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentIndex}
                    initial={{ opacity: 0, x: 50, scale: 0.9 }}
                    animate={{ opacity: 1, x: 0, scale: 1 }}
                    exit={{ opacity: 0, x: -50, scale: 0.9 }}
                    transition={{ duration: 0.5, ease: "easeInOut" }}
                    className="bg-white xl:rounded-r-2xl p-2 shadow-2xl border border-[#ED1B24]"
                  >
                    <div className="flex items-start gap-2 mb-4">
                      <span className="text-red-500 text-3xl font-bold flex-shrink-0">"</span>
                      <p className="text-black text-base leading-relaxed">
                        {testimonials[currentIndex].text.split('skip the awkward').map((part, index, array) => (
                          <React.Fragment key={index}>
                            {part}
                            {index < array.length - 1 && (
                              <span className="text-red-500 font-semibold">skip the awkward</span>
                            )}
                          </React.Fragment>
                        ))}
                      </p>
                      <span className="text-red-500 text-3xl font-bold flex-shrink-0">"</span>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Navigation Dots */}
              <div className="flex gap-2 mt-8 w-full justify-center">
                {testimonials.map((_, index) => (
                  <motion.div
                    key={index}
                    className={`w-2 h-2 rounded-full transition-colors duration-300 ${
                      index === currentIndex ? 'bg-[#FFFFFF4D]' : 'bg-[#FFFFFF1A]'
                    }`}
                    animate={{
                      scale: index === currentIndex ? 1.2 : 1,
                    }}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Right Section - World Map */}
          <div className="absolute right-0 top-0 w-1/2 h-full">
            <div className="relative w-full h-full bg-black rounded-2xl p-4">
              <div className="w-full h-full rounded-xl relative overflow-hidden">
                <Image
                  src="/map.png"
                  alt="World map with heart icons showing global connections"
                  fill
                  className="object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;