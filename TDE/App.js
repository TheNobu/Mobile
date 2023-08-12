import { StyleSheet, Text, View } from 'react-native';
import Pagina1 from './src/components/Pagina1';
import MyButton from './src/components/MyButton';
import { useState } from 'react';
import Pagina2 from './src/components/Pagina2';
import { StatusBar } from 'expo-status-bar';
import Card from './src/components/Card';
import Card2 from './src/components/Card2';
import axios from 'axios'
import  List from './src/components/List'
import Header from './src/components/Header';
import Api1 from './src/components/Api1';
import Api2 from './src/components/Api2';

const ListName = [{name: "Fulano", idade: 20}, {name: "Beltrano", idade: 22}, {name: "Ciclano", idade: 19}, {name: "Jhon Doe", idade: 30}]

const style = StyleSheet.create({
  container: {
    flex:1,
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:'#fff'
  }
})


export default function App() {

  const [show,setShow] = useState(false)
  const [cont,setCont] = useState(0)
  const [catFact,setCatFact] = useState()
  const [length,setLength] = useState()

  const more = () =>{
    setCont(cont+1)
  }
  const less = () =>{
    setCont(cont-1)
  }
  const zero = () =>{
    setCont(0)
  }

  const showText = () =>{
    setShow(!show)
  }

  const fechtCatFact = async() =>{
    try {
      const {data} = await axios.get('https://catfact.ninja/fact')
      setCatFact(data.fact)
      setLength(data.length)
    } catch (error) {
      console.error(error)
    }
    
  }

  return (
    <View style= {style.container}>
      <Api2/>
    </View>
  );
}




