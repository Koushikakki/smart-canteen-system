import { Text, TouchableOpacity, View } from "react-native";
import { Item } from "../types/types";
import styles from "./UserItemCard.styles.ts"

export function UserItemCard ({item} : {item : Item}) {
    return(
        <View style={styles.card}>
            
            <View style={styles.image} />

            <View style={styles.textContainer}>
                <Text style={styles.title}>{item.title}</Text>
                <Text style={styles.price}>{item.price}</Text>
            </View>
            <View>
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText}>Add to Cart</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}



export default UserItemCard;