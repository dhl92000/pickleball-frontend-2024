import { StyleSheet, Text, Pressable, View } from "react-native"

const CustomButton = ({ title, onPress }) => {
    return (
        <Pressable
            style={styles.container}
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
        borderWidth: 4,
        borderColor: '#2f495d',
        borderRadius: 16,
        padding: 16,
    },
    text: {
        textAlign: 'center'
    }
});