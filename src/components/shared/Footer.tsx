import React from 'react';
import Image from 'next/image';

const Footer = () => {
  const appStoreButtons = [
    { 
      type: 'google', 
      href: '#',
      imageSrc: '/gplay.png',
      alt: 'Get it on Google Play'
    },
    { 
      type: 'apple', 
      href: '#',
      imageSrc: '/apppay.png',
      alt: 'Download on the App Store'
    },
  ]
  
  return (
    <section className="w-full bg-black pb-8">
      <div className="max-w-[1920px] px-6 lg:px-20">
        <div className="bg-white rounded-3xl p-5 ">
          <div className="flex flex-col xl:flex-row items-end justify-between xl:gap-8 xl:gap-16">
            {/* Left Section - Text and Links */}
            <div className="flex-1 xl:max-w-md items-end">
              <h2 className="text-3xl lg:text-4xl font-semibold text-black leading-tight mb-8">
                From Awkward to<br />
                Effortless.<br />
                No More "Hey."
              </h2>
              
              {/* Newsletter Subscription */}
              <div className="mb-8 lg:mb-12">
                <button className="px-6 p-1.5 border rounded-xl text-[#BCBCBC] text-sm hover:bg-gray-50 transition-colors">
                  Subscribe to our Newsletter
                </button>
              </div>

              {/* Footer Links */}
              <div className="flex flex-row gap-6 lg:gap-16 font-semibold ">
                <div className="flex flex-col gap-3">
                  <a href="#" className="text-black text-sm hover:text-gray-600 transition-colors">Privacy Policy</a>
                  <a href="#" className="text-black text-sm hover:text-gray-600 transition-colors">Terms of Use</a>
                  <a href="#" className="text-black text-sm hover:text-gray-600 transition-colors">Cookie Policy</a>
                </div>
                <div className="flex flex-col gap-3">
                  <a href="#" className="text-black text-sm hover:text-gray-600 transition-colors">Privacy Policy</a>
                  <a href="#" className="text-black text-sm hover:text-gray-600 transition-colors">Terms of Use</a>
                  <a href="#" className="text-black text-sm hover:text-gray-600 transition-colors">Cookie Policy</a>
                </div>
              </div>
            </div>

            {/* Right Section - Image and App Downloads */}
            <div className="flex-1 flex flex-col items-center lg:items-end max-w-[220px]">
              {/* Main Image */}
              <div className="w-full max-w-sm h-[200] xl:max-w-md rounded-2xl mb-6 relative overflow-hidden">
                <Image
                  src="/footer.png"
                  alt="Couple sitting on dock with mountain lake background"
                  width={400}
                  height={240}
                  className="w-full full object-contain rounded-2xl"
                />
              </div>

              {/* Language Selector */}
              <div className="w-full max-w-sm lg:max-w-md xl:max-w-lg mb-4">
                <div className="flex items-center justify-between p-1.5 max-w-[90%] border border-[#9E9E9E] rounded-full bg-white">
                  <div className="flex items-center gap-3">
                  <svg width="20" height="20" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M14.9998 0C23.283 0 29.9998 6.71704 29.9998 14.9998C29.9998 23.2832 23.2827 29.9998 14.9998 29.9998C6.7168 30 0 23.2832 0 14.9998C0 6.71704 6.7168 0 14.9998 0ZM19.1196 1.58569C24.1533 3.25879 27.9302 7.68848 28.6577 13.085L28.1809 13.0339C28.0962 13.3989 28.0183 13.4082 28.0183 13.8477C28.0183 14.2354 28.5066 14.4949 28.5066 15.3132C28.5066 15.5325 27.9917 15.9709 27.969 16.0474L27.2043 15.1504V16.2903L27.0881 16.2859L26.8821 14.1826L26.4551 14.3171L25.947 12.7524L24.2734 14.4993L24.2534 15.7783L23.707 16.1448L23.1267 12.864L22.7795 13.1177L21.9934 12.0569L20.8184 12.0918L20.3682 11.5774L19.9075 11.7041L19.0012 10.6655L18.8262 10.7847L19.3877 12.2197H20.0393V11.894H20.3647C20.5996 12.543 20.8533 12.1587 20.8533 12.5457C20.8533 13.8999 19.1807 14.8955 18.085 15.1504C18.1436 15.3953 18.1208 15.6394 18.4104 15.6394C19.0239 15.6394 18.719 15.532 19.3877 15.4766C19.3567 16.8601 17.8008 18.5125 17.1365 19.5425L17.4338 21.6641C17.5122 22.1248 16.4771 22.6123 16.125 23.1311L16.2939 23.9438L15.8171 24.1365C15.7336 24.9714 14.9231 25.8977 14.0139 25.8977H13.0374C13.0374 24.7544 12.2229 23.1228 12.2229 22.3149C12.2229 21.6289 12.5483 21.5366 12.5483 20.6868C12.5483 19.9016 11.7346 18.7756 11.7346 18.5701V17.2673H11.083C10.9863 16.9043 11.0454 16.7791 10.5947 16.7791H10.4319C9.72046 16.7791 9.84058 17.1045 9.12915 17.1045H8.47754C7.89014 17.1045 6.84937 15.2195 6.84937 14.9875V13.0337C6.84937 12.1904 7.62109 11.2725 8.1521 10.9165V10.1028L8.88501 9.35767L9.29199 9.28833C10.1658 9.28833 10.062 8.80005 10.5947 8.80005H12.0605V9.93994L13.6719 10.6279L13.8237 9.93262C14.554 10.1038 14.7439 10.4287 15.6436 10.4287H15.969C16.5869 10.4287 16.6201 9.60889 16.6201 8.96338L15.3157 9.09229L14.7483 7.85596L14.1841 8.0061C14.2854 8.44849 14.3408 8.26465 14.3408 8.6377C14.3408 8.85742 14.1599 8.88184 14.0149 8.96338L13.4507 7.53149L12.2375 6.66504L12.0764 6.82324L13.1094 7.91016C12.9722 8.30005 12.9561 9.42603 12.3865 8.63745L12.9192 8.3811L11.5916 6.98975L10.7961 7.30078L10.011 8.05273C9.92896 8.65845 9.76392 8.96313 9.13013 8.96313C8.70825 8.96313 8.96289 8.854 8.31567 8.80029V7.17212H9.78101L9.30615 6.08765L9.13013 6.19507V5.86914L11.5098 4.77197C11.4648 4.43042 11.4102 4.61353 11.4102 4.24097C11.4102 4.21875 11.5701 3.91821 11.573 3.91479L12.1885 4.29688L12.0413 3.59595L11.0918 3.79126L10.9155 2.93921C11.6685 2.54272 13.3252 1.14722 13.8521 1.14722H14.3408C14.8552 1.14722 16.2332 1.65479 16.4573 1.96094L15.1506 1.82861L16.1201 2.6272L16.2131 2.28662L16.9368 2.08838L16.9456 1.6355H17.2717V2.12378L19.1196 1.58569ZM28.5554 17.5378C28.5178 17.7434 28.4763 17.947 28.4304 18.1492L28.3555 17.6238L28.5554 17.5378ZM28.0864 19.3843C28.0505 19.4932 28.0139 19.6025 27.9753 19.7104H27.8557V19.3843H28.0864ZM2.87061 22.749C1.98584 21.408 1.32495 19.907 0.937988 18.2993L3.57983 19.5732L3.59326 20.3616C3.59326 20.6511 3.09888 21.2673 2.94214 21.5015L2.87061 22.749Z" fill="black"/>
</svg>

                    <span className="text-xs font-semibold">English (United Kingdom)</span>
                  </div>
                  <svg className="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </div>

              {/* App Download Buttons */}
              <div className="w-full max-w-sm lg:max-w-md xl:max-w-lg flex flex-row gap-3">
                {appStoreButtons.map((button, index) => (
                  <a
                    key={index}
                    href={button.href}
                    className="inline-block hover:opacity-80 transition-opacity duration-200 flex-1"
                  >
                    <Image
                      src={button.imageSrc || `/${button.type}-store-badge.png`}
                      alt={button.alt || `${button.type === 'google' ? 'Google Play' : 'App Store'} badge`}
                      width={135}
                      height={40}
                      className="h-10 w-full object-contain"
                    />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Copyright */}
      <div className="text-center mt-8">
        <p className="text-gray-500 text-sm">©2025 Voltis Labs LTD.</p>
      </div>
    </section>
  );
};

export default Footer;