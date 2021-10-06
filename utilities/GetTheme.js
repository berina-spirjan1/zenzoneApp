import React from "react";
import {AsyncStorage} from "react-native";
import {USER} from "../configuration/config";


export async function getTheme (){

    let theme = ''

    let token = await AsyncStorage.getItem('jwt')
    token = JSON.parse(token)

    fetch(`${USER}`, {
        method: 'GET',
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json",
                'Authorization': 'Bearer ' + token
            }
        })
            .then((response) => response.json())
            .then((responseJson) => {
                theme = responseJson.theme
                theme = JSON.stringify(theme)
                return theme
            })
            .catch((error) => {
                console.error(error);
            });
}

