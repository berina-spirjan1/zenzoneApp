import React, { Component } from 'react';
import { StatusBar } from 'react-native';
import { Toolbar } from "react-native-material-ui";
import { ChangePasswordForm } from "../components/changePasswordComponents/ChangePasswordForm";

export default class ChangePassword extends Component{
    constructor(props) {
        super();
    }

    render() {
        return (
            <>
                <StatusBar animated={true}
                           backgroundColor="#6285B3"/>
                <Toolbar style={{ container: {backgroundColor: '#93B4E5'}}}
                         centerElement="Change password"/>
                <ChangePasswordForm/>
            </>

        )
    }
}
