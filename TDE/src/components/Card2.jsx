import {TouchableOpacity, View, StyleSheet, Text} from 'react-native'

const style = StyleSheet.create({
    container:{
        width:300,
        fontSize:20,
        padding:20,
    }
})

const Card2 = ({onPressButton, color,fact,length}) => {
    return (
        <TouchableOpacity onPress={onPressButton}>
            <View style={{backgroundColor : color}} >
                <Text style={style.container}>Fact: {fact}</Text>
                <Text style ={style.container}>Length: {length}</Text>
            </View>  
        </TouchableOpacity>
    );
}

export default Card2;