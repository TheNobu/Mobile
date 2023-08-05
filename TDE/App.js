import { StyleSheet, Text, View } from 'react-native';
import Pagina1 from './src/components/Pagina1';
import MyButton from './src/components/MyButton';
import { useState } from 'react';
import Pagina2 from './src/components/Pagina2';
import { StatusBar } from 'expo-status-bar';
import Card from './src/components/Card';


const style = StyleSheet.create({
  container: {
    flex:1,
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:'#ff4'
  }
})


export default function App() {

  const [show,setShow] = useState(false)
  const [cont,setCont] = useState(0)

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

  return (
    <View style= {style.container}>
      {/* <Pagina1/>
      {
        show ? (<Pagina2/>) : 
        <></>
      }
      <MyButton title='Show' onPressButton={showText}/>
      <Text>{cont}</Text>
      <MyButton title='More One' onPressButton={more}/>
      <MyButton title='Less One' onPressButton={less}/>
      <MyButton title='Zero' onPressButton={zero}/> */}
      <Card title='Imagem' content='Cacto' image='https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.techtudo.com.br%2Flistas%2F2023%2F06%2Fdall-e-2-e-mais-8-sites-para-criar-imagem-com-inteligencia-artificial-edsoftwares.ghtml&psig=AOvVaw13oPfy4DJoDHa0JViNUQGe&ust=1691279017471000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCLj46bqXxIADFQAAAAAdAAAAABA5'/>
      <StatusBar style='auto'/>
    </View>
  );
}




