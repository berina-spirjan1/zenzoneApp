import React, {Component} from "react";
import {View, Text, Button, Alert} from "react-native";
import RobotPictureLightMode from "../../components/RobotPictureLightMode";
import AppLoading from 'expo-app-loading';
import { useFonts, Inter_600SemiBold } from '@expo-google-fonts/inter';

export default class ErrorPageLightMode extends Component{
    constructor(props) {
        super();
    }
    render() {
    return(
        <View>
            <RobotPictureLightMode style={styles.robotPicture}/>
            <Text style={styles.title}>Something went wrong</Text>
            <Text style={styles.text}>Sorry, we can't find the page you're looking for.</Text>
            <View style={styles.button}>
                <Button
                    title="go back"
                    color="#93b4e5"
                    width={120}
                    //onPress={() => this.props.navigation.navigate('')}
                />
            </View>
        </View>
    )
}
}

const styles={
    robotPicture:{
        margin:10
    },
    title:{
        fontSize:30,
        color:'#000000',
        textShadowColor: 'rgba(255, 255, 255, 255)',
        textShadowOffset: {width: -1, height: 1},
        textShadowRadius: 10,
        margin:17,
        fontWeight: 'bold'
    },
    text:{
        textAlign: 'left',
        fontSize: 20,
        margin: 17,
        textShadowColor: 'rgba(255, 255, 255, 0.75)',
        textShadowOffset: {width: -2, height: 1},
        textShadowRadius: 10
    },
    button:{
        margin:17,
        bottom:-20,
        width:120,
        textAlign: 'center',
        borderRadius: 20,
        shadowColor: "#ffffff",
        shadowOffset: {
            width: 0,
            height: 2,
        },

        shadowOpacity: 1,
        shadowRadius: 5,
        elevation: 5
    }
}
