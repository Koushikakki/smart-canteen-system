import { Text } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import UserItemList from "./UserItemList";
import { StyleSheet } from 'react-native';

export default function UserHome (){
    
    return(
        <SafeAreaProvider>
            <SafeAreaView  style={styles.container}>
            <Text style={styles.title}>Everest Canteen</Text>
            <UserItemList/>
            
        </SafeAreaView>
        </SafeAreaProvider>
    )

}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff' },
  title: { fontSize: 24, fontWeight: '700', padding: 16, color: '#333' },
});