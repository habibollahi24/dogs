'use client';

import { ChevronDown, Menu, PhoneCall } from 'lucide-react';
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from '@/components/ui/collapsible';

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';
import { navList } from '@/constant';
import { ToPersianDidit } from '@/lib/utils';

export default function Mobilenav() {
  return (
    <div className="md:hidden relative">
      <Sheet>
        <SheetTrigger asChild>
          <Menu className="md:hidden" />
        </SheetTrigger>
        <SheetContent>
          <div className="hidden">
            <SheetTitle></SheetTitle>
            <SheetDescription></SheetDescription>
          </div>
          <nav>
            <ul className="flex flex-col pt-12 pr-8 font-bold text-base gap-y-8 ">
              {navList.map((list) => {
                return (
                  <li
                    key={list.id}
                    className="flex items-center gap-x-1 cursor-pointer text-gray-700"
                  >
                    {}

                    {list.sublist.length > 0 ? (
                      <>
                        <Collapsible>
                          <CollapsibleTrigger asChild>
                            <div className="flex items-center gap-x-2">
                              {list.text}
                              <ChevronDown className="size-4 text-gray-700" />
                            </div>
                          </CollapsibleTrigger>
                          <CollapsibleContent className="transition-all">
                            <div className="grid grid-cols-12 gap-2">
                              {list.sublist.map((sub) => {
                                return (
                                  <div
                                    key={sub.id}
                                    className="col-span-12 hover:bg-gray-100 rounded-lg text-center p-4 "
                                  >
                                    {sub.text}
                                  </div>
                                );
                              })}
                            </div>
                          </CollapsibleContent>
                        </Collapsible>
                      </>
                    ) : (
                      list.text
                    )}
                  </li>
                );
              })}
            </ul>
          </nav>
          <div className="absolute bottom-5 flex items-center gap-x-2">
            <PhoneCall className="text-orange-600" />
            <div className="font-bold text-base text-gray-700">
              شماره تماس : {`${ToPersianDidit(9302549198)}`}{' '}
            </div>
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
}
