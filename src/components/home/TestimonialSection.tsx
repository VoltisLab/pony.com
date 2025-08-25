'use client'
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { BiSolidQuoteAltLeft, BiSolidQuoteAltRight } from 'react-icons/bi';

const testimonials = [
  { id: 1, text: `I was matched with someone who loves Formula 1 and 70s rock. We went to a Queen's tribute concert for our first date. Pony makes it easy to skip the awkward small talk and jump into stuff we both care about.` },
  { id: 2, text: `We both love hiking and discovered we had the same favorite trail. Our first date was a sunrise hike, and we've been inseparable ever since. Pony really knows how to match people with shared passions.` },
  { id: 3, text: `As a foodie, I was skeptical about dating apps. But Pony matched me with someone who shares my love for trying new restaurants. Our first date was at this amazing fusion place we both wanted to try.` },
  { id: 4, text: `We both have rescue dogs and love volunteering at animal shelters. Pony brought us together through our shared compassion for animals. Now we're planning our future with our furry family.` },
  { id: 5, text: `Both gamers, we connected over our favorite RPGs. Our first date was a gaming marathon, and we've been leveling up our relationship ever since. Pony understands that real connections come from shared interests.` }
];

const TestimonialSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [nextIndex, setNextIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((p) => (p + 1) % testimonials.length);
      setNextIndex((p) => (p + 1) % testimonials.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="w-full bg-black py-12 xl:py-[4vw] 2xl:py-0 2xl:pb-16">
      {/* MOBILE/TABLET — unchanged */}
      <div className="xl:hidden px-0 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center space-y-8">
          <div className="w-full flex justify-center ">
            <div className="relative w-[150px] aspect-square rounded-2xl overflow-hidden border-2 border-red-500">
              <Image src="/cafe.png" alt="Couple at cafe" fill className="object-cover" />
            </div>
          </div>

          <div className="w-full text-center pr-4">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-white mb-6">
              PONY-<span className="text-[#ED1B24] font-medium">tale</span>
            </h2>

            <div className="bg-white rounded-r-2xl p-4 sm:p-6 shadow-2xl border border-[#ED1B24]">
              <div className="flex items-start gap-2">
                <span className="text-red-500 text-2xl sm:text-3xl font-bold flex-shrink-0">&quot;</span>
                <p className="text-black text-xs sm:text-base leading-relaxed">
                  {testimonials[currentIndex].text.split('skip the awkward').map((part, i, arr) => (
                    <React.Fragment key={i}>
                      {part}
                      {i < arr.length - 1 && <span className="text-red-500 font-semibold">skip the awkward</span>}
                    </React.Fragment>
                  ))}
                </p>
                <span className="text-red-500 text-2xl sm:text-3xl font-bold flex-shrink-0">&quot;</span>
              </div>
            </div>

            <div className="flex gap-2 mt-2 sm:mt-6 justify-center">
              {testimonials.map((_, i) => (
                <motion.div
                  key={i}
                  className={`h-1 w-1 rounded-full transition-colors duration-300 ${i === currentIndex ? 'bg-[#FFFFFF4D]' : 'bg-[#FFFFFF1A]'}`}
                  animate={{ scale: i === currentIndex ? 1.2 : 1 }}
                />
              ))}
            </div>
          </div>

          <div className="w-full max-w-4xl h-64 sm:h-80 md:h-96 px-4">
            <div className="w-full h-full rounded-xl relative overflow-hidden">
              <Image src="/map.png" alt="World map" fill className="object-contain" />
            </div>
          </div>
        </div>
      </div>

      {/* DESKTOP (xl+) — responsive layout with 2xl classes */}
      <div className="hidden xl:block relative w-full max-w-none overflow-hidden">
        {/* right background map - responsive positioning */}
        <div className="absolute right-0 top-0 h-full 
                        xl:w-[50vw] 2xl:w-[45%] 
                        z-0">
          <div className="relative w-full h-full 
                          xl:rounded-[1.2vw] 2xl:rounded-xl">
            <Image src="/map.png" alt="World map" fill className="object-contain" />
          </div>
        </div>

        {/* left rail (image + testimonial) - responsive container */}
        <div className="relative z-10 flex items-end 
                        xl:gap-[1vw] 2xl:gap-4 
                        xl:pl-[5vw] xl:pr-[2vw] 
                        2xl:pl-20 2xl:pr-8 
                        max-w-full">
          
          {/* left: image stack - responsive sizing */}
          <div className="relative 
                          xl:w-[22vw] xl:h-[26vw] 
                          2xl:w-[480px] 2xl:h-[576px] 
                          aspect-square z-[100]">
            <AnimatePresence mode="wait">
              <motion.div
                key={`image-${currentIndex}`}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.5, ease: 'easeInOut' }}
                className="w-full h-full relative 
                           xl:rounded-[1.2vw] 2xl:rounded-xl 
                           overflow-hidden border-2 aspect-square"
              >
                <Image src="/cafe.png" alt="Couple at cafe" fill className="object-contain" />
              </motion.div>
            </AnimatePresence>

            <motion.div
              key={`image-bg-${nextIndex}`}
              className="absolute 
                         xl:-top-[0.8vw] xl:-left-[0.8vw] 
                         2xl:-top-3 2xl:-left-3 
                         xl:rounded-[1.2vw] 2xl:rounded-xl 
                         overflow-hidden opacity-10 -z-10 w-full h-full"
            >
              <Image src="/cafe.png" alt="Background image" fill className="object-contain" />
            </motion.div>
          </div>

          {/* middle: testimonial content - responsive width and sizing */}
          <div className="flex-0 
                          xl:w-[43vw] xl:min-w-[33vw] 
                          2xl:w-[900px] 2xl:min-w-[750px] 
                          2xl:max-w-[1050px]">
            
            {/* Title with responsive sizing */}
            <div className="relative 
                            xl:mb-[0.2vw] 2xl:mb-1">
              <AnimatePresence mode="wait">
                <motion.h2
                  key={`title-${currentIndex}`}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.5, ease: 'easeInOut' }}
                  className="xl:text-[3.5vw] 2xl:text-[90px] 
                             font-semibold text-white 
                             xl:ml-[2vw] 2xl:ml-8"
                >
                  PONY-<span className="text-[#ED1B24] font-medium 
                                        xl:text-[3.5vw] 2xl:text-[90px]">tale</span>
                </motion.h2>
              </AnimatePresence>

              <h2 className="xl:text-[3.5vw] 2xl:text-[90px] 
                             font-semibold text-white absolute 
                             xl:-top-[0.6vw] xl:left-[2.6vw] 
                             2xl:-top-2 2xl:left-10 
                             opacity-10 -z-10">
                PONY-<span className="font-medium 
                                      xl:text-[3.5vw] 2xl:text-[90px]">tale</span>
              </h2>
            </div>

            {/* Testimonial card with responsive sizing */}
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 50, scale: 0.95 }}
                animate={{ opacity: 1, x: 0, scale: 1 }}
                exit={{ opacity: 0, x: -50, scale: 0.95 }}
                transition={{ duration: 0.5, ease: 'easeInOut' }}
                className="bg-white 
                           xl:rounded-[0.8vw] xl:rounded-r-[0.8vw] xl:rounded-l-none 
                           2xl:rounded-r-4xl 2xl:rounded-l-none 
                           xl:p-[1.2vw] 2xl:p-5 
                           w-full 
                           xl:h-[12vw] 2xl:h-[312px] 
                           shadow-2xl border border-[#ED1B24]"
              >
                <div className="flex items-start 
                                xl:gap-[0.6vw] 2xl:gap-2">
                  <p className="text-black 
                                xl:text-[1.3vw] 2xl:text-[27px] 
                                xl:leading-[1.6] 2xl:leading-relaxed">
                    <span className="text-red-500 
                                     xl:text-[1.3vw] 2xl:text-[27px] 
                                     font-bold align-[-0.2em] inline-block 
                                     xl:mr-[0.3vw] 2xl:mr-1" 
                          aria-hidden>
                      <BiSolidQuoteAltLeft />
                    </span>

                    {testimonials[currentIndex].text.split('skip the awkward').map((part, i, arr) => (
                      <React.Fragment key={i}>
                        {part}
                        {i < arr.length - 1 && (
                          <span className="text-red-500 font-semibold">skip the awkward</span>
                        )}
                      </React.Fragment>
                    ))}

                    <span className="text-red-500 
                                     xl:text-[1.3vw] 2xl:text-[27px] 
                                     font-bold align-[-0.2em] inline-block 
                                     xl:ml-[0.6vw] 2xl:ml-2" 
                          aria-hidden>
                      <BiSolidQuoteAltRight />
                    </span>
                  </p>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Dots indicator with responsive sizing */}
            <div className="flex 
                            xl:gap-[0.6vw] 2xl:gap-2 
                            xl:mt-[1.2vw] 2xl:mt-5 
                            justify-center">
              {testimonials.map((_, i) => (
                <motion.div
                  key={i}
                  className={`xl:w-[0.5vw] xl:h-[0.5vw] 
                              2xl:w-2 2xl:h-2 
                              rounded-full transition-colors duration-300 ${
                    i === currentIndex ? 'bg-[#FFFFFF4D]' : 'bg-[#FFFFFF1A]'
                  }`}
                  animate={{ scale: i === currentIndex ? 1.2 : 1 }}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;