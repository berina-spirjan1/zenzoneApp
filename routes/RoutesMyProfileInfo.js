import React, {Component} from "react";
import {Router, Scene, Stack} from "react-native-router-flux";
import MyProfileInfo from "../screens/userProfile/MyProfileInfo";
import ChangePassword from "../screens/ChangePassword";
import UserProfile from "../screens/userProfile/UserProfile";
import RoutesForChallenge from "./RoutesForChallenge";
import Leaderboard from "../screens/Leaderboard";
import UpdateProfile from "../screens/UpdateProfile";

export default class RoutesMyProfileInfo extends Component{
    render() {
        return(
            <Router>
                <Stack key={"root"} hideNavBar={true}>
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
