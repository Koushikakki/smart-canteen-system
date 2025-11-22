import { Image,Text, View } from "react-native";
import { Item } from "../types/types";
import styles from "./ItemCard.styles.ts"

export function ItemCard ({item} : {item : Item}) {
    return(
        <View style={styles.card}>
            <Image source={item.image} style ={styles.cardImage} />
            <View style={styles.textContainer}>
                <Text style={styles.title}>{item.title}</Text>
                <Text style={styles.price}>{item.price}</Text>
            </View>
        </View>
    )
}



export default ItemCard;