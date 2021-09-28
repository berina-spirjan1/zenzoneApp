import React, {Component} from "react";
import {Router, Scene, Stack} from "react-native-router-flux";
import DailyChallengeDetails from "../screens/dailyChallenge/DailyChallengeDetails";
import DoDailyChallenge from "../screens/dailyChallenge/DoDailyChallenge";
import Congratulations from "../screens/dailyChallenge/Congratulations";
import DailyChallengeCounter from "../screens/dailyChallenge/DailyChallengeCounter";
import {DoDailyChallengeForm} from "../screens/dailyChallenge/DoDailyChallengeForm";
import RoutesLoginSignUp from "./RoutesLoginSignUp";
import RoutesCreateActivity from "./RoutesCreateActivity";
import RoutesLeaderboardUser from "./RoutesLeaderboardUser";
import RoutesMyActivity from "./RoutesMyActivity";
import RoutesMyProfileInfo from "./RoutesMyProfileInfo";
import RoutesProfile from "./RoutesProfile";
import RoutesSettings from "./RoutesSettings";
import RoutesHomePage from "./RoutesHomePage";



export default class RoutesForChallenge extends Component{
    render() {
        return(
            <Router>
                <Stack key={"root"} hideNavBar={true}>
                    <Scene key={"routesLogin"} component={RoutesLoginSignUp}/>
                    <Scene key={"routesCreateActivity"} component={RoutesCreateActivity}/>
                    <Scene key={"routesLeaderboardUser"} component={RoutesLeaderboardUser}/>
                    <Scene key={"routesMyActivity"} component={RoutesMyActivity}/>
                    <Scene key={"routesHomePage"} component={RoutesHomePage}/>
                    <Scene key={"routesMyProfileInfo"} component={RoutesMyProfileInfo}/>
                    <Scene key={"routesProfile"} component={RoutesProfile}/>
                    <Scene key={"routesSettings"} component={RoutesSettings}/>


                    <Scene key={"challengeDetails"} component={DailyChallengeDetails} title={"challengeDetails"} initial={true}/>
                    <Scene key={"doDaily"} component={DoDailyChallenge} title={"doDaily"}/>
                    <Scene key={"fromFormDaily"} component={DoDailyChallengeForm}/>
                    <Scene key={"congratulations"} component={Congratulations} title={"congratulations"}/>
                    <Scene key={"waiting"} component={DailyChallengeCounter} title={"waiting"}/>
                </Stack>
            </Router>
        )
    }
}
