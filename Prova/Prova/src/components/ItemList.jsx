import { View, Text, StyleSheet } from "react-native";

const style = StyleSheet.create({
    text1:{
        fontSize:30,
        fontWeight:'bold',
        padding:4

    },
    text2:{
        fontSize:20,
        fontStyle:'italic'
    }

})
const ItemList = ({lista}) => {
    return (
    <View>
        {lista.map(lista=>(
        <View>  
            <View>
                <Text style={style.text1}>{lista.nome}</Text>
            </View>
            <View>
                <Text style={style.text2}>{lista.descricao}</Text>
            </View>
        </View>
        ))}
    </View>
    );
}

export default ItemList;