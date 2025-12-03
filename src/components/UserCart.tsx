import React from 'react';
import { View, Text } from 'react-native';
import { CartItem } from '../types/types';
import { CartItemList } from './CartItemList';
import { styles } from './UserCartStyles.styles';

type Props ={
  cartItems : CartItem[];
  onIncrease :(id : string)=> void;
  onDecrease : (id :string)=> void;
}


export function UserCart ({ cartItems, onDecrease, onIncrease }: Props) {

    

const totalPrice = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}> Your Cart</Text>
      {cartItems.length === 0 ? (
        <Text style={styles.emptyText}>Your cart is empty.</Text>
      ) : (
        <CartItemList cartItems={cartItems} onDecrease={onDecrease} onIncrease={onIncrease}/>
      )}
      <View style={styles.totalContainer}>
        <Text style={styles.totalText}>Total:</Text>
        <Text style={styles.totalPriceText}>${totalPrice.toFixed(2)}</Text>
      </View>
    </View>
  );
};
