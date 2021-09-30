import React, {Component} from "react";
import {Router, Scene, Stack} from "react-native-router-flux";
import MyProfileInfo from "../screens/userProfile/MyProfileInfo";
import ChangePassword from "../screens/ChangePassword";
import UserProfile from "../screens/userProfile/UserProfile";
import RoutesForChallenge from "./RoutesForChallenge";
import Leaderboard from "../screens/Leaderboard";
import UpdateProfile from "../screens/UpdateProfile";
import RoutesLoginSignUp from "./RoutesLoginSignUp";
import RoutesCreateActivity from "./RoutesCreateActivity";
import RoutesLeaderboardUser from "./RoutesLeaderboardUser";
import RoutesMyActivity from "./RoutesMyActivity";
import RoutesProfile from "./RoutesProfile";
import RoutesSettings from "./RoutesSettings";
import RoutesHomePage from "./RoutesHomePage";

export default class RoutesMyProfileInfo extends Component{
    render() {
        return(
            <Router>
                <Stack key={"RoutesMyProfileInfo"} hideNavBar={true}>
                    <Scene key={"routesLogin"} component={RoutesLoginSignUp}/>
                    <Scene key={"routesCreateActivity"} component={RoutesCreateActivity}/>
                    <Scene key={"routesLeaderboardUser"} component={RoutesLeaderboardUser}/>
                    <Scene key={"routesMyActivity"} component={RoutesMyActivity}/>
                    <Scene key={"routesHomePage"} component={RoutesHomePage}/>
                    <Scene key={"routesProfile"} component={RoutesProfile}/>
                    <Scene key={"routesSettings"} component={RoutesSettings}/>

                    <Scene key={"switchToMyProfileInfo"} component={MyProfileInfo} title={"switchToMyProfileInfo"} initial={true}/>
                    <Scene key={"switchToChangePassword"} component={ChangePassword} title={"switchToChangePassword"}/>
                    <Scene key={"backToProfile"} component={UserProfile}/>
                    <Scene key={"goToDailyChallenge"} component={RoutesForChallenge}/>
                    <Scene key={"goToLeaderboard"} component={Leaderboard}/>
                    <Scene key={"updateProfile"} component={UpdateProfile}/>
                </Stack>
            </Router>
        )
    }
}
