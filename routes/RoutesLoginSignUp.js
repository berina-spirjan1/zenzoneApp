import React, { Component } from "react";
import {
    Router,
    Stack,
    Scene
} from 'react-native-router-flux';
import ForgotPassword from "../screens/ForgotPassword";
import Login from "../screens/login/Login";
import SignUp from "../screens/signUp/SignUp";


export default class RoutesLoginSignUp extends Component {
    render() {
        return(
            <Router>
                <Stack key="root" hideNavBar={true}>
                    <Scene key="login" component={Login} title="login" initial={true}/>
                    <Scene key="signup" component={SignUp} title="Register" />
                    <Scene key="forgotPassword" component={ForgotPassword} title={"forgotPassword"}/>
                </Stack>
            </Router>
        )
    }
}
