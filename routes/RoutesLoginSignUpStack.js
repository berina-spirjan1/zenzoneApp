import React from "react";
import {createNativeStackNavigator} from "react-native-screens/native-stack";
import SignUp from "../screens/signUp/SignUp";
import { SignUpForm } from "../components/signUpComponents/SignUpForm";
import ForgotPassword from "../screens/ForgotPassword";
import CheckEmail from "../screens/CheckEmail";
import { LoginWithLocationForm } from "../components/loginComponents/LoginWithLocationForm";
import { SignUpWithLocationForm } from "../components/signUpComponents/SignUpWithLocationForm";
import { LoginForm} from "../components/loginComponents/LoginForm";
import { RoutesProfileStack } from "./RoutesProfileStack";
import Login from "../screens/login/Login";


const Stack = createNativeStackNavigator()

export const RoutesLoginSignUpStack = () =>{
    return(
            <Stack.Navigator initialRouteName={"loginForm"}>
                <Stack.Screen name={"switchLoginToUser"}
                              component={RoutesProfileStack}
                              options={{
                                  headerShown: false
                              }}/>
                <Stack.Screen name={"signup"}
                              component={SignUp}
                              options={{
                                  headerShown: false
                              }}/>
                <Stack.Screen name={"signupForm"}
                              component={SignUpForm}
                              options={{
                                  headerShown: false
                              }}/>
                <Stack.Screen name={"forgotPassword"}
                              component={ForgotPassword}
                              options={{
                                  headerShown: false
                              }}/>
                <Stack.Screen name={"checkEmail"}
                              component={CheckEmail}
                              options={{
                                  headerShown: false
                              }}/>
                <Stack.Screen name={"loginWithLocationForm"}
                              component={LoginWithLocationForm}
                              options={{
                                  headerShown: false
                              }}/>
                <Stack.Screen name={"signUpWithLocationForm"}
                              component={SignUpWithLocationForm}
                              options={{
                                  headerShown: false
                              }}/>
                <Stack.Screen name={"loginForm"}
                              component={LoginForm}
                              options={{
                                  headerShown: false
                              }}/>
                <Stack.Screen name={"login"}
                              component={Login}
                              options={{
                                  headerShown: false
                              }}/>
            </Stack.Navigator>
    )
}
