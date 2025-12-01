import React from 'react';
import { View, Text } from 'react-native';
import { CartItem } from '../types/types';
import { CartItemList } from './CartItemList';
import { styles } from './UserCartStyles.styles';
import { useState } from 'react';



export function UserCart ({ cartItems }: {cartItems : CartItem[]}) {
    const [items, setItems] = useState<CartItem[]>(cartItems);

    const handleIncrease = (id: string) => {
    setItems(prev =>
      prev.map(item =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const handleDecrease = (id: string) => {
    setItems(prev =>
      prev.map(item =>
        item.id === id
          ? { ...item, quantity: item.quantity > 1 ? item.quantity - 1 : 1 }
          : item
      )
    );
  };

const totalPrice = items.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}> Your Cart</Text>
      {cartItems.length === 0 ? (
        <Text style={styles.emptyText}>Your cart is empty.</Text>
      ) : (
        <CartItemList cartItems={cartItems} onDecrease={handleDecrease} onIncrease={handleIncrease}/>
      )}
      <View style={styles.totalContainer}>
        <Text style={styles.totalText}>Total:</Text>
        <Text style={styles.totalPriceText}>${totalPrice.toFixed(2)}</Text>
      </View>
    </View>
  );
};
