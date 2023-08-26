import { StatusBar } from "expo-status-bar";
import { FlatList, SafeAreaView, StyleSheet, Text, View } from "react-native";

const flatListData =[
    {
        name:'Pikachu',
        type: 'Elétrico'
    },
    {
        name:'Charmander',
        type:'Fogo'
    },
    {
        name:'Psyduck',
        type:'Psiquico'
    }
] 

const style = StyleSheet.create({
    pokemonCard: {
        padding:16,
        backgroundColor:'#f00',
        margin:8,
        borderRadius:4,
    },
    text:{
        color:'#ffffff',
        fontSize:24,
    }
})

const PokemonItem = ({pokemon}) =>{
    const {name,type} = pokemon
    return(
        <View style= {style.pokemonCard}>
            <Text style={style.text}>Pokemon: {name}</Text>
            <Text style={style.text}>Tipo: {type}</Text>
        </View>
    )
}
const ListPage = () => {
    return (
        <SafeAreaView style={{margin:44}}>
            <StatusBar/>
            <FlatList
                data={flatListData}
                renderItem={({item})=> <PokemonItem pokemon = {item}/>}
            />
        </SafeAreaView>
    );
}

export default ListPage;