import { ChevronLeft } from 'lucide-react';
import React from 'react';
import Image from 'next/image';

import RadePa from '@/assets/svgs/Vector (1).svg';

export default function Hero() {
  return (
    <div className="bg-[#E0F5FF] relative rounded-[3rem] py-16 md:py-8">
      <div className="flex flex-col-reverse md:flex-row items-center gap-8 md:gap-0 justify-around">
        <div className="md:w-1/2">
          <h1 className="font-black text-4xl leading-tight">
            <span className="font-medium">بهترین و جدیدترین </span>
            <br />
            لوازم سگ خانگی
          </h1>
          <p className="w-[300px] font-semibold my-4">
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ،
            و با استفاده از طراحان گرافیک است.
          </p>
          <button className="flex items-center align-middle text-sm font-semibold bg-purple-800 rounded-3xl text-white gap-x-2 pl-1 pr-2 py-1">
            <span>خرید کنید</span>
            <span className="bg-white rounded-full">
              <ChevronLeft className="text-purple-800" />
            </span>
          </button>
        </div>
        <div className="relative ">
          <div className="flex flex-col justify-center absolute -top-5 -right-5">
            <div className="text-black font-bold text-3xl">
              تخفیف تا
            </div>
            <div className="text-white font-black text-4xl bg-orange-600  rounded-full size-20 flex items-center justify-center pt-3 ">
              75%
            </div>
          </div>
          <Image
            src="/images/rev_home3 1.png"
            alt="seg"
            width={300}
            height={300}
            // className="w-full h-full"
            priority
          />
        </div>
      </div>
      <div className="absolute bottom-5 right-1/2">
        <RadePa />
      </div>
      <div className="absolute top-10 left-5 ">
        <RadePa />
      </div>
      <div className="hidden md:block absolute top-5 right-1/4 ">
        <RadePa />
      </div>
    </div>
  );
}
