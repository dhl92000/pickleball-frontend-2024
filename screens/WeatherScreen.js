import { useEffect, useState, createContext } from "react"
import { Alert, StyleSheet, Text, View } from "react-native"
import { getCurrentPositionAsync, useForegroundPermissions, PermissionStatus } from "expo-location"
import { fetchWeather } from "../utils/http"

import Avatar from "../components/Avatar"
import { Colours } from "../UI/Colours"
import LocationCard from "../components/LocationCard"
import WeatherCard from "../components/WeatherCard"

const WeatherScreen = () => {
    const [weatherData, setWeatherData] = useState()

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

        setWeatherData((prev) => ({ 
            wind_speed: weatherDetails.wind_speed,
            temp: weatherDetails.temp,
            feels_like: weatherDetails.feels_like,
            humidity: weatherDetails.humidity,
            cloud_pct: weatherDetails.cloud_pct 
        }))
    }

    return (
        <View style={styles.container}>
            <Avatar weatherData={weatherData}/>
            <LocationCard getLocationHandler={getLocationHandler} />
            <WeatherCard weatherData={weatherData}/>
        </View>
    )
}

export default WeatherScreen


const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: Colours.bgLight
    },
});
