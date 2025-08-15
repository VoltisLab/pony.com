'use client';
import React from 'react';
import Image from 'next/image';

const BUTTONS = [
  {
    type: 'apple',
    href: '#',                // <- change to your real App Store link
    src: '/apppay.png',       // <- your existing asset
    alt: 'Download on the App Store',
  },
  {
    type: 'google',
    href: '#',                // <- change to your real Play Store link
    src: '/gplay.png',        // <- your existing asset
    alt: 'Get it on Google Play',
  },
] as const;

const AppStoreButtons: React.FC = () => {
  return (
    <div className="flex items-center">
      {/* Desktop / Tablet */}
      <div className="hidden md:flex items-center space-x-2 lg:space-x-[0.6vw]">
        {BUTTONS.map((b, i) => (
          <a
            key={`${b.type}-${i}`}
            href={b.href}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block hover:opacity-80 transition-opacity duration-200"
            aria-label={b.alt}
          >
            <Image
              src={b.src}
              alt={b.alt}
              width={160}
              height={48}
              className="h-10 w-auto lg:h-[3vw] 2xl:h-[1.5vw]"
              priority={false}
            />
          </a>
        ))}
      </div>

      {/* Mobile */}
      <div className="flex md:hidden items-center space-x-2">
        {BUTTONS.map((b, i) => (
          <a
            key={`${b.type}-m-${i}`}
            href={b.href}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block hover:opacity-80 transition-opacity duration-200"
            aria-label={b.alt}
          >
            <Image
              src={b.src}
              alt={b.alt}
              width={100}
              height={35}
              className="h-9 w-auto"
              priority={false}
            />
          </a>
        ))}
      </div>
    </div>
  );
};

export default AppStoreButtons;
