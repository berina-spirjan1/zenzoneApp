import React from "react";
import {createNativeStackNavigator} from "react-native-screens/native-stack";
import {NavigationContainer} from "@react-navigation/native";
import UserProfile from "../screens/userProfile/UserProfile";
import {RoutesMyProfileStack} from "./RoutesMyProfileStack";
import Badges from "../screens/Badges";
import Leaderboard from "../screens/Leaderboard";
import MyActivities from "../screens/MyActivities";
import {RoutesSettingsStack} from "./RoutesSettingsStack";
import SingleActivity from "../screens/SingleActivity";
import LogoutSplashScreen from "../screens/LogoutSplashScreen";
import MyProfileInfo from "../screens/userProfile/MyProfileInfo";
import {RoutesMyActivityStack} from "./RoutesMyActivityStack";


const Stack = createNativeStackNavigator()

export const RoutesProfileStack = () =>{
    return(
            <Stack.Navigator>
                <Stack.Screen name={"profile"}
                              component={RoutesMyProfileStack}
                              options={{
                                  headerShown: false
                              }}/>
                <Stack.Screen name={"myProfile"}
                              component={MyProfileInfo}
                              options={{
                                  headerShown: false
                              }}/>
                <Stack.Screen name={"badges"}
                              component={Badges}
                              options={{
                                  headerShown: false
                              }}/>
                <Stack.Screen name={"leaderboard"}
                              component={Leaderboard}
                              options={{
                                  headerShown: false
                              }}/>
                <Stack.Screen name={"activities"}
                              component={RoutesMyActivityStack}
                              options={{
                                  headerShown: false
                              }}/>
                <Stack.Screen name={"settings"}
                              component={RoutesSettingsStack}
                              options={{
                                  headerShown: false
                              }}/>
                <Stack.Screen name={"goToSingleActivity"}
                              component={SingleActivity}
                              options={{
                                  headerShown: false
                              }}/>
                <Stack.Screen name={"switchToLogoutPage"}
                              component={LogoutSplashScreen}
                              options={{
                                  headerShown: false
                              }}/>

            </Stack.Navigator>
    )
}
