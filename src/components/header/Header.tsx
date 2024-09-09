import React from 'react';

import Logo from '@/assets/icons/svgexport-7 (3) 1.svg';

import {
  Car,
  CheckSquare,
  ChevronDown,
  Menu,
  PhoneCall,
  Search,
} from 'lucide-react';
import { navList } from '@/constant';
import { ToPersianDidit } from '@/lib/utils';
import ActionsIcons from './ActionsIcons';
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from '@/components/ui/hover-card';
import Mobilenav from './Mobilenav';

export default function Header() {
  return (
    <>
      <header className="container backdrop-blur-md bg-white/80  max-w-screen-lg mx-auto py-4 sticky top-0  z-50 border-b">
        <div className="flex justify-between items-center">
          <Mobilenav />
          <div className="flex items-center gap-x-2">
            <div>
              <Logo />
            </div>
            <div className="text-lg font-bold text-orange-600">
              رکسی شاپ
            </div>
          </div>
          <div className="hidden md:flex justify-between items-center w-1/3 rounded-full bg-gray-100 pl-1 pr-4 py-1  ">
            <input
              type="text"
              placeholder="محصول مورد نظر را جستجو کنید..."
              className="bg-transparent w-full text-sm focus:outline-none"
            />
            <div className="bg-purple-950 rounded-full size-7 flex items-center justify-center">
              <Search className="size-5 text-white" />
            </div>
          </div>
          <div className="hidden md:flex items-center gap-x-8">
            <div className="flex items-center gap-x-1">
              <CheckSquare className="size-8 text-orange-600" />
              <div className="">
                <p className="text-sm leading-none font-bold">
                  ضمانت اصالت کالا
                </p>
                <p className="text-sm leading-none text-gray-700">
                  تمامی خرید ها
                </p>
              </div>
            </div>
            <div className="flex items-center gap-x-1">
              <Car className="size-10 text-orange-600" />
              <div className="">
                <p className="text-sm leading-none font-bold">
                  ارسال رایگان
                </p>
                <p className="text-sm leading-none text-gray-700">
                  تمامی خرید ها
                </p>
              </div>
            </div>
          </div>
          <ActionsIcons />
        </div>

        <div className="hidden md:flex items-center justify-between mt-8">
          <nav>
            <ul className="flex items-center font-bold text-base gap-x-8">
              {navList.map((list) => {
                return (
                  <li
                    key={list.id}
                    className="flex items-center gap-x-1 cursor-pointer text-gray-700"
                  >
                    {list.sublist.length > 0 ? (
                      <HoverCard>
                        <HoverCardTrigger>
                          {list.text}
                        </HoverCardTrigger>
                        <HoverCardContent className="!p-2">
                          <div className="grid grid-cols-12 gap-2">
                            {list.sublist.map((sub) => {
                              return (
                                <div
                                  key={sub.id}
                                  className="col-span-6 hover:bg-gray-100 rounded-lg text-center p-4 "
                                >
                                  {sub.text}
                                </div>
                              );
                            })}
                          </div>
                        </HoverCardContent>
                      </HoverCard>
                    ) : (
                      list.text
                    )}

                    {list.sublist.length > 0 && (
                      <ChevronDown className="size-4 text-gray-700" />
                    )}
                  </li>
                );
              })}
            </ul>
          </nav>
          <div className="flex items-center gap-x-2">
            <PhoneCall className="text-orange-600" />
            <div className="font-bold text-base text-gray-700">
              شماره تماس : {`${ToPersianDidit(9302549198)}`}{' '}
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
