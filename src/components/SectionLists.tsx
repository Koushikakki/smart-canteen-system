import { SectionList, Text, View, Modal, TouchableOpacity } from 'react-native';
import { Section } from '../types/types';
import ItemCard from './ItemCard';
import styles from './SectionLists.styles.ts';
import { useState } from 'react';
import Model from './Model.tsx';

type props = {
  sections: Section[];
  setSections: (value: Section[]) => void;
};

export function SectionLists({ sections, setSections }: props) {
  const [model, setModel] = useState(false);
  const [selectedSection, setSelectedSection] = useState<Section | null>(null);

  const openModel = (section: Section) => {
    setSelectedSection(section);
    setModel(true);
  };

  const closeModel = () => {
    setModel(false);
    setSelectedSection(null);
  };
  return (
    <View>
      <SectionList
        sections={sections}
        keyExtractor={item => item.id}
        stickySectionHeadersEnabled={true}
        renderItem={({ item }) => <ItemCard item={item} />}
        renderSectionHeader={({ section }) => (
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>
              {section.title} {section.data.length}
            </Text>
            <TouchableOpacity
              style={styles.addButton}
              onPress={() => {
                setSelectedSection(section);
                openModel(section);
              }}
            >
              <Text style={styles.addButtonText}>Add</Text>
            </TouchableOpacity>
          </View>
        )}
      />

      <Modal visible={model} transparent={true} animationType="slide">
        {model && selectedSection && (
          <Model
            onclose={closeModel}
            section={selectedSection}
            sections={sections}
            setSections={setSections}
          />
        )}
      </Modal>
    </View>
  );
}

export default SectionLists;
