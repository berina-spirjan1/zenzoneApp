import React, {Component} from "react";
import {
    View,
    StyleSheet, StatusBar
} from "react-native";
import {createAppContainer} from "react-navigation";
import {createDrawerNavigator} from "react-navigation-drawer";
import {Toolbar} from "react-native-material-ui";

export default class HomePage extends Component{
    constructor(props) {
        super();
    }

    render() {
        return(
            <>
                <StatusBar
                    animated={true}
                    backgroundColor="#6285B3"/>
                <Toolbar style={{ container: {backgroundColor: '#93B4E5'}}}
                    leftElement="menu"
                    centerElement="Activities"
                    searchable={{
                        autoFocus: true,
                        placeholder: 'Search',
                    }}
                    rightElement={{
                        menu: {
                            icon: "more-vert",
                            labels: ["Most popular activities", "Daily challenge", "Leaderboard", "Theme"]
                        }
                    }}
                    onRightElementPress={ (label) => { console.log(label) }}/>
                <View>

                </View>
            </>

        )
    }
}


const styleLightMode=StyleSheet.create({
    container:{

    },
    bottomNavigationBar:{
        flex:1,
        justifyContent:'flex-end'
    },
})

const styleDarkMode=StyleSheet.create({
    container:{

    }
})

