import React from 'react';
import {StyleSheet, View} from 'react-native';
import {NavigationContainer} from "@react-navigation/native";
import {createDrawerNavigator} from "@react-navigation/drawer";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import Login from "./screens/Login";
import SignUp from "./screens/SignUp";
import SideMenu from "./components/sideMenu/SideMenu";
import HomePage from "./screens/HomePage";
import BottomNavBar from "./components/bottomNavigationBar/BottomNavBar";
import { createStackNavigator} from "@react-navigation/stack";

const Stack = createStackNavigator();


export default function App() {
    return (
        <NavigationContainer>
            <BottomNavBar/>
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

