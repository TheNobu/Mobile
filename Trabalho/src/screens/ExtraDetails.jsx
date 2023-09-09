import { View, Text, Image, StyleSheet } from "react-native";

const style = StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:'#000'

    },image: {
        width: 400,
        height:400,
        borderRadius:12,
    },
    text:{
        fontSize: 20,
        fontWeight:'bold',
        color:'#fff',
        marginTop:30,
        padding:20,
    },
    text2:{
        fontSize: 20,
        fontWeight:'bold',
        color:'#fff',
        padding:20,
    }
})

const ExtraDetails = ({navigation,route}) => {
    return (
        <View style={style.container}>
        <View>
             <Image
                style={style.image}
                source={{
                    uri: route.params.caracters.image
                }}
                />
        </View>
        <View>
            <Text style={style.text}>Name:  {route.params.caracters.name}</Text>
            <Text style={style.text2}>Status:   {route.params.caracters.status}</Text>
            <Text style={style.text2}>Human:   {route.params.caracters.species}</Text>
            <Text style={style.text2}>Gender:   {route.params.caracters.gender}</Text>
        </View>
        </View>
    );
}

export default ExtraDetails;