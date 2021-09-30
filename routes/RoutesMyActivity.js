import React, { Component } from "react";
import {
    Router,
    Scene,
    Stack
} from "react-native-router-flux";
import MyActivities from "../screens/MyActivities";
import MyProfileInfo from "../screens/userProfile/MyProfileInfo";
import UserProfile from "../screens/userProfile/UserProfile";
import RoutesLoginSignUp from "./RoutesLoginSignUp";
import RoutesCreateActivity from "./RoutesCreateActivity";
import RoutesLeaderboardUser from "./RoutesLeaderboardUser";
import RoutesForChallenge from "./RoutesForChallenge";
import RoutesMyProfileInfo from "./RoutesMyProfileInfo";
import RoutesProfile from "./RoutesProfile";
import RoutesSettings from "./RoutesSettings";
import RoutesHomePage from "./RoutesHomePage";

export default class RoutesMyActivity extends Component{
    render() {
        return(
            <Router>
                <Stack key={"RoutesMyActivity"} hideNavBar={true}>
                    <Scene key={"routesLogin"} component={RoutesLoginSignUp}/>
                    <Scene key={"routesCreateActivity"} component={RoutesCreateActivity}/>
                    <Scene key={"routesLeaderboardUser"} component={RoutesLeaderboardUser}/>
                    <Scene key={"routesHomePage"} component={RoutesHomePage}/>
                    <Scene key={"daily"} component={RoutesForChallenge}/>
                    <Scene key={"routesMyProfileInfo"} component={RoutesMyProfileInfo}/>
                    <Scene key={"routesProfile"} component={RoutesProfile}/>
                    <Scene key={"routesSettings"} component={RoutesSettings}/>

                    <Scene key={"myActivities"} component={MyActivities} title={"My activities"} initial={true}/>
                    <Scene key={"myProfileInfoBack"} component={UserProfile} title={"myProfileInfoBack"}/>
                </Stack>
            </Router>
        )
    }
}
