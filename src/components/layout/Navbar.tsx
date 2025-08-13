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
          <div className="flex items-center">
            <Image
              src={logo}
              alt="PONY Logo"
              width={150}
              height={50}
              className="h-8 w-auto lg:h-[3vw]"
              priority
            />
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
