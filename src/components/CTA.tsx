import { ChevronLeft } from 'lucide-react';
import Image from 'next/image';
import React from 'react';

export default function CTA() {
  return (
    <div>
      <div className="relative flex  items-center justify-between bg-gradient-to-r from-blue-300 to-blue-400 rounded-xl my-16 md:my-32">
        <div className="p-8 flex items-center gap-x-4">
          <p className="text-white font-bold text-2xl">
            دنیای عجیب حیوانات خانگی
          </p>
          <button className="flex gap-x-2 items-center bg-white rounded-full pl-1 pr-4 py-1 text-orangeBrand">
            <span className="font-bold text-sm whitespace-nowrap">
              محصولات ویژه
            </span>
            <span className="bg-orangeBrand rounded-full  size-6 flex justify-center items-center">
              <ChevronLeft className="text-white size-4" />
            </span>
          </button>
        </div>

        <div className="CTA"></div>
      </div>
    </div>
  );
}
