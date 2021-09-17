import React, { Component } from "react";
import {
    Router,
    Scene,
    Stack
} from "react-native-router-flux";
import HomePage from "../screens/HomePage";
import SingleActivity from "../screens/SingleActivity";
import UserProfile from "../screens/userProfile/UserProfile";
import SideMenu from "../components/sideMenu/SideMenu";
import Leaderboard from "../screens/Leaderboard";
import RoutesForChallenge from "./RoutesForChallenge";
import Settings from "../screens/userProfile/Settings";


export default class RoutesHomePage extends Component{
    render() {
        return(
            <Router>
                <Stack key={"root"} hideNavBar={true}>
                    <Scene key={"homePageActivities"} component={HomePage} title={"Activities"} initial={true}/>
                    <Scene key={"singleActivity"} component={SingleActivity} title={"Single activity"}/>
                    <Scene key={"userProfile"} component={UserProfile} title={"User profile"}/>
                    <Scene key={"sideMenu"} component={SideMenu} title={"sideMenu"}/>
                    <Scene key={"leaderboard"} component={Leaderboard} title={"leaderboard"}/>
                    <Scene key={"daily"} component={RoutesForChallenge} title={"daily"}/>
                    <Scene key={"settings"} component={Settings} title={"settings"}/>
                </Stack>
            </Router>
        )
    }
}
