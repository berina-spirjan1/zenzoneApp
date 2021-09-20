import React, {Component} from "react";
import {StatusBar, StyleSheet, View} from "react-native";

import {Toolbar} from "react-native-material-ui";
import {CreateNewActivityForm} from "../components/createNewActivityComponents/CreateNewActivityForm";

export default class CreateNewActivity extends Component{
    constructor(props) {
        super();
    }

    render() {
        return(
            <View style={styles.container}>
                <StatusBar
                    animated={true}
                    backgroundColor="#6285B3"/>
                <Toolbar style={{ container: { backgroundColor: '#93B4E5' } }}
                         // leftElement="arrow-back"
                         centerElement="Activities"/>
                <CreateNewActivityForm/>

            </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        fontFamily: 'Roboto_400Regular',
        backgroundColor: '#CBDBF2',
        flex:1
    }
})
