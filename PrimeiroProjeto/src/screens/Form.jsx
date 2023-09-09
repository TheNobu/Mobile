import { useState } from "react";
import {Button, SafeAreaView, StyleSheet, Switch, Text, TextInput, View} from "react-native"
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const style = StyleSheet.create({
    textInput:{
        borderWidth:1,
        borderRadius:4,
        padding:16,
        margin:8,
    }
})

const Form = ({navigation}) => {
    
    const [inputValue,setIputValue] = useState()
    const [inputValid,setInputValid] = useState(true)
    const [switchValue, setSwitchValue] = useState(false)
    
    //Testar o input
    // console.log({inputValue})

    const onChangeValue = (value) =>{
        if(value.length >= 10 || value.length === 0){
            setInputValid(true)
        } else {
            setInputValid(false)
        }
        setIputValue(value)
    }

    const changeSwitchValue = () =>{
        setSwitchValue(!switchValue)
    }

    return (
        <SafeAreaView>
            <TextInput
            style={style.textInput}
            value={inputValue}
            onChangeText={onChangeValue}
            placeholder="Digite"
            />
            {inputValid ? <></> : <Text>Input deve conter no minimo 10 caracteres</Text> }
            <Switch
            value={switchValue}
            onValueChange={changeSwitchValue}
            />
            <Button 
            title="Change Page"
            onPress={()=>navigation.navigate('FlatList')}
            />
        </SafeAreaView>
    );
}

export default Form;