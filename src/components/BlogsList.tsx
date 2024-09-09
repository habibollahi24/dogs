import { Calendar, User } from 'lucide-react';
import Image from 'next/image';
import React from 'react';

const blogsList = [
  {
    id: 1,
    title: 'نکات کلیدی درباره نگهداری سگ در آپارتمان ها ',
    describtions:
      'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد،',
    image: '/images/blog-8-820x500 1.png',
    author: 'آرمان',
    created_at: '۱۴۰۰/۰۲/۲۴',
    categories: ['نگه داری سگ', 'مقاله جدید'],
  },
  {
    id: 2,
    title: 'غذای گربه Kitzy پریمیوم ',
    describtions:
      'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد،',
    image: '/images/blog-4-820x500 1.png',
    author: 'محسن',
    created_at: '۱۴۰۰/۰۲/۲۴',
    categories: ['مقاله جدید'],
  },
  {
    id: 3,
    title: 'غذای سگ Science diet ',
    describtions:
      'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد،',
    image: '/images/blog-1-820x500 1.png',
    author: 'سارا',
    created_at: '۱۴۰۰/۰۲/۲۴',
    categories: ['مقاله جدید', 'سگ'],
  },
];

export default function BlogsList() {
  return (
    <div className="my-16">
      <div className="grid grid-cols-12 gap-8">
        {blogsList.map((blog) => {
          return (
            <div key={blog.id} className="col-span-12 md:col-span-4 ">
              <div className="relative aspect-video">
                <div className="relative z-20 flex items-center gap-x-1 p-2">
                  {blog.categories.map((cat, i) => {
                    return (
                      <div
                        key={i}
                        className="text-[10px] leading-none text-white bg-gray-500/50 rounded-xl px-2 py-[2px]"
                      >
                        {cat}
                      </div>
                    );
                  })}
                </div>
                <Image
                  src={blog.image}
                  alt={blog.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, "
                />
              </div>
              <div className="p-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-x-1">
                    <User className="size-3 text-orangeBrand" />
                    <p className="text-gray-400 text-xs">
                      منتشر کننده
                    </p>
                    <p className="font-bold text-sm">
                      {' '}
                      {blog.author}
                    </p>
                  </div>
                  <div className="flex items-center gap-x-1">
                    <Calendar className="size-3 text-orangeBrand" />
                    <p className="text-gray-400 text-xs">تاریخ</p>
                    <p className="font-bold text-sm">
                      {blog.created_at}
                    </p>
                  </div>
                </div>
                <p className="font-bold mt-4 ">{blog.title}</p>
                <p className="text-gray-400 text-sm line-clamp-2">
                  {blog.describtions}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
