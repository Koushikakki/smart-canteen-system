import { Button, Text, TextInput, View } from 'react-native';
import styles from './Model.styles';

type props = {
  onclose: () => void;
};

export default function Model({ onclose }: props) {
  

  return (
    <View style={styles.modelPage}>
      <View style={styles.modalContainer}>
        <Text style={styles.title}>Add</Text>

        <View style={styles.inputField}>
          <TextInput
            placeholder=" Add New Item"
          />
          <TextInput
            placeholder="Enter Price"
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
