import { View ,Text} from 'react-native';
import {
  SafeAreaProvider,
} from 'react-native-safe-area-context';
import SectionLists from './src/components/SectionLists';
import { menuData } from './src/data/data';
import styles from './App.styles'
import { useState } from 'react';

function App() {

  const [sections,setSections]=useState(menuData);

  return (
    <SafeAreaProvider>
      
      <View style={styles.container}>
      <View><Text style={styles.heading}>Everest Canteen</Text></View>
      <SectionLists sections={sections}
      setSections={setSections}/>
    </View>
    </SafeAreaProvider>
  );
}
export default App;
