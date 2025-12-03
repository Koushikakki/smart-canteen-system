import { Text, View ,Button} from "react-native";
import { Item } from "../types/types";
import styles from "./ItemCard.styles.ts"
type Props ={
    item : Item;
    onAdd : ()=>void;
    isAdmin ? : boolean;
}
export function ItemCard ({item,onAdd,isAdmin} : Props) {
    return(
        <View style={styles.card}>
            {/* <Image source={item.image} style ={styles.cardImage} /> */}
            <View style={styles.image} />

            
            <View style={styles.textContainer}>
                <Text style={styles.title}>{item.title}</Text>
                <Text style={styles.price}>{item.price}</Text>
                {!isAdmin && <Button title="Add to cart" onPress={onAdd} />}
            </View>
        </View>
    )
}



export default ItemCard;