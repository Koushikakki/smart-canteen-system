import React from 'react';
import { FlatList } from 'react-native';
import { CartItem } from '../types/types';
import { CartItemCard } from './CartItemCard';

type props ={
    cartItems : CartItem[];
    onIncrease :(id : string)=> void;
    onDecrease : (id :string)=> void;
}

export function CartItemList({ cartItems ,onDecrease,onIncrease}:props){
  return (
    <FlatList
      data={cartItems}
      renderItem={({ item }) => <CartItemCard item={item} onDecrease={onDecrease} onIncrease={onIncrease}/>}
      keyExtractor={item => item.id}
    />
  );
};
