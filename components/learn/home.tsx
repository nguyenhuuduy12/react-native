import { useNavigation } from "@react-navigation/native";
import {Text, View, Button} from "react-native";
const Home= () => {
    const navigation: any = useNavigation()
    return(
        <View>
            <Text>Home component</Text>
            <Button
            onPress={()=>navigation.navigate('HomeDetail')}
            title='goto deltail' />
        </View>
    )
}
export default Home;