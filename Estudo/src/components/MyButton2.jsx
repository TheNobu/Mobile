import { TouchableOpacity, View, StyleSheet, Text } from "react-native";

const style = StyleSheet.create({
    container:{
        padding: 7,
        fontSize: 20,
        backgroundColor: '#097',
        borderRadius:8,
        
    }
})

const MyButton2 = ({title,onPressButton}) => {
    return (
    <TouchableOpacity onPress={onPressButton}>
        <View style={style.container}>
            <Text>{title}</Text>
        </View>
    </TouchableOpacity>    
    );
}

export default MyButton2;