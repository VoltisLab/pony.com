import React from 'react';
import AppStoreButtons from '../shared/Badge';

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

}) => {
  return (
    <div className="bg-white border-b border-gray-200 py-1 lg:py-[0.8vw]">
      <div className="px-2 md:px-8 lg:px-[2vw] flex items-center justify-end">
        <div className="flex items-center space-x-4 lg:space-x-[2vw]">
          <span className="text-gray-700 hidden  lg:block text-xs md:text-sm lg:text-[1vw] hover:underline cursor-pointer ">
            {downloadText}
          </span>

          {/* Desktop badges */}
         <AppStoreButtons/>
        </div>
      </div>
    </div>
  );
};

export default SecondaryBar;
