import { useState } from "react";
import { Button, Text, View } from "react-native";
import CustonButton from "./CustonButton";

const Counter = () => {
    const[cont,setCont] = useState(0)

    const oneMore = ()=>{
        setCont(cont +1)
    }

    const oneLess = ()=>{
        setCont(cont -1)
    }

    return (
        <View>
            <Text>{cont}</Text>
            <CustonButton title="Mais 1" onPressButton={oneMore} color='#f54'/>
            <CustonButton title="Menos 1" onPressButton={oneLess} color='#ae3'/>
        </View>
    );
}

export default Counter;