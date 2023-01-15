import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import BillingDetails from '../screens/BillingDetails';
import HistoryScreen from '../screens/HistoryScreen';


const Stack = createNativeStackNavigator();

const BillingHistoryStack = () => {
    return (
        <Stack.Navigator >
        <Stack.Screen name='History' component={HistoryScreen} options={{headerShown:false}}/>
        <Stack.Screen name='BillingDetails' component={BillingDetails} />
       
      </Stack.Navigator>
    )
}

export default BillingHistoryStack

