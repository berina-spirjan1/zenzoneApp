import React, {Component} from "react";
import {
    Router,
    Scene,
    Stack
} from "react-native-router-flux";
import CreateNewActivity from "../screens/CreateNewActivity";
import SuccessfullyAddedActivity from "../screens/SuccessfullyAddedActivity";


export default class RoutesCreateActivity extends Component {
    render() {
        return(
            <Router>
                <Stack key={"root"} hideNavBar={true}>
                    <Scene key={"createActivity"} component={CreateNewActivity} title={"createActivity"} initial={true}/>
                    <Scene key={"successfullyAdded"} component={SuccessfullyAddedActivity} title={"successfullyAdded"}/>
                </Stack>
            </Router>
        )
    }

}
