import React, {Component} from "react";
import {
    Router,
    Scene,
    Stack
} from "react-native-router-flux";
import SuccessfullyAddedActivity from "../screens/SuccessfullyAddedActivity";
import {CreateNewActivityForm} from "../components/createNewActivityComponents/CreateNewActivityForm";
import CreateNewActivity from "../screens/CreateNewActivity";
import WaitingToPostActivity from "../screens/WaitingToPostActivity";
import AllCategories from "../screens/AllCategories";
import RoutesHomePage from "./RoutesHomePage";
import RoutesLoginSignUp from "./RoutesLoginSignUp";
import RoutesLeaderboardUser from "./RoutesLeaderboardUser";
import RoutesMyActivity from "./RoutesMyActivity";
import RoutesMyProfileInfo from "./RoutesMyProfileInfo";
import RoutesProfile from "./RoutesProfile";
import RoutesSettings from "./RoutesSettings";
import RoutesForChallenge from "./RoutesForChallenge";


export default class RoutesCreateActivity extends Component {
    render() {
        return(
            <Router>
                <Stack key={"RoutesCreateActivity"} hideNavBar={true}>
                    <Scene key={"routesLogin"} component={RoutesLoginSignUp}/>
                    <Scene key={"routesForChallenge"} component={RoutesForChallenge}/>
                    <Scene key={"routesLeaderboardUser"} component={RoutesLeaderboardUser}/>
                    <Scene key={"routesMyActivity"} component={RoutesMyActivity}/>
                    <Scene key={"routesHomePage"} component={RoutesHomePage}/>
                    <Scene key={"routesMyProfileInfo"} component={RoutesMyProfileInfo}/>
                    <Scene key={"routesProfile"} component={RoutesProfile}/>
                    <Scene key={"routesSettings"} component={RoutesSettings}/>

                    <Scene key={"switchCreateActivitySuccessfullyAdded"} component={CreateNewActivity} title={"switchCreateActivitySuccessfullyAdded"} initial={true}/>
                    <Scene key={"switchSuccessfullyAddedCreateActivity"} component={SuccessfullyAddedActivity} title={"switchSuccessfullyAddedCreateActivity"}/>
                    <Scene key={"switchToCreateActivity"} component={WaitingToPostActivity} title={"switchToCreateActivity"}/>
                    <Scene key={"seeAllCategories"} component={AllCategories}/>
                    <Scene key={"fromForm"} component={CreateNewActivityForm}/>
                </Stack>
            </Router>
        )
    }

}
