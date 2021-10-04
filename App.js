import React from "react";
import {StyleSheet} from "react-native";

import AppLoading from 'expo-app-loading';
import {
    Roboto_100Thin_Italic,
    Roboto_300Light,
    Roboto_400Regular,
    Roboto_500Medium,
    Roboto_700Bold,
    Roboto_700Bold_Italic,
    useFonts
} from '@expo-google-fonts/roboto';

import {RouterMainStack} from "./routes/RouterMainStack";
import {NavigationContainer} from "@react-navigation/native";


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
             <RouterMainStack/>
         </NavigationContainer>
    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#646668',
        justifyContent: 'center'
    }
});

