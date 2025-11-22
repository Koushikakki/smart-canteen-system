import { Text, TextInput, View } from "react-native";

export default function Model (){
    return (
        <View>
            <Text>Add</Text>

            <View>
                <TextInput placeholder="Item" />
                <TextInput placeholder="Price" />
            </View>
        </View>
    )
}