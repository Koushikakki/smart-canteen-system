import { Text, View, TouchableOpacity ,TextInput, Alert} from 'react-native';
import { styles } from './RegisterScreen.styles';
import { useState } from 'react';
import { adminData,usersData } from '../../data/data';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Dropdown } from 'react-native-element-dropdown';
export function RegisterScreen({navigation} : {navigation:any}) {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [role,setRole]=useState('user');
  const roleOptions = [
  { label: 'User', value: 'user' },
  { label: 'Admin', value: 'admin' },
];

  const handleRegister = ()=>{
    if(!email || !password || !confirmPassword){
      Alert.alert('please fill all the fields');
      return;
    }

    if(password !== confirmPassword){
      Alert.alert('Passwords do not match');
      return;
    }

    const isUserExist =
      usersData.some(u => u.email === email) ||
      adminData.some(a => a.email === email);

      if (isUserExist) {
      Alert.alert('Email already registered');
      return;
    }

    if (role === 'user') {
      usersData.push({ email, password });
      Alert.alert('User Registered Successfully');
    } else {
      adminData.push({ email, password });
      Alert.alert('Admin Registered Successfully');
    }

    navigation.navigate('SignIn', { role });
  };


  
  return (
    
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Create your account</Text>
      <View style={styles.inputField}>
        <Text style={styles.inputLabel}>Email </Text>
        <TextInput placeholder="Enter your email" style={styles.textInput} value={email} onChangeText={setEmail} />
        <Text style={styles.inputLabel}>Password</Text>
        <TextInput
          placeholder="Password"
          style={styles.textInput}
          secureTextEntry
          value={password}
          onChangeText={setPassword}
          
        />
        <Text style={styles.inputLabel}>Confirm Password</Text>
        <TextInput
          placeholder="Confirm Password"
          style={styles.textInput}
          secureTextEntry
          value={confirmPassword}
          onChangeText={setConfirmPassword}
        />
        <Text style={styles.inputLabel}>Select Role</Text>
        <Dropdown
          style={styles.dropdown}
          data={roleOptions}
          labelField="label"
          valueField="value"
          value={role}
          onChange={item => setRole(item.value)}
          placeholder="Select Role"
        />
        
      </View>
      

      <View style={styles.buttons}>
        <TouchableOpacity style={styles.button} onPress={handleRegister}>
          <Text style={styles.buttonText}>SIGN IN</Text>
        </TouchableOpacity>
      </View>
      <Text style={styles.textPrompt}>Have an account?</Text>
            <TouchableOpacity style={styles.signInButton} onPress={()=> navigation.navigate('SignIn')}>
              <Text style={styles.signInText}>Sign In</Text>
            </TouchableOpacity>
    </SafeAreaView>
  );

}