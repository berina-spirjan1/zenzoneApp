import React, {Component} from "react";
import {
    View,
    StyleSheet,
    Image,
    Text
} from "react-native";

export default class LogoutSplashScreen extends Component{
    render() {
        return(
            <View style={styles.container}>
                <Image source={require('../assets/images/team1.jpg')}
                       style={styles.header}/>
                <Image source={require('../assets/images/zendevLogo.png')}
                       style={styles.zendevLogo}/>
                <Text style={styles.quote}>Coming together is a beginning, staying together is progress, and working together is success.</Text>
                <Text style={styles.seeU}>See you soon.</Text>
                <Text style={styles.zenzoneTeam}>Your ZenZone team</Text>
                <Image source={require('../assets/images/team2.png')}
                       style={styles.footer}/>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        backgroundColor: 'white',
        flex: 1
    },
    header:{
        height: 220,
        width: 380
    },
    zendevLogo: {
        height: 70,
        width: 150,
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 100
    },
    footer:{
        height: 220,
        width: 380
    },
    quote:{
        padding: 20,
        marginTop:-10,
        marginBottom:0,
        fontFamily: 'Roboto_500Medium'
    },
    seeU:{
        textAlign: 'right',
        marginRight: 22,
        fontFamily: 'Roboto_100Thin_Italic'
    },
    zenzoneTeam:{
        textAlign: 'right',
        marginRight: 22,
        marginBottom: 10,
        fontFamily: 'Roboto_100Thin_Italic'
    }
})
