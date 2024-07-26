import { StyleSheet, Text, View } from "react-native"
import { Colours } from "../UI/Colours"

const WeatherDetailSquare = ({ heading, detail }) => {
    return (
        <View style={styles.weatherDetailContainer}>
            <View>
                <Text style={styles.weatherDetailTitle}>{heading}</Text>
            </View>
            <View>
                <Text style={styles.weatherDetail}>{detail}</Text>
            </View>
        </View>
    )
}

export default WeatherDetailSquare

const styles = StyleSheet.create({
    weatherDetailContainer: {
        justifyContent:'space-around',
        width: 140,
        height: 140,
        borderRadius: 16,
        backgroundColor: 'white',
        padding: 12
    },
    weatherDetailTitle: {
        color: Colours.lightBlue
    },
    weatherDetail: {
        fontSize: 32,
        color: Colours.deepBlue
    }
})