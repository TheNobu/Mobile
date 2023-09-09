import axios from "axios";
import { useEffect, useState } from "react";
import { FlatList, SafeAreaView, View ,Image, Text, StyleSheet, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";


const style = StyleSheet.create({
    image:{
        width:400,
        height:400,
        borderRadius:8,
        marginTop:18
    },
    container:{
        flex:1,
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:'#000'
    },
    text:{
        fontSize: 28,
        fontWeight:'bold',
        color:'#fff',
        marginTop:12,
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
})
const Extra = () => {
    
    const navigation = useNavigation()
    const [extra,setExtra] = useState()

    const fetchExtra = async() =>{
        try {
            const {data} = await axios.get('https://rickandmortyapi.com/api/character')
            setExtra(data.results)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(()=>{
        fetchExtra()
    },[])

    const RenderApi = ({caracters}) =>{
        return(
            <View style={style.container}>
                <View>
                    <TouchableOpacity onPress={()=> navigation.navigate('ExtraDetails', {caracters})}>
                        <Image
                            style={style.image}
                            source={{
                                uri: caracters.image
                            }}
                        />
                    </TouchableOpacity>
                </View>
                <Text style={style.text}>{caracters.name}</Text>
            </View>
        )
    }
    
    return (
        <SafeAreaView>
            <FlatList
            data={extra}
            renderItem={({item})=> <RenderApi  caracters={item}/>}
            />

        </SafeAreaView>    

    
    );
}

export default Extra;