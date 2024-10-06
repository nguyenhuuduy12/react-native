import { FlatList, Text, StyleSheet, TouchableOpacity } from "react-native";


const styles = StyleSheet.create({
    todo: {
        fontSize: 30,
        backgroundColor: "pink",
        marginBottom: 20,
        padding: 10,
    },

})
interface IProps {
    todoList: ITodo[]
    deleteTodo: (v: number) => void
}
const ListTodo = (props: IProps) => {
    const { todoList, deleteTodo } = props
    return (
        <>
            <FlatList style={{ marginTop: 20, borderColor: "red", borderWidth: 1 }}
                keyExtractor={item => item.id + ""}
                data={todoList}
                renderItem={({ item }) => {
                    return (
                        <TouchableOpacity
                            onPress={() => deleteTodo(item.id)
                            }
                        >
                            <Text
                                key={item.id}
                                style={styles.todo}
                            >
                                {item.title}
                            </Text>
                        </TouchableOpacity>
                    )
                }}
            />
        </>
    )
}
export default ListTodo;