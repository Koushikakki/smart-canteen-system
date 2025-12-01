import React from 'react';
import { FlatList } from 'react-native';
import { CartItem } from '../types/types';
import { CartItemCard } from './CartItemCard';

export function CartItemList({ cartItems }:{cartItems :CartItem[]}){
  return (
    <FlatList
      data={cartItems}
      renderItem={({ item }) => <CartItemCard item={item} />}
      keyExtractor={item => item.id}
    />
  );
};
