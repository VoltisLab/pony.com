'use client';
import React, { useState } from 'react';

export default function NewsletterInline() {
  const [value, setValue] = useState('');
  const hasValue = value.trim().length > 0;

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!hasValue) return;
    // handle submit...
  };

  return (
    <div className="mb-2 lg:mb-[2.5vw] w-[70vw] lg:w-full">
      <div className="flex flex-col md:flex-row items-stretch md:items-center gap-2 md:gap-3">
        {/* Input inside form */}
        <form
          id="newsletterForm"
          onSubmit={onSubmit}
          className={[
            'w-full md:w-auto border rounded-full bg-white hover:bg-gray-50',
            'transition-all duration-200 px-3 lg:px-[1vw]',
            hasValue ? 'py-2 lg:py-[0.6vw]' : 'py-2.5 lg:py-[0.7vw]', // slightly tighter when typing on small screens
          ].join(' ')}
        >
          <input
            type="text"
            value={value}
            onChange={(e) => setValue(e.target.value)}
            placeholder="Subscribe to our Newsletter"
            className="w-full lg:min-w-[16vw] bg-transparent outline-none text-black text-sm lg:text-[1vw] placeholder:text-gray-400"
          />
        </form>

        {/* Button OUTSIDE the input (and form), responsive layout */}
        {hasValue && (
          <button
            type="submit"
            form="newsletterForm"
            className="w-full md:w-auto rounded-full bg-black text-white text-xs lg:text-[0.9vw] px-4 py-2 md:px-[1.2vw] md:py-[0.5vw] shadow"
          >
            Subscribe
          </button>
        )}
      </div>
    </div>
  );
}
