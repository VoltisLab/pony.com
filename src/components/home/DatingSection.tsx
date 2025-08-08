import React from 'react';
import Image from 'next/image';
import InfiniteScrollText from '../shared/InfiniteScrollText';

interface DatingSectionProps {
  leftImage?: string;
  title?: string;
  description?: string;
  googlePlayImage?: string;
  appStoreImage?: string;
  scrollingTags?: string[];
}

const DatingSection: React.FC<DatingSectionProps> = ({
  leftImage = '/leftimage.png',
  title = 'Dating on PONY',
  description = 'In our community, dating isn\'t about swiping endlessly. We believe the strongest relationships begin with shared passions - whether that\'s music, food, pets, fitness, or films. When you join, you select your core interests, and we match you with people who vibe with the same.',
  googlePlayImage = '/gplay.png',
  appStoreImage = '/apppay.png',
  scrollingTags = [
    'Pet Lovers',
    'Football Fans',
    'Foodies',
    'Humour Matches',
    'Same Music Taste',
    'Gamers',
    'Entrepreneurs',
    'Travel Partners',
    'Fitness Enthusiasts',
    'Book Lovers',
    'Art Appreciators',
    'Tech Geeks'
  ],
}) => {
  return (
    <section className=" py-10 overflow-hidden">
      <div className="">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Image */}
          <div className="relative ">
            <div className="relative w-full h-[678px] rounded-r-2xl overflow-hidden">
              <Image
                src={leftImage}
                alt="Dating couple"
                fill
                className="object-contain h-full"
              />
            </div>
          </div>
          
          {/* Right Content */}
          <div className="space-y-8 bg-white h-full items-center justify-center text-center p-16 rounded-l-2xl">
            <div>
              <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900 mb-6">
                {title}
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                {description}
              </p>
            </div>
            
            {/* App Store Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a href="#" className="inline-block hover:opacity-80 transition-opacity">
                <Image
                  src={googlePlayImage}
                  alt="Get it on Google Play"
                  width={160}
                  height={48}
                  className="h-12 w-auto"
                />
              </a>
              <a href="#" className="inline-block hover:opacity-80 transition-opacity">
                <Image
                  src={appStoreImage}
                  alt="Download on the App Store"
                  width={160}
                  height={48}
                  className="h-12 w-auto"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
      
      {/* Infinite Scrolling Tags */}
      <div className="mt-16">
        <InfiniteScrollText
          items={scrollingTags}
          speed={25}
          className="py-4"
          itemClassName="text-gray-400 text-sm font-medium"
        />
      </div>
    </section>
  );
};

export default DatingSection;