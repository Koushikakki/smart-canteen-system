import { useState } from 'react';
import { Alert, Text, TextInput, TouchableOpacity, View } from 'react-native';
import styles from './Model.styles';
import { Section } from '../types/types';

type props = {
  onclose: () => void;
  section: Section;
  sections: Section[];
  setSections: (value: Section[]) => void;
};

export default function Model({
  onclose,
  section,
  sections,
  setSections,
}: props) {
  const [newItem, setNewItem] = useState('');
  const [newItemPrice, setNewItemPrice] = useState('');

  const handleAdd = () => {
    if (!newItem || !newItemPrice) {
      Alert.alert('Please fill all the fields');
      return;
    }

    const updatedSections = sections.map(sec => {
      if (sec.id === section.id) {
        return {
          ...section,
          data: [
            ...section.data,
            {
              id: Math.random().toString(),
              title: newItem,
              price: Number(newItemPrice),
              image: null,
            },
          ],
        };
      }
      return section;
    });

    setSections(updatedSections);
    onclose();
  };

  return (
    <View style={styles.modelPage}>
      <View style={styles.modalContainer}>
        <Text style={styles.title}>Add {section.title}</Text>

        <View style={styles.inputField}>
          <TextInput
            placeholder=" Add New Item"
            value={newItem}
            onChangeText={setNewItem}
          />
          <TextInput
            placeholder="Enter Price"
            value={newItemPrice}
            onChangeText={setNewItemPrice}
          />
        </View>

        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.addButton} onPress={handleAdd}>
            <Text style={styles.addButtonText}>ADD</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.cancelButton} onPress={onclose}>
            <Text style={styles.cancelButtonText}>CANCEL</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
