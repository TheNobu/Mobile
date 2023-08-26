import axios from "axios";
import { useEffect , useState} from "react";
import { View, Text, StyleSheet } from "react-native";

const style = StyleSheet.create({
    container:{
        margin:10,
        backgroundColor:'#f45',
        borderRadius:4,
        height:50
    },
    text:{
        fontWeight:'bold'
    }
})
const RepositoryList = () => {
    const [data,setData] = useState([])

    const fetchData = async() =>{
        try {
            const {data} = await axios.get('https://random-data-api.com/api/v2/beers?size=10')
            setData(data)
        } catch (error) {
            console.log(error)
        }
    }
    

    useEffect(()=>{
        fetchData()
    },[])
    return (
        <View>
            {data.map(cerveja =>(
                <View style= {style.container}>
                    <Text style={style.text}>Nome: {cerveja.name}</Text>
                    <Text>Marca: {cerveja.brand}</Text>
                    <Text>Estilo: {cerveja.style}</Text>
                </View>
            ))}
        </View>
        
    );
}

export default RepositoryList;