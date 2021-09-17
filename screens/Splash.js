import React, {Component} from 'react';
import {View} from "react-native";
import LottieView from 'lottie-react-native';
import ZenZoneTitle from "../assets/icons/ZenZoneTitle";

export default class Splash extends Component{
    render() {

        return(

            <View style={styles.container}>
                <LottieView
                    style={styles.lottie}
                    source={require("../assets/images/men.json")}
                    autoPlay={true}
                    loop={true}/>
                {/*todo change template for background in adobe xd*/}
                {/*<BackgroundThemeSplashScreen/>*/}
                <ZenZoneTitle style={styles.title}/>

            </View>
        )
    }
}

const styles={
    container:{
        backgroundColor: '#93B4E5',
        flex: 1
    },
    lottie:{
        flex:1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        marginTop: 460,
        marginLeft: 50
    }
}

