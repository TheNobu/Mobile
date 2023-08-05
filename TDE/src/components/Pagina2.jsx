import { StyleSheet, Text, View } from "react-native";

const styles = StyleSheet.create({
    container2:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
    
    },
    text2:{
        fontSize:20,
        color:'#000'
    }
})

const Pagina2 = () => {
    return (
        <View style={styles.container2}>
            <Text style={styles.text2}>Texto</Text>
        </View>
    );
}

export default Pagina2;