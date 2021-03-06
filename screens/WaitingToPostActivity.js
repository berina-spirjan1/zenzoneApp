import React, {Component} from "react";
import {StatusBar, StyleSheet, Text, View} from "react-native";
import {Toolbar} from "react-native-material-ui";
import LottieView from "lottie-react-native";
import {isIphoneX} from "react-native-iphone-x-helper";
import {renderIf} from "../utilities/CommonMethods";


export default class WaitingToPostActivity extends Component{
    render(){
        return(
            <View style={styles.container}>
                <StatusBar animated={true}
                           backgroundColor="#6285B3"/>
                {renderIf(isIphoneX(), <Toolbar style={{ container: { backgroundColor: '#93B4E5', marginTop: 50 }}}
                                                centerElement="Sorry"/>)}
                {renderIf(!isIphoneX(), <Toolbar style={{ container: { backgroundColor: '#93B4E5' }}}
                                                 centerElement="Sorry"/>)}
                <LottieView
                    style={styles.lottie}
                    source={require("../assets/images/waitingToPostActivity.json")}
                    autoPlay={true}
                    loop={true}/>
                <Text style={styles.text}>Please login to your account to post new activity.</Text>
                <Text style={styles.team}>Your ZenZone team</Text>
            </View>
        )
    }
}


const styles = StyleSheet.create({
    container:{
        backgroundColor: '#cbdbf2',
        flex: 1
    },
    lottie:{
        flex:1,
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft: 20,
        marginTop: -50
    },
    text:{
        fontSize: 20,
        padding:20,
        marginTop: 350,
        fontWeight: 'bold',
        textAlign: 'right',
        marginRight: 20
    },
    team:{
        fontSize: 14,
        marginLeft: 200,
        fontWeight: 'bold',
        marginTop: 20,
        fontStyle: 'italic'
    }
})
