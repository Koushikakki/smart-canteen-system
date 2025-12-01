import React from 'react';
import { View, Text,TouchableOpacity } from 'react-native';
import { CartItem } from '../types/types';
import { styles } from './UserCartStyles.styles';

type props ={
    item : CartItem;
    onIncrease :(id : string)=> void;
    onDecrease : (id :string)=> void;
}


export function CartItemCard ({ item ,onIncrease,onDecrease} : props)  {
  return (
    <View style={styles.cartItem}>
      <Text style={styles.itemTitle}>{item.title}</Text>
      <View style={styles.quantityContainer}>
        <TouchableOpacity onPress={() => onDecrease(item.id)} style={styles.quantityButton}>
          <Text style={styles.quantityButtonText}>-</Text>
        </TouchableOpacity>
        <Text style={styles.quantityText}>{item.quantity}</Text>
        <TouchableOpacity onPress={() => onIncrease(item.id)} style={styles.quantityButton}>
          <Text style={styles.quantityButtonText}>+</Text>
        </TouchableOpacity>
      </View>
      <Text style={styles.itemPrice}>{item.price}</Text>
    </View>
  );
};
