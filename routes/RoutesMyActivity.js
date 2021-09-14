import React, {Component} from "react";
import {Router, Scene, Stack} from "react-native-router-flux";
import MyActivities from "../screens/MyActivities";
import MyProfileInfo from "../screens/userProfile/MyProfileInfo";
import UserProfile from "../screens/userProfile/UserProfile";

export default class RoutesMyActivity extends Component{
    render() {
        return(
            <Router>
                <Stack key={"root"} hideNavBar={true}>
                    <Scene key={"myActivities"} component={MyActivities} title={"My activities"} initial={true}/>
                    <Scene key={"myProfileInfoBack"} component={UserProfile} title={"myProfileInfoBack"}/>
                </Stack>
            </Router>
        )
    }
}
