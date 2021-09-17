import React, {Component} from "react";
import {Router, Scene, Stack} from "react-native-router-flux";
import DailyChallengeDetails from "../screens/DailyChallengeDetails";
import DoDailyChallenge from "../screens/DoDailyChallenge";
import Congratulations from "../screens/Congratulations";
import DailyChallengeCounter from "../screens/DailyChallengeCounter";



export default class RoutesForChallenge extends Component{
    render() {
        return(
            <Router>
                <Stack key={"root"} hideNavBar={true}>
                    <Scene key={"challengeDetails"} component={DailyChallengeDetails} title={"challengeDetails"} initial={true}/>
                    <Scene key={"doDaily"} component={DoDailyChallenge} title={"doDaily"}/>
                    <Scene key={"congratulations"} component={Congratulations} title={"congratulations"}/>
                    <Scene key={"waiting"} component={DailyChallengeCounter} title={"waiting"}/>
                </Stack>
            </Router>
        )
    }
}
