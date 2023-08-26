import { TouchableOpacity, View, StyleSheet, Text } from "react-native";


const style = StyleSheet.create({
    container:{
        backgroundColor:'#f34',
        padding: 8,
        borderRadius: 4,

    }
})
const MyButton = ({title,onPressButton}) => {
    return (
        <TouchableOpacity onPress={onPressButton}>
            <View style={style.container}>
                <Text>{title}</Text>
            </View>
        </TouchableOpacity>
    );
}

export default MyButton;