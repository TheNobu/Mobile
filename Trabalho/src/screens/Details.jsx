import { View, Text, Image, StyleSheet } from "react-native";

const style = StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:'#badad5'

    },image: {
        width: 300,
        height:450,
    },
    text:{
        fontSize: 20,
        fontWeight:'bold',
        color:'#000',
        marginTop:30,
        padding:20,
    }
})

const Details = ({navigation,route}) => {
    return (
        <View style={style.container}>
            <View>
                <Image
                style={style.image}
                source={{
                    uri: route.params.card.card_images[0].image_url
                }}
                />
            </View>
            <View>
            <Text style={style.text}>{route.params.card.desc}</Text>
            </View>
        </View>
    );
}

export default Details;