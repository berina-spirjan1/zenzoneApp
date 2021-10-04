import React from "react";
import {createNativeStackNavigator} from "react-native-screens/native-stack";
import {NavigationContainer} from "@react-navigation/native";
import MyActivities from "../screens/MyActivities";
import UserProfile from "../screens/userProfile/UserProfile";

const Stack = createNativeStackNavigator()

export const RoutesMyActivityStack = () =>{
    return(
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name={"myActivities"}
                              component={MyActivities}
                              options={{
                                  headerShown: false
                              }}/>
                <Stack.Screen name={"myProfileInfoBack"}
                              component={UserProfile}
                              options={{
                                  headerShown: false
                              }}/>
            </Stack.Navigator>
        </NavigationContainer>
    )
}
