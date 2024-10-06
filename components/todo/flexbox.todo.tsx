import { View,Text,StyleSheet } from "react-native"
const styles = StyleSheet.create({
    container:{
        flex: 1,
        marginTop:  40,
        borderWidth: 1,
        borderColor: "red",
        // flexDirection: "row",
        justifyContent: "center",
        alignItems: "center"
    },
    item1:{
        borderWidth: 1,
        padding: 20,
        backgroundColor: "violet",
        height: 250,
        width: 250,
    },
    item2:{
        padding: 20,
        borderWidth: 1,
        backgroundColor: "green",
        height: 300,
        width: 300,
    },
    item3:{
        padding: 20,
        borderWidth: 1,
        backgroundColor: "gray",
        height: 100,
        width: 100,
    },
    item4:{
        padding: 20,
        borderWidth: 1,
        backgroundColor: "orange"
    },
})
const FlexBox = () =>{
    return(
        <>
        <View style={styles.container}>
            <View style={styles.item1}>
                <Text>item1</Text>
            </View>
            <View style={styles.item2}>
                <Text>item2</Text>
            </View>
            <View style={styles.item3}>
                <Text>item3</Text>
            </View>
            <View style={styles.item4}>
                <Text>item4</Text>
            </View>
        </View>
        </>
    )
}
export default FlexBox