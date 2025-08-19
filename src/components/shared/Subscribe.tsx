'use client';
import { useState } from "react";

export function NewsletterInline() {
  const [value, setValue] = useState('');
  const hasValue = value.trim().length > 0;
  
  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!hasValue) return;
    // handle submit...
  };

  return (
    <div className="mb-2 lg:mb-8 2xl:mb-8 w-[70vw] lg:w-full 2xl:w-[20vw] max-w-2xl 2xl:max-w-[20vw]">
      <div className="flex flex-col md:flex-row items-stretch md:items-center gap-2 md:gap-3 lg:gap-4 2xl:gap-4">
        {/* Input inside form */}
        <form
          id="newsletterForm"
          onSubmit={onSubmit}
          className={[
            'md:w-auto border rounded-full border-[#BCBCBC]',
            'transition-all duration-200 px-3 lg:px-4 2xl:px-5',
            hasValue
              ? 'py-2 lg:py-3 2xl:py-3'
              : 'py-2.5 lg:py-3.5 2xl:py-4',
          ].join(' ')}
        >
          <input
            type="text"
            value={value}
            onChange={(e) => setValue(e.target.value)}
            placeholder="Subscribe to our Newsletter"
            className="w-full md:max-w-[250px] lg:max-w-[250px] xl:max-w-[250px] 2xl:max-w-[250px] px-5 bg-transparent placeholder:text-[#BCBCBC] outline-none text-white 2xl:text-lg"
          />
        </form>
        
        {/* Button OUTSIDE the input (and form), responsive layout */}
        {hasValue && (
          <button
            type="submit"
            form="newsletterForm"
            className="w-full md:w-auto rounded-full bg-white text-black text-xs lg:text-sm xl:text-base 2xl:text-base px-4 py-2 md:px-6 lg:px-8 md:py-3 lg:py-3.5 2xl:px-8 2xl:py-4 shadow hover:bg-gray-100 transition-colors whitespace-nowrap font-medium"
          >
            Subscribe
          </button>
        )}
      </div>
    </div>
  );
}