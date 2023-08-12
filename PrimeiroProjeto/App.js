import { useEffect, useState } from 'react';
import { StyleSheet,Button, SafeAreaView, Text, TextInput, View } from 'react-native';
import CatFacts from './src/screens/CatFacts';
const style = StyleSheet.create({
container:{
  flex:1,
  alignItems:'center',
  backgroundColor:'#5fd',
  justifyContent:'center',
}
})

export default function App() {
  return (
      <View style= {style.container}>
          <CatFacts/>
      </View>
  );
}



