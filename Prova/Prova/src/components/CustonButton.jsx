import {TouchableOpacity,View,Text,StyleSheet} from 'react-native'

const CustonButton = ({color, onPressButton, title}) => {
    return (
    <TouchableOpacity onPress={onPressButton}>
        <View backgroundColor = {color}>
            <Text>{title}</Text>
        </View>
    </TouchableOpacity>
    );
}

export default CustonButton;