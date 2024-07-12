import { StyleSheet, View, Text } from "react-native"

const WeatherCard = () => {
    return <View style={styles.weatherContainer}>
        <View>
            <Text>Let's Play</Text>
        </View>
    </View>
}

export default WeatherCard

const styles = StyleSheet.create({
    weatherContainer: {
        backgroundColor: 'gray',
        padding: 6,
        margin: 6,
        borderRadius: 8
    }
})