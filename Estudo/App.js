import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import MyButton from './src/components/MyButton';
import Api from './src/screens/Api';
import Api2 from './src/screens/Api2';
import Api3 from './src/screens/Api3';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Api3/>
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
