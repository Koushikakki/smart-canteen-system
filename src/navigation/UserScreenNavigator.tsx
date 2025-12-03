import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import UserHomeScreen from '../screens/userHomeScreen/UserHomeScreen';
import { UserCartScreen } from '../screens/UserCartScreen/UserCartScreen';
import { CartItem, Section } from '../types/types';

type Props = {
  sections: Section[];
  setSections: (value: Section[]) => void;
  cartItems: CartItem[];
  addToCart: (item: CartItem) => void;
  onIncrease: (id: string) => void;
  onDecrease: (id: string) => void;
};

const Tab = createBottomTabNavigator();

export function UserScreenNavigator({ sections,setSections, cartItems, addToCart, onIncrease, onDecrease }: Props) {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home">
        {() => (
          <UserHomeScreen
            sections={sections}
            setSections={setSections}
            addToCart={addToCart}
            cartItems={cartItems}
          />
        )}
      </Tab.Screen>

      <Tab.Screen name="Cart">
        {() => (
          <UserCartScreen 
            cartItems={cartItems} 
            onIncrease={onIncrease} 
            onDecrease={onDecrease} 
          />
        )}
      </Tab.Screen>
    </Tab.Navigator>
  );
}
