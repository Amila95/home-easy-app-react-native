import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';


import HomeScreen from '../screens/HomeScreen';
import BillsScreen from '../screens/BillsScreen';
import ProfileScreen from '../screens/ProfileScreen';
import HistoryScreen from '../screens/HistoryScreen';
import BillingHistoryStack from './BillingHistoryStack';




const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const AppStack = () => {
    return (
      //   <Stack.Navigator screenOptions={{headerShown: false}}>
      //   <Stack.Screen name="Home" component={HomeScreen} />
      // </Stack.Navigator>
      <Tab.Navigator screenOptions={{headerShown: false}}>
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
      <Tab.Screen name="Profile" component={ProfileScreen} options={{
          tabBarLabel: 'Profile',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="account" color={color} size={size} />
          ),
        }}/>

    </Tab.Navigator>
    )
}

export default AppStack

const styles = StyleSheet.create({})
