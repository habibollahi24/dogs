import { ToPersianDidit } from '@/lib/utils';
import { PhoneCall } from 'lucide-react';
import Image from 'next/image';
import React from 'react';

export default function Footer() {
  return (
    <div className="pt-16 border-t-2 border-dotted border-orangeBrand bg-footer">
      <div className="container max-w-screen-lg mx-auto ">
        <div className="grid grid-cols-12 gap-4 border-b-2 border-dotted border-orangeBrand pb-8">
          <ul className="col-span-12 md:col-span-3">
            <li className="text-xl font-bold mb-6">دسترسی سریع</li>
            <li className="mb-1 text-gray-500">درباره ما</li>
            <li className="mb-1 text-gray-500">تماس با ما</li>
            <li className="mb-1 text-gray-500">سوالات متداول</li>
            <li className="mb-1 text-gray-500">پیگیری سفارشات</li>
          </ul>
          <ul className="col-span-12 md:col-span-4">
            <li className="text-xl font-bold mb-6">لینک های مهم</li>
            <li className="mb-1 text-gray-500">حساب کاربری من</li>
            <li className="mb-1 text-gray-500">سبد خرید</li>
            <li className="mb-1 text-gray-500">قوانین و مقررات</li>
            <li className="mb-1 text-gray-500">
              سیاست حفظ حریم شخصی
            </li>
          </ul>
          <div className="col-span-12 md:col-span-5">
            <div className="flex items-center gap-x-2">
              <div>
                <Image
                  src="/images/svgexport-7 (3) 1.png"
                  alt="رکسی شاپ"
                  width={50}
                  height={50}
                />
              </div>
              <div className="text-lg font-bold text-orange-600">
                رکسی شاپ
              </div>
            </div>
            <p className="my-2 text-gray-500 ">
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت
              چاپ، و با استفاده از طراحان گرافیک است،
            </p>
            <div className="flex items-center gap-x-2">
              <PhoneCall className="text-orange-600" />
              <div className="font-bold text-base text-gray-700">
                شماره تماس : {`${ToPersianDidit(9302549198)}`}{' '}
              </div>
            </div>
          </div>
        </div>
      </div>
      <p className="text-center py-8">
        تمامی حقوق این وبسایت برای{' '}
        <span className="text-orangeBrand">رکسی شاپ</span> محفوظ می
        باشد.
      </p>
    </div>
  );
}
