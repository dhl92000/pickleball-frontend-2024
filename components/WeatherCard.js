import { StyleSheet, View, Text } from "react-native"
import WeatherDetailSquare from "./WeatherDetailSquare"

const WeatherCard = ({ weatherData }) => {

    let detailedWeatherContainer = <View style={styles.loading}>
        <Text style={styles.loadingScreenText}>Get location to show weather conditions.</Text>
    </View>

    if (weatherData) {
        detailedWeatherContainer =
            <>
                <WeatherDetailSquare heading='Temperature: ' detail={weatherData.temp} />
                <WeatherDetailSquare heading='Feels Like: ' detail={weatherData.feels_like} />
                <WeatherDetailSquare heading='Humidity: ' detail={weatherData.humidity} />
                <WeatherDetailSquare heading='Cloud Percentage: ' detail={weatherData.cloud_pct} />
            </>
    }

    return <View style={styles.weatherContainer}>
        {/* <View>
            <Text>Title</Text>
        </View> */}

        {detailedWeatherContainer}

    </View>
}

export default WeatherCard

const styles = StyleSheet.create({
    weatherContainer: {
        flex: 1,
        flexWrap: 'wrap',
        justifyContent: 'center',
        alignContent: 'center',
        width: '80%',
        gap: 10,
    },
    loading:{
        flex: 1,
        justifyContent: 'center',
        width: '100%'
    },
    loadingScreenText: {
        fontSize: 20,
        textAlign: 'center'
    }
})