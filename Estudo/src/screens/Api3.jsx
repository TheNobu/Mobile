import axios from "axios";
import { useEffect, useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import MyButton2 from "../components/MyButton2";

const style = StyleSheet.create({
    
}) 

const Api3 = () => {
    const [data,setData] = useState([])
    const [show,setShow] = useState(false)
    const [cont,setCont] = useState(0)

    const fetchData = async() =>{
        try {
            const {data} = await axios.get('https://rickandmortyapi.com/api/character')
            setData(data.results)
        } catch (error) {
            console.log(error)
        }
    }

    const showMessage = () =>{
        setShow(!show)
    }

    const oneMore = () =>{
        setCont(cont + 1)
    }

    const oneLess = () =>{
        setCont(cont - 1)
    }

    useEffect(()=>{
        fetchData()
    },[])
    
    return (
        <View>
            {data.map(info=>(
                <View>
                    {
                        show ?(<Text>{info.name} / {info.species}</Text>) : <></>
                    }
                </View>
            ))} 
             <MyButton2 title="Show" onPressButton={showMessage}/>

             <Text>{cont}</Text>
             <MyButton2 title="One More" onPressButton={oneMore}/>
             <MyButton2 title=" One Less" onPressButton={oneLess}/>
        </View>
        
    );
}

export default Api3;