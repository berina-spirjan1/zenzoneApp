import React, {Component} from 'react';
import {View} from "react-native";
import LottieView from 'lottie-react-native';
import {Image, Text} from "react-native";

export default class Splash extends Component{
    constructor(props) {
        super();
    }
    render() {
        return(

            <View style={styles.lottie}>
                <LottieView
                    style={{flex: 1}}
                    source={require("../assets/men.json")}
                    autoPlay
                    loop={true}/>
                <Image
                    style={styles.zenzone}
                    source={require('../assets/Splash_screen_title.png')}/>
            </View>
        )
    }
}
const styles={
    lottie:{
        flex:1,
        width: 300,
        height: 300
    },
    zenzone: {
        marginTop: 500,
        marginLeft: 25
    }
}

