import { StyleSheet, View, Text } from "react-native"

const WeatherCard = ({ weatherData }) => {

    let detailedWeatherContainer = <View>
        <Text>Loading Weather...</Text>
    </View>

    if (weatherData) {
        detailedWeatherContainer = <View>
            <Text>Temperature: {weatherData.temp} </Text>
            <Text>Feels Like: {weatherData.feels_like} </Text>
            <Text>Humidity: {weatherData.humidity} </Text>
            <Text>Cloud Percentage: {weatherData.cloud_pct} </Text>
        </View>
    }

    return <View style={styles.weatherContainer}>
        <View>
            <Text>Title</Text>
        </View>
        <View>
            {detailedWeatherContainer}
        </View>
    </View>
}

export default WeatherCard

const styles = StyleSheet.create({
    weatherContainer: {
        flex: 1,
        width: '80%',
        padding: 6,
        margin: 6,
        borderRadius: 16,
        backgroundColor: 'white'
    }
})