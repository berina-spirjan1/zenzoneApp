import React, {Component} from "react";
import {Router, Scene, Stack} from "react-native-router-flux";
import HomePage from "../screens/HomePage";
import SingleActivity from "../screens/SingleActivity";
import UserProfile from "../screens/userProfile/UserProfile";


export default class RoutesHomePage extends Component{
    render() {
        return(
            <Router>
                <Stack key={"root"} hideNavBar={true}>
                    <Scene key={"homePageActivities"} component={HomePage} title={"Activities"} initial={true}/>
                    <Scene key={"singleActivity"} component={SingleActivity} title={"Single activity"}/>
                    <Scene key={"userProfile"} component={UserProfile} title={"User profile"}/>
                </Stack>
            </Router>
        )
    }
}
