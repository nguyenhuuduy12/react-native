import { useState } from "react";
import { Button, TextInput, StyleSheet, View, Alert } from "react-native";
import MineButton from "../button/mine.button";

const styles = StyleSheet.create({
    todoInput: {
        borderColor: "violet",
        borderWidth: 1,
        padding: 10,
        marginBottom: 20,
        borderRadius: 5,
    }

})

interface IProps {
    addTodo: (v: string) => void
}

const InputTOdo = (props: IProps) => {
    const { addTodo } = props
    const [name, setName] = useState<string>("");
    const handleInputTodo = () => {
        if (!name) {
            Alert.alert("Thông tin không hợp lệ",
                " Không được để trống",
                [
                    {
                        text: 'Cancel',
                        onPress: () => console.log('Cancel Pressed'),
                        style: 'cancel',
                    },
                    { text: 'OK', onPress: () => console.log('OK Pressed') },
                ],
            )
            return;
        }
        addTodo(name);
        setName("")
    }
    return (
        <>
            <View style={{marginBottom:20}}>
                <TextInput
                    onChangeText={v => setName(v)}
                    value={name}
                    autoCapitalize='none'
                    // keyboardType='number-pad'
                    // maxLength={16}
                    multiline
                    autoCorrect={false}
                    style={styles.todoInput} />
                {/* <Button title='add new'
                    onPress={InputTodo}
                /> */}
            </View>
                <MineButton onPress={handleInputTodo} title="add new" />
        </>
    )
}
export default InputTOdo;