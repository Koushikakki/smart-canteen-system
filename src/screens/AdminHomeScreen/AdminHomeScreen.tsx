
import SectionLists from '../../components/SectionLists';
import { Text} from 'react-native';
import { SafeAreaView,SafeAreaProvider } from 'react-native-safe-area-context';
import styles from './AdminHomeScreen.styles'
import { Section } from '../../types/types';
import { useState } from 'react';
import { menuData } from '../../data/data';

export default function AdminHomeScreen() {
  const [sections, setSections] = useState<Section[]>(menuData);
  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <Text style={styles.heading}>Everest Canteen</Text>

        <SectionLists sections={sections} setSections={setSections} isAdmin={true} />
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
