import React, {Component} from 'react';
import {View} from "react-native";
import LottieView from 'lottie-react-native';
import {Image, Text} from "react-native";
import ZenZoneTitle from "../components/ZenZoneTitle";
import BackgroundThemeSplashScreen from "../components/BackgroundThemeSplashScreen";

export default class Splash extends Component{
    constructor(props) {
        super();
    }
    render() {
        return(

           <View>
                <LottieView style={styles.lottie}
                    style={{flex: 1}}
                    source={require("../assets/men.json")}
                    autoPlay
                    loop={true}/>
               {/*todo change template for background in adobe xd*/}
               {/*<BackgroundThemeSplashScreen/>*/}
                <ZenZoneTitle style={styles.title}/>

            </View>
        )
    }
}
const styles={
    lottie:{
        flex:1,
        width: 200,
        height: 200,
        marginLeft:25,
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        marginTop: 460,
        marginLeft: 50
    }
}

