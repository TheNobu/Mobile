import axios from "axios";
import { useEffect, useState } from "react";
import { View , Text, SafeAreaView, StyleSheet} from "react-native";

const style = StyleSheet.create({
    container:{
        margin:20,
    }
})

const Api2 = () => {
     const [api,setApi] = useState()

    const fetchApi = async()=>{
        try {
            const {data} = await axios.get('http://universities.hipolabs.com/search?country=Brazil')
            setApi(data)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(()=>{
        fetchApi()
    },[])

    return (
        <View style={style.container}>
            {api.map(lista=>(
                <View>
                    <Text>Nome: {lista.name}, URL: {lista.web_pages}</Text>
                    <Text>     </Text>
                </View>
            ))} 
        </View>
    );
}

export default Api2;