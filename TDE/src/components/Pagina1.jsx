import { StyleSheet, Text, View } from "react-native";

const styles = StyleSheet.create({
    container1:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
    },
    text1:{
        fontSize:30,
        color:'#000'
    },
   
})

const Pagina1 = () => {
    return (
        <View style={styles.container1}>
            <Text style={styles.text1}>Cabeçalho</Text>
        </View>
    );
}

export default Pagina1;