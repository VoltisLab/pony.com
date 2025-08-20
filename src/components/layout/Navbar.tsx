'use client';
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence, Variants } from 'framer-motion';

interface NavLink {
  label: string;
  href: string;
}

interface NavbarProps {
  logo?: string;
  links?: NavLink[];
}

const Navbar: React.FC<NavbarProps> = ({
  logo = '/logo.png',
  links = [
    { label: 'Mission', href: '/mission' },
    { label: 'About', href: '/about' },
    { label: 'Support', href: '/support' },
    { label: 'Contact Us', href: '/contact' },
  ],
}) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (isMobileMenuOpen && !target.closest('#mobile-menu') && !target.closest('#menu-button')) {
        setIsMobileMenuOpen(false);
      }
    };

    if (isMobileMenuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  // Animation variants
  const overlayVariants: Variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.3 } },
    exit: { opacity: 0, transition: { duration: 0.3, delay: 0.1 } }
  };

  const menuVariants: Variants = {
    hidden: { x: '100%', opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: { type: 'spring', stiffness: 300, damping: 30, duration: 0.4 }
    },
    exit: {
      x: '100%',
      opacity: 0,
      transition: { type: 'spring', stiffness: 300, damping: 30, duration: 0.3 }
    }
  };

  const linkVariants: Variants = {
    hidden: { x: 20, opacity: 0 },
    visible: { x: 0, opacity: 1 }
  };

  return (
    <>
      <nav
        className="relative w-full h-12 lg:h-[4.4vw] overflow-hidden px-4 md:px-5 xl:px-16
  bg-[url('/navbg.png')] bg-no-repeat bg-cover "
      >
        <div className="relative z-10 flex items-center justify-between h-full">
          {/* Logo */}
          <div className="flex items-center sf-font text-white font-medium text-xl">
            {/* <Image
              src={logo}
              alt="PONY Logo"
              width={150}
              height={50}
              className="h-8 w-auto lg:h-[3vw]"
              priority
            /> */}
            {/* <p className='sf-font'>PONY</p>  */}
         <svg width="157" height="84" viewBox="0 0 157 84" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M52.5977 23.8164H63.1641C68.6328 23.8164 72.4414 27.5859 72.4414 33.0742C72.4414 38.582 68.5547 42.3711 63.0273 42.3711H56.9727V52H52.5977V23.8164ZM56.9727 27.5078V38.6992H61.9922C65.8008 38.6992 67.9688 36.6484 67.9688 33.0938C67.9688 29.5391 65.8008 27.5078 62.0117 27.5078H56.9727ZM88.457 23.3477C96.5625 23.3477 101.66 28.9531 101.66 37.918C101.66 46.8828 96.5625 52.4688 88.457 52.4688C80.332 52.4688 75.2539 46.8828 75.2539 37.918C75.2539 28.9531 80.332 23.3477 88.457 23.3477ZM88.457 27.1953C83.1055 27.1953 79.7266 31.3359 79.7266 37.918C79.7266 44.4805 83.1055 48.6211 88.457 48.6211C93.8086 48.6211 97.168 44.4805 97.168 37.918C97.168 31.3359 93.8086 27.1953 88.457 27.1953ZM110.098 52H105.84V23.8164H109.805L124.414 44.5977H124.57V23.8164H128.828V52H124.883L110.273 31.2383H110.098V52ZM146.25 52H141.875V40.457L131.953 23.8164H136.836L144.023 36.2578H144.16L151.348 23.8164H156.191L146.25 40.457V52Z" fill="white"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M7.3647 28.499C8.04849 28.7648 9.0579 28.1678 10.6086 26.1722C11.1948 26.4031 11.6547 26.9173 11.8541 28.0197C12.2367 30.1199 11.6303 31.4663 10.7877 33.3138C9.87194 35.3312 8.91137 37.2441 9.32246 39.8759C7.64147 40.0981 6.0948 40.0414 4.69058 39.6754C3.89282 39.6014 3.23345 39.6536 2.74503 39.8584C2.24846 40.0632 1.92692 40.4249 1.80888 40.9695C1.52397 43.0088 0.779123 44.3072 0.0139266 45.5708C-0.0267753 46.6079 0.00171605 47.6101 0.376174 48.4554L0.591895 49.048L0.689579 50.3769C0.819825 52.1547 1.41 53.6406 2.75317 51.231C2.89156 50.3116 2.76131 49.3922 2.3665 48.4728L1.74783 48.1721C1.78446 46.878 1.90657 45.6275 2.30138 44.5251C2.60664 43.4488 3.16426 42.6776 4.00679 42.2375L4.86967 42.1329L4.36497 43.5186C4.24693 44.9826 4.07191 46.3159 3.5957 47.0131C3.32707 48.0414 3.44917 48.6776 3.95388 48.939C4.34461 49.109 4.70279 49.8759 5.03248 51.3791C5.38251 52.2331 5.8221 52.7037 6.35122 52.7909C6.90477 52.6427 7.00245 51.4706 6.78266 49.6057C6.35936 49.0523 5.93606 48.8301 5.50869 48.7822C5.58602 47.7931 5.54939 46.8301 5.38659 45.902C5.46392 44.7473 5.78139 43.6667 6.75417 42.7691C7.12863 43.8584 8.7445 44.3334 10.7877 44.5948L12.1309 43.1046C15.6923 46.7212 19.8358 48.7952 23.8449 47.2179C24.138 47.4401 24.2519 48.3159 24.3537 49.8366C25.1718 51.0959 25.9492 53.4053 26.7226 55.0567C27.2924 56.329 27.1743 57.3791 26.6249 58.2941C25.3875 58.8562 24.2031 59.7146 23.4705 60.6384C22.2779 60.695 21.3702 60.756 20.6213 61.17C20.1085 61.6013 19.7991 62.1416 19.734 62.8127L20.3568 63.0697L19.6608 64.0981C19.909 64.9913 20.7231 65.231 22.3145 65.1612L23.2385 63.4575L25.0131 62.9172C25.6643 61.5316 26.7063 60.1896 28.9245 58.987C30.4061 59.0741 31.1916 58.2244 31.1102 56.2114C30.3613 54.39 30.0886 52.6427 30.7724 51.048C33.9146 48.9782 35.8561 45.8105 35.62 42.2593C40.6304 40.8563 33.0232 54.6297 47.3869 51.6013C48.2173 51.427 49.0801 51.1046 50 50.7386C48.144 50.3987 42.8039 48.9826 41.8637 46.5774C39.4582 42.926 36.9387 40.2593 34.2565 38.9957C32.4371 36.5207 29.2257 35.5665 25.2776 35.4227C24.0973 35.3094 23.0634 34.9739 22.2535 34.2942C23.0716 28.1024 17.5402 25.0611 21.5819 26.9695C19.8602 22.4815 14.5079 21.0175 18.285 21.4837C16.3436 19.5839 13.8933 18.5338 10.4133 19.1961C9.6725 18.0415 7.90197 15.5709 8.4433 18.5295L7.556 17.6798L7.50716 20.6602C6.45298 21.5229 5.87501 24.3944 5.0569 26.2593C4.3609 27.0001 4.09226 27.8889 4.31205 29.2658C5.40287 30.7691 7.12049 30.3987 7.3647 28.499Z" fill="white"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M15.7481 36.7906C16.0278 36.4728 16.2603 36.2122 16.7329 36.1543C16.9983 36.1213 17.267 36.1722 17.5057 36.3008C17.627 36.3655 17.7392 36.4484 17.8388 36.5468C17.9471 36.6599 18.0416 36.7874 18.1199 36.926C18.1964 37.0779 18.2445 37.2443 18.2614 37.4159C18.2875 37.6809 18.2399 37.9484 18.1246 38.1846C18.0435 38.3518 17.9461 38.5094 17.834 38.6547C17.7143 38.8143 17.5748 38.9783 17.4284 39.1408C17.2233 39.3641 17.0133 39.5801 16.8211 39.78C16.7083 39.895 16.6037 39.9997 16.5147 40.097L15.8466 40.8065L15.7529 40.9061L15.6578 40.8087L15.1059 40.2391C15.0047 40.1351 14.8877 40.0194 14.764 39.9023C14.1074 39.2609 13.3134 38.4855 13.2813 37.5257C13.2813 37.5023 13.2813 37.4781 13.2813 37.4525C13.2805 37.2786 13.3132 37.1065 13.3773 36.9467C13.4415 36.787 13.5356 36.6431 13.654 36.5241C13.8882 36.2963 14.1912 36.1664 14.5075 36.158C14.5301 36.158 14.5533 36.158 14.5759 36.158C15.1456 36.1661 15.4061 36.4333 15.746 36.7906H15.7481ZM13.9152 37.4056C13.9117 37.4184 13.9058 37.4303 13.8978 37.4405C13.8898 37.4508 13.88 37.4592 13.8689 37.4652C13.8578 37.4713 13.8456 37.4748 13.8332 37.4757C13.8207 37.4765 13.8083 37.4747 13.7965 37.4702C13.7848 37.4657 13.774 37.4587 13.7649 37.4496C13.7558 37.4405 13.7485 37.4295 13.7435 37.4173C13.7385 37.4051 13.7358 37.3919 13.7357 37.3786C13.7356 37.3652 13.7381 37.352 13.7429 37.3397C13.7695 37.2595 13.8051 37.183 13.8489 37.112C13.8928 37.0408 13.9445 36.9754 14.0028 36.9173C14.0624 36.8577 14.1282 36.8059 14.1991 36.7628C14.2711 36.719 14.3475 36.6839 14.4268 36.6581C14.4496 36.652 14.4736 36.6556 14.494 36.668C14.5144 36.6804 14.5296 36.7007 14.5365 36.7247C14.5433 36.7487 14.5413 36.7747 14.5308 36.7971C14.5203 36.8196 14.5022 36.8369 14.4801 36.8455C14.4139 36.8671 14.3501 36.8965 14.29 36.9334C14.2313 36.9689 14.1767 37.0117 14.1272 37.0608C14.0797 37.1086 14.0375 37.1622 14.0014 37.2204C13.9655 37.2781 13.9363 37.3403 13.9146 37.4056H13.9152Z" fill="#ED1B24"/>
<path d="M13.9217 37.4785C13.9182 37.4913 13.9122 37.5032 13.9043 37.5134C13.8963 37.5237 13.8864 37.5321 13.8753 37.5381C13.8642 37.5442 13.8521 37.5477 13.8396 37.5486C13.8272 37.5494 13.8147 37.5475 13.803 37.5431C13.7913 37.5386 13.7805 37.5316 13.7714 37.5225C13.7623 37.5134 13.755 37.5024 13.75 37.4902C13.7449 37.478 13.7423 37.4648 13.7422 37.4515C13.7421 37.4382 13.7445 37.425 13.7494 37.4127C13.7759 37.3325 13.8115 37.2561 13.8554 37.1851C13.8993 37.1139 13.9509 37.0486 14.0092 36.9904C14.0688 36.9309 14.1347 36.8791 14.2055 36.836C14.2776 36.7923 14.354 36.7572 14.4333 36.7314C14.456 36.7254 14.4801 36.7289 14.5005 36.7413C14.5209 36.7537 14.5361 36.774 14.5429 36.798C14.5498 36.822 14.5477 36.8479 14.5373 36.8704C14.5268 36.8928 14.5087 36.9101 14.4866 36.9187C14.4204 36.9403 14.3566 36.9697 14.2965 37.0065C14.2378 37.0421 14.1832 37.0848 14.1337 37.1339C14.0862 37.1817 14.044 37.2352 14.0079 37.2934C13.9719 37.351 13.9428 37.4132 13.921 37.4785H13.9217Z" fill="white"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M12.9527 39.4836L13.5381 39.1175L13.7521 39.3833L13.1257 39.7494L13.5292 40.0518L13.6037 40.1074C13.7173 40.1923 13.7282 40.3439 13.5661 40.3314L11.9056 40.4047C11.8862 40.4039 11.8674 40.3974 11.8513 40.3857C11.8352 40.3741 11.8225 40.3578 11.8147 40.3388C11.8053 40.3127 11.8025 40.2844 11.8064 40.2568C11.8242 40.1191 12.5464 39.0648 12.6743 38.8664C12.7612 38.7324 12.9226 38.5398 12.9349 38.8598L12.9527 39.4836ZM15.81 38.2968L15.6732 38.0508L18.1277 36.5615L18.0874 35.7752L19.367 35.0086C19.4442 34.9786 19.4996 34.9932 19.5236 35.0716L19.592 35.8674C19.7937 35.9994 19.9883 36.1437 20.1747 36.2994C20.1923 36.3142 20.2048 36.3348 20.2102 36.358C20.2157 36.3812 20.2137 36.4057 20.2047 36.4276C20.1895 36.4646 20.162 36.4944 20.1275 36.511L19.1659 37.1129C19.0811 37.1663 18.9771 37.2505 18.8766 37.2432C18.8302 37.2387 18.786 37.2199 18.7494 37.189L18.2707 36.8185L15.8086 38.2968H15.81Z" fill="#630000"/>
</svg>

          </div>

          {/* Navigation Links - Desktop */}
          <div className="hidden md:flex items-center space-x-8 lg:space-x-[1.667vw]">
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-white hover:text-gray-300 transition-colors duration-200
                           text-sm lg:text-[1vw] font-medium"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <motion.button
              id="menu-button"
              onClick={() => setIsMobileMenuOpen(true)}
              className="text-white hover:text-gray-300 transition-colors p-2"
              whileTap={{ scale: 0.95 }}
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </motion.button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            {/* Background Overlay */}
            <motion.div
              className="fixed inset-0 bg-black/50 z-40 md:hidden"
              variants={overlayVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              onClick={() => setIsMobileMenuOpen(false)}
            />

            {/* Mobile Menu */}
            <motion.div
              id="mobile-menu"
              className="fixed top-0 right-0 h-full w-80 max-w-[80vw] bg-black z-50 md:hidden shadow-2xl"
              variants={menuVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              {/* Close Button */}
              <div className="flex justify-end p-6">
                <motion.button
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-white hover:text-gray-300 transition-colors p-2"
                  whileTap={{ scale: 0.95 }}
                  whileHover={{ rotate: 90 }}
                  transition={{ duration: 0.2 }}
                >
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </motion.button>
              </div>

              {/* Menu Content */}
              <div className="px-6 py-4">
                {/* Logo */}
                <motion.div
                  className="mb-8 pb-6 border-b border-gray-700"
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2, duration: 0.3 }}
                >
                  <Image
                    src={logo}
                    alt="PONY Logo"
                    width={120}
                    height={40}
                    className="h-8 w-auto"
                  />
                </motion.div>

                {/* Navigation Links */}
                <nav className="space-y-6">
                  {links.map((link, index) => (
                    <motion.div
                      key={link.label}
                      variants={linkVariants}
                      initial="hidden"
                      animate="visible"
                      transition={{ delay: 0.1 + index * 0.1, duration: 0.3, ease: 'easeOut' }}
                    >
                      <motion.a
                        href={link.href}
                        className="block text-white hover:text-gray-300 transition-colors duration-200 text-lg font-medium py-2"
                        onClick={() => setIsMobileMenuOpen(false)}
                        whileHover={{ x: 10 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        {link.label}
                      </motion.a>
                    </motion.div>
                  ))}
                </nav>

                {/* Optional: Additional content or social links */}
                <motion.div
                  className="mt-12 pt-8 border-t border-gray-700"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.6, duration: 0.3 }}
                >
                  <p className="text-gray-400 text-sm">
                    Connect with us
                  </p>
                </motion.div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
