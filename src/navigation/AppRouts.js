import { StyleSheet, Text, View } from "react-native"
import React, {useEffect, useContext, useState} from "react"
import { AuthContext } from "./AuthProvider"
import auth from '@react-native-firebase/auth';
import { NavigationContainer } from "@react-navigation/native";
import AuthStack from './AuthStack';
  import AppStack from './AppStack';


const AppRouts = () => {
    const {user, setUser} = useContext(AuthContext);
    const [loading, setLoading] = useState(true);

    //Handle user state change
    function onAuthStateChange(user){
        setUser(user);
        if(loading) setLoading(false);
    }

    useEffect(() =>{
        const subscriber = auth().onAuthStateChanged(onAuthStateChange);
        return subscriber; //unSubcribe on unmount
    })
    if(loading) return null;

    return(
        <NavigationContainer>
            {user? <AppStack/>: <AuthStack/>}
        </NavigationContainer>
    )
    
}

export default AppRouts

