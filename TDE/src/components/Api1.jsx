import { View ,Text, Button, StyleSheet, Image} from "react-native";
import axios from "axios";
import { useEffect, useState } from "react";

const style = StyleSheet.create({
    container:{
        fontSize:40,

    }
})

const Api1 = () => {
    const [apiData,setApiData] = useState()

    const fetchApi = async() =>{
        try {
            const {data} = await axios.get('https://randomuser.me/api/')
            setApiData(data.results)
        } catch (error) {
           console.log(error) 
        }
    }

    useEffect(()=>{
        fetchApi()
    },[])

    return (
      <View>
        {apiData.map(lista=>(
            <View>
                <Text>Primeiro nome: {lista.name.first}</Text>
                <Text>Segundo nome: {lista.name.last}</Text>
                <Text>Email: {lista.email}</Text>
                <Text>Genero: {lista.gender}</Text>
                <Text>Nacionalidade: {lista.nat}</Text>
                <Text>Telefone: {lista.phone}</Text>

            </View>
        ))}
        <Button title="Informação" onPress={fetchApi}/>
      </View>  
    );
}

export default Api1;