import { Text } from 'react-native';
import SectionLists from './src/components/SectionLists';
import { menuData } from './src/data/data';
import styles from './App.styles';
import { useState } from 'react';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

function App() {
  const [sections, setSections] = useState(menuData);

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <Text style={styles.heading}>Everest Canteen</Text>

        <SectionLists sections={sections} setSections={setSections} />
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
export default App;
