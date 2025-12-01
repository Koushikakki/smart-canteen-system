import React from 'react';
import { View, Text } from 'react-native';
import { CartItem } from '../types/types';
import { CartItemList } from './CartItemList';
import { styles } from './UserCartStyles.styles'



export function UserCart ({ cartItems }: {cartItems : CartItem[]}) {
  const totalPrice = cartItems.reduce((sum, item) => sum + item.price, 0);

  return (
    <View style={styles.container}>
      <Text style={styles.title}> Your Cart</Text>
      {cartItems.length === 0 ? (
        <Text style={styles.emptyText}>Your cart is empty.</Text>
      ) : (
        <CartItemList cartItems={cartItems} />
      )}
      <View style={styles.totalContainer}>
        <Text style={styles.totalText}>Total:</Text>
        <Text style={styles.totalPriceText}>${totalPrice.toFixed(2)}</Text>
      </View>
    </View>
  );
};
