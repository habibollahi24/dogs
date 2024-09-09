'use client';

import ShoppingAction from './ShoppingAction';
import UserAction from './UserAction';
import FavAction from './FavAction';

export default function ActionsIcons() {
  return (
    <div className=" flex items-center gap-x-4 text-gray-700 ">
      <ShoppingAction />
      <FavAction />
      <UserAction />
    </div>
  );
}
