import React, {Component} from "react";
import CountDown from "react-native-countdown-component";

import {
    View,
    Text,
    StyleSheet, StatusBar
} from "react-native";
import LottieView from "lottie-react-native";
import { Toolbar } from "react-native-material-ui";
import { Actions } from "react-native-router-flux";


export default class DailyChallengeCounter extends Component{

    waiting(){
        Actions.waiting()
    }

    render() {

        //we take the current time so that we can calculate in which period the daily challenge should be published
        let hours = new Date().getHours();
        let min = new Date().getMinutes();
        let sec = new Date().getSeconds();

        return(
            <View style={styles.container}>
                <StatusBar
                    animated={true}
                    backgroundColor="#6285B3"/>
                <Toolbar style={{ container: { backgroundColor: '#93B4E5' } }}
                         centerElement="Waiting for challenge"/>

                <CountDown
                    //we count the remaining time until the daily challenge to be announced at 7 p.m.
                    until={((23-hours+7)%24)*60*60+(60-min)*60+sec}
                    onFinish={this.waiting}
                    size={30}
                    style={styles.countdown}
                    digitStyle={{backgroundColor: '#3E65A1'}}
                    digitTxtStyle={{color: '#FFF'}}
                    timeToShow={['D','H','M', 'S']}
                    timeLabels={{d:'days', h:'hours', m: 'minutes', s: 'seconds'}}
                />
                <LottieView
                    style={styles.lottie}
                    source={require("../assets/images/challengeAnimation.json")}
                    autoPlay={true}
                    loop={true}/>
                <Text style={styles.info}>Thank you for your interest. The new daily challenge begins for</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        backgroundColor: '#93B4E5',
        flex: 1
    },
    countdown:{
        textAlign: 'center',
        justifyContent: 'center',
        marginTop: 390,

    },
    lottie:{
        flex:1,
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft: -40,
        marginTop: -90,
        marginRight: 10
    },
    info:{
        padding: 35,
        fontSize: 20,
        marginTop: -200,
        fontWeight: 'bold'
    }
})
