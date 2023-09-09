import { useEffect, useState } from "react";
import { FlatList, SafeAreaView, StatusBar, StyleSheet, Text, View, Image, TouchableOpacity, Button } from "react-native";
import { useNavigation } from "@react-navigation/native";
import axios from "axios"

const style =StyleSheet.create({
    container:{
        margin:5,
        flexDirection:'row',
        flexWrap:'wrap',
        margin:10,
    },
    image: {
        width: 200,
        height:300,
    },
    text:{
        flex:3,
        fontSize: 20,
        fontWeight:'bold',
        color:'#000',
        height:2,
        

    },
    text2:{
        flex:1,
        fontSize: 15,
        fontWeight:'bold',
        paddingTop:62,
        color:'#000', 
        
    },
    text3:{
        flex:1,
        fontSize: 15,
        fontWeight:'bold',
        color:'#000',   
    },
    cointainer2:{
        width:210,
        height:1,

    },
    cointainer3:{
        flex:1,
        height:300,
        padding:12,
        backgroundColor:'#badad5',
        borderRadius:4,
    }

}) 
const Home = () => {
    const [api,setApi] = useState([])

    const navigation = useNavigation()

    const fetchApi = async() =>{
        try {
            const response = await axios.get('https://db.ygoprodeck.com/api/v7/cardinfo.php')
            const jsonData = response.data
            setApi(jsonData.data)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(()=>{
        fetchApi()
    },[])

    const RenderApi = ({card}) =>{
        return(
            <View style={style.container}>
                <View style={style.cointainer2}>
                    <TouchableOpacity onPress={()=> navigation.navigate('Details',{card})}>
                        <Image
                            style={style.image}
                            source={{
                                uri: card.card_images[0].image_url
                            }}
                        />
                    </TouchableOpacity> 
                </View>
                <View style={style.cointainer3}>
                    <Text style={style.text}>{card.name}</Text>
                    <Text style={style.text2}>{card.race}</Text>
                    <Text style={style.text3}>{card.type}</Text>
                    <Text style={style.text3}>Clique na imagem para mais detralhes</Text>
                </View>
            </View>
            
        )
    }

    
    return (
    <SafeAreaView>
        <StatusBar/>
        <Button title=" Api Secundaria"  onPress={()=>navigation.navigate('Extra') }/>
        <FlatList
        data={api}
        renderItem={({item}) => <RenderApi card={item}/>}
        />
    </SafeAreaView>
    );
}

export default Home;