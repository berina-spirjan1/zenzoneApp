import React, {Component} from "react";
import {Router, Scene, Stack} from "react-native-router-flux";
import Settings from "../screens/userProfile/Settings";
import Language from "../screens/Language";
import UserHelp from "../screens/userProfile/UserHelp";
import MyProfileInfo from "../screens/userProfile/MyProfileInfo";
import UserProfile from "../screens/userProfile/UserProfile";
import RoutesLoginSignUp from "./RoutesLoginSignUp";
import RoutesCreateActivity from "./RoutesCreateActivity";
import RoutesLeaderboardUser from "./RoutesLeaderboardUser";
import RoutesMyActivity from "./RoutesMyActivity";
import RoutesForChallenge from "./RoutesForChallenge";
import RoutesMyProfileInfo from "./RoutesMyProfileInfo";
import RoutesProfile from "./RoutesProfile";
import RoutesHomePage from "./RoutesHomePage";


export default class RoutesSettings extends Component{
    render() {
        return(
            <Router>
                <Stack key={"RoutesSettings"} hideNavBar={true}>

                    <Scene key={"routesLogin"} component={RoutesLoginSignUp}/>
                    <Scene key={"routesCreateActivity"} component={RoutesCreateActivity}/>
                    <Scene key={"routesLeaderboardUser"} component={RoutesLeaderboardUser}/>
                    <Scene key={"routesMyActivity"} component={RoutesMyActivity}/>
                    <Scene key={"daily"} component={RoutesForChallenge}/>
                    <Scene key={"routesMyProfileInfo"} component={RoutesMyProfileInfo}/>
                    <Scene key={"routesProfile"} component={RoutesProfile}/>
                    <Scene key={"routesHomePage"} component={RoutesHomePage}/>

                    <Scene key={"switchToSettings"} component={Settings} title={"switchToSettings"} initial={true}/>
                    <Scene key={"toLanguage"} component={Language} title={"toLanguage"}/>
                    <Scene key={"toHelp"} component={UserHelp} title={"toHelp"}/>
                    <Scene key={"profileInfo"} component={MyProfileInfo} />
                    <Scene key={"toInfoMain"} component={UserProfile}/>
                </Stack>
            </Router>
        )
    }
}
