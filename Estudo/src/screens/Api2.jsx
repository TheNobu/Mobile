import axios from "axios";
import { useEffect, useState } from "react";
import { View ,Text} from "react-native";

const Api2 = () => {
    const [api,setApi] = useState()


    const fetchApi = async() =>{
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
        <View>
            {api.map(random =>(
                <View>
                    
                    <Text>{random.country}</Text>
                    <Text>{random.name}</Text>
                </View>
            ))}
        </View>
    );
}

export default Api2;