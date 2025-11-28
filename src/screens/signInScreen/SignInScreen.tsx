import { View, Text, TouchableOpacity, TextInput } from 'react-native';
import { styles } from './SignInScreen.styles';
export default function SignInScreen({navigation} : {navigation:any}) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sign In Your Account</Text>

      <View style={styles.inputField}>
        <Text style={styles.inputLabel}>Email </Text>
        <TextInput placeholder="Enter your email" style={styles.textInput}/>
        <Text style={styles.inputLabel}>Password</Text>
        <TextInput placeholder="Password" style={styles.textInput} secureTextEntry/>
      </View>
      <View style={styles.buttons}>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>SIGN IN</Text>
        </TouchableOpacity>
      </View>
      <Text style={styles.textPrompt}>Don't have an account?</Text>
      <TouchableOpacity style={styles.signUpButton} onPress={()=> navigation.navigate('Register')}>
        <Text style={styles.signUpText}>Sign Up</Text>
      </TouchableOpacity>
    </View>
  );
}
