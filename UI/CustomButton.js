import { StyleSheet, Text, Pressable, View } from "react-native"
import { Colours } from "./Colours";

const CustomButton = ({ title, onPress }) => {
    return (
        <Pressable
            style={({pressed}) => [styles.container, pressed && styles.pressed]}
            onPress={onPress}
        >
            <Text style={styles.text}>
                {title}
            </Text>
        </Pressable>
    )
}

export default CustomButton

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // borderWidth: 1,
        // borderColor: '#2f495d',
        backgroundColor: '#467AA6',
        borderRadius: 16,
        padding: 16,
        marginVertical: 10
    },
    text: {
        textAlign: 'center',
        fontWeight: 'bold',
        color: Colours.bgLight2
    },
    pressed: {
        opacity: 0.7
    }
});