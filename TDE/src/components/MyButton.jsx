import { StyleSheet,TouchableOpacity, View,Text } from "react-native";

const styles = StyleSheet.create({
    buttonContainer: {
        padding: 8,
        borderRadius: 4,
        backgroundColor: '#000',
        
    },
    buttonTitle: {
        color: '#fff',
        fontSize: 8,
    }
})

const MyButton = ({title,onPressButton}) => {
    return (
        <TouchableOpacity onPress={onPressButton}>
            <View styles={styles.buttonContainer}>
                <Text styles={styles.buttonTitle}>{title}</Text>
            </View>
        </TouchableOpacity>    
    );
}

export default MyButton;