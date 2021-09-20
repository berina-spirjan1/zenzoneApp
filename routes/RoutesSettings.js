import React, {Component} from "react";
import {Router, Scene, Stack} from "react-native-router-flux";
import Settings from "../screens/userProfile/Settings";
import Language from "../screens/Language";
import UserHelp from "../screens/userProfile/UserHelp";
import MyProfileInfo from "../screens/userProfile/MyProfileInfo";
import UserProfile from "../screens/userProfile/UserProfile";


export default class RoutesSettings extends Component{
    render() {
        return(
            <Router>
                <Stack key={"root"} hideNavBar={true}>
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
