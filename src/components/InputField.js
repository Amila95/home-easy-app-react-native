import React from 'react'
import {
    StyleSheet,
    Text,
    View,
    TextInput,
    TouchableOpacity
} from 'react-native';

import {
    Colors,

} from 'react-native/Libraries/NewAppScreen';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const InputField = ({ lable,value, icon, inputType, keyBordType, fieldButtonLable, fieldButtonFunction, onChange }) => {
    return (
        <View style={styles.registerInputContainerSingle}>
            {icon}
            {inputType === 'password' ?
                (<TextInput placeholder={lable} style={styles.TextInputStyle} keyBordType={keyBordType} secureTextEntry={true} onChangeText={text => onChange(text)}/>) :
                (<TextInput placeholder={lable} value={value}style={styles.TextInputStyle} keyBordType={keyBordType} onChangeText={text => onChange(text)} />)
            }
            <TouchableOpacity onPress={ fieldButtonFunction}>
                <Text style={[styles.loginbuttonText, styles.loginText]}>
                    {fieldButtonLable}
                </Text>
            </TouchableOpacity>
        </View>
    )
}

export default InputField

const styles = StyleSheet.create({
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

    loginbuttonText: {
        fontSize: 15,
        color: Colors.darker,
    },


    loginText: {
        color: '#092C4C',
        fontWeight: '700'
    }
});
