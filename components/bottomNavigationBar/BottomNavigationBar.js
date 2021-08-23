import React from "react";
import {createAppContainer} from "react-navigation";
import {createBottomTabNavigator} from "react-navigation-tabs";
import {FontAwesome5} from "@expo/vector-icons";
import HomePage from "../../screens/HomePage";
import DailyChallengeDetails from "../../screens/DailyChallengeDetails";
import Leaderboard from "../../screens/Leaderboard";
import Login from "../../screens/Login";
import AddButtonOnNavigationBar from "./AddButtonOnNavigationBar";

const TabNavigator = createBottomTabNavigator(
    {
        Activities: {
            screen: HomePage,
            navigationOptions: {
                tabBarIcon: () => <FontAwesome5 name="book-reader" size={25} color={"#000000"}/>
            }
        },
        Challenge: {
            screen: DailyChallengeDetails,
            navigationOptions: {
                tabBarIcon: () => <FontAwesome5 name="clipboard-check" size={25} color={"#000000"}/>
            }
        },
        Add:{
            screen: () => null,
            navigationOptions: {
                tabBarIcon: <AddButtonOnNavigationBar/>
            }
        },
        Ranking: {
            screen: Leaderboard,
            navigationOptions: {
                tabBarIcon: () => <FontAwesome5 name="medal" size={25} color={"#000000"}/>
            }
        },
        Login: {
            screen: Login,
            navigationOptions: {
                tabBarIcon: () => <FontAwesome5 name="user-check" size={25} color={"#000000"}/>

            }
        }
    },
    {
        tabBarOptions:{
            showLabel: false
        }
    }
)

export default createAppContainer(TabNavigator);
