import React, {useContext} from 'react'
import { SafeAreaView, View, Text, TouchableOpacity, StyleSheet, useColorScheme, } from 'react-native'
import {
    Colors,
   
  } from 'react-native/Libraries/NewAppScreen';
  import { AuthContext } from '../navigation/AuthProvider';


const NotificationScreen =() => {
    const isDarkMode = useColorScheme() === 'dark';
    const {logout } = useContext(AuthContext);


    const textStyle ={
        color: isDarkMode ? Colors.lighter : Colors.darker,
      }

      const backgroundStyle = {
        // flex:1,
        // justifyContent: "center",
        // alignItems: "center",
        backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
      };
    return (
        <SafeAreaView style={backgroundStyle}>
        <View>

            <Text style={[textStyle, styles.welcomeTextStyle]}>
         Profile
       </Text>
       <TouchableOpacity onPress={()=>logout()}>
         <Text>Log Out</Text>
       </TouchableOpacity>
        </View>
        </SafeAreaView>
    )
}

export default NotificationScreen;

const styles = StyleSheet.create({
    welcomeTextStyle: {
      fontSize: 30,
      fontWeight: 'bold',
    }
  });
