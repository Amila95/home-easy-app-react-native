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

const Modal = ({ lable, icon, inputType, keyBordType, fieldButtonLable, fieldButtonFunction, onChange }) => {
    return (
        <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
          <View style={styles.registerInputContainer}>
            <InputField lable={'Iteam Name'} icon={<MaterialIcons name='shopping-cart' size={22} color={isDarkMode ? Colors.lighter : Colors.darker} />}  onChange={text => setItemName(text)}/>
            <InputField lable={'Quantity'} icon={<MaterialIcons name='unfold-more' size={22} color={isDarkMode ? Colors.lighter : Colors.darker}/>}  onChange={text => setQuantity(text) }/>
            {/* <InputField lable={'Password'} icon={<MaterialIcons name='lock' size={22} color={isDarkMode ? Colors.lighter : Colors.darker} />}inputType={'password'} onChange={text => setPassword(text)} /> */}
        </View>
          {/* <Text style={styles.text}>Modal</Text> */}
          <View style={{flexDirection: "row" ,justifyContent: 'center' }}>
          <Button label={'Close'} styleForButton={styles.cancleButtun} styleForText={styles.registerbuttonText} fieldButtonFunction={() => setModalVisible(!modalVisible)}/>
          <Button label={'Submit'} styleForButton={styles.bottomButtun} styleForText={styles.registerbuttonText} fieldButtonFunction={() => sumbitItem()}/>

          </View>
        </View>
        </View>
      </Modal>
    )
}

export default Modal

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
