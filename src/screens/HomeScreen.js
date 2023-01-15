import React, {useState, useContext, useEffect} from 'react'
import '@react-native-firebase/app';
import firestore from '@react-native-firebase/firestore';


import {
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    useColorScheme,
    View,
    TouchableOpacity,
    Image,
    Modal,
    Alert,
    FlatList
  } from 'react-native';
import { List } from 'react-native-paper';
import Button from '../components/Button.';
import InputField from '../components/InputField';



  import {
    Colors,
   
  } from 'react-native/Libraries/NewAppScreen';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { AuthContext } from '../navigation/AuthProvider';


const HomeScreen = () => {
    const isDarkMode = useColorScheme() === 'dark';
    const {logout } = useContext(AuthContext);
    const [modalVisible, setModalVisible] = useState(false);
    const [modalVisibleItem, setModalVisibleItem] = useState(false);
    const [itemName, setItemName] = useState(null);
    const [quantity, setQuantity] = useState(null);
    const [selectItemID, setSelectItemID] = useState(null);
    const [itemList, setItemList] = useState([]);
    useEffect(() => {
      loadInitData();
  }, [])

  const sumbitItem =() =>{
    firestore()
    .collection('CollectionList')
    .add({
      ItemName: itemName,
      Quantity: quantity,
    })
    .then(() => {
      loadInitData();
      setModalVisible(!modalVisible);
    });

  };

  const loadInitData =() =>{
    setItemList([]);
    firestore()
      .collection('CollectionList')
      .get()
      .then(querySnapshot => {
    
        querySnapshot.forEach(documentSnapshot => {
          setItemList(itemList=>[...itemList,documentSnapshot]);
        });
      });
  }

  const DeleteItem =() =>{
    firestore()
    .collection('CollectionList')
    .doc(selectItemID)
    .delete()
  .then(() => {
    loadInitData();
    setModalVisibleItem(!modalVisibleItem);

  });

  };

  const clickItem =(id) =>{
    setSelectItemID(id);
    setModalVisibleItem(true);

  };

  const backgroundStyle = {
    flex:1,
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };
  const textStyle ={
    color: isDarkMode ? Colors.lighter : Colors.darker,
  }
    return (
       <SafeAreaView style={backgroundStyle}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'}/>
      
      <View style={styles.rootContainer}>
      
      <Button label={'Add Item'} styleForButton={styles.bottomButtun} styleForText={styles.registerbuttonText} fieldButtonFunction={() => setModalVisible(true)}/>
      <FlatList
        data={itemList}
        renderItem={({item}) => <List.Item
        title={item.data().ItemName}
        description={item.data().Quantity}
        left={props => <List.Icon {...props} icon="cart" />}
        // right={props => <List.Icon {...props} icon="selection-remove" /> }
        onPress={()=>clickItem(item.id)}
      />}
      />
  
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

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisibleItem}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setModalVisible(!modalVisibleItem);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
          <View style={{flexDirection: "row" ,justifyContent: 'space-around' }}>
          <Button label={'Close'} styleForButton={styles.cancleButtun} styleForText={styles.registerbuttonText} fieldButtonFunction={() => setModalVisibleItem(!modalVisibleItem)}/>
          <Button label={'Pick It'} styleForButton={styles.bottomButtun} styleForText={styles.registerbuttonText} fieldButtonFunction={() => DeleteItem()}/>
          </View>
        </View>
        </View>
      </Modal>
       </View>

      </SafeAreaView>
    )
}

export default HomeScreen

const styles = StyleSheet.create({
  rootContainer: {},
  centeredView: {
    flex: 1,
    justifyContent: "center",
    // alignItems: "center",
    marginTop: 22
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    // alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    //elevation: 5
  },
  registerInputContainer:{
    paddingTop: 20,
  },

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
    registerbuttonText: {
      fontWeight: 'bold',
      fontSize: 18,
      color: Colors.lighter,
  },
  text: {
    fontWeight: 'bold',
    fontSize: 18,
    color: Colors.darker,
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
    rootView: {
      justifyContent: "center",
      alignItems: "center",
    },
    registerbuttonStyle: {
      backgroundColor: '#092C4C',
      padding: 8,
      borderRadius: 5,
      marginTop: 20,
      flexDirection: 'row',
      justifyContent: 'center',
  },
    bottomButtun: {
      backgroundColor: '#092C4C',
      padding: 8,
      borderRadius: 5,
      marginTop: 20,
      marginHorizontal:20,
      flexDirection: 'row',
      justifyContent: 'center',
  },
  cancleButtun: {
    backgroundColor: '#999999',
    padding: 8,
    borderRadius: 5,
    marginTop: 20,
    marginHorizontal:20,
    flexDirection: 'row',
    justifyContent: 'center',
}

  });
