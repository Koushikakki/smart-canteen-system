import { Alert, View, Text, TouchableOpacity, TextInput } from 'react-native';
import { styles } from './SignInScreen.styles';
import { adminData,usersData } from '../../data/data';
import { useState } from 'react';

export default function SignInScreen({
  navigation,
  route,
}: {
  navigation: any;
  route: any;
}) {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const role = route.params?.role;

  const handleSignIn = () => {
    if (!email || !password) {
      Alert.alert('Please Enter both the fields');
      return;
    }
    if (role === 'user') {
      const userAccountFound = usersData.find(
        account => account.email === email && account.password === password,
      );

      if (userAccountFound) {
        Alert.alert('Login Successful');
        navigation.navigate('UserHomeScreen');
      } else {
        Alert.alert('Please enter the correct details');
      }
    } else {
      const adminAccountFound = adminData.find(
        account => account.email === email && account.password === password,
      );
      if(adminAccountFound){
        Alert.alert("Admin login successful");
        navigation.navigate('AdminHomeScreen');
      }
      else{
        Alert.alert("Please Enter the correct details");
      }
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sign In Your Account</Text>

      <View style={styles.inputField}>
        <Text style={styles.inputLabel}>Email </Text>
        <TextInput
          placeholder="Enter your email"
          style={styles.textInput}
          value={email}
          onChangeText={setEmail}
        />
        <Text style={styles.inputLabel}>Password</Text>
        <TextInput
          placeholder="Password"
          style={styles.textInput}
          value={password}
          onChangeText={setPassword}
          secureTextEntry
        />
      </View>
      <View style={styles.buttons}>
        <TouchableOpacity style={styles.button} onPress={handleSignIn}>
          <Text style={styles.buttonText}>SIGN IN</Text>
        </TouchableOpacity>
      </View>
      <Text style={styles.textPrompt}>Don't have an account?</Text>
      <TouchableOpacity
        style={styles.signUpButton}
        onPress={() => navigation.navigate('Register')}
      >
        <Text style={styles.signUpText}>Sign Up</Text>
      </TouchableOpacity>
    </View>
  );
}
