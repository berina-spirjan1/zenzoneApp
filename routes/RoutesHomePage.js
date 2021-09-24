import React, { Component } from "react";
import {
    Router,
    Scene,
    Stack
} from "react-native-router-flux";
import HomePage from "../screens/HomePage";

import UserProfile from "../screens/userProfile/UserProfile";
import SideMenu from "../components/sideMenu/SideMenu";
import Leaderboard from "../screens/Leaderboard";
import RoutesForChallenge from "./RoutesForChallenge";
import Settings from "../screens/userProfile/Settings";
import AllCategories from "../screens/AllCategories";
import SingleActivity from "../screens/SingleActivity";


export default class RoutesHomePage extends Component{
    render() {
        return(
            <Router>
                <Stack key={"root"} hideNavBar={true}>
                    <Scene key={"homePageActivities"} component={HomePage} title={"Activities"} initial={true}/>
                    <Scene key={"singleActivity"} component={SingleActivity}/>
                    <Scene key={"seeAll"} component={AllCategories} title={"seeAll"}/>
                    <Scene key={"userProfile"} component={UserProfile} title={"User profile"}/>
                    <Scene key={"sideMenu"} component={SideMenu} title={"sideMenu"}/>
                    <Scene key={"leaderboard2"} component={Leaderboard} title={"leaderboard"}/>
                    <Scene key={"daily"} component={RoutesForChallenge} title={"daily"}/>
                    <Scene key={"settings"} component={Settings} title={"settings"}/>

                </Stack>
            </Router>
        )
    }
}
