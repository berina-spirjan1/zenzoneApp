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
import BottomNavigationBar from "../components/bottomNavigationBar/BottomNavigationBar";
import RoutesLoginSignUp from "./RoutesLoginSignUp";
import RoutesCreateActivity from "./RoutesCreateActivity";
import {SceneView} from "react-navigation";
import RoutesLeaderboardUser from "./RoutesLeaderboardUser";
import RoutesMyActivity from "./RoutesMyActivity";
import RoutesMyProfileInfo from "./RoutesMyProfileInfo";
import RoutesProfile from "./RoutesProfile";
import RoutesSettings from "./RoutesSettings";
import AboutUserWhoCreatedActivity from "../screens/AboutUserWhoCreatedActivity";


export default class RoutesHomePage extends Component{
    render() {
        return(
            <Router>
                <Stack key={"root"} hideNavBar={true}>

                    <Scene key={"routesLogin"} component={RoutesLoginSignUp}/>
                    <Scene key={"routesCreateActivity"} component={RoutesCreateActivity}/>
                    <Scene key={"routesLeaderboardUser"} component={RoutesLeaderboardUser}/>
                    <Scene key={"routesMyActivity"} component={RoutesMyActivity}/>
                    <Scene key={"daily"} component={RoutesForChallenge}/>
                    <Scene key={"routesMyProfileInfo"} component={RoutesMyProfileInfo}/>
                    <Scene key={"routesProfile"} component={RoutesProfile}/>
                    <Scene key={"routesSettings"} component={RoutesSettings}/>

                    <Scene key={"homePageActivities"} component={HomePage} title={"Activities"} initial={true}/>
                    <Scene key={"singleActivity"} component={SingleActivity}/>
                    <Scene key={"goToAboutUserWhoCreatedActivity"} component={AboutUserWhoCreatedActivity}/>
                    <Scene key={"seeAll"} component={AllCategories} title={"seeAll"}/>
                    <Scene key={"userProfile"} component={UserProfile} title={"User profile"}/>
                    <Scene key={"sideMenu"} component={SideMenu} title={"sideMenu"}/>
                    <Scene key={"leaderboard2"} component={Leaderboard} title={"leaderboard"}/>

                    <Scene key={"settings"} component={Settings} title={"settings"}/>
                </Stack>
            </Router>
        )
    }
}
