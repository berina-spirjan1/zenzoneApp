import React, {Component} from "react";
import {
    Router,
    Stack,
    Scene
} from 'react-native-router-flux';

import MyProfileInfo from "../screens/MyProfileInfo";
import UserProfile from "../screens/UserProfile";
import Badges from "../screens/Badges";
import Leaderboard from "../screens/Leaderboard";
import HomePage from "../screens/HomePage";
import Settings from "../screens/Settings";


export default class RoutesProfile extends Component{
    render() {
        return(
            <Router>
                <Stack key={"root"} hideNavBar={true}>
                    <Scene key={"profile"} component={UserProfile} title={"Profile"} initial={true}/>
                    <Scene key={"myProfile"} component={MyProfileInfo} title={"My profile"} />
                    <Scene key={"badges"} component={Badges} title={"Badges"}/>
                    <Scene key={"leaderboard"} component={Leaderboard} title={"Leaderboard"}/>
                    <Scene key={"activities"} component={HomePage} title={"Activities"}/>
                    <Scene key={"settings"} component={Settings} title={"Settings"}/>
                </Stack>
            </Router>
        )
    }
}
