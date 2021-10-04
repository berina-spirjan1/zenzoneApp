import React from "react";
import {createNativeStackNavigator} from "react-native-screens/native-stack";
import {NavigationContainer} from "@react-navigation/native";
import Splash from "../screens/Splash";
import BottomNavigationBar from "./BottomNavigationBar";


const Stack = createNativeStackNavigator()

export const RouterMainStack = () =>{
    return(
            <Stack.Navigator>
                <Stack.Screen name={"fromSplashScreen"}
                              component={Splash}
                              options={{
                                  headerShown: false
                              }}/>
                <Stack.Screen name={"toBottomNavigationBar"}
                              component={BottomNavigationBar}
                              options={{
                                  headerShown: false
                              }}/>
            </Stack.Navigator>
    )
}
