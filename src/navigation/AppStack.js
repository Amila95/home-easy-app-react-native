import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';


import HomeScreen from '../screens/HomeScreen';
import BillsScreen from '../screens/BillsScreen';
import NotificationScreen from '../screens/NotificationScreen';
import HistoryScreen from '../screens/HistoryScreen';
import BillingHistoryStack from './BillingHistoryStack';
import { useTheme } from 'react-navigation';
import { useColorScheme } from 'react-native';

import {
  Colors,
 
} from 'react-native/Libraries/NewAppScreen';





const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();


const AppStack = () => {
  const scheme = useColorScheme();


    return (
      //   <Stack.Navigator screenOptions={{headerShown: false}}>
      //   <Stack.Screen name="Home" component={HomeScreen} />
      // </Stack.Navigator>

      <Tab.Navigator screenOptions={{headerShown: false}}  style={scheme === 'dark' ? Colors.darker : Colors.darker }>
      <Tab.Screen name="Home" component={HomeScreen} options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="home" color={color} size={size} />
          ),
        }}/>
      <Tab.Screen name="Bills" component={BillsScreen}  options={{
          tabBarLabel: 'Bills',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="calculator" color={color} size={size} />
          ),
        }}/>
        <Tab.Screen name="History" component={BillingHistoryStack}  options={{
          tabBarLabel: 'History',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="clipboard-text" color={color} size={size} />
          ),
        }}/>
      <Tab.Screen name="Notification" component={NotificationScreen} options={{
          tabBarLabel: 'Notification',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="bell-ring" color={color} size={size} />
          ),
        }}/>

    </Tab.Navigator>

    )
}

export default AppStack

// const styles = StyleSheet.create({})
