import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Login from './src/screens/Login';
import Home from './src/screens/Home';
import { NavigationContainer } from '@react-navigation/native';
import Details from './src/screens/Details';
import { createStackNavigator } from '@react-navigation/stack';
import Extra from './src/screens/Extra';
import ExtraDetails from './src/screens/ExtraDetails';




export default function App() {

  const Stack = createStackNavigator()

  return (
    <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name ="Home" component={Home}/>
            <Stack.Screen name='Details' component={Details}/>
            <Stack.Screen name='Extra' component={Extra}/>
            <Stack.Screen name='ExtraDetails' component={ExtraDetails}/>
          </Stack.Navigator>
    </NavigationContainer>
  )
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: '#000',
    alignContent:'center',
    alignItems:'center'
  },
});
