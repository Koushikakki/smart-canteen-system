import { useState } from "react";
import { Button, Text, TextInput, View } from "react-native";

export default function Model (){
    const [newItem,setNewItem] = useState("");
    const [newItemPrice,setNewItemPrice] = useState("");
    return (
        <View>
            <Text>Add</Text>

            <View>
                <TextInput placeholder="Item" value={newItem} onChangeText={setNewItem}/>
                <TextInput placeholder="Price" value={newItemPrice} onChangeText={setNewItemPrice}/>
            </View>

            <View>
                <Button title="Add"/>
                <Button title="Cancel" />
            </View>
        </View>
    )
}