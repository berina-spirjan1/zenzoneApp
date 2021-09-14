import React, {Component} from "react";
import {
    Router,
    Stack,
    Scene
} from 'react-native-router-flux';

import Badges from "../screens/Badges";
import Leaderboard from "../screens/Leaderboard";
import HomePage from "../screens/HomePage";
import UserProfile from "../screens/userProfile/UserProfile";
import MyProfileInfo from "../screens/userProfile/MyProfileInfo";
import Settings from "../screens/userProfile/Settings";


export default class RoutesProfile extends Component{
    render() {
        return(
            <Router>
                <Stack key={"root"} hideNavBar={true}>
                    <Scene key={"profile"} component={UserProfile} title={"profile"} initial={true}/>
                    <Scene key={"myProfile"} component={MyProfileInfo} title={"myProfile"} />
                    <Scene key={"badges"} component={Badges} title={"badges"}/>
                    <Scene key={"leaderboard"} component={Leaderboard} title={"leaderboard"}/>
                    <Scene key={"activities"} component={HomePage} title={"activities"}/>
                    <Scene key={"settings"} component={Settings} title={"settings"}/>
                </Stack>
            </Router>
        )
    }
}
