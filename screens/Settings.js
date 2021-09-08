import React, {Component} from "react";
import {
    View,
    StyleSheet,
    Text, StatusBar
} from "react-native";
import {Toolbar} from "react-native-material-ui";
import UserInfoComponent from "../components/UserInfoComponent";


export default class Settings extends Component{
    constructor(props) {
        super();
    }

    render() {
        return(
            <View style={styles.container}>
                <StatusBar
                    animated={true}
                    backgroundColor="#334A6D"/>
                <Toolbar style={{ container: { backgroundColor: '#93B4E5' } }}
                         leftElement="arrow-back"
                         centerElement="Settings"/>
                         <UserInfoComponent/>
            </View>
        )
    }

}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#cbdbf2'
    }
})
