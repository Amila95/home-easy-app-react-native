import React ,{useState, useContext} from 'react'
import {
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    useColorScheme,
    View,
    TextInput,
    TouchableOpacity,
    Image
} from 'react-native';

import {
    Colors,

} from 'react-native/Libraries/NewAppScreen';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import InputField from '../components/InputField';
import Button from '../components/Button.';
import { AuthContext } from '../navigation/AuthProvider';



const ForgetPasswordScreen = ({navigation}) => {
    const isDarkMode = useColorScheme() === 'dark';
    const {resetPassword} = useContext(AuthContext);

    const [email,setEmail] = useState(null);


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
        <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
        <View style={styles.rootContainer}>
            <Image style={styles.registerImage} source={require('/Users/Amila/Documents/projects/Lkiea/src/assets/images/231.png')} />
            <Text style={[textStyle, styles.registerTextStyle]}>Login</Text>
            <View style={styles.registerInputContainer}>
              
                <InputField lable={'Email'} icon={<MaterialIcons name='alternate-email' size={22} color={isDarkMode ? Colors.lighter : Colors.darker} />} onChange={text => setEmail(text) }/>
            
            </View>
            {/* <TouchableOpacity style={styles.registerbuttonStyle} >
                <Text style={styles.registerbuttonText}>Reset Password</Text>
            </TouchableOpacity> */}
            <Button label={'Reset Password'} styleForButton={styles.registerbuttonStyle} styleForText={styles.registerbuttonText} fieldButtonFunction={() => resetPassword(email)}/>

            
            <View style={styles.loginbuttonStyle}>
      <TouchableOpacity onPress={() => navigation.navigate('Login')}  >
          <Text style={[styles.loginbuttonText, styles.loginText]}> Back to  Login</Text>
      </TouchableOpacity>
      
      </View>
      <View style={styles.loginbuttonStyle}>
                <TouchableOpacity onPress={() => navigation.navigate('Register')}  >
                    <Text style={[styles.loginbuttonText, styles.loginText]}> Don't have an account, Sign Up now..</Text>
                </TouchableOpacity>

            </View>
        </View>

    </SafeAreaView>
    )
}

export default ForgetPasswordScreen

const styles = StyleSheet.create({
    rootContainer: {},
    loginText: {
        flexDirection: 'row',

    },
    TextInputStyle: {
        flex: 1,
        paddingVertical: 0
    },

    registerInputContainer: {
        paddingTop: 20,
    },

    registerInputContainerSingle: {
        flexDirection: 'row',
        borderColor: '#ccc',
        borderWidth: 1,
        padding: 8,
        marginTop: 20,
        borderRadius: 5,
    },

    registerTextStyle: {
        fontSize: 30,
        fontWeight: 'bold',
    },
    registerbuttonStyle: {
        backgroundColor: '#092C4C',
        padding: 8,
        borderRadius: 5,
        marginTop: 20,
        flexDirection: 'row',
        justifyContent: 'center',
    },
    loginbuttonStyle: {
        padding: 8,
        // marginTop:10,
        flexDirection: 'row',
        justifyContent: 'center',
    },
    registerbuttonText: {
        fontWeight: 'bold',
        fontSize: 18,
        color: Colors.lighter,
    },
    loginbuttonText: {
        fontSize: 15,
        color: Colors.darker,
    },
    registerImage: {
        width: 300,
        height: 300,
        resizeMode: 'contain'
    },

    loginText: {
        color: '#092C4C',
        fontWeight: '700'
    }
});
