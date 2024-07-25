import { StyleSheet, Text, View } from 'react-native'
import { Colours } from '../UI/Colours'
import CustomButton from '../UI/CustomButton'

const LocationCard = ({ getLocationHandler }) => {
    return (
        <View>
            <View style={styles.textContainer}>
                <Text style={styles.text}>Check Wind Conditions</Text>
            </View>
            <View style={styles.container}>
                <CustomButton title='GET LOCATION' onPress={getLocationHandler} />
                {/* <CustomButton title='ENTER CITY' /> */}
            </View>
        </View>
    )
}

export default LocationCard

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        gap: 4,
        width: '80%',
        alignItems: 'center',
        justifyContent: 'space-around',
    },
    textContainer:{
        alignItems: 'center',
        padding: 4,
        color: 'blue'
    },
    text:{
        color: Colours.deepBlue
    }
});
