import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';

import GameRulesScreen from './screens/GameRulesScreen';
import WeatherScreen from './screens/WeatherScreen';


const Drawer = createDrawerNavigator()

export default function App() {
  
  return (
    <>
      <StatusBar/>
      <NavigationContainer>
        <Drawer.Navigator screenOptions={{
          // transparent header
          headerTransparent: true,
          drawerStyle: { color: 'white' },
          drawerActiveBackgroundColor: '#6c767e',
          drawerInactiveBackgroundColor: '#cfd6dc'
        }}>
          <Drawer.Screen
            name='WeatherScreen'
            component={WeatherScreen}
            options={{
              drawerLabel: 'Home',
              title: 'Home',
              // headerTransparent: true,

            }} />
          {/* <Drawer.Screen name='GameRulesScreen' component={GameRulesScreen} options={{
        drawerLabel: 'Game Rules'
      }}/> */}
        </Drawer.Navigator>
      </NavigationContainer>
    </>
  )
}

const styles = StyleSheet.create({
  // container: {
  //   flex: 1,
  //   backgroundColor: '#2F495D',
  //   alignItems: 'center',
  //   justifyContent: 'center',
  // },
});
