import { TouchableOpacity, View, Text, StyleSheet } from "react-native";

const style = StyleSheet.create({
    cointainer:{
        backgroundColor:'#fff',
        borderRadius:4,
        width:82,
    
    },
    text:{
        fontSize:20,
        padding:8,
    }
})
const MyButton = ({title,onPressButton}) => {
    return (
        <TouchableOpacity onPress={onPressButton}>
            <View style={style.cointainer}>
                <Text style={style.text}>{title}</Text>
            </View>
        </TouchableOpacity>
    );
}

export default MyButton;