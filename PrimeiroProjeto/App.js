import { useEffect, useState } from 'react';
import { StyleSheet,Button, SafeAreaView, Text, TextInput, View } from 'react-native';
import MyButton from './src/components/MyButton';
const style = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems:'center',
    backgroundColor:'#F44',
  },
  text: {
    fontSize: 32,
    color: '#000',
    fontWeight: 'bold'
  },
  
})

export default function App() {
  const [contador,setContador] = useState(0)
  const [contador2,setContador2] = useState(0)
  const [showMessage,setShowMassege] = useState(false)

  useEffect(()=>{
    console.log('montagem')
  },[])

  useEffect(()=>{
    console.log('Atualizado')
  },[contador])

  useEffect(()=>{
    console.log('New message')
  },[showMessage])

  const more = () =>{
    setContador( contador + 1 )
  }

  const less = () =>{
    setContador(contador - 1)
  }

  const onPressShowMassge = () =>{
    setShowMassege(!showMessage)
  } 

  const more2  = () =>{
    setContador2(contador2+2)
  }

  const less3 = () =>{
    setContador2(contador2-3)
  }
  
  
  return (
    <View style = {style.container}>
      <Text style = {style.text}>{contador}</Text>
      <MyButton title='More One'onPressButton={more}/>
      <MyButton title='Less One' onPressButton={less}/>
      {
        showMessage ? (<Text style= {style.text}>Minha mensagem</Text>) : 
        <></>
      }
      <MyButton title='Show Massage' onPressButton={onPressShowMassge}/>



      <Text style={style.text}>{contador2}</Text>
      <MyButton title='More Two'onPressButton={more2}/>
      <MyButton title='Less Three' onPressButton={less3}/>
      

    </View>
  
  );
}



