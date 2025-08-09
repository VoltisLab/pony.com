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
  ],
}) => {
  return (
    <div className="bg-white border-b border-gray-200 py-3">
      <div className="px-2 md:px-8 flex items-center justify-end">
        <div className="flex items-center space-x-4">
          <span className="text-gray-700 text-xs md:text-sm hover:underline cursor-pointer font-bold">{downloadText}</span>
          <div className="flex items-center space-x-2">
            {appStoreButtons.map((button, index) => (
              <a
                key={index}
                href={button.href}
                className="inline-block hover:opacity-80 transition-opacity duration-200"
              >
                <Image
                  src={button.imageSrc || `/${button.type}-store-badge.png`}
                  alt={button.alt || `${button.type === 'google' ? 'Google Play' : 'App Store'} badge`}
                  fill
                  className="h-10 w-auto"
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