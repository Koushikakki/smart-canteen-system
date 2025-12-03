import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from '../screens/loginScreen/LoginScreen';
import SignInScreen from '../screens/signInScreen/SignInScreen';
import { RegisterScreen } from '../screens/registerScreen/RegisterScreen';
import AdminHomeScreen from '../screens/AdminHomeScreen/AdminHomeScreen';
import UserScreen from '../screens/UserScreen/UserScreen';

const Stack = createNativeStackNavigator();

export function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login" screenOptions={{ headerShown: false }}>
        
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="SignIn" component={SignInScreen} />
        <Stack.Screen name="Register" component={RegisterScreen} />
        <Stack.Screen name="AdminHomeScreen" component={AdminHomeScreen} />
        <Stack.Screen name="UserHomeScreen" component={UserScreen} />

      </Stack.Navigator>
    </NavigationContainer>
  );
}
