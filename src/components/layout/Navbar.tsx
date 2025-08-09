import React from 'react';
import Image from 'next/image';

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
  return (
    <nav className="relative w-full h-16 overflow-hidden px-5 xl:px-16 bg-[url('/navbg.png')]">
      {/* Navigation Content */}

      {/* <div className="absolute inset-0 z-0 h-16">
        <Image
          src={backgroundImage}
          alt="Navbar background"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/20" />
      </div> */}
      <div className="relative z-10 flex items-center justify-between h-full px-5">
        {/* Logo */}
        <div className="flex items-center">
          <Image
            src={logo}
            alt="PONY Logo"
            width={120}
            height={40}
            className="h-8 w-auto"
            priority
          />
        </div>
        
        {/* Navigation Links */}
        <div className="hidden md:flex items-center space-x-8">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-white hover:text-gray-300 transition-colors duration-200 text-sm font-medium"
            >
              {link.label}
            </a>
          ))}
        </div>
        
        {/* Mobile menu button */}
        <div className="md:hidden">
          <button className="text-white hover:text-gray-300 transition-colors">
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;