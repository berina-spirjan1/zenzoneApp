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

import RouterMain from "./routes/RouterMain";


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
        // <LocationPage/>
        // <LogoutSplashScreen/>
    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#646668',
        justifyContent: 'center'
    }
});

