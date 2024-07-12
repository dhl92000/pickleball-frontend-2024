import { View, Text } from "react-native"
import WeatherCard from "../components/WeatherCard"

const WeatherScreen = () => {
    return (
        <View>
            <Text>
                Weather Screen
            </Text>
            <WeatherCard/>
        </View>
    )
}

export default WeatherScreen