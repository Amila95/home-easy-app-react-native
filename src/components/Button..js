import React from 'react'
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
const Button = ({label, styleForButton, styleForText, fieldButtonFunction}) => {
    return (
        <View>
            <TouchableOpacity style={styleForButton} onPress={ fieldButtonFunction} >
                    <Text style={styleForText}>{label}</Text>
                </TouchableOpacity>
        </View>
    )
}

export default Button
