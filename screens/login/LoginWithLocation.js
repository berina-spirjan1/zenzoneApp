import React, { Component } from "react";
import { Provider } from "react-redux";
import store from "../../redux/store";
import { LoginWithLocationForm } from "../../components/loginComponents/LoginWithLocationForm";

export default class LoginWithLocation extends Component{

    constructor(props) {
        super();
    }

    render() {
        return(
            <Provider store={store}>
                <LoginWithLocationForm/>
            </Provider>
        )
    }
}


