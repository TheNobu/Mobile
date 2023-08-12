import axios from 'axios';
import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import {View , Text, SafeAreaView, StyleSheet, Button} from 'react-native'
import MyButton from '../components/MyButton';

const styles = StyleSheet.create({
    text1:{
        fontSize:15,
        margin:8,
    },
    text2:{
        fontSize:25
    }
})

const CatFacts = () => {

    const [catFact,setCatFact] = useState()
    const [catFact2,setCatFact2] = useState()
    const [catFact3,setCatFact3] = useState()

    const fetchCatFact = async() =>{
        try {
            const {data}  = await axios.get('https://catfact.ninja/fact')
            setCatFact(data.fact)
        } catch (error) {
            console.error(error)
        }
    }

    const fetchCatFact2 = async() =>{
        try {
            const {data} = await axios.get('https://catfact.ninja/fact')
            setCatFact2(data.fact)
            const {data:fato2} = await axios.get('https://catfact.ninja/fact')
            setCatFact3(fato2.fact)
        } catch (error) {
            
        }
    }

    return (
    <SafeAreaView>
        <View style= {styles.container}>
            <Text style={styles.text2}>Cats Facts</Text>
            <MyButton title="Fato aleatorio" onPressButton={fetchCatFact}/>
            <Text style = {styles.text1}>{catFact ? catFact : ""}</Text>
            <MyButton title="Mais fatos" onPressButton={fetchCatFact2}/>
            <Text style={styles.text1}>{catFact2 ? catFact2 : "" }</Text>
            <Text style={styles.text1}>{catFact3 ? catFact3 : ""} </Text>
        </View>
    </SafeAreaView>
    );
}

export default CatFacts;