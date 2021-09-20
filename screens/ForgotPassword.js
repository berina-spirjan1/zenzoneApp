import React, {Component} from "react";
import {Toolbar} from "react-native-material-ui";
import {Provider} from "react-redux";

import {ForgotPasswordForm} from "../components/forgotPasswordComponents/ForgotPasswordForm";
import store from "../redux/store";


export default class ForgotPassword extends Component{
    constructor(props) {
        super();
    }

    render() {
        return(
            <Provider store={store}>
                <Toolbar style={{ container: { backgroundColor: '#93B4E5' }}}
                         centerElement=" Forgot password"/>
                <ForgotPasswordForm/>
            </Provider>
        )
                }
}
