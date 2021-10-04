import React from "react";
import {createNativeStackNavigator} from "react-native-screens/native-stack";
import {NavigationContainer} from "@react-navigation/native";
import Settings from "../screens/userProfile/Settings";
import Language from "../screens/Language";
import UserHelp from "../screens/userProfile/UserHelp";
import MyProfileInfo from "../screens/userProfile/MyProfileInfo";
import UserProfile from "../screens/userProfile/UserProfile";

const Stack = createNativeStackNavigator()

export const RoutesSettingsStack = () =>{
    return(
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name={"switchToSettings"}
                              component={Settings}
                              options={{
                                  headerShown: false
                              }}/>
                <Stack.Screen name={"toLanguage"}
                              component={Language}
                              options={{
                                  headerShown: false
                              }}/>
                <Stack.Screen name={"toHelp"}
                              component={UserHelp}
                              options={{
                                  headerShown: false
                              }}/>
                <Stack.Screen name={"profileInfo"}
                              component={MyProfileInfo}
                              options={{
                                  headerShown: false
                              }}/>
                <Stack.Screen name={"toInfoMain"}
                              component={UserProfile}
                              options={{
                                  headerShown: false
                              }}/>
            </Stack.Navigator>
        </NavigationContainer>
    )
}
