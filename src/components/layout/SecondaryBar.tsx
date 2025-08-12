import React from 'react';
import Image from 'next/image';

interface AppStoreButton {
  type: 'google' | 'apple';
  href: string;
  imageSrc?: string;
  alt?: string;
}

interface SecondaryBarProps {
  downloadText?: string;
  appStoreButtons?: AppStoreButton[];
}

const SecondaryBar: React.FC<SecondaryBarProps> = ({
  downloadText = 'Download Now',
  appStoreButtons = [
    {
      type: 'apple',
      href: '#',
      imageSrc: '/apppay.png',
      alt: 'Download on the App Store',
    },
    {
      type: 'google',
      href: '#',
      imageSrc: '/gplay.png',
      alt: 'Get it on Google Play',
    },
  ],
}) => {
  return (
    <div className="bg-white border-b border-gray-200 py-1 lg:py-[0.8vw]">
      <div className="px-2 md:px-8 lg:px-[2vw] flex items-center justify-end">
        <div className="flex items-center space-x-4 lg:space-x-[2vw]">
          <span className="text-gray-700 hidden  lg:block text-xs md:text-sm lg:text-[1vw] hover:underline cursor-pointer ">
            {downloadText}
          </span>

          {/* Desktop badges */}
          <div className="md:flex hidden items-center space-x-2 lg:space-x-[0.6vw]">
            {appStoreButtons.map((button, index) => (
              <a
                key={index}
                href={button.href}
                className="inline-block hover:opacity-80 transition-opacity duration-200"
              >
                <Image
                  src={button.imageSrc || `/${button.type}-store-badge.png`}
                  alt={
                    button.alt ||
                    `${button.type === 'google' ? 'Google Play' : 'App Store'} badge`
                  }
                  width={160}
                  height={48}
                  className="h-10 w-auto lg:h-[3vw]"
                />
              </a>
            ))}
          </div>

          {/* Mobile badges */}
          <div className="flex md:hidden items-center space-x-2">
            {appStoreButtons.map((button, index) => (
              <a
                key={index}
                href={button.href}
                className="inline-block hover:opacity-80 transition-opacity duration-200"
              >
                <Image
                  src={button.imageSrc || `/${button.type}-store-badge.png`}
                  alt={
                    button.alt ||
                    `${button.type === 'google' ? 'Google Play' : 'App Store'} badge`
                  }
                  width={100}
                  height={35}
                  className="h-9 w-auto"
                />
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SecondaryBar;
