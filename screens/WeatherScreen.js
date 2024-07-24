import { useEffect, useState, createContext } from "react"
import { Alert, StyleSheet, Text, View } from "react-native"

import { getCurrentPositionAsync, useForegroundPermissions, PermissionStatus } from "expo-location"

import { fetchWeather } from "../utils/http"

import Avatar from "../components/Avatar"
import LocationCard from "../components/LocationCard"
import WeatherCard from "../components/WeatherCard"

// use location or enter a city name - 2 custom buttons

const WeatherScreen = () => {
    // data fetched from weather API, gives weather data
    const [weatherData, setWeatherData] = useState()

    // I want to get user location, pass in longitude/lat coords to fetch function, and return a result
    // server error, try again later OR ideal conditions, OK condition, play another day

    // test API 
    // useEffect(()=> {
    //     console.log('use effect')
    //     setWeatherData(fetchWeather)
    // }, [])

    // permissions vars and function
    const [locationPermissionInformation, requestPermission] = useForegroundPermissions()

    const verifyPermissions = async () => {
        if (locationPermissionInformation.status === PermissionStatus.UNDETERMINED) {
            const permissionResponse = await requestPermission()
            // granted returns true or false
            return permissionResponse.granted
        }

        if (locationPermissionInformation.status === PermissionStatus.DENIED) {
            Alert.alert('Need to grant location permissions to use this app.')
            return false
        }
        return true
    }

    const getLocationHandler = async () => {
        // call permission func first
        const hasPermission = await verifyPermissions()

        if (!hasPermission) {
            return
        }

        const location = await getCurrentPositionAsync()

        const weatherDetails = await fetchWeather(location.coords.latitude, location.coords.longitude)
        console.log(weatherDetails)

        setWeatherData((prev) => ({ 
            wind_speed: weatherDetails.wind_speed 
        }))
    }


    return (
        <View style={styles.container}>
            <Text>
                Weather Screen Title
            </Text>
            <Avatar weatherData={weatherData}/>

            <LocationCard getLocationHandler={getLocationHandler} />

            {/* 2 location buttons that change to input or loading widget  */}

            <WeatherCard />
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
