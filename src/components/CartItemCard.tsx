import React from 'react';
import { View, Text } from 'react-native';
import { CartItem } from '../types/types';
import { styles } from './UserCartStyles.styles';

export function CartItemCard ({ item } : {item : CartItem})  {
  return (
    <View style={styles.cartItem}>
      <Text style={styles.itemTitle}>{item.title}</Text>
      <Text style={styles.itemPrice}>{item.price}</Text>
    </View>
  );
};
