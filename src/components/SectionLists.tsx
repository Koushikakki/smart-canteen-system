import { SectionList,Text, View } from "react-native";
import { Section } from "../types/types";
import ItemCard from "./ItemCard";
import styles from "./SectionLists.styles.ts"

export function SectionLists ({sections}: {sections : Section[]}){
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
                        <Text style={styles.sectionTitle}>{section.title}</Text>
                    </View>
                    
                )
                }
                
            />
                
            
        </View>
    )
}




export default SectionLists;