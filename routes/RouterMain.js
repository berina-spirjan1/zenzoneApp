import React, {Component} from "react";
import {Router, Scene, Stack} from "react-native-router-flux";
import Splash from "../screens/Splash";
import BottomNavigationBar from "../components/bottomNavigationBar/BottomNavigationBar";


export default class RouterMain extends Component{
    render() {
        return(
            <Router>
                <Stack key={"root"} hideNavBar={true}>
                    <Scene key={"fromSplashScreen"} component={Splash} initial={true}/>
                    <Scene key={"toBottomNavigationBar"} component={BottomNavigationBar}/>
                </Stack>
            </Router>
        )
    }
}
