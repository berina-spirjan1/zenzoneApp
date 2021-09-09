import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { FontAwesome5 } from "@expo/vector-icons";

import HomePage from "../../screens/HomePage";
import DailyChallengeDetails from "../../screens/DailyChallengeDetails";
import Leaderboard from "../../screens/Leaderboard";
import Login from "../../screens/Login";

import TabBarCustomButton from "./TabBarCustomButton";
import CustomTabBar from "./CustomTabBar";
import CreateNewActivity from "../../screens/CreateNewActivity";

import UserProfile from "../../screens/UserProfile";
import Routes from "../../routes/Routes";



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
                        component={DailyChallengeDetails}
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
                        component={CreateNewActivity}
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
                        component={UserProfile}
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
                        component={Routes}
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
