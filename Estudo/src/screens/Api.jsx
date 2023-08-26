import axios from "axios";
import { useEffect, useState } from "react";
import { View, Text } from "react-native";
import MyButton from "../components/MyButton";

const Api = () => {

    const [api,setApi] = useState()
    const [show,setShow] = useState(false)

    const fecthApi = async() =>{
        try {
           const {data} = await axios.get('https://catfact.ninja/fact')
           setApi(data.fact)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(()=>{
        fecthApi()
    },[])

    const showMessage = () =>{
        setShow(!show)
    }
   
    return (
        <View>
            {
                show ? (<Text>{api}</Text>) : <></>
            }
            <MyButton title="Show the fact" onPressButton={showMessage}/>
        </View>
    );
}

export default Api;