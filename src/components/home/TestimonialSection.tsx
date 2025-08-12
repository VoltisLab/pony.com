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
    <section className="w-full bg-black py-12 xl:py-[4vw]">
      {/* MOBILE/TABLET — unchanged */}
      <div className="xl:hidden px-0 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center space-y-8">
          <div className="w-full flex justify-center ">
            <div className="relative w-[150px] aspect-square rounded-2xl overflow-hidden border-2 border-red-500">
              <Image src="/cafe.png" alt="Couple at cafe" fill className="object-cover" />
            </div>
          </div>

          <div className="w-full text-center px-4">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-white mb-6">
              PONY-<span className="text-[#ED1B24] font-medium">tale</span>
            </h2>

            <div className="bg-white rounded-2xl p-4 sm:p-6 shadow-2xl border border-[#ED1B24]">
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

      {/* DESKTOP (xl+) — keep layout, switch px -> vw and anchor left */}
      <div className="hidden xl:block relative w-screen">
        {/* right background map fills the right half */}
        <div className="absolute right-0 top-0 h-full w-[50vw] z-0">
          <div className="relative w-full h-full rounded-[1.2vw]">
            <Image src="/map.png" alt="World map" fill className="object-contain" />
          </div>
        </div>

        {/* left rail (image + testimonial) anchored with viewport padding */}
        <div className="relative z-10 flex items-end gap-[2vw] pl-[5vw] pr-[2vw]">
          {/* left: image stack */}
          <div className="relative w-[22vw] h-[26vw] z-[100]">
            <AnimatePresence mode="wait">
              <motion.div
                key={`image-${currentIndex}`}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.5, ease: 'easeInOut' }}
                className="w-full h-full relative rounded-[1.2vw] overflow-hidden border-2 border-red-500"
              >
                <Image src="/cafe.png" alt="Couple at cafe" fill className="object-cover" />
              </motion.div>
            </AnimatePresence>

            <motion.div
              key={`image-bg-${nextIndex}`}
              className="absolute -top-[0.8vw] -left-[0.8vw] rounded-[1.2vw] overflow-hidden opacity-10 -z-10 w-full h-full"
            >
              <Image src="/cafe.png" alt="Background image" fill className="object-cover" />
            </motion.div>
          </div>

          {/* middle: fixed vw width so it never gets skinny or drift center */}
          <div className="flex-0 w-[43vw] min-w-[33vw] ">
            <div className="relative mb-[0.8vw]">
              <AnimatePresence mode="wait">
                <motion.h2
                  key={`title-${currentIndex}`}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.5, ease: 'easeInOut' }}
                  className="text-[3.5vw] font-semibold text-white ml-[2vw]"
                >
                  PONY-<span className="text-[#ED1B24] font-medium text-[3.5vw]">tale</span>
                </motion.h2>
              </AnimatePresence>

              <h2 className="text-[3.5vw] font-semibold text-white absolute -top-[0.6vw] left-[2.6vw] opacity-10 -z-10">
                PONY-<span className="font-medium text-[3.5vw]">tale</span>
              </h2>
            </div>

            <AnimatePresence mode="wait">
  <motion.div
    key={currentIndex}
    initial={{ opacity: 0, x: 50, scale: 0.95 }}
    animate={{ opacity: 1, x: 0, scale: 1 }}
    exit={{ opacity: 0, x: -50, scale: 0.95 }}
    transition={{ duration: 0.5, ease: 'easeInOut' }}
    className="bg-white rounded-r-[0.8vw] p-[1.2vw] w-full h-[12vw] shadow-2xl border border-[#ED1B24]"
  >
    <div className="flex items-start gap-[0.6vw]">
      <p className="text-black text-[1.3vw] leading-[1.6]">
        <span className="text-red-500 text-[1.3vw] font-bold align-[-0.2em] inline-block mr-[0.3vw]" aria-hidden>
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

        <span className="text-red-500 text-[1.3vw] font-bold align-[-0.2em] inline-block ml-[0.6vw]" aria-hidden>
          <BiSolidQuoteAltRight />
        </span>
      </p>
    </div>
  </motion.div>
</AnimatePresence>


            <div className="flex gap-[0.6vw] mt-[1.2vw] justify-center">
              {testimonials.map((_, i) => (
                <motion.div
                  key={i}
                  className={`w-[0.5vw] h-[0.5vw] rounded-full transition-colors duration-300 ${
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
