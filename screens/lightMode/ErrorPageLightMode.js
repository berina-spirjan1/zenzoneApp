import React, {Component} from "react";
import {View,Text} from "react-native";
import RobotPictureLightMode from "../../components/RobotPictureLightMode";


export default class ErrorPageLightMode extends Component{
    constructor(props) {
        super();
    }

    render() {
    return(
        <View>
            <RobotPictureLightMode style={styles.robotPicture}/>
            <Text style={styles.text}>Sorry, we can't find the page you're looking for.</Text>
        </View>
    )
}
}

const styles={
    robotPicture:{
        margin:10
    },
    text:{
        textAlign: 'left',
        fontSize: 20,
        margin: 17
    }
}
