import { StyleSheet, Text, View} from 'react-native'

const Avatar = ({weatherData}) => {

    let weatherText = <Text>Is it ok to play?</Text>

    if (weatherData) {
        weatherText = <Text>It's windy</Text>
    }

    return (
        <View style={styles.container}>
            <Text>{weatherText}</Text>
        </View>
    )
}

export default Avatar

const styles = StyleSheet.create({
    container: {
        width: '80%',        
        flex: 1,
        borderWidth: 4,
        borderColor: '#2f495d',
        padding: 6,
        margin: 6,
        borderRadius: 18
    },
  });