'use client';
import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const AwkwardToEffortlessSection = () => {
  return (
    <section className="w-full bg-black overflow-hidden pb-10 lg:pb-[2.083vw]">
      <div className="max-w-full mx-auto px-2 lg:px-[2.083vw]">
        <motion.div
          className="flex flex-col lg:flex-row gap-2 lg:gap-[1.042vw]"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          {/* Left Section - Main Image with Text Overlay */}
          <motion.div
            className="w-full flex-2 flex"
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="relative w-full rounded-none lg:rounded-[1.25vw] overflow-hidden group">
              {/* Main Background Image */}
              <div className="xl:absolute xl:inset-0">
                <Image
                  src="/awkward.png"
                  alt="Couple at dimly lit cafe or bar having conversation"
                  height={612}
                  width={1191}
                  className="object-contain w-full transition-transform duration-700 group-hover:scale-105"
                  priority
                />
              </div>

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent lg:from-black/70 lg:via-black/40" />

              {/* Text Content Overlay */}
              <div className="absolute inset-0 flex items-end mb-5 lg:mb-[1.042vw]">
                <motion.div
                  className="pl-5 pr-4 lg:pl-[1.042vw] lg:pr-[1.667vw] max-w-1/2 "
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.5 }}
                  viewport={{ once: true }}
                >
                  <motion.h2
                    className="text-lg lg:text-[3.5vw] 2xl:text-[1.8vw] font-semibold text-white leading-[1.1] mb-4 lg:mb-[1.042vw]"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.7 }}
                    viewport={{ once: true }}
                  >
                    From Awkward to<br />
                    <span className="text-white">Effortless.</span>
                  </motion.h2>

                  <motion.p
                    className="text-white text-[10px] lg:text-[1.6vw] 2xl:text-[1.4vw] leading-relaxed lg:leading-relaxed max-w-2/3"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.9 }}
                    viewport={{ once: true }}
                  >
                    We&apos;re here to break the ice, build confidence, and help you skip the weird small talk. PONY helps you start strong, with shared interests, better prompts, and zero pressure.
                  </motion.p>
                </motion.div>
              </div>
            </div>
          </motion.div>

          {/* Right Section - Two Stacked Images */}
          <motion.div
            className="w-full md:flex-1 flex flex-col gap-2 lg:gap-[1.042vw]"
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            {/* Top Image */}
            <motion.div
              className="w-full rounded-sm lg:rounded-[1.25vw] overflow-hidden relative group"
              initial={{ opacity: 0, y: -50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
            >
              <Image
                src="/top.png"
                alt="Two people sitting on wooden dock with mountains in background"
                height={295}
                width={603}
                className="object-contain w-full transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </motion.div>

            {/* Bottom Image */}
            <motion.div
              className="w-full rounded-sm lg:rounded-[1.25vw] overflow-hidden relative group"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
            >
              <Image
                src="/bottom.png"
                alt="Couple dancing outdoors with concrete wall background"
                height={295}
                width={603}
                className="object-contain w-full transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default AwkwardToEffortlessSection;
