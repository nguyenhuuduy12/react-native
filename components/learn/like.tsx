import { useNavigation } from "@react-navigation/native";
import {Text, View, Button} from "react-native";
const Like= () => {
    const navigation : any = useNavigation()
    return(
        <View>
            <Text>Like component</Text>
            <Button
            onPress={()=>navigation.navigate('LikeDetail')}
            title='goto like deltail' />
        </View>
    )
}
export default Like;