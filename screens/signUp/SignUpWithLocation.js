import React, { Component } from "react";
import { Provider } from "react-redux";
import store from "../../redux/store";
import { SignUpWithLocationForm } from "../../components/signUpComponents/SignUpWithLocationForm";


export default class SignUpWithLocation extends Component{
    constructor(props) {
        super();
    }

    render(){

        return(
            <Provider store={store}>
               <SignUpWithLocationForm/>
            </Provider>
        )
    }
}
