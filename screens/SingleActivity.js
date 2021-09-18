import React, {Component} from "react";
import {
    View,
    Text,
    StyleSheet,
    Image,
    SafeAreaView,
    ScrollView, Dimensions, StatusBar
} from "react-native";
import {Toolbar} from "react-native-material-ui";
import {SingleActivityGetInfo} from "../components/activityComponents/SingleActivityGetInfo";

export default class SingleActivity extends Component{
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
                         leftElement="arrow-back"
                         centerElement="Activity title"/>
                <SingleActivityGetInfo/>

            </View>
        )
    }
}


const styles = StyleSheet.create({
    container:{
        backgroundColor: '#93B4E5',
        flex: 1
    }
})
