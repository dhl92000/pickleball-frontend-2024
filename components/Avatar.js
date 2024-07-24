import { Platform, StyleSheet, Text, View } from 'react-native'


const Avatar = ({ weatherData }) => {
    // under 12mph = perfect
    // 12-15mph = a bit of a challenge
    // 15+ = forget about it 

    // button to convert mph, km/h 
    let windMessage = 'Pickleball?'
    let windSpd = 'Wind speed: Loading'
    let avatarColour = {
        width: '50%',
        height: '50%',
        borderRadius: '100%',
        backgroundColor: 'gray'
    }

    if (weatherData) {
        if (weatherData.wind_speed < 12) {
            windMessage = 'Perfect day for pickleball!'
            avatarColour.backgroundColor = 'green'
        } else if (weatherData.wind_speed > 11 && weatherData.wind_speed < 15) {
            windMessage  = `There's a bit of wind!`
            avatarColour.backgroundColor = 'blue'
        } else {
            windMessage = 'Too much wind...'
            avatarColour.backgroundColor = 'orange'
        }
        windSpd = `WIND SPEED ${weatherData.wind_speed} MPH`
    }

    return (
        <View style={styles.container}>
            <Text>{windMessage}</Text>
            <View style={avatarColour}></View>
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
    windText:{
        fontFamily: Platform.select({android: 'Figtree_500Medium', ios: 'Figtree'}),
        color: '#467AA6'
    },
    avatar: {
        width: '50%',
        height: '50%',
        borderRadius: '100%',
        backgroundColor: 'gray'
    }
});