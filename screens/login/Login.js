import React, {Component} from 'react';
import store from "../../redux/store";
import {Provider} from "react-redux";
import {LoginForm} from "../../components/loginComponents/LoginForm";
import {AsyncStorage} from "react-native";
import {RoutesProfileStack} from "../../routes/RoutesProfileStack";
import {renderIf} from "../../utilities/CommonMethods";
import UserProfile from "../userProfile/UserProfile";


export default class Login extends Component {
    constructor(props) {
        super();
    }
    state={
        token: null
    }

    async componentDidMount() {
        let tokenHelper = await AsyncStorage.getItem('jwt')
        tokenHelper = JSON.parse(tokenHelper)

        this.setState({token: tokenHelper})
    }

    render() {

        return (
            <Provider store={store}>
                {renderIf(this.state.token===null,
                    <LoginForm/>
                )}
                {renderIf(this.state.token!==null,
                    <RoutesProfileStack/>
                )}
            </Provider>

        )
    }
}

