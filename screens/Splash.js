import React, {Component} from 'react';
import {View} from "react-native";
import LottieView from 'lottie-react-native';
import ZenZoneTitle from "../components/ZenZoneTitle";

function Splash(){

    return(

        <View>
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
export default Splash;

const styles={
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

