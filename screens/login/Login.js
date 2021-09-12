import React, {Component} from 'react';
import {Alert} from 'react-native';
import {Actions} from 'react-native-router-flux';
import store from "../../redux/store";
import {Provider} from "react-redux";
import {LoginForm} from "../../components/loginComponents/LoginForm";


export default class Login extends Component {
    constructor(props) {
        super();
    }

    signup() {
        Actions.signup()
    }

    forgotPassword(){
        Actions.forgotPassword()
    }

    validate = (text) => {
        console.log(text);
        let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;
        if (reg.test(text) === false) {
            Alert.alert("Email is Not Correct");
            this.setState({ email: text })
            return false;
        }
        else {
            this.setState({ email: text })
            console.log("Email is Correct");
        }
    }

    render() {

        // //creating actions for redux
        // //action for started login
        // store.dispatch(authStarted())
        //
        // //action that means something went wrong at logging in
        // store.dispatch(authFailed())
        //
        // //action for successfully logging in
        // store.dispatch(authSuccess());
        //
        // //this method will call every time when store changes
        // const unsubscribe = store.subscribe(() =>{
        //     console.log('Store changed! ',store.getState());
        // })
        //

        return (
            <Provider store={store}>
                <LoginForm/>
            </Provider>

        )
    }
}

