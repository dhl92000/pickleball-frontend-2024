import { useEffect, useState, createContext } from "react"
import { StyleSheet, Text, View } from "react-native"
import { fetchWeather } from "../utils/http"
import Avatar from "../components/Avatar"
import WeatherCard from "../components/WeatherCard"

// use location or enter a city name - 2 custom buttons

const WeatherScreen = () => {
    const [weatherData, setWeatherData] = useState()

    // test API 
    useEffect(()=> {
        console.log('use effect')
        setWeatherData(fetchWeather)
    }, [])


    
    return (
        <View style={styles.container}>
            <Text>
                Weather Screen Title
            </Text>
            <Avatar/>

            {/* 2 location buttons that change to input or loading widget  */}

            <WeatherCard/>
        </View>
    )
}

export default WeatherScreen


const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
  });
  