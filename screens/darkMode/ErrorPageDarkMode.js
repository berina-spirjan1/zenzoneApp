import React, {Component} from "react";
import {View,Text,Button} from "react-native";
import RobotPictureDarkMode from "../../components/RobotPictureDarkMode";
import {Alert} from "react-native";


export default class ErrorPageDarkMode extends Component{
    constructor(props) {
        super();
    }

    render() {
        return(
            <View>
                <RobotPictureDarkMode style={styles.robotPicture}/>
                <Text style={styles.title}>Something went wrong</Text>
                <Text style={styles.text}>Sorry, we can't find the page you're looking for.</Text>
                <View style={styles.button}>
                    <Button
                        title="go back"
                        color="#494875"
                        onPress={() => Alert.alert('Go back')}
                    />
                </View>
            </View>

        )
    }
}

const styles={
    robotPicture:{
        margin:10,
    },
    title:{
        fontSize:30,
        color:'#ffffff',
        textShadowColor: 'rgba(0, 0, 0, 1)',
        textShadowOffset: {width: -3, height: 1},
        textShadowRadius: 10,
        margin:17,
        fontWeight: 'bold'
    },
    text:{
        textAlign: 'left',
        fontSize: 20,
        margin: 17,
        color:'#ffffff',
        textShadowColor: 'rgba(0, 0, 0, 0.75)',
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
