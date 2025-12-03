import React, { useState } from "react";
import { UserScreenNavigator } from "../../navigation/UserScreenNavigator";
import { CartItem,Section } from "../../types/types";
import { menuData } from "../../data/data";


export default function UserScreen() {
  const [sections,setSections] = useState<Section[]>(menuData);
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  const addToCart = (item: CartItem) => {
    setCartItems(prev => {
      const existing = prev.find(i => i.id === item.id);
      if (existing) {
        return prev.map(i =>
          i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i
        );
      }
      return [...prev, { ...item, quantity: 1 }];
    });
  };
  const handleIncrease = (id: string) => {
    setCartItems(prev =>
      prev.map(item =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };
  const handleDecrease = (id: string) => {
    setCartItems(prev =>
      prev.map(item =>
        item.id === id
          ? { ...item, quantity: item.quantity > 1 ? item.quantity - 1 : 1 }
          : item
      )
    );
  };

  return (
    <UserScreenNavigator
      sections={sections}
      setSections={setSections}
      cartItems={cartItems}
      addToCart={addToCart}
      onIncrease={handleIncrease}
      onDecrease={handleDecrease}
    />
  );
}
