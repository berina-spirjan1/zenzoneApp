import React from "react";
import {createNativeStackNavigator} from "react-native-screens/native-stack";
import {NavigationContainer} from "@react-navigation/native";
import MyProfileInfo from "../screens/userProfile/MyProfileInfo";
import ChangePassword from "../screens/ChangePassword";
import UserProfile from "../screens/userProfile/UserProfile";
import {RoutesForChallengeStack} from "./RoutesForChallengeStack";
import Leaderboard from "../screens/Leaderboard";
import UpdateProfile from "../screens/UpdateProfile";

const Stack = createNativeStackNavigator()

export const RoutesMyProfileStack = () =>{
    return(
            <Stack.Navigator initialRouteName={"backToProfile"}>
                <Stack.Screen name={"switchToMyProfileInfo"}
                              component={MyProfileInfo}
                              options={{
                                  headerShown: false
                              }}/>
                <Stack.Screen name={"switchToChangePassword"}
                              component={ChangePassword}
                              options={{
                                  headerShown: false
                              }}/>
                <Stack.Screen name={"backToProfile"}
                              component={UserProfile}
                              options={{
                                  headerShown: false
                              }}/>
                <Stack.Screen name={"goToDailyChallenge"}
                              component={RoutesForChallengeStack}
                              options={{
                                  headerShown: false
                              }}/>
                <Stack.Screen name={"goToLeaderboard"}
                              component={Leaderboard}
                              options={{
                                  headerShown: false
                              }}/>
                <Stack.Screen name={"updateProfile"}
                              component={UpdateProfile}
                              options={{
                                  headerShown: false
                              }}/>
            </Stack.Navigator>
    )
}
