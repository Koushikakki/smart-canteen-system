import { Button, SectionList,Text, View ,Modal} from "react-native";
import { Section } from "../types/types";
import ItemCard from "./ItemCard";
import styles from "./SectionLists.styles.ts"
import { useState } from "react";
import Model from "./Model.tsx";

export function SectionLists ({sections}: {sections : Section[]}){

    const [model,setModel]=useState(false);


    const openModel=()=>{
        setModel(true);
    };

    const closeModel = ()=>{
        setModel(false);
    }
    return(
        <View>
            <SectionList

                sections={sections}
                keyExtractor={(item)=> item.id}
                stickySectionHeadersEnabled={true}
                renderItem={({item})=>(
                    <ItemCard item={item} />
                )}

                renderSectionHeader={({section})=>(
                    <View style={styles.sectionHeader}>
                        <Text style={styles.sectionTitle}>{section.title}   {section.data.length}</Text>
                        <Button title="Add" onPress={openModel} />
                    </View>
                    
                )
                }
                
            />
                
            <Modal visible={model} transparent={true} animationType="slide">
                <Model onclose={closeModel} />
            </Modal>

            
        </View>
    )
}




export default SectionLists;