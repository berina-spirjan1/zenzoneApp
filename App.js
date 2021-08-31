import React from "react";
import {StyleSheet} from "react-native";
import {NavigationContainer} from "@react-navigation/native";
import BottomNavigationBar from "./components/bottomNavigationBar/BottomNavigationBar";
import {createStackNavigator} from "@react-navigation/stack";

const Stack = createStackNavigator();


export default function App() {
    return (
        <NavigationContainer>
            <BottomNavigationBar/>
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

