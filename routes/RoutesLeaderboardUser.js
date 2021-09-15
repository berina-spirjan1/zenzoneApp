import React, { Component } from "react";
import {
    Router,
    Scene,
    Stack
} from "react-native-router-flux";
import UserProfile from "../screens/userProfile/UserProfile";
import Leaderboard from "../screens/Leaderboard";

export default class RoutesLeaderboardUser extends Component{
    render() {
        return(
            <Router>
                <Stack key={"root"} hideNavBar={true}>
                    <Scene key={"leaderboard"} component={Leaderboard} title={"Leaderboard"} initial={true}/>
                    <Scene key={"userProfile"} component={UserProfile} title={"User profile"}/>
                </Stack>
            </Router>
        )
    }
}
