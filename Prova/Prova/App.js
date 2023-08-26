import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View } from 'react-native';
import CustonButton from './src/components/CustonButton';
import ItemList from './src/components/ItemList';
import RepositoryList from './src/components/RepositoryList';
import Counter from './src/components/Counter';

const list = [{nome:"seila1", descricao:"1"},{nome:"seila2", descricao:"2"}]

export default function App() {

  const print = ()=>{
    console.log("Botão clicado")
  }
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      {/* <CustonButton title="Clique aqui" color='#f54'onPressButton={print}/> */}
      {/* <ItemList lista={list}/> */}
      {/* <RepositoryList/> */}
      <Counter/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
