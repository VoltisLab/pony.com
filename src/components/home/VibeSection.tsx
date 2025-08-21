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
  title = `"We group people by actual vibe, not just who's nearby."`,
  subtitle = `Pick your vibe, don't look back`,
  description = "We don't think chemistry comes from geography. That's why your matches are based on your world, your energy, and your rhythm.",
  rightImage1 = '/v3.png',
  rightImage2 = '/v1.png',
  rightImage3 = '/v2.png',
}) => {
  return (
    <section className="bg-black text-white py-12 overflow-hidden">
      <div className="w-full mx-auto px-5 md:px-16 lg:px-[4vw] 2xl:px-[1vw] ">
        <motion.div
          className="flex flex-col lg:flex-row items-center gap-2 sm:gap-12 md:gap-16 lg:gap-[6vw] 2xl:gap-[2vw]"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          {/* Left */}
          <motion.div
            className="w-full text-center lg:text-left space-y-6 sm:space-y-8 md:space-y-10 lg:max-w-[35vw]"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="w-full flex flex-col items-center lg:items-start">
              <motion.h2
                className="md:block hidden text-2xl w-[70vw] md:w-full sm:text-3xl md:text-4xl lg:text-[3.8vw] 2xl:text-[1.5vw] lg:mb-[1.4vw] font-semibold leading-[160%]"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
              >
                {title}
              </motion.h2>

              <motion.h2
                className="md:hidden block w-[70vw] text-[25px] mb-4 md:w-full lg:mb-[1.4vw] font-semibold leading-[160%]"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
              >
                “We group people by<br />actual vibe,  not just<br />who&apos;s nearby.”
              </motion.h2>

              <motion.p
                className="md:block hidden text-[11px] sm:text-lg md:text-xl lg:text-[1.35vw] lg:mb-[1.4vw] 2xl:text-[0.9vw] text-white leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                viewport={{ once: true }}
              >
                {description}
              </motion.p>

              <motion.p
                className="md:hidden block text-[10px] text-white leading-[160%]"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                viewport={{ once: true }}
              >
                We don&apos;t think chemistry comes from geography. That&apos;s why your<br />matches are based on your world, your energy, and your rhythm.
              </motion.p>
            </div>
          </motion.div>

          {/* Right images */}
          <motion.div
            className="relative w-full lg:w-[60vw] xl:w-[70vw]"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <div className="flex gap-2 lg:gap-[0vw] 2xl:gap-4">
              <motion.div
                className="relative flex-1 min-w-0 h-48 md:h-64 lg:h-[22vw] 2xl:h-[10.5vw] rounded-xl sm:rounded-2xl overflow-hidden"
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
                  sizes="(min-width:1024px) 20vw, 100vw"
                  className="object-contain"
                  priority
                />
                <div className="absolute bottom-0 left-0 right-0 h-16 lg:h-[3vw] 2xl:h-[1vw] bg-gradient-to-t from-black/90 to-transparent" />
              </motion.div>

              <motion.div
                className="relative flex-1 min-w-0 h-48 md:h-64 lg:h-[22vw] 2xl:h-[10.5vw] rounded-xl sm:rounded-2xl overflow-hidden"
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
                  sizes="(min-width:1024px) 20vw, 100vw"
                  className="object-contain"
                />
                <div className="absolute bottom-0 left-0 right-0 h-16 lg:h-[3vw] 2xl:h-[1vw] bg-gradient-to-t from-black/90 to-transparent" />
              </motion.div>

              <motion.div
                className="relative flex-1 min-w-0 h-48 md:h-64 lg:h-[22vw] 2xl:h-[10.5vw] rounded-xl sm:rounded-2xl overflow-hidden"
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
                  sizes="(min-width:1024px) 20vw, 100vw"
                  className="object-contain"
                />
                <div className="absolute bottom-0 left-0 right-0 h-16 lg:h-[3vw] 2xl:h-[1vw]  bg-gradient-to-t from-black/90 to-transparent" />
              </motion.div>
            </div>

            <motion.div
              className="w-full flex flex-col"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.9 }}
              viewport={{ once: true }}
            >
              <p className="md:block hidden text-white text-sm sm:text-xl md:text-2xl lg:text-[1.8vw] 2xl:text-[0.8vw] font-sfpro text-center leading-[160%] font-medium px-4 sm:px-6 py-0 sm:py-4 2xl:py-12">
                {subtitle}
              </p>

              <p className="block md:hidden text-white text-[15px] font-sfpro text-center leading-[160%] font-medium px-4 -mt-5 z-40">
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
