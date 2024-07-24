import { StyleSheet, Text, View } from 'react-native'
import CustomButton from '../UI/CustomButton'

const LocationCard = ({ getLocationHandler }) => {
    return (
        <View >
            <View >
                <Text>Check Weather Conditions</Text>
            </View>
            <View style={styles.container}>
                <CustomButton title='Current Location' onPress={getLocationHandler} />
                <CustomButton title='Enter City' />
            </View>
        </View>
    )
}

export default LocationCard

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        width: '80%',
        alignItems: 'center',
        justifyContent: 'space-around',

    },
});
