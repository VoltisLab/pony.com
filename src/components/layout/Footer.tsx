import React from 'react';
import Image from 'next/image';
import { LanguageDropdown } from '../shared/LanguageDropDown';
import { NewsletterInline } from '../shared/Subscribe';
import AppStoreButtons from '../shared/Badge';
import Link from 'next/link';
import AppStoreButtonsMobile from '../shared/AppstoreButtonsMobile';
import { LanguageDropdownMobile } from '../shared/LanguageDropDownMobile';

const Footer = () => {
  return (
    <section className="w-full bg-black pb-1 lg:pb-[1.7vw] 2xl:pb-8 ">
      <div className="md:px-5 lg:px-[1.5vw] 2xl:px-12">
        <div className="bg-[#1B1B1B] rounded-2xl lg:rounded-[1.2vw] 2xl:rounded-3xl p-4 lg:p-[1.2vw] 2xl:p-12 mx-3 lg:mx-0">
          <div className="flex flex-col md:flex-row items-center md:items-end justify-center md:justify-between lg:gap-[3.3vw] 2xl:gap-16">
            {/* Left Section - Text and Links */}
            <div className="flex-1 md:max-w-[31vw] xl:max-w-1/3 2xl:max-w-1/3 max-w-full w-full md:items-end items-start">
              <h2 className="text-base lg:text-[3.5vw] 2xl:text-[1.4vw] font-semibold text-white leading-[145%] lg:mb-[1.05vw] 2xl:mb-8 md:block hidden">
                From Awkward to<br />
                Effortless.<br />
                No More &quot;Hey.&quot;
              </h2>

              <h2 className="text-2xl font-semibold text-white leading-tight mb-2 lg:mb-[2.5vw] 2xl:mb-8 block md:hidden w-[80vw]">
                From Awkward to Effortless. No More &quot;Hey.&quot;
              </h2>

              {/* Newsletter Subscription */}
              <NewsletterInline/>

              {/* Footer Links (desktop/tablet) */}
              <div className="md:flex hidden flex-row gap-6 lg:gap-[3.3vw] 2xl:gap-16 lg:font-semibold 2xl:font-semibold w-full md:justify-start justify-between mt-14 lg:mt-0 2xl:mt-12">
                 <div className="flex flex-col gap-3 2xl:gap-4">
                  <Link href="/privacy-policy" className="text-white text-sm 2xl:text-lg hover:text-gray-600 transition-colors">Privacy Policy</Link>
                  <Link href="/terms" className="text-white text-sm hover:text-gray-600 2xl:text-lg transition-colors">Terms of Use</Link>
                  <Link href="/cookie-policy" className="text-white text-sm 2xl:text-lg hover:text-gray-600 transition-colors">Cookie Policy</Link>                  
                </div>
                <div className="flex flex-col gap-3 2xl:gap-4">
                  <Link href="/support" className="text-white text-sm 2xl:text-lg hover:text-gray-600 transition-colors">Support</Link>
                  <Link href="/contact" className="text-white text-sm hover:text-gray-600 2xl:text-lg transition-colors">Contact</Link>
                  <Link href="/about" className="text-white text-sm 2xl:text-lg hover:text-gray-600 transition-colors">About</Link>                  
                </div>
              </div>
            </div>

            {/* Right Section - Image and App Downloads */}
            <div className="flex flex-col items-end w-full md:w-auto mt-10 md:mt-0">
              {/* Main Image - Full Width */}
              <div className="w-full md:w-auto md:block hidden rounded-sm lg:rounded-[1.2vw] 2xl:rounded-3xl mb-6 lg:mb-[1vw] 2xl:mb-6 relative overflow-hidden">
                <Image
                  src="/footer.png"
                  alt="Couple sitting on dock with mountain lake background"
                  height={452}
                  width={384}
                  className="object-contain lg:rounded-[1.2vw] 2xl:rounded-3xl"
                />
              </div>

              <div className="w-full md:hidden block rounded-sm lg:rounded-[1.2vw] relative overflow-hidden">
                <Image
                  src="/footer.png"
                  alt="Couple sitting on dock with mountain lake background"
                  height={375}
                  width={319}
                  className="object-contain w-full lg:rounded-[1.2vw] 2xl:rounded-3xl"
                />
              </div>
              
              {/* Language Selector - Right Aligned */}
              <div className="w-full hidden md:flex md:w-full flex justify-start ">
                <LanguageDropdown/>
              </div>
              
              {/* App badges - Right Aligned */}
              <div className='hidden lg:flex w-full justify-start'>
                <AppStoreButtons/>
              </div>
            </div>
          </div>

          
          <div className='md:hidden block mt-4 flex gap-4 items-end max-w-[95%]'>
            <AppStoreButtonsMobile />
            <LanguageDropdownMobile />
          </div>
          {/* Footer Links (mobile) */}
          <div className="flex md:hidden flex-row gap-6 w-full justify-between mt-14">
           
            <div className="flex flex-col gap-3">
              <Link href="/privacy-policy" className="text-white text-sm 2xl:text-lg hover:text-gray-600 transition-colors">Privacy Policy</Link>
                  <Link href="/terms" className="text-white text-sm hover:text-gray-600 2xl:text-lg transition-colors">Terms of Use</Link>
                  <Link href="/cookie-policy" className="text-white text-sm 2xl:text-lg hover:text-gray-600 transition-colors">Cookie Policy</Link>                  
            </div>
              <div className="flex flex-col gap-3 2xl:gap-4">
                  <Link href="/support" className="text-white text-sm 2xl:text-lg hover:text-gray-600 transition-colors">Support</Link>
                  <Link href="/contact" className="text-white text-sm hover:text-gray-600 2xl:text-lg transition-colors">Contact</Link>
                  <Link href="/about" className="text-white text-sm 2xl:text-lg hover:text-gray-600 transition-colors">About</Link>                  
                </div>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="text-center mt-2 lg:mt-[1.6vw] 2xl:mt-8">
        <p className="text-gray-500 text-[10px] lg:text-[0.9vw] 2xl:text-sm">©2025 Voltis Labs LTD.</p>
      </div>
    </section>
  );
};

export default Footer;