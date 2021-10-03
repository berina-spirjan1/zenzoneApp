import React, {Component} from "react";
import {
    View,
    StyleSheet, Text, StatusBar, TouchableOpacity
} from "react-native";
import LottieView from 'lottie-react-native';
import {Toolbar} from "react-native-material-ui";
import {renderIf} from "../../utilities/CommonMethods";
import {isIphoneX} from "react-native-iphone-x-helper";
import {Actions} from "react-native-router-flux";

function challengeDetails(){
    Actions.challengeDetails()
}

function Congratulations(){

        return(
            <>
                <StatusBar
                    animated={true}
                    backgroundColor="#6285B3"/>
                {renderIf(isIphoneX(), <Toolbar style={{ container: { backgroundColor: '#93B4E5', marginTop: 50 } }}
                                                centerElement="Congratulations"/>)}
                {renderIf(!isIphoneX(), <Toolbar style={{ container: { backgroundColor: '#93B4E5' } }}
                                                 centerElement="Congratulations"/>)}
                <View style={styles.container}>
                    <Text style={styles.title}>congratulations</Text>
                    <LottieView
                        style={styles.lottie}
                        source={require("../../assets/images/congratulationsStar.json")}
                        autoPlay={true}
                        loop={true}/>
                    <Text style={styles.informationBox}>Thank you for participating in the daily challenge. You will soon receive feedback from the administration and the possibility of winning a badge.</Text>
                <TouchableOpacity style={styles.button}
                                  onPress={challengeDetails}>
                    <Text style={styles.buttonText}>GO BACK</Text>
                </TouchableOpacity>
                </View>
            </>

        )
}

export default Congratulations;

const styles = StyleSheet.create({
    container:{
        backgroundColor: '#93B4E5',
        flex: 1
    },
    informationBox:{
        fontFamily: 'Roboto_700Bold',
        fontSize: 20,
        padding: 20,
        marginTop: 250
    },
    lottie:{
        flex:1,
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft:0,
        marginTop: -70
    },
    title:{
        marginTop: 20,
        fontSize: 30,
        fontFamily: 'Roboto_700Bold',
        color: '#5a28ff',
        textTransform: 'uppercase',
        textAlign: 'center',
        marginBottom:40
    },
    button:{
        backgroundColor: '#5a28ff',
        height: 40,
        width: 100,
        borderRadius: 25,
        marginLeft: 220,
        padding:10
    },
    buttonText:{
        textAlign: 'center',
        fontWeight: 'bold'
    }
})
