import React, {createContext, useState} from 'react'
import { StyleSheet, Text, View } from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage'
import  auth  from '@react-native-firebase/auth'
//import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";


const showAlert = (text) =>{
    alert(text);
}

export const AuthContext = createContext();

export const AuthProvider = ({children}) => {
    const [user, setUser] = useState();
    return (
        <AuthContext.Provider
            value ={{
                user,
                setUser,
                login: async (email,password) => {
                    try{
                        await auth().signInWithEmailAndPassword(email, password)
                        .then(
                            (user) =>{
                                const loggedInUser={
                                    email: user.user.email,
                                    name: user.user.name,
                                    uid: user.user.uid
                                };
                                AsyncStorage.setItem('@user',JSON.stringify(loggedInUser))
                            }
                            
                        );

                    }catch(error){
                        console.log(error);
                        if(error.code ==='auth/wrong-password'){
                            showAlert('Wrong Password')
                        }
                    }
                },
                register: async(email, password, userName) => {
                    try{
                        //alert("register" +email+ userName+ password );
                        //auth().createUserWithEmailAndPassword
                        //const auth = getAuth();

                        let results = await auth().createUserWithEmailAndPassword( 
                            email, password
                            );
                        
                        // alert("register" + results);

                        const loggedInUser = {
                            email: email,
                            name: userName,
                            uid: results.user.uid
                        }
                        await AsyncStorage.setItem('@user',JSON.stringify(loggedInUser))

                    }catch(error){
                        if (error.code === 'auth/email-already-in-use') {
                            showAlert('That email address is already in use!');
                          }
                          if (error.code === 'auth/invalid-email') {
                            showAlert('That email address is invalid!');
                          }
                          if (error.code === 'auth/week-password') {
                            showAlert('Week password');
                          }
                          console.error(error);
                    }

                },
                logout : async() =>{
                    auth().signOut()
                    .then(()=> console.log('User log out!'))
                },
                resetPassword: async email =>{
                    try{
                        await auth().sendPasswordResetEmail(email).then(()=>{showAlert('Password reset email sent')});
                    }catch(error){
                        showAlert(error.message);

                    }
                }

            }}>{children}
        </AuthContext.Provider>
    )
}


