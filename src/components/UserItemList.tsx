import { SectionList, View, Text} from "react-native";
import { menuData } from "../data/data";
import UserItemCard from "./UserItemCard";
import { Item,Section } from "../types/types";
import styles from './UserItemList.styles'

export default function UserItemList (){
    const renderItem = ({ item }: { item: Item }) => {
    return <UserItemCard item={item} />;
  };

  const renderSectionHeader = ({ section }: { section: Section }) => {
    return (
      <View style={styles.sectionHeader}>
        <Text style={styles.sectionTitle}>{section.title}</Text>
      </View>
    );
  };
    return(
        <SectionList 
        sections={menuData}
        keyExtractor={(item)=>item.id}
        renderItem={renderItem}
        renderSectionHeader={renderSectionHeader}
        />
    )
}