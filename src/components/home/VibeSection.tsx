import React from 'react';
import Image from 'next/image';
import InfiniteScrollText from '../shared/InfiniteScrollText';

interface VibeSectionProps {
  title?: string;
  subtitle?: string;
  description?: string;
  rightImage1?: string;
  rightImage2?: string;
  scrollingTags?: string[];
}

const VibeSection: React.FC<VibeSectionProps> = ({
  title = '"We group people by actual vibe, not just who\'s nearby."',
  subtitle = 'Pick your vibe, don\'t look back.',
  description = 'We don\'t think chemistry comes from geography. That\'s why your matches are based on your world, your energy, and your rhythm.',
  rightImage1 = '/v1.png',
  rightImage2 = '/v2.png',
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
    <section className="bg-black text-white py-16 lg:py-24 overflow-hidden">
      {/* Infinite Scrolling Tags - Top */}
      <div className="mb-16">
        <InfiniteScrollText
          items={scrollingTags}
          speed={25}
          className="py-4"
          itemClassName="text-gray-500 text-sm font-medium"
        />
      </div>
      
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold mb-8 leading-tight">
                {title}
              </h2>
              <p className="text-lg text-gray-300 leading-relaxed mb-8">
                {description}
              </p>
            </div>
          </div>
          
          {/* Right Images */}
          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              <div className="relative w-full h-64 lg:h-80 rounded-2xl overflow-hidden">
                <Image
                  src={rightImage1}
                  alt="Vibe match example 1"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative w-full h-64 lg:h-80 rounded-2xl overflow-hidden mt-8">
                <Image
                  src={rightImage2}
                  alt="Vibe match example 2"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
            
            {/* Floating text */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2">
              <p className="text-white text-lg font-medium bg-black/50 backdrop-blur-sm px-4 py-2 rounded-full">
                {subtitle}
              </p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Infinite Scrolling Tags - Bottom */}
      <div className="mt-16">
        <InfiniteScrollText
          items={scrollingTags}
          speed={20}
          className="py-4"
          itemClassName="text-gray-500 text-sm font-medium"
        />
      </div>
    </section>
  );
};

export default VibeSection;