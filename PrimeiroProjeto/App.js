import { useEffect, useState } from 'react';
import { StyleSheet,Button, SafeAreaView, Text, TextInput, View } from 'react-native';
import CatFacts from './src/screens/CatFacts';
import ListPage from './src/screens/ListPage';
import FlatApi from './src/screens/FlatApi';
const style = StyleSheet.create({
  container:{
    flex:1,
    alignItems:'center',
    backgroundColor:'#fff',
    justifyContent:'center',
}
})

export default function App() {
  return (
      <View style= {style.container}>
        <FlatApi/>
      </View>
  );
}



