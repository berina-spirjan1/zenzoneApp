import React, {Component, useState} from "react";
import {
    Dimensions,
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
    Alert
} from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";

import {Actions} from "react-native-router-flux";
import Cload from "../../assets/icons/Cload";
import Icon from "../../assets/icons/Icon";
import {API_URL, LOGIN, REGISTER} from "../../configuration/config";
import {Provider} from "react-redux";
import store from "../../redux/store";
import {authFailed, authStarted, authSuccess} from "../../redux/actions";
import {SignUpForm} from "./SignUpForm";

export default class SignUp extends Component {
    constructor(props) {
        super();
    }

    login() {
        Actions.login()
    }

    validate = (text) => {
        console.log(text);
        let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;
        if (reg.test(text) === false) {
            console.log("Email is Not Correct");
            this.setState({ email: text })
            return false;
        }
        else {
            this.setState({ email: text })
            console.log("Email is Correct");
        }
    }

    render() {

        // const onChangeHandler = () => {
        //     setIsLogin(!isLogin);
        //     setMessage('');
        // }
        //
        // const onLoggedIn = token =>{
        //     fetch(`${REGISTER}`,{
        //         method: 'POST',
        //         headers:{
        //             "Content-Type": "application/json",
        //             "Accept": "application/json",
        //         },
        //     })
        //         .then(async res => {
        //             try{
        //                 const jsonRes = await res.json();
        //                 if(res.status===200){
        //                     store.dispatch(authSuccess());
        //                 }
        //             }
        //             catch (err){
        //                 console.log(err);
        //             }
        //         })
        //         .catch(err =>{
        //             console.log(err);
        //         });
        // }
        // const getMessage = () =>{
        //     const status = isError ? `Error: ` : `Success: `;
        //     return status + message;
        // }


        return (
            <Provider store={store}>
                <StatusBar
                    animated={true}
                    backgroundColor="#334A6D"/>
                <SignUpForm/>
            </Provider>

        );
    }
}

