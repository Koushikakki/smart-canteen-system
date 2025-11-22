import { StatusBar, useColorScheme, View ,Text} from 'react-native';
import {
  SafeAreaProvider,
} from 'react-native-safe-area-context';
import SectionLists from './src/components/SectionLists';
import { menuData } from './src/data/data';
import styles from './App.styles'

function App() {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <SafeAreaProvider>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <View style={styles.container}>
      <View><Text style={styles.heading}>Everest Canteen</Text></View>
      <SectionLists sections={menuData}/>
    </View>
    </SafeAreaProvider>
  );
}
export default App;
