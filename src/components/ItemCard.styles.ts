import { Dimensions , StyleSheet} from "react-native";
const {width} = Dimensions.get('window');
export default StyleSheet.create({
    card : {
        width : width-32,
        height  : 130,
        borderRadius : 15,
        backgroundColor : '#f7f5f5',
        marginHorizontal : 16,
        marginVertical: 8,
        flexDirection : "row",
        alignItems : 'center'

    },

    cardImage : {
        width : '50%',
        height : '80%',
        borderRadius:15,
        marginRight: 16,
    },

    textContainer: {
        flex: 1,
        justifyContent: "center",
        
    },

    title: {
        fontSize: 18,
        fontWeight: "600",
        marginBottom: 6,
        color: "#333",
    },

    price: {
        fontSize: 16,
        color: "#1b6edb",
        fontWeight: "bold",
        
    },

})