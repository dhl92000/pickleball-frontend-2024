import { StyleSheet, View, Text } from "react-native"

const WeatherCard = () => {
    return <View style={styles.weatherContainer}>
        <View>
            <Text>Title</Text>
        </View>
        <View>
            <Text> Weather details </Text>
        </View>
    </View>
}

export default WeatherCard

const styles = StyleSheet.create({
    weatherContainer: {
        flex: 1,
        width: '80%',
        borderWidth: 4,
        borderColor: '#2f495d',
        padding: 6,
        margin: 6,
        borderRadius: 16
    }
})