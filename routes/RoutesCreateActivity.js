import React, {Component} from "react";
import {
    Router,
    Scene,
    Stack
} from "react-native-router-flux";
import SuccessfullyAddedActivity from "../screens/SuccessfullyAddedActivity";
import {CreateNewActivityForm} from "../components/createNewActivityComponents/CreateNewActivityForm";


export default class RoutesCreateActivity extends Component {
    render() {
        return(
            <Router>
                <Stack key={"root"} hideNavBar={true}>
                    <Scene key={"switchCreateActivitySuccessfullyAdded"} component={CreateNewActivityForm} title={"switchCreateActivitySuccessfullyAdded"} initial={true}/>
                    <Scene key={"switchSuccessfullyAddedCreateActivity"} component={SuccessfullyAddedActivity} title={"switchSuccessfullyAddedCreateActivity"}/>
                </Stack>
            </Router>
        )
    }

}
