import { useState } from 'react';
import { Button, Text, TextInput, View } from 'react-native';
import styles from './Model.styles';

type props = {
  onclose: () => void;
};

export default function Model({ onclose }: props) {
  const [newItem, setNewItem] = useState('');
  const [newItemPrice, setNewItemPrice] = useState('');

  return (
    <View style={styles.modelPage}>
      <View style={styles.modalContainer}>
        <Text style={styles.title}>Add</Text>

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

        <View style= {styles.buttonContainer}>
          <Button title="Add" />
          <Button title="Cancel" onPress={onclose} />
        </View>
      </View>
    </View>
  );
}
