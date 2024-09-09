import { ChevronLeft } from 'lucide-react';
import Image from 'next/image';
import React from 'react';

const categoryList = [
  {
    id: 1,
    title: 'فروش انواع غذای خشک',
    image: '/images/16-kitten-ns-b1 Background Removed 1.png',
    primaryColor: '#FF9AB3',
    secondaryColor: '#E77291',
  },
  {
    id: 2,
    title: 'غذای سگ نژاد جونیور',
    image: '/images/product_gallery_2021-06-22_12-42-21 1.png',
    primaryColor: '#648958',
    secondaryColor: '#88BD88',
  },
  {
    id: 3,
    title: 'انواع کنسرو برای سگ',
    image: '/images/RAWZ_Dog_96_Beef_can_web 1.png',
    primaryColor: '#EC8A3C',
    secondaryColor: '#CC6513',
  },
  {
    id: 4,
    title: 'قرص و پودر های مولتی ویتامین',
    image: '/images/Joints_and_Bones 1.png',
    primaryColor: '#AF56C6',
    secondaryColor: '#D086E3',
  },
];

export default function CategoryList() {
  return (
    <div>
      <div className="grid grid-cols-12 gap-2 md:gap-8 mb-4 ">
        {categoryList.map((cat) => {
          return (
            <div
              key={cat.id}
              className="col-span-6 md:col-span-3 rounded-lg text-white p-4 pt-8 overflow-hidden "
              style={{ backgroundColor: cat.primaryColor }}
            >
              <p className=" text-sm md:text-base font-bold">
                {cat.title}
              </p>
              <button className="flex relative z-40 gap-x-2 border items-center bg-transparent rounded-full pl-1 pr-4 py-1 text-orangeBrand my-2">
                <span className="font-bold text-sm text-white">
                  خرید کنید
                </span>
                <span className="border rounded-full  size-6 flex justify-center items-center">
                  <ChevronLeft className="text-white size-4" />
                </span>
              </button>
              <div className="relative z-0 aspect-square w-[120px] mt-16 ml-auto">
                <Image
                  src={cat.image}
                  alt={cat.title}
                  fill
                  className="object-contain z-20   "
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />

                <svg
                  viewBox="0 0 200 200"
                  xmlns="http://www.w3.org/2000/svg"
                  width={350}
                  height={350}
                  className="absolute z-10 -right-32 -top-16"
                >
                  <path
                    fill={cat.secondaryColor}
                    d="M30.6,-36.6C42.9,-26,58.6,-19.6,61.6,-9.8C64.5,-0.1,54.8,13,44.2,20C33.5,26.9,22,27.9,12.3,29.5C2.6,31.2,-5.2,33.5,-17.1,34.6C-29.1,35.7,-45.1,35.5,-53.1,27.7C-61.1,19.9,-61,4.6,-57.7,-9.4C-54.3,-23.5,-47.7,-36.2,-37.5,-47.2C-27.4,-58.1,-13.7,-67.3,-2.3,-64.6C9.1,-61.8,18.2,-47.2,30.6,-36.6Z"
                    transform="translate(100 100)"
                  />
                </svg>
                <svg
                  width="234"
                  height="196"
                  className="absolute z-10 -right-24"
                  viewBox="0 0 234 196"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M164.874 2.47684C196.984 10.3298 203.634 53.6281 228.105 75.9175C248.443 94.4419 280.417 97.419 294.851 120.867C311.24 147.49 316.02 180.036 311.236 210.957C305.855 245.731 298.257 288.607 266.564 303.678C234.369 318.988 199.399 289.384 164.874 280.558C140.73 274.385 115.289 274.247 94.9514 259.805C74.4377 245.238 64.9848 221.527 51.6484 200.154C32.9803 170.237 -3.46779 144.914 1.45216 109.964C6.3307 75.3072 45.2542 57.5219 74.4277 38.3337C102.219 20.0548 132.589 -5.4188 164.874 2.47684Z"
                    stroke="black"
                    strokeDasharray="5 5"
                  />
                </svg>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
