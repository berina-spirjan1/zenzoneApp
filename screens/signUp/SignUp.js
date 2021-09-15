import React, { Component } from "react";
import { StatusBar } from "react-native";

import { Actions } from "react-native-router-flux";
import { Provider } from "react-redux";
import store from "../../redux/store";
import { SignUpForm } from "../../components/signUpComponents/SignUpForm";

export default class SignUp extends Component {
    constructor(props) {
        super();
    }

    login() {
        Actions.login()
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

