import { Platform, StyleSheet, Text, View } from 'react-native'
import { Colours } from '../UI/Colours'

const Avatar = ({ weatherData }) => {
    // under 12mph = perfect
    // 12-15mph = a bit of a challenge
    // 15+ = forget about it 

    // button to convert mph, km/h 
    let windMessage = 'Pickleball Forecast'
    let windSpd = ''
    let avatarColour = {
        width: 150,
        height: 150,
        borderRadius: 150/2,
        backgroundColor: 'gray'
    }

    if (weatherData) {
        if (weatherData.wind_speed < 12) {
            windMessage = 'Perfect day for pickleball!'
            avatarColour.backgroundColor = 'green'
        } else if (weatherData.wind_speed > 11 && weatherData.wind_speed < 15) {
            windMessage  = `A bit windy today!`
            avatarColour.backgroundColor = 'blue'
        } else {
            windMessage = 'Too much wind...'
            avatarColour.backgroundColor = 'orange'
        }
        windSpd = `WIND SPEED ${weatherData.wind_speed} MPH`
    }

    return (
        <View style={styles.container}>
            {/* banner message */}
            <Text style={styles.title}>{windMessage.toUpperCase()}</Text>

            {/* circle */}
            <View style={avatarColour}></View>

            {/* wind speed text */}
            <Text style={styles.windText}>{windSpd}</Text>
        </View>
    )
}

export default Avatar

const styles = StyleSheet.create({
    container: {
        marginTop: 100,
        width: '80%',
        flex: 1,
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 6,
        margin: 6,
        borderRadius: 18,
        backgroundColor: 'white',
    },
    title:{
        fontSize: 32,
        fontFamily: 'RacingSansOne-Regular',
        textAlign: 'center',
        color: Colours.deepBlue,
        letterSpacing: 0.5
    },
    windText:{
        fontSize: 16,
        fontFamily: 'Figtree',
        color: '#467AA6',
        letterSpacing: 0.5,
    },
    // avatar: {
    //     width: '50%',
    //     height: '50%',
    //     borderRadius: '100%',
    //     backgroundColor: 'gray'
    // }
});