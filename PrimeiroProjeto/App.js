import { useEffect, useState } from 'react';
import { StyleSheet,Button, SafeAreaView, Text, TextInput, View } from 'react-native';
import CatFacts from './src/screens/CatFacts';
import ListPage from './src/screens/ListPage';
import FlatApi from './src/screens/FlatApi';
import Form from './src/screens/Form';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
const style = StyleSheet.create({
  container:{
    flex:1,
    alignItems:'center',
    backgroundColor:'#fff',
    justifyContent:'center',
}
})

export default function App() {
  const Stack = createNativeStackNavigator()
  return (
      <View style= {style.container}>
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen name="Form" component={Form} />
            <Stack.Screen name ="FlatApi" component={FlatApi}/>
          </Stack.Navigator>
        </NavigationContainer>
      </View>
  );
}



