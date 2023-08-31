import { useEffect, useState } from "react";
import { FlatList, SafeAreaView, StatusBar, StyleSheet, Text, View, Image } from "react-native";
import axios from "axios"


const style =StyleSheet.create({
    constainer:{
        display:'flex',
        margin:5,
        
    }
}) 
const Home = () => {
    const [api,setApi] = useState([])

    const fetchApi = async() =>{
        try {
            const {data} = await axios.get('https://api.magicthegathering.io/v1/cards')
            setApi(data.cards)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(()=>{
        fetchApi()
    },[])

    const RenderApi = ({card}) =>{
        return(
            <View style={style.constainer}>
                <Image
                    source={{uri:'https://img.freepik.com/fotos-gratis/imagem-aproximada-da-cabeca-de-um-lindo-leao_181624-35855.jpg?w=2000'}}
                />
                <Text>{card.name}</Text>
                <Text>{card.manaCost}</Text>
            </View>
        )
    }
    return (
    <SafeAreaView>
        <StatusBar/>
        <FlatList
        data={api}
        renderItem={({item}) => <RenderApi card={item}/>}
        />
    </SafeAreaView>
    );
}

export default Home;