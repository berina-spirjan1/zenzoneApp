import React from "react";
import { StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import BottomNavigationBar from "./components/bottomNavigationBar/BottomNavigationBar";
import { createStackNavigator } from "@react-navigation/stack";
import AppLoading from 'expo-app-loading';
import {
    Roboto_100Thin_Italic,
    Roboto_400Regular,
    Roboto_700Bold_Italic,
    Roboto_300Light,
    Roboto_500Medium,
    Roboto_700Bold,
    useFonts
} from '@expo-google-fonts/roboto';

import Language from "./screens/Language";
import Login from "./screens/login/Login";
import SignUp from "./screens/signUp/SignUp";

const Stack = createStackNavigator();


export default function App() {
    let [fontsLoaded] = useFonts({
        Roboto_400Regular,
        Roboto_100Thin_Italic,
        Roboto_700Bold_Italic,
        Roboto_300Light,
        Roboto_500Medium,
        Roboto_700Bold
    });

    if (!fontsLoaded) {
        return <AppLoading />;
    }

    return (
        <NavigationContainer>
             <BottomNavigationBar/>
         </NavigationContainer>
        //  <SignUp/>
        // <Language/>
        // <Login/>
    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#646668',
        justifyContent: 'center'
    }
});

