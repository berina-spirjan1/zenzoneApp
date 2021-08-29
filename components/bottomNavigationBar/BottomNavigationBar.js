import React from "react";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import {FontAwesome5} from "@expo/vector-icons";
import HomePage from "../../screens/HomePage";
import DailyChallengeDetails from "../../screens/DailyChallengeDetails";
import Leaderboard from "../../screens/Leaderboard";
import SignUp from "../../screens/SignUp";
import Login from "../../screens/Login";


const Tab = createBottomTabNavigator();

function BottomNavigationBar(){
    return(
        <Tab.Navigator>
            <Tab.Screen name={'Activities'}
                        component={HomePage}
                        options={{
                            tabBarIcon: ({focused}) => (
                                <FontAwesome5 name={'book-reader'}
                                              size={focused ? 22 : 20}
                                              color={focused ? '#000' : '#616C75'}/>
                            )
                        }}/>
            <Tab.Screen name={'Challenge'}
                        component={DailyChallengeDetails}
                        options={{
                            tabBarIcon: ({focused}) => (
                                <FontAwesome5 name={'clipboard-check'}
                                              size={focused ? 22 : 20}
                                              color={focused ? '#000' : '#616C75'}/>
                            )
                        }}/>
            <Tab.Screen name={'Ranking'}
                        component={Leaderboard}
                        options={{
                            tabBarIcon: ({focused}) => (
                                <FontAwesome5 name={'medal'}
                                              size={focused ? 22 : 20}
                                              color={focused ? '#000' : '#616C75'}/>
                            )
                        }}/>
            <Tab.Screen name={'Login'}
                        component={Login}
                        options={{
                            tabBarIcon: ({focused}) => (
                                <FontAwesome5 name={'user-check'}
                                              size={focused ? 22 : 20}
                                              color={focused ? '#000' : '#616C75'}/>
                            )
                        }}/>
            <Tab.Screen name={'Sign Up'}
                        component={SignUp}
                        options={{
                            tabBarIcon: ({focused}) => (
                                <FontAwesome5 name={'user'}
                                              size={focused ? 22 : 20}
                                              color={focused ? '#000' : '#616C75'}/>
                            )
                        }}/>
        </Tab.Navigator>
    )
}

export default BottomNavigationBar;
