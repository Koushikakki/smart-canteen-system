import { Text, TouchableOpacity, View } from 'react-native';
import { styles } from './LoginScreen.styles';

export default function LoginScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to Everest Canteen</Text>
      <View style={styles.buttons}>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>LOGIN AS USER</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>LOGIN AS ADMIN</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
