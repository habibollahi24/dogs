'use client';

import { PlusSquare } from 'lucide-react';
import { useAppDispatch } from '@/store/hooks/hooks';
import { addToCart } from '@/store/feature/cart-slice';
import { useToast } from '@/hooks/use-toast';

export type ProductType = {
  id: number;
  title: string;
  image: string;
  weight: string;
  price: string;
};

export default function AddToCartBtn({
  product,
}: {
  product: ProductType;
}) {
  const dispatch = useAppDispatch();
  const { toast } = useToast();

  const handleAddToCart = (product: ProductType) => {
    dispatch(addToCart(product));
    toast({
      description: 'یک محصول به سبد خرید اضافه شد.',
      className: 'text-center',
    });
  };

  return (
    <div>
      <button
        onClick={() => handleAddToCart(product)}
        className="flex items-center justify-center gap-x-1 bg-blueBrand text-white px-2 md:px-4 py-1 rounded-lg mx-auto  text-sm font-semibold group-hover:bg-orangeBrand transition-all ho"
      >
        <PlusSquare />
        افزودن به سبد خرید
      </button>
    </div>
  );
}
