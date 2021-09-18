import React, { Component } from "react";
import {
    Router,
    Stack,
    Scene
} from 'react-native-router-flux';
import ForgotPassword from "../screens/ForgotPassword";
import Login from "../screens/login/Login";
import SignUp from "../screens/signUp/SignUp";
import {SignUpForm} from "../components/signUpComponents/SignUpForm";
import {LoginForm} from "../components/loginComponents/LoginForm";
import UserProfile from "../screens/userProfile/UserProfile";
import CheckEmail from "../screens/CheckEmail";


export default class RoutesLoginSignUp extends Component {
    render() {
        return(
            <Router>
                <Stack key="root" hideNavBar={true}>
                    <Scene key="loginForm" component={LoginForm} title="login" initial={true}/>
                    <Scene key={"switchLoginToUser"} component={UserProfile} title={"userProfile"}/>
                    <Scene key="signup" component={SignUp} title="Register" />
                    <Scene key="signupForm" component={SignUpForm} title={"SignUpForm"}/>
                    <Scene key="forgotPassword" component={ForgotPassword} title={"forgotPassword"}/>
                    <Scene key={"checkEmail"} component={CheckEmail} title={"checkEmail"}/>
                    <Scene key={"login"} component={Login} title={"Login"}/>
                </Stack>
            </Router>
        )
    }
}
