import Image from 'next/image';
import React from 'react';
import AddToCartBtn from './AddToCartBtn';
import { Heart } from 'lucide-react';
import AddToFavariteBtn from './AddToFavariteBtn';

type Props = {
  id: number;
  title: string;
  image: string;
  weight: string;
  price: string;
};

export default function ProductCard({
  id,
  image,
  price,
  title,
  weight,
}: Props) {
  return (
    <div className="relative p-4 border-2 border-dotted rounded-xl cursor-pointer hover:border-orangeBrand hover:shadow-orangeBrand/5 hover:shadow-2xl transition-all group">
      <AddToFavariteBtn
        product={{ id, image, price, title, weight }}
      />
      <div className="relative aspect-square w-[150px] mx-auto mb-4">
        <Image
          src={image}
          alt={title}
          fill
          className="object-contain "
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>
      <p className="font-semibold text-gray-600 text-sm md:text-base">
        {title}
      </p>
      <p className="font-semibold text-gray-600 text-sm md:text-base">
        {weight}
      </p>
      <div className="flex items-center justify-between font-semibold text-[#79AF79] my-4">
        <p>قیمت:</p>
        <p>{Intl.NumberFormat('fa').format(Number(price))}</p>
      </div>
      <AddToCartBtn product={{ id, image, price, title, weight }} />
    </div>
  );
}
