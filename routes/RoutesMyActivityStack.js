import React from "react";
import {createNativeStackNavigator} from "react-native-screens/native-stack";
import {NavigationContainer} from "@react-navigation/native";
import MyActivities from "../screens/MyActivities";
import UserProfile from "../screens/userProfile/UserProfile";
import {RoutesProfileStack} from "./RoutesProfileStack";

const Stack = createNativeStackNavigator()

export const RoutesMyActivityStack = () =>{
    return(
            <Stack.Navigator>
                <Stack.Screen name={"myActivities"}
                              component={MyActivities}
                              options={{
                                  headerShown: false
                              }}/>
                <Stack.Screen name={"myProfileInfoBack"}
                              component={RoutesProfileStack}
                              options={{
                                  headerShown: false
                              }}/>
            </Stack.Navigator>
    )
}
