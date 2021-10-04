import React, {Component} from "react";
import {StatusBar} from "react-native";
import {Provider} from "react-redux";
import store from "../../redux/store";
import {SignUpForm} from "../../components/signUpComponents/SignUpForm";

export default class SignUp extends Component {
    constructor(props) {
        super();
    }

    render() {

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

