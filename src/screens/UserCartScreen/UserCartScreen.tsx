import React from 'react';
import { UserCart } from '../../components/UserCart';
import { CartItem } from '../../types/types';

type Props = {
  cartItems: CartItem[];
  onIncrease: (id: string) => void;
  onDecrease: (id: string) => void;
};

export function UserCartScreen({ cartItems, onIncrease, onDecrease }: Props) {
  return (
    <UserCart
      cartItems={cartItems}
      onIncrease={onIncrease}
      onDecrease={onDecrease}
    />
  );
}
