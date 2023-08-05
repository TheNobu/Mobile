import { StyleSheet ,View ,Text } from "react-native";
import {Image} from 'expo-image';    

const blurhash =
  '|rF?hV%2WCj[ayj[a|j[az_NaeWBj@ayfRayfQfQM{M|azj[azf6fQfQfQIpWXofj[ayj[j[fQayWCoeoeaya}j[ayfQa{oLj?j[WVj[ayayj[fQoff7azayj[ayj[j[ayofayayayj[fQj[ayayj[ayfjj[j[ayjuayj[';

const styles = StyleSheet.create({
    conteiner:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
    },
    text:{
        fontSize:30,
        color:'#000'
    },
    text2:{
        fontSize:25,
        color:'#000' 
    },
    logo: {
        width: 200,
        height:200 ,
    }

})
const Card = ({title,content,imageUrl}) => {
    return (
        <View style={styles.conteiner}>
            <Text style={styles.text}>{title}</Text>
            <Text style={styles.text2}>{content}</Text>
            <Image
        style={styles.logo}
        source={imageUrl}    
        placeholder={blurhash}
        contentFit="cover"
        

      />
        </View>
            
        
    )
}

export default Card;