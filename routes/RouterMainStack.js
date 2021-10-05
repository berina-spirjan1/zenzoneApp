import React from "react";
import {createNativeStackNavigator} from "react-native-screens/native-stack";
import Splash from "../screens/Splash";
import BottomNavigationBar from "./BottomNavigationBar";

const Stack = createNativeStackNavigator()

export const RouterMainStack = () =>{
    return(
            <Stack.Navigator initialRouteName={"fromSplashScreen"}>
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
