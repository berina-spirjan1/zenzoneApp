import React, {Component} from 'react';
import {StatusBar} from 'react-native';
import {Toolbar} from "react-native-material-ui";
import {ChangePasswordForm} from "../components/changePasswordComponents/ChangePasswordForm";
import {isIphoneX} from "react-native-iphone-x-helper";
import {renderIf} from "../utilities/CommonMethods";

export default class ChangePassword extends Component{
    constructor(props) {
        super();
    }

    //navigating to page that contains information's about logged user
    switchToMyProfileInfo = () => this.props.navigation.navigate("switchToMyProfileInfo")

    render() {
        return (
            <>
                <StatusBar animated={true}
                           backgroundColor="#6285B3"/>
                {renderIf(isIphoneX(), <Toolbar style={{ container: {backgroundColor: '#93B4E5', marginTop: 50}}}
                                                leftElement="arrow-back"
                                                centerElement="Change password"
                                                onLeftElementPress={this.switchToMyProfileInfo}/> )}
                {renderIf(!isIphoneX(), <Toolbar style={{ container: {backgroundColor: '#93B4E5'}}}
                                                 leftElement="arrow-back"
                                                 centerElement="Change password"
                                                 onLeftElementPress={this.switchToMyProfileInfo}/>)}
                <ChangePasswordForm/>
            </>

        )
    }
}
