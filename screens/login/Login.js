import React, {Component} from 'react';
import store from "../../redux/store";
import {Provider} from "react-redux";
import {LoginForm} from "../../components/loginComponents/LoginForm";


export default class Login extends Component {
    constructor(props) {
        super();
    }

    render() {

        return (
            <Provider store={store}>
                <LoginForm/>
            </Provider>

        )
    }
}

