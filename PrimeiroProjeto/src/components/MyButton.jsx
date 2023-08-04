import { Text,TouchableOpacity, View, StyleSheet } from "react-native";

const styles = StyleSheet.create({
    buttonContainer: {
        padding: 8,
        borderRadius: 4,
        backgroundColor: '#000',
        margin: 4,
    },
    buttonTitle: {
        color: '#fff',
        fontSize: 8,
    }
})

const MyButton = ({title,onPressButton}) => {
    return (
        <TouchableOpacity onPress={onPressButton}>
            <View style={styles.buttonContainer}>
                <Text style={styles.buttonTitle}>{title}</Text>
            </View>
        </TouchableOpacity>
    );
}

export default MyButton;