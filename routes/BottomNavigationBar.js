import React from "react";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import {FontAwesome5} from "@expo/vector-icons";

import CustomTabBar from "../components/bottomNavigationBar/CustomTabBar";
import TabBarCustomButton from "../components/bottomNavigationBar/TabBarCustomButton";
import LogoutSplashScreen from "../screens/LogoutSplashScreen";
import {RouterHomePageStack} from "./RoutesHomePageStack";
import {RoutesCreateActivityStack} from "./RoutesCreateActivityStack";
import {RoutesForChallengeStack} from "./RoutesForChallengeStack";
import {RoutesLoginSignUpStack} from "./RoutesLoginSignUpStack";
import Leaderboard from "../screens/Leaderboard";


const Tab = createBottomTabNavigator();

function BottomNavigationBar(){
    return(
            <Tab.Navigator
                backBehavior={"Activities"}
                initialRouteName="Activities"
                screenOptions={{
                    showLabel: false,
                    style:{
                        borderTopWidth: 0,
                        backgroundColor: 'transparent',
                        elevation: 0,
                        lazy: true
                },
                    tabBarShowLabel: false
            }}
                tabBar={(props) => (
                    <CustomTabBar props={props}/>
                )}>
                <Tab.Screen name={'Activities'}
                            component={RouterHomePageStack}
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
                            component={RoutesForChallengeStack}
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
                            component={RoutesCreateActivityStack}
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
                            component={RoutesLoginSignUpStack}
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
