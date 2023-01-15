/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

 import React from 'react';
 import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  TouchableOpacity,
  Image
} from 'react-native';

import {
  Colors,
 
} from 'react-native/Libraries/NewAppScreen';
import { NavigationContainer } from '@react-navigation/native';
  import AuthStack from './src/navigation/AuthStack';
  import AppStack from './src/navigation/AppStack';
import { AuthProvider } from './src/navigation/AuthProvider';
import AppRouts from './src/navigation/AppRouts';
 
 
 const App = () => {
  const isDarkMode = useColorScheme() === 'dark';
  const backgroundStyle = {
    flex:1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };
  const textStyle ={
    color: isDarkMode ? Colors.lighter : Colors.darker,
  }
   return (
    <AuthProvider>
      <AppRouts />
    </AuthProvider>
   );
 
 }

 const styles = StyleSheet.create({
  welcomeTextStyle: {
    fontSize: 30,
    fontWeight: 'bold',
  },
  welcomebuttonStyle: {
    backgroundColor: '#F2994A',
    padding:20,
    widht:'90%',
    borderRadius:5,
    flexDirection:'row',
    justifyContent:'space-between'

  },
  welcomebuttonText: {
    fontWeight:'bold',
    fontSize:18
  },
  welcomeimage: {
    widht: '70%',
    height:'70%',
    resizeMode:'contain'
  },
});
 
 export default App;
 