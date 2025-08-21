'use client';
import React, { useState } from 'react';
import { FaGlobeAfrica } from 'react-icons/fa';

export function LanguageDropdownMobile() {
  const languages = [
    'English (United Kingdom)',
    'French (France)',
    'Spanish (Spain)',
    'German (Germany)',
    'Portuguese (Portugal)',
    'Italian (Italy)',
    'Dutch (Netherlands)',
    'Swahili (Kenya)',
    'Arabic (Saudi Arabia)',
    'Chinese (Mandarin)',
  ];

  const [selectedLanguage, setSelectedLanguage] = useState(languages[0]);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="w-full lg:flex lg:mb-[1vw] 2xl:mb-[0.6vw] relative">
      {/* Dropdown (positioned above) */}
      {isOpen && (
        <div className="absolute bottom-full mb-2 w-full text-white border border-gray-300 rounded-lg shadow-lg z-10 bg-gray-800">
          {languages.map((lang, index) => (
            <div
              key={index}
              onClick={() => {
                setSelectedLanguage(lang);
                setIsOpen(false);
              }}
              className="px-4 py-2 text-sm lg:text-[1vw] 2xl:text-[0.8vw] hover:bg-gray-100 hover:text-black cursor-pointer first:rounded-t-lg last:rounded-b-lg"
            >
              {lang}
            </div>
          ))}
        </div>
      )}

      {/* Language Selector */}
      <div
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center justify-between p-2.5 w-full md:max-w-[90%] border border-[#9E9E9E] rounded-full text-white cursor-pointer hover:border-gray-400 transition-colors"
      >
        <div className="flex items-center gap-3 lg:gap-[0.8vw] 2xl:gap-[0.6vw]">
          {/* Globe icon */}
          <span className="lg:text-[1.11vw] 2xl:text-[0.9vw]">
            <FaGlobeAfrica color="white" />
          </span>
          <span className="text-[10px] lg:text-[0.8vw] 2xl:text-[0.35vw] w-fit text-center font-semibold">
            {selectedLanguage}
          </span>
        </div>
        <svg
          className={`w-4 h-4 lg:w-[0.9vw] lg:h-[0.9vw] 2xl:w-[0.7vw] 2xl:h-[0.7vw] text-[#9E9E9E] transition-transform duration-200 ${
            isOpen ? 'rotate-180' : ''
          }`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </div>
    </div>
  );
}