import { View, Text } from 'react-native';
import SectionLists from './src/components/SectionLists';
import { menuData } from './src/data/data';
import styles from './App.styles';
import { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';

function App() {
  const [sections, setSections] = useState(menuData);

  return (

    <SafeAreaView style={styles.container}>
        
      <View>
        <Text style={styles.heading}>Everest Canteen</Text>
      </View>
      <SectionLists sections={sections} setSections={setSections} />

    </SafeAreaView>

    
  );
}
export default App;
