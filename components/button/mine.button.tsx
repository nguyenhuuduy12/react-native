import { View, Text, StyleSheet, Pressable } from "react-native";
import AntDesign from '@expo/vector-icons/AntDesign';

const styles = StyleSheet.create({
    text: {
        textTransform: "uppercase",
    },
    btnContainer: {
        borderWidth: 1,
        borderColor: "green",
        borderRadius: 10,
        paddingHorizontal: 15,
        paddingVertical: 10,
        flexDirection: "row",
        gap: 10,
        alignItems: "center",
        alignSelf: "flex-start",
        backgroundColor: "#ccc"
    }
})
interface IProps{
    title: string;
    onPress: () => void;
}
const MineButton = (props: IProps) => {
    const {title,onPress} = props
    return(
    <>
        <Pressable 
        style={({pressed})=>({opacity: pressed === true ? 0.5 : 1})}
        onPress={onPress}>
            <View style={styles.btnContainer}>
                <AntDesign name="pluscircle" size={24} color="black" />
                <Text style={styles.text}>{title}</Text>
            </View>
        </Pressable>
        </>

    )
}
export default MineButton;