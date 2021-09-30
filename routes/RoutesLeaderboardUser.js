import React, { Component } from "react";
import {
    Router,
    Scene,
    Stack
} from "react-native-router-flux";
import UserProfile from "../screens/userProfile/UserProfile";
import Leaderboard from "../screens/Leaderboard";
import RoutesLoginSignUp from "./RoutesLoginSignUp";
import RoutesCreateActivity from "./RoutesCreateActivity";
import RoutesMyActivity from "./RoutesMyActivity";
import RoutesForChallenge from "./RoutesForChallenge";
import RoutesMyProfileInfo from "./RoutesMyProfileInfo";
import RoutesProfile from "./RoutesProfile";
import RoutesSettings from "./RoutesSettings";
import RoutesHomePage from "./RoutesHomePage";

export default class RoutesLeaderboardUser extends Component{
    render() {
        return(
            <Router>
                <Stack key={"RoutesLeaderboardUser"} hideNavBar={true}>
                    <Scene key={"routesLogin"} component={RoutesLoginSignUp}/>
                    <Scene key={"routesCreateActivity"} component={RoutesCreateActivity}/>
                    <Scene key={"routesHomePage"} component={RoutesHomePage}/>
                    <Scene key={"routesMyActivity"} component={RoutesMyActivity}/>
                    <Scene key={"daily"} component={RoutesForChallenge}/>
                    <Scene key={"routesMyProfileInfo"} component={RoutesMyProfileInfo}/>
                    <Scene key={"routesProfile"} component={RoutesProfile}/>
                    <Scene key={"routesSettings"} component={RoutesSettings}/>


                    <Scene key={"leaderboard"} component={Leaderboard} title={"Leaderboard"} initial={true}/>
                    <Scene key={"userProfile"} component={UserProfile} title={"User profile"}/>
                </Stack>
            </Router>
        )
    }
}
