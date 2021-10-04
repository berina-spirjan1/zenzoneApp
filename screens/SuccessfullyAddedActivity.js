import React, {Component} from "react";
import {StatusBar, StyleSheet, Text, TouchableOpacity, View} from "react-native"
import LottieView from "lottie-react-native";
import {Toolbar} from "react-native-material-ui";
import {renderIf} from "../utilities/CommonMethods";
import {isIphoneX} from "react-native-iphone-x-helper";

export default class SuccessfullyAddedActivity extends Component{

    switchCreateActivitySuccessfullyAdded = () => this.props.navigation.navigate("fromForm")

    render() {
        return(
            <View style={styles.container}>
                <StatusBar
                    animated={true}
                    backgroundColor="#6285B3"/>
                {renderIf(isIphoneX(), <Toolbar style={{ container: { backgroundColor: '#93B4E5', marginTop: 50 } }}
                                                centerElement="Successfully added activity."/>)}
                {renderIf(!isIphoneX(), <Toolbar style={{ container: { backgroundColor: '#93B4E5' } }}
                                                 centerElement="Successfully added activity."/>)}
                <LottieView
                    style={styles.lottie}
                    source={require("../assets/images/successfullyAddedActivity.json")}
                    autoPlay={true}
                    loop={true}/>
                <Text style={styles.textBox}>Successfully added new activity!</Text>
                <TouchableOpacity style={styles.button}
                                  onPress={this.switchCreateActivitySuccessfullyAdded}>
                    <Text style={styles.buttonText}>Create new activity</Text>
                </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        backgroundColor: '#CBDBF2',
        flex: 1
    },
    lottie:{
        flex:1,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: -80
    },
    textBox:{
        fontSize: 22,
        fontFamily: 'Roboto_700Bold',
        marginTop: 400,
        textAlign: 'center'
    },
    button:{
        backgroundColor: '#93B4E5',
        height: 50,
        width: 190,
        borderRadius: 25,
        marginLeft: 160,
        padding:15,
        marginTop: 30,

    },
    buttonText:{
        textTransform: 'uppercase',
        fontWeight: 'bold'
    }
})
