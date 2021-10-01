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
import RoutesLoginSignUp from "./RoutesLoginSignUp";
import RoutesCreateActivity from "./RoutesCreateActivity";
import {SceneView} from "react-navigation";
import RoutesLeaderboardUser from "./RoutesLeaderboardUser";
import RoutesMyActivity from "./RoutesMyActivity";
import RoutesMyProfileInfo from "./RoutesMyProfileInfo";
import RoutesProfile from "./RoutesProfile";
import RoutesSettings from "./RoutesSettings";
import AboutUserWhoCreatedActivity from "../screens/AboutUserWhoCreatedActivity";
import BottomNavigationBar from "./BottomNavigationBar";


export default class RoutesHomePage extends Component{
    render() {
        return(
            <Router>
                <Stack key={"RoutesHomePage"} hideNavBar={true}>
                    <Scene key={"homePageActivities"} component={HomePage} title={"Activities"} initial={true}/>

                    <Scene key={"goToAboutUserWhoCreatedActivity"} component={AboutUserWhoCreatedActivity}/>
                    <Scene key={"seeAll"} component={AllCategories} title={"seeAll"}/>
                    <Scene key={"userProfile"} component={UserProfile} title={"User profile"}/>
                    <Scene key={"sideMenu"} component={SideMenu} title={"sideMenu"}/>
                    <Scene key={"leaderboard2"} component={Leaderboard} title={"leaderboard"}/>
                    <Scene key={"singleActivity"} component={SingleActivity}/>
                    <Scene key={"settings"} component={Settings} title={"settings"}/>
                    <Scene key={"bottom"} component={BottomNavigationBar}/>
                </Stack>
            </Router>
        )
    }
}
