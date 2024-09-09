import React from 'react';
import ProductCard from './ProductCard';
import { ChevronLeft } from 'lucide-react';

const productList = [
  {
    id: 1,
    title: 'غذای گربه مفید پریمیوم',
    image: '/images/2105c-2_1-960w Background Removed 3.png',
    weight: '(۴ کیلوگرم)',
    price: '437000',
  },
  {
    id: 2,
    title: 'غذای گربه Kitzy پریمیوم ',
    image: '/images/product-16-1-350x350 1.png',
    weight: '(۲ کیلوگرم)',
    price: '437000',
  },
  {
    id: 3,
    title: 'غذای سگ Science diet ',
    image: '/images/product-17-1-350x350 1.png',
    weight: '(۳ کیلوگرم)',
    price: '437000',
  },
  {
    id: 4,
    title: 'مولتی ویتامین گربه Nulo ',
    image: '/images/product-18-1-350x350 Background Removed 1.png',
    weight: '(۳ کیلوگرم)',
    price: '437000',
  },
  {
    id: 9,
    title: 'مولتی ویتامین گربه Nulo ',
    image: '/images/product-18-1-350x350 Background Removed 1.png',
    weight: '(۳ کیلوگرم)',
    price: '437000',
  },
  {
    id: 10,
    title: 'مولتی ویتامین گربه Nulo ',
    image: '/images/product-18-1-350x350 Background Removed 1.png',
    weight: '(۳ کیلوگرم)',
    price: '437000',
  },
];

export default function ProductsTools() {
  return (
    <div className="grid grid-cols-12 my-16 gap-8">
      <div className="col-span-12 md:col-span-3 bg-banner ">
        <div className="py-12 md:py-24 flex flex-col items-center">
          <p className=" text-white font-bold text-xl   ">
            لوازم نگهداری سگ
          </p>
          <button className="flex   gap-x-2 border items-center bg-transparent rounded-full pl-1 pr-4 py-1  my-2">
            <span className="font-bold text-sm text-white">
              خرید کنید
            </span>
            <span className="border rounded-full  size-6 flex justify-center items-center">
              <ChevronLeft className="text-white size-4" />
            </span>
          </button>
        </div>
      </div>
      <div className="col-span-12 md:col-span-9">
        <div className="grid grid-cols-12 gap-2">
          {productList.map((product) => {
            return (
              <div
                key={product.id}
                className="col-span-6 md:col-span-4 "
              >
                <ProductCard {...product} />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
