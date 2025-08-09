'use client';
import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const AwkwardToEffortlessSection = () => {
  return (
    <section className="w-full bg-black overflow-hidden pb-10">
      <div className="max-w-[1920px] mx-auto px-5 lg:px-20">
        <motion.div 
          className="flex flex-col lg:flex-row gap-5"
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
            <div className="relative w-full rounded-2xl lg:rounded-3xl overflow-hidden group">
              {/* Main Background Image */}
              <div className="absolute inset-0">
                <Image
                  src="/awkward.png"
                  alt="Couple at dimly lit cafe or bar having conversation"
                  height={612}
                  width={1191}
                  className="object-contain transition-transform duration-700 group-hover:scale-105"
                  priority
                />
              </div>
              
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent lg:from-black/70 lg:via-black/40" />
              
              {/* Text Content Overlay */}
              <div className="absolute inset-0 flex items-end mb-5 ">
                <motion.div 
                  className="pl-5 pr-4 lg:pr-8 max-w-md lg:max-w-lg xl:max-w-xl"
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.5 }}
                  viewport={{ once: true }}
                >
                  <motion.h2 
                    className="text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl font-black text-white leading-[1.1] mb-4 lg:mb-6"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.7 }}
                    viewport={{ once: true }}
                  >
                    From Awkward to<br />
                    <span className="text-white">Effortless.</span>
                  </motion.h2>
                  
                  <motion.p 
                    className="text-white text-sm lg:text-base font-semibold xl:text-lg leading-relaxed lg:leading-relaxed max-w-sm"
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
            className="w-full flex-1 flex flex-col gap-5"
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            {/* Top Image - Dock Scene */}
            <motion.div 
              className="w-full rounded-2xl lg:rounded-3xl overflow-hidden relative group"
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
                className="object-contain transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </motion.div>

            {/* Bottom Image - Urban Dance Scene */}
            <motion.div 
              className="w-full rounded-2xl lg:rounded-3xl overflow-hidden relative group"
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
                className="object-contain transition-transform duration-500 group-hover:scale-105"
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