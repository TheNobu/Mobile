import { useState } from "react";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";
import MyButton from "../components/MyButton";
import { useNavigation } from "@react-navigation/native";

;
const style = StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        alignContent:'center',
        marginTop:82,
        padding:10,

    }
    ,text1:{
        fontSize:24,
        color:'#000'
    },
    campos:{
        height: 40,
        margin:10,
        borderWidth: 1,
        padding: 10,
        width:300,
    },
    text2:{
        fontSize:20,
        color:'#f23'
    }
})

const ModalMesage = ({valid}) =>{
    if(valid == undefined){
        return (<></>)
    }
    if(!valid){
        return (<Text style= {style.text2}>Email ou senha inválidos</Text>)
    }       
}

const Login = () => {

    const navigation = useNavigation()

    const [email,setEmail]= useState()
    const [password,setPassword]= useState()
    const [va,setVa] = useState()


    const login2 = ()=>{
    if(email == "email@gmail.com" && password == 1234){
        setVa(true)
        navigation.navigate('Home')
    }else{
        setVa(false)
    }
}
    return (
        <View style={style.container}>
        <View>
            <Text style={style.text1}>Email</Text>
            <TextInput
            style={style.campos}
            onChangeText={setEmail}
            value={email}
            placeholder="Email"
            inputMode="email"
            />
            <Text style={style.text1}>Password</Text>
            <TextInput
            style={style.campos}
            onChangeText={setPassword}
            value={password}
            placeholder="Password"
            secureTextEntry={true}
            />
            <Text>{false}</Text>
            <ModalMesage valid={va}/>
            <MyButton title="Login" onPressButton={login2}/>
        </View>
        </View>
    );
}

export default Login;