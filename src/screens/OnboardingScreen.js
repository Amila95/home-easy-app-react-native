import React from 'react'
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
  import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const OnboardingScreen = ({navigation}) => {
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
        <SafeAreaView style={backgroundStyle}>
        <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'}/>
        <Text style={[textStyle, styles.welcomeTextStyle]}>
          Welcome
        </Text>
        <Image style={styles.welcomeimage} source={require('/Users/Amila/Documents/projects/Lkiea/src/assets/images/135.png')}/>
        <TouchableOpacity style={styles.welcomebuttonStyle} onPress={() => navigation.navigate('Register')}>
        <Text style={[textStyle,styles.welcomebuttonText]}>Let's get started</Text>
        <MaterialIcons name='arrow-forward-ios' size={22} color={isDarkMode ? Colors.lighter : Colors.darker}/>    
  
        </TouchableOpacity>
       </SafeAreaView>
    )
}

export default OnboardingScreen

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
