import React from 'react';
import { View, Text} from 'react-native';
import { styles } from './UserHomeScreen.styles';
import { CartItem, Section } from '../../types/types';
import SectionLists from '../../components/SectionLists';

type Props ={
  sections : Section[];
  setSections : (value: Section[]) => void;
  addToCart: (item: CartItem) => void;
  cartItems : CartItem[];
}

export default function UserHomeScreen({ sections, setSections,addToCart ,cartItems}:Props) {

  

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Menu</Text>
      <Text style={styles.cartCount}>Cart Items: {cartItems.length}</Text>

      <SectionLists sections={sections} setSections={setSections} addToCart={addToCart} isAdmin={false} />
    </View>
  );
}
