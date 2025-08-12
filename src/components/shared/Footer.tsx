import React from 'react';
import Image from 'next/image';
import { FaGlobeAfrica } from 'react-icons/fa';
import LanguageDropdown from './LanguageDropDown';
import NewsletterField from './Subscribe';
import AppStoreButtons from './Badge';

const Footer = () => {
  return (
    <section className="w-full bg-black pb-1 lg:pb-[1.7vw]">
      <div className="md:px-5 lg:px-[1.5vw]">
        <div className="bg-white rounded-2xl lg:rounded-[1.2vw] p-4 lg:p-[1.2vw] mx-3 lg:mx-0">
          <div className="flex flex-col md:flex-row items-center md:items-end justify-center md:justify-between lg:gap-[3.3vw]">
            {/* Left Section - Text and Links */}
            <div className="flex-1 md:max-w-[31vw] max-w-full w-full md:items-end items-start">
              <h2 className="text-base lg:text-[3.5vw] font-semibold text-black leading-[145%] lg:mb-[1.05vw] md:block hidden">
                From Awkward to<br />
                Effortless.<br />
                No More &quot;Hey.&quot;
              </h2>

              <h2 className="text-2xl font-semibold text-black leading-tight mb-2 lg:mb-[2.5vw] block md:hidden w-[80vw]">
                From Awkward to Effortless. No More &quot;Hey.&quot;
              </h2>

              {/* Newsletter Subscription */}
              <NewsletterField/>

              {/* Footer Links (desktop/tablet) */}
              <div className="md:flex hidden flex-row gap-6 lg:gap-[3.3vw] lg:font-semibold w-full md:justify-start justify-between mt-14 lg:mt-0">
                <div className="flex flex-col gap-3">
                  <a href="#" className="text-black text-base lg:text-[1vw] hover:text-gray-600 transition-colors">Privacy Policy</a>
                  <a href="#" className="text-black text-base lg:text-[1vw] hover:text-gray-600 transition-colors">Terms of Use</a>
                  <a href="#" className="text-black text-base lg:text-[1vw] hover:text-gray-600 transition-colors">Cookie Policy</a>
                </div>
                <div className="flex flex-col gap-3 mr-20 lg:mr-0">
                  <a href="#" className="text-black text-base lg:text-[1vw] hover:text-gray-600 transition-colors">Privacy Policy</a>
                  <a href="#" className="text-black text-base lg:text-[1vw] hover:text-gray-600 transition-colors">Terms of Use</a>
                  <a href="#" className="text-black text-base lg:text-[1vw] hover:text-gray-600 transition-colors">Cookie Policy</a>
                </div>
              </div>
            </div>

            {/* Right Section - Image and App Downloads */}
            <div className="flex-1 flex flex-col items-center lg:items-end w-full md:max-w-[320px] lg:max-w-fit">
              {/* Main Image */}
              <div className="w-full h-[350px] lg:h-[25.23vw] lg:w-[20vw]  lg:aspect-[3/4] rounded-sm lg:rounded-[1.2vw] mb-6 lg:mb-[1vw] relative overflow-hidden">
                <Image
                  src="/footer.png"
                  alt="Couple sitting on dock with mountain lake background"
                  fill
                  className="object-contain lg:rounded-[1.2vw]"
                />
              </div>

              {/* Language Selector */}
              <LanguageDropdown/>
              {/* App badges (PNG, scales with vw on lg+) */}
              <div className='hidden lg:flex'>

              <AppStoreButtons/>
              </div>
            </div>
          </div>

          {/* Footer Links (mobile) */}
          <div className="flex md:hidden flex-row gap-6 w-full justify-between mt-14">
            <div className="flex flex-col gap-3">
              <a href="#" className="text-black text-[10px] hover:text-gray-600 transition-colors">Privacy Policy</a>
              <a href="#" className="text-black text-[10px] hover:text-gray-600 transition-colors">Terms of Use</a>
              <a href="#" className="text-black text-[10px] hover:text-gray-600 transition-colors">Cookie Policy</a>
            </div>
            <div className="flex flex-col gap-3 mr-20">
              <a href="#" className="text-black text-[10px] hover:text-gray-600 transition-colors">Privacy Policy</a>
              <a href="#" className="text-black text-[10px] hover:text-gray-600 transition-colors">Terms of Use</a>
              <a href="#" className="text-black text-[10px] hover:text-gray-600 transition-colors">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="text-center mt-2 lg:mt-[1.6vw]">
        <p className="text-gray-500 text-[10px] lg:text-[0.9vw]">©2025 Voltis Labs LTD.</p>
      </div>
    </section>
  );
};

export default Footer;
