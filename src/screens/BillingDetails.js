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

const BillingDetails = ({route}) => {
    const isDarkMode = useColorScheme() === 'dark';
    const [itemList, setItemList] = useState([]);

    useEffect(() => {
        loadInitData({route});
    }, [])

    const loadInitData =({route}) =>{
        console.log("route : "+ route.params.msg);
         setItemList([]);
        
          firestore()
            .collection('BillHistory')
            .where('billName', 'in', [route.params.msg])
            .get()
            .then(querySnapshot => {
                    /* ... */
                    querySnapshot.forEach(documentSnapshot => {
                        setItemList(itemList=>[...itemList,documentSnapshot]);
              
                      });
             });
      }
      const backgroundStyle = {
        flex:1,
        backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
      };
      const textStyle ={
        color: isDarkMode ? Colors.lighter : Colors.darker,
      }

    return (

        // <View>
        //     <Text>{route.params.msg}</Text>
        // </View>
        <SafeAreaView style={backgroundStyle}>
        <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'}/>
        
        <View style={styles.rootContainer}>
        
        {/* <Button label={'Add Item'} styleForButton={styles.bottomButtun} styleForText={styles.registerbuttonText} fieldButtonFunction={() => setModalVisible(true)}/> */}
        <FlatList
          data={itemList}
          renderItem={({item}) => <List.Item
          title={item.data().value}
           description={item.data().date}
          left={props => <List.Icon {...props} icon="receipt" />}
          // right={props => <List.Icon {...props} icon="selection-remove" /> }
          // onPress={()=>clickItem(item.id)}
        //   onPress={()=>navigation.navigate('BillingDetails',{msg:item.data().billName})} 
        />}
        />
   
         </View>
  
        </SafeAreaView>
    )
}

export default BillingDetails

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
