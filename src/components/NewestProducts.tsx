import React from 'react';
import ProductCard from './ProductCard';

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
];

export default function NewestProducts() {
  return (
    <div className="my-12">
      <div className="flex items-center justify-between mb-8">
        <p className="font-bold text-xl ">جدیدترین محصولات</p>
        <p className="font-bold text-xl text-orangeBrand">
          مشاهده همه
        </p>
      </div>
      <div className="grid grid-cols-12 gap-2 ">
        {productList.map((product) => {
          return (
            <div
              key={product.id}
              className="col-span-6 md:col-span-3 "
            >
              <ProductCard {...product} />
            </div>
          );
        })}
      </div>
    </div>
  );
}
