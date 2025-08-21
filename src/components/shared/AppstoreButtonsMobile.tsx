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

const AppStoreButtonsMobile: React.FC = () => {
  return (
    <div className="flex">
     
      {/* Mobile */}
      <div className="flex flex-col gap-2 md:hidden items-center ">
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

export default AppStoreButtonsMobile;
