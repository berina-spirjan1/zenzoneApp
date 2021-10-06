import React, {Component} from "react";
import {Toolbar} from "react-native-material-ui";
import {Provider} from "react-redux";

import {ForgotPasswordForm} from "../components/forgotPasswordComponents/ForgotPasswordForm";
import store from "../redux/store";
import {renderIf} from "../utilities/CommonMethods";
import {isIphoneX} from "react-native-iphone-x-helper";


export default class ForgotPassword extends Component{
    constructor(props) {
        super();
    }

    login = () => this.props.navigation.navigate("login");

    render() {
        return(
                <Provider store={store}>
                    {renderIf(isIphoneX(),  <Toolbar style={{ container: { backgroundColor: '#93B4E5', marginTop: 50 }}}
                                                     leftElement="arrow-back"
                                                     centerElement=" Forgot password"
                                                     onLeftElementPress={this.login}/>)}
                    {renderIf(!isIphoneX(),  <Toolbar style={{ container: { backgroundColor: '#93B4E5' }}}
                                                      leftElement="arrow-back"
                                                      centerElement=" Forgot password"
                                                      onLeftElementPress={this.login}/>)}
                    <ForgotPasswordForm/>
                </Provider>
                )
    }
}
