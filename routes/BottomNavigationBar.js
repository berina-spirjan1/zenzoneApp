import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { FontAwesome5 } from "@expo/vector-icons";

import { NavigationContainer } from "@react-navigation/native";
import RoutesHomePage from "./RoutesHomePage";
import RoutesForChallenge from "./RoutesForChallenge";
import RoutesCreateActivity from "./RoutesCreateActivity";
import DailyChallengeCounter from "../screens/dailyChallenge/DailyChallengeCounter";
import RoutesLoginSignUp from "./RoutesLoginSignUp";
import CustomTabBar from "../components/bottomNavigationBar/CustomTabBar";
import TabBarCustomButton from "../components/bottomNavigationBar/TabBarCustomButton";


const Tab = createBottomTabNavigator();

function BottomNavigationBar(){
    return(
        <NavigationContainer>
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
                            component={RoutesHomePage}
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
                            component={DailyChallengeCounter}
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
        </NavigationContainer>
    )
}



export default BottomNavigationBar;
