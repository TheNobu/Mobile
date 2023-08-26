import axios from "axios";
import { StatusBar } from "expo-status-bar";
import { useEffect, useState } from "react";
import { FlatList, SafeAreaView, View, StyleSheet, Text } from "react-native";


const style = StyleSheet.create({
    container: {
        padding:16,
        backgroundColor:'#000',
        margin:8,
        borderRadius:4,
    },
    text:{
        color:'#ffffff',
        fontSize:24,
    }
})
const FlatApi = () => {
    const [data,setData] = useState()
    
    const fetchApi = async() =>{
        try {
            const {data} = await axios.get('http://universities.hipolabs.com/search?coutry=Brazil') 
            setData(data)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(()=>{
        fetchApi()
    },[])
    const RenderApi = ({api}) =>{
        const {name,alpha_two_code} = api
        return(
            <View style={style.container}>
                <Text style={style.text}>Name: {name}</Text>
                <Text style={style.text}>State: {alpha_two_code}</Text>
            </View>
        )
    }
    return (
        <SafeAreaView>
            <StatusBar/>
            <FlatList
            data={data}
            renderItem={({item})=> <RenderApi api={item}/>}
            />
        </SafeAreaView>

        
    );
}

export default FlatApi;