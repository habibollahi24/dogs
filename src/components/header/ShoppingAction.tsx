import { Minus, Plus, ShoppingCart, Trash } from 'lucide-react';
import React, { useEffect, useMemo, useState } from 'react';

import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from '@/components/ui/drawer';
import { useAppDispatch, useAppSelector } from '@/store/hooks/hooks';
import Image from 'next/image';
import { ProductType } from '../AddToCartBtn';
import {
  addToCart,
  removeFromCart,
} from '@/store/feature/cart-slice';

export default function ShoppingAction() {
  const dispatch = useAppDispatch();

  const [totalQuantity, setTotalQuantity] = useState(0);

  const cartItems = useAppSelector((state) => state.cart.cartItems);

  const totalPrice = useMemo(() => {
    return cartItems.reduce(
      (acc, cur) => acc + +cur.price * cur.quantity,
      0
    );
  }, [cartItems]);

  useEffect(() => {
    setTotalQuantity(
      cartItems?.reduce((acc, cur) => acc + cur.quantity, 0)
    );
  }, [cartItems]);

  const handleAdToCart = (product: ProductType) => {
    dispatch(addToCart(product));
  };
  const handleRemoveFromCart = (id: number) => {
    dispatch(removeFromCart({ id }));
  };

  return (
    <div>
      <Drawer>
        <DrawerTrigger asChild>
          <div className="relative cursor-pointer">
            <div className="bg-red-500 absolute bottom-3 left-3 size-5 rounded-full text-white grid place-items-center text-xs">
              {totalQuantity}
            </div>
            <ShoppingCart className="cursor-pointer" />
          </div>
        </DrawerTrigger>
        <DrawerContent className=" w-full max-h-[calc(100vh-10px)] md:w-1/2 mx-auto ">
          <div className="mx-auto w-full md:p-6 overflow-auto max-h-[calc(100vh-50px)]">
            <DrawerHeader>
              <DrawerTitle className="text-center">
                سبد خرید شما😍
              </DrawerTitle>
              <DrawerDescription className="text-center">
                در هر مرحله میتوانید سبد خریدتان را ویرایش کنید.
              </DrawerDescription>
            </DrawerHeader>

            {cartItems?.length === 0 ? (
              <div className="text-center text-xl">
                سبد خریدتان خالی است.
              </div>
            ) : (
              ''
            )}
            {cartItems?.map((product) => {
              return (
                <div
                  key={product.id}
                  className="flex items-center justify-between border-b py-4 p-2 text-sm"
                >
                  <div className="w-[100px]">
                    {product.title}
                    <br />
                    {product.weight}
                    <br />
                  </div>
                  <div>
                    <p className=" font-bold">
                      تعداد :{product.quantity}
                    </p>
                    <p className=" font-bold">
                      قیمت :
                      {Intl.NumberFormat('fa').format(
                        Number(+product.price * product.quantity)
                      )}
                    </p>
                  </div>
                  <div className="flex items-center gap-x-2">
                    <button
                      type="button"
                      onClick={() => handleAdToCart(product)}
                      className="size-8 text-white bg-indigo-500 rounded-lg flex items-center justify-center cursor-pointer transition-all duration-500  hover:bg-indigo-700"
                    >
                      <Plus />
                    </button>
                    <button
                      onClick={() => handleRemoveFromCart(product.id)}
                      type="button"
                      className="size-8 text-white bg-indigo-500 rounded-lg flex items-center justify-center cursor-pointer transition-all duration-500  hover:bg-indigo-700"
                    >
                      {product.quantity === 1 ? (
                        <Trash className="size-5" />
                      ) : (
                        <Minus />
                      )}
                    </button>
                  </div>
                  <div>
                    <Image
                      src={product.image}
                      width={100}
                      height={100}
                      alt={product.title}
                      className=" rounded-lg"
                    />
                  </div>
                </div>
              );
            })}

            <DrawerFooter>
              {cartItems?.length !== 0 && (
                <div className="flex items-center justify-between">
                  <div>
                    <button
                      type="button"
                      className="px-4 py-1 text-white bg-indigo-500 rounded-lg flex items-center justify-center cursor-pointer transition-all duration-500  hover:bg-indigo-700"
                    >
                      درگاه پرداخت
                    </button>
                  </div>
                  <div>
                    مبلغ کل:
                    {Intl.NumberFormat('fa').format(
                      Number(totalPrice)
                    )}
                    تومان
                  </div>
                </div>
              )}

              {/* <DrawerClose asChild>
                <button>❌</button>
              </DrawerClose> */}
            </DrawerFooter>
          </div>
        </DrawerContent>
      </Drawer>
    </div>
  );
}
