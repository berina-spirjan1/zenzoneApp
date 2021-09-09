import React, {Component} from "react";
import {Router, Stack, Scene} from 'react-native-router-flux';
import Login from "../screens/Login";
import SignUp from "../screens/SignUp";
import ForgotPassword from "../screens/ForgotPassword";

export default class RoutesLoginSignUp extends Component {
    render() {
        return(
            <Router>
                <Stack key="root" hideNavBar={true}>
                    <Scene key="login" component={Login} title="Login" initial={true}/>
                    <Scene key="signup" component={SignUp} title="Register"/>
                    <Scene key="forgotPassword" component={ForgotPassword} title={"forgotPassword"}/>
                </Stack>
            </Router>
        )
    }
}
