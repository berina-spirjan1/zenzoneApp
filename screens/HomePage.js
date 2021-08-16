import React, {Component} from "react";
import {View} from "react-native";
import {createAppContainer} from "react-navigation";
import {createDrawerNavigator} from "react-navigation-drawer";
import {Dimensions} from "react-native";
import {Feather} from "@expo/vector-icons";

import Login from "./Login";
import SignUp from "./SignUp";
import SideBar from "../components/SideBar";

export default class HomePage extends Component{
    constructor(props) {
        super();
    }

    render() {
        return(
            <View>

            </View>
        )
    }
}


const DrawerNavigation=createDrawerNavigator({
        //todo add menu items for drawer side menu
},{
    contentComponent: props => <SideBar {...props} />
})


const styleLightMode=StyleSheet.create({
    container:{

    }
})

const styleDarkMode=StyleSheet.create({
    container:{

    }
})

export default createAppContainer(DrawerNavigation);
