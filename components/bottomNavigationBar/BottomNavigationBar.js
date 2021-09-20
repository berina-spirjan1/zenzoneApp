import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { FontAwesome5 } from "@expo/vector-icons";

import HomePage from "../../screens/HomePage";

import TabBarCustomButton from "./TabBarCustomButton";
import CustomTabBar from "./CustomTabBar";

import RoutesLoginSignUp from "../../routes/RoutesLoginSignUp";


import RoutesForChallenge from "../../routes/RoutesForChallenge";

import Leaderboard from "../../screens/Leaderboard";
import DailyChallengeCounter from "../../screens/dailyChallenge/DailyChallengeCounter";
import CreateNewActivity from "../../screens/CreateNewActivity";
import RoutesCreateActivity from "../../routes/RoutesCreateActivity";



const Tab = createBottomTabNavigator();

function BottomNavigationBar(){
    return(
        <Tab.Navigator
            tabBarOptions={{
                showLabel: false,
                style:{
                    borderTopWidth: 0,
                    backgroundColor: 'transparent',
                    elevation: 0
            }
        }}
            tabBar={(props) => (
                <CustomTabBar props={props}/>
            )}>
            <Tab.Screen name={'Activities'}
                        component={HomePage}
                        options={{
                            headerShown: false,
                            tabBarIcon: ({focused}) => (
                                <FontAwesome5 name={'book-reader'}
                                              size={focused ? 22 : 20}
                                              color={focused ? '#FFF' : '#616C75'}/>
                            ),
                            tabBarButton: (props) => (
                                <TabBarCustomButton {...props}/>
                            )
                        }}/>
            <Tab.Screen name={'Challenge'}
                        component={RoutesForChallenge}
                        options={{
                            headerShown: false,
                            tabBarIcon: ({focused}) => (
                                <FontAwesome5 name={'clipboard-check'}
                                              size={focused ? 22 : 20}
                                              color={focused ? '#FFF' : '#616C75'}/>
                            ),
                            tabBarButton: (props) => (
                                <TabBarCustomButton {...props}/>
                            )
                        }}/>
            <Tab.Screen name={'New activity'}
                        component={RoutesCreateActivity}
                        options={{
                            headerShown: false,
                            tabBarIcon: ({focused}) => (
                                <FontAwesome5 name={'plus'}
                                              size={focused ? 22 : 20}
                                              color={focused ? '#FFF' : '#616C75'}/>
                            ),
                            tabBarButton: (props) => (
                                <TabBarCustomButton {...props}/>
                            )
                        }}/>
            <Tab.Screen name={'Ranking'}
                        component={Leaderboard}
                        options={{
                            headerShown: false,
                            tabBarIcon: ({focused}) => (
                                <FontAwesome5 name={'medal'}
                                              size={focused ? 22 : 20}
                                              color={focused ? '#FFF' : '#616C75'}/>
                            ),
                            tabBarButton: (props) => (
                                <TabBarCustomButton {...props}/>
                            )
                        }}/>
            <Tab.Screen name={'Login'}
                        component={RoutesLoginSignUp}
                        options={{
                            headerShown: false,
                            tabBarIcon: ({focused}) => (
                                <FontAwesome5 name={'user-check'}
                                              size={focused ? 22 : 20}
                                              color={focused ? '#FFF' : '#616C75'}/>
                            ),
                            tabBarButton: (props) => (
                                <TabBarCustomButton {...props}/>
                            )
                        }}/>

        </Tab.Navigator>
    )
}



export default BottomNavigationBar;
