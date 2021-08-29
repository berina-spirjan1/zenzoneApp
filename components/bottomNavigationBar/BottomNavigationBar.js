import React from "react";
import {
    BottomTabBar,
    createBottomTabNavigator
} from "@react-navigation/bottom-tabs";
import { FontAwesome5 } from "@expo/vector-icons";
import {
    View,
    StyleSheet
} from 'react-native';

import HomePage from "../../screens/HomePage";
import DailyChallengeDetails from "../../screens/DailyChallengeDetails";
import Leaderboard from "../../screens/Leaderboard";
import SignUp from "../../screens/SignUp";
import Login from "../../screens/Login";
import {isIphoneX} from "react-native-iphone-x-helper";
import TabBarCustomButton from "./TabBarCustomButton";
import CustomTabBar from "./CustomTabBar";

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
            )}
        >
            <Tab.Screen name={'Activities'}
                        component={HomePage}
                        options={{
                            tabBarIcon: ({focused}) => (
                                <FontAwesome5 name={'book-reader'}
                                              size={focused ? 22 : 20}
                                              color={focused ? '#000' : '#616C75'}/>
                            ),
                            tabBarButton: (props) => (
                                <TabBarCustomButton {...props}/>
                            )
                        }}/>
            <Tab.Screen name={'Challenge'}
                        component={DailyChallengeDetails}
                        options={{
                            tabBarIcon: ({focused}) => (
                                <FontAwesome5 name={'clipboard-check'}
                                              size={focused ? 22 : 20}
                                              color={focused ? '#000' : '#616C75'}/>
                            ),
                            tabBarButton: (props) => (
                                <TabBarCustomButton {...props}/>
                            )
                        }}/>
            <Tab.Screen name={'Ranking'}
                        component={Leaderboard}
                        options={{
                            tabBarIcon: ({focused}) => (
                                <FontAwesome5 name={'medal'}
                                              size={focused ? 22 : 20}
                                              color={focused ? '#000' : '#616C75'}/>
                            ),
                            tabBarButton: (props) => (
                                <TabBarCustomButton {...props}/>
                            )
                        }}/>
            <Tab.Screen name={'Login'}
                        component={Login}
                        options={{
                            tabBarIcon: ({focused}) => (
                                <FontAwesome5 name={'user-check'}
                                              size={focused ? 22 : 20}
                                              color={focused ? '#000' : '#616C75'}/>
                            ),
                            tabBarButton: (props) => (
                                <TabBarCustomButton {...props}/>
                            )
                        }}/>
            {/*//todo add screen for creating new activity which will show in bottom navigation*/}
            <Tab.Screen name={'Sign Up'}
                        component={SignUp}
                        options={{
                            tabBarIcon: ({focused}) => (
                                <FontAwesome5 name={'user'}
                                              size={focused ? 22 : 20}
                                              color={focused ? '#000' : '#616C75'}/>
                            ),
                            tabBarButton: (props) => (
                                <TabBarCustomButton {...props}/>
                            )
                        }}/>
        </Tab.Navigator>
    )
}



export default BottomNavigationBar;
