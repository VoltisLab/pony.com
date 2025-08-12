'use client';

import React, { useState, useEffect } from 'react';
import { FaGlobeAfrica } from 'react-icons/fa';

export default function LanguageDropdown() {
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
    <div className="w-full hidden lg:flex max-w-sm lg:max-w-[28vw] xl:max-w-[29vw] mb-4 lg:mb-[1vw] relative">
      {/* Dropdown (now positioned above) */}
      {isOpen && (
        <div className="absolute bottom-full mb-2 w-full bg-white border border-gray-300 rounded-lg shadow-lg z-10">
          {languages.map((lang, index) => (
            <div
              key={index}
              onClick={() => {
                setSelectedLanguage(lang);
                setIsOpen(false);
              }}
              className="px-4 py-2 text-sm lg:text-[1vw] hover:bg-gray-100 cursor-pointer "
            >
              {lang}
            </div>
          ))}
        </div>
      )}

      {/* Language Selector */}
      <div
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center justify-between p-1.5 lg:p-[0.8vw] w-full md:max-w-[90%] border border-[#9E9E9E] rounded-full bg-white cursor-pointer"
      >
        <div className="flex items-center gap-3 lg:gap-[0.8vw]">
          {/* Keep this small globe svg */}
          <span className="lg:text-[1.11vw]">
            <FaGlobeAfrica />
          </span>
          <span className="text-xs lg:text-[0.8vw] w-fit text-center font-semibold">
            {selectedLanguage}
          </span>
        </div>
        <svg
          className={`w-4 h-4 lg:w-[0.9vw] lg:h-[0.9vw] text-gray-600 transition-transform duration-200 ${
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
