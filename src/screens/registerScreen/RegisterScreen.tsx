import { Text, View, TouchableOpacity ,TextInput} from 'react-native';
import { styles } from './RegisterScreen.styles';
export function RegisterScreen({navigation} : {navigation:any}) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Create your account</Text>
      <View style={styles.inputField}>
        <Text style={styles.inputLabel}>Email </Text>
        <TextInput placeholder="Enter your email" style={styles.textInput} />
        <Text style={styles.inputLabel}>Password</Text>
        <TextInput
          placeholder="Password"
          style={styles.textInput}
          secureTextEntry
        />
        <Text style={styles.inputLabel}>Confirm Password</Text>
        <TextInput
          placeholder="Confirm Password"
          style={styles.textInput}
          secureTextEntry
        />

      </View>

      <View style={styles.buttons}>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>SIGN IN</Text>
        </TouchableOpacity>
      </View>
      <Text style={styles.textPrompt}>Have an account?</Text>
            <TouchableOpacity style={styles.signInButton} onPress={()=> navigation.navigate('SignIn')}>
              <Text style={styles.signInText}>Sign In</Text>
            </TouchableOpacity>
    </View>
  );
}
