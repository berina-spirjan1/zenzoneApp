import React from "react";
import { StyleSheet } from "react-native";
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

import {NavigationContainer} from "@react-navigation/native";
import BottomNavigationBar from "./components/bottomNavigationBar/BottomNavigationBar";
import MyProfileInfo from "./screens/userProfile/MyProfileInfo";
import Splash from "./screens/Splash";
import RouterMain from "./routes/RouterMain";

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
        // <NavigationContainer>
        //      <BottomNavigationBar/>
        //  </NavigationContainer>
        // <PrizePage/>
        // <LocationPage/>
        // <SignUp/>
        // <ForgotPassword/>
        <RouterMain/>
    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#646668',
        justifyContent: 'center'
    }
});

