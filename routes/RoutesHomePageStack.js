import React from "react";
import {createNativeStackNavigator} from "react-native-screens/native-stack";
import AllCategories from "../screens/AllCategories";
import AboutUserWhoCreatedActivity from "../screens/AboutUserWhoCreatedActivity";
import UserProfile from "../screens/userProfile/UserProfile";
import SingleActivity from "../screens/SingleActivity";
import Leaderboard from "../screens/Leaderboard";
import Settings from "../screens/userProfile/Settings";
import HomePage from "../screens/HomePage";
import SideMenu from "../components/sideMenu/SideMenu";


const Stack = createNativeStackNavigator()

export const RouterHomePageStack = () =>{
    return(
            <Stack.Navigator initialRouteName={"homePageActivities"}>
                <Stack.Screen name={"seeAll"}
                              component={AllCategories}
                              options={{
                                  headerShown: false
                              }}/>
                <Stack.Screen name={"sideMenu"}
                              component={SideMenu}
                              options={{
                                  headerShown: false
                              }}/>
                <Stack.Screen name={"goToAboutUserWhoCreatedActivity"}
                              component={AboutUserWhoCreatedActivity}
                              options={{
                                  headerShown: false
                              }}/>
                <Stack.Screen name={"userProfile"}
                              component={UserProfile}
                              options={{
                                  headerShown: false
                              }}/>
                <Stack.Screen name={"singleActivity"}
                              component={SingleActivity}
                              options={{
                                  headerShown: false
                              }}/>
                <Stack.Screen name={"leaderboard2"}
                              component={Leaderboard}
                              options={{
                                  headerShown: false
                              }}/>
                <Stack.Screen name={"settings"}
                              component={Settings}
                              options={{
                                  headerShown: false
                              }}/>
                <Stack.Screen name={"homePageActivities"}
                              component={HomePage}
                              options={{
                                  headerShown: false
                              }}/>
            </Stack.Navigator>
    )
}
