import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';

import GameRulesScreen from './screens/GameRulesScreen';
import WeatherScreen from './screens/WeatherScreen';


const Drawer = createDrawerNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator>
      <Drawer.Screen name='WeatherScreen' component={WeatherScreen}/>
      <Drawer.Screen name='GameRulesScreen' component={GameRulesScreen}/>
      </Drawer.Navigator>
    </NavigationContainer>

  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
