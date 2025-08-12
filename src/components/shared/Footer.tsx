import React from 'react';
import Image from 'next/image';

const Footer = () => {
  return (
    <section className="w-full bg-black pb-1 lg:pb-[1.7vw]">
      <div className="md:px-5 lg:px-[1.05vw]">
        <div className="bg-white rounded-2xl lg:rounded-[1.2vw] p-4 lg:p-[1.2vw] mx-3 lg:mx-0">
          <div className="flex flex-col md:flex-row items-center md:items-end justify-center md:justify-between lg:gap-[3.3vw]">
            {/* Left Section - Text and Links */}
            <div className="flex-1 md:max-w-[31vw] max-w-full w-full md:items-end items-start">
              <h2 className="text-base lg:text-[2.5vw] font-semibold text-black leading-[145%] lg:mb-[1.05vw] md:block hidden">
                From Awkward to<br />
                Effortless.<br />
                No More &quot;Hey.&quot;
              </h2>

              <h2 className="text-2xl font-semibold text-black leading-tight mb-2 lg:mb-[2.5vw] block md:hidden w-[80vw]">
                From Awkward to Effortless. No More &quot;Hey.&quot;
              </h2>

              {/* Newsletter Subscription */}
              <div className="mb-2 lg:mb-[2.5vw] w-[70vw] lg:w-full">
                <button className="justify-start lg:justify-center flex w-full md:w-[210px] lg:w-[11vw] px-3 lg:px-[0.6vw] p-1.5 lg:p-[0.31vw] border rounded-full text-black text-sm lg:text-[0.73vw] hover:bg-gray-50 transition-colors">
                  Subscribe to our Newsletter
                </button>
              </div>

              {/* Footer Links (desktop/tablet) */}
              <div className="md:flex hidden flex-row gap-6 lg:gap-[3.3vw] lg:font-semibold w-full md:justify-start justify-between mt-14 lg:mt-0">
                <div className="flex flex-col gap-3">
                  <a href="#" className="text-black text-base lg:text-[0.83vw] hover:text-gray-600 transition-colors">Privacy Policy</a>
                  <a href="#" className="text-black text-base lg:text-[0.83vw] hover:text-gray-600 transition-colors">Terms of Use</a>
                  <a href="#" className="text-black text-base lg:text-[0.83vw] hover:text-gray-600 transition-colors">Cookie Policy</a>
                </div>
                <div className="flex flex-col gap-3 mr-20 lg:mr-0">
                  <a href="#" className="text-black text-base lg:text-[0.83vw] hover:text-gray-600 transition-colors">Privacy Policy</a>
                  <a href="#" className="text-black text-base lg:text-[0.83vw] hover:text-gray-600 transition-colors">Terms of Use</a>
                  <a href="#" className="text-black text-base lg:text-[0.83vw] hover:text-gray-600 transition-colors">Cookie Policy</a>
                </div>
              </div>
            </div>

            {/* Right Section - Image and App Downloads */}
            <div className="flex-1 flex flex-col items-center lg:items-end w-full md:max-w-[320px] lg:max-w-[16.7vw]">
              {/* Main Image */}
              <div className="w-full h-[350px] lg:h-[18.23vw] lg:max-w-[26.7vw] rounded-sm lg:rounded-[1.2vw] mb-6 lg:mb-[1.25vw] relative overflow-hidden">
                <Image
                  src="/footer.png"
                  alt="Couple sitting on dock with mountain lake background"
                  fill
                  className="object-contain lg:rounded-[1.2vw]"
                />
              </div>

              {/* Language Selector */}
              <div className="w-full hidden lg:flex max-w-sm lg:max-w-[28vw] xl:max-w-[29vw] mb-4 lg:mb-[1vw]">
                <div className="flex items-center justify-between p-1.5 lg:p-[0.4vw] w-full md:max-w-[90%] border border-[#9E9E9E] rounded-full bg-white">
                  <div className="flex items-center gap-3 lg:gap-[0.8vw]">
                    {/* keep this small globe svg */}
                    <svg width="25" height="25" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" clipRule="evenodd" d="M14.9998 0C23.283 0 29.9998 6.71704 29.9998 14.9998C29.9998 23.2832 23.2827 29.9998 14.9998 29.9998C6.7168 30 0 23.2832 0 14.9998C0 6.71704 6.7168 0 14.9998 0Z" fill="black"/>
                    </svg>
                    <span className="text-xs lg:text-[0.73vw] text-center font-semibold">English (United Kingdom)</span>
                  </div>
                  <svg className="w-4 h-4 lg:w-[0.9vw] lg:h-[0.9vw] text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </div>

              {/* App badges (PNG, scales with vw on lg+) */}
              <div className="w-full hidden lg:flex flex-row gap-3 lg:gap-[0.8vw] items-center justify-start">
                <Image
                  src="/apppay.png"
                  alt="Download on the App Store"
                  width={160}
                  height={48}
                  className="h-10 w-auto lg:h-[2.2vw]"
                />
                <Image
                  src="/gplay.png"
                  alt="Get it on Google Play"
                  width={160}
                  height={48}
                  className="h-10 w-auto lg:h-[2.2vw]"
                />
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
        <p className="text-gray-500 text-[10px] lg:text-[0.73vw]">©2025 Voltis Labs LTD.</p>
      </div>
    </section>
  );
};

export default Footer;
