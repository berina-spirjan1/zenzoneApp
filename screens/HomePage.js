import React, {Component} from "react";
import {View} from "react-native";
import {createAppContainer} from "react-navigation";
import {createDrawerNavigator} from "react-navigation-drawer";

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

    },
    bottomNavigationBar:{
        flex:1,
        backgroundColor:"",
        justifyContent:'flex-end'
    },
})

const styleDarkMode=StyleSheet.create({
    container:{

    }
})

export default createAppContainer(DrawerNavigation);
