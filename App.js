import React from "react";
import {StyleSheet} from "react-native";
import {NavigationContainer} from "@react-navigation/native";
import BottomNavigationBar from "./components/bottomNavigationBar/BottomNavigationBar";
import {createStackNavigator} from "@react-navigation/stack";
import AppLoading from 'expo-app-loading';
import {
    useFonts,
    Roboto_400Regular,
    Roboto_100Thin_Italic,
    Roboto_700Bold_Italic
} from '@expo-google-fonts/roboto';
import {Router} from "react-native-router-flux";
import Routes from "./routes/Routes";
import UserProfile from "./screens/UserProfile";
import MyProfile from "./screens/MyProfile";

const Stack = createStackNavigator();


export default function App() {
    let [fontsLoaded] = useFonts({
        Roboto_400Regular,
        Roboto_100Thin_Italic,
        Roboto_700Bold_Italic
    });

    if (!fontsLoaded) {
        return <AppLoading />;
    }

    return (
        // <NavigationContainer>
        //     <BottomNavigationBar/>
        // </NavigationContainer>
        // <Routes/>
        <MyProfile/>
    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#646668',
        justifyContent: 'center'
    }
});

