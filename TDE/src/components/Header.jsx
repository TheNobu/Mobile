import { View , Text, StyleSheet} from "react-native";

const style= StyleSheet.create({
    continer:{
        fontSize:30,
        fontWeight:'bold',
        
    }
})
const Header = ({title}) => {
    return (
        <View>
            <Text style={style.continer}>{title}</Text>
        </View>
    );
}

export default Header;