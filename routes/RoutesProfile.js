import React, { Component } from "react";
import {
    Router,
    Stack,
    Scene
} from 'react-native-router-flux';

import Badges from "../screens/Badges";
import Leaderboard from "../screens/Leaderboard";
import UserProfile from "../screens/userProfile/UserProfile";

import MyActivities from "../screens/MyActivities";
import RoutesMyProfileInfo from "./RoutesMyProfileInfo";
import RoutesSettings from "./RoutesSettings";
import RoutesLoginSignUp from "./RoutesLoginSignUp";
import RoutesCreateActivity from "./RoutesCreateActivity";
import RoutesLeaderboardUser from "./RoutesLeaderboardUser";
import RoutesMyActivity from "./RoutesMyActivity";
import RoutesForChallenge from "./RoutesForChallenge";
import RoutesHomePage from "./RoutesHomePage";
import SingleActivity from "../screens/SingleActivity";



export default class RoutesProfile extends Component{
    render() {
        return(
            <Router>
                <Stack key={"RoutesProfile"} hideNavBar={true}>
                    <Scene key={"routesLogin"} component={RoutesLoginSignUp}/>
                    <Scene key={"routesCreateActivity"} component={RoutesCreateActivity}/>
                    <Scene key={"routesLeaderboardUser"} component={RoutesLeaderboardUser}/>
                    <Scene key={"routesMyActivity"} component={RoutesMyActivity}/>
                    <Scene key={"daily"} component={RoutesForChallenge}/>
                    <Scene key={"routesHomePage"} component={RoutesHomePage}/>
                    <Scene key={"routesSettings"} component={RoutesSettings}/>

                    <Scene key={"profile"} component={UserProfile} title={"profile"} initial={true}/>
                    <Scene key={"myProfile"} component={RoutesMyProfileInfo} title={"myProfile"} />
                    <Scene key={"badges"} component={Badges} title={"badges"}/>
                    <Scene key={"leaderboard"} component={Leaderboard} title={"leaderboard"}/>
                    <Scene key={"activities"} component={MyActivities} title={"activities"}/>
                    <Scene key={"settings"} component={RoutesSettings} title={"settings"}/>
                    <Scene key={"goToSingleActivity"} component={SingleActivity}/>
                </Stack>
            </Router>
        )
    }
}
