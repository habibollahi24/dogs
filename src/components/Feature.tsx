import { cn } from '@/lib/utils';
import { ChevronLeft } from 'lucide-react';
import Image from 'next/image';
import React from 'react';

export default function Features() {
  return (
    <div className="flex flex-col md:flex-row gap-y-4 gap-8 my-12 ">
      <Feature
        color="bg-blueBrand"
        opacityColor="bg-blueBrand/5"
        hoverBorderColor="hover:border-blueBrand"
        text="غذا ماهی"
        image="/images/svgexport-10 (13) 2.png"
      />

      <Feature
        color="bg-orangeBrand"
        opacityColor="bg-orangeBrand/5"
        hoverBorderColor="hover:border-orangeBrand"
        text="غذا و لوازم گربه"
        image="/images/svgexport-10 (13) 1.png"
      />

      <Feature
        color="bg-purple-600"
        opacityColor="bg-purple-600/5"
        hoverBorderColor="hover:border-purple-600"
        text="غذا و لوازم سگ"
        image="/images/svgexport-10 (12) 1.png"
      />
    </div>
  );
}

const Feature = ({
  color,
  opacityColor,
  text,
  image,
  hoverBorderColor,
}: {
  color: string;
  opacityColor: string;
  text: string;
  image: string;
  hoverBorderColor: string;
}) => {
  return (
    <div
      className={cn(
        'flex items-center justify-between flex-1 p-2 rounded-2xl border-2 border-dotted transition-all cursor-pointer',
        opacityColor,
        hoverBorderColor,
        `hover:scale-105  `
      )}
    >
      <div className="flex items-center gap-x-2">
        <Image src={image} width={55} height={55} alt={text} />
        <p className="font-bold">{text}</p>
      </div>
      <div
        className={cn(
          'size-8 rounded-full flex items-center justify-center text-orangBrand',
          color
        )}
      >
        <ChevronLeft className="text-white size-6" />
      </div>
    </div>
  );
};
