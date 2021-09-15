import React, {Component} from "react";
import {
    View,
    StyleSheet, Text, StatusBar, TouchableOpacity
} from "react-native";
import LottieView from 'lottie-react-native';
import AnimatedText from "react-native-paper/src/components/Typography/AnimatedText";
import {Toolbar} from "react-native-material-ui";
import {Actions} from "react-native-router-flux";


export default class Congratulations extends Component{

    goHome(){
        Actions.goHome()
    }
    render() {
        return(
            <>
                <StatusBar
                    animated={true}
                    backgroundColor="#6285B3"/>
                <Toolbar style={{ container: { backgroundColor: '#93B4E5' } }}
                         centerElement="My activities"/>
                <View style={styles.container}>
                    <Text style={styles.title}>congratulations</Text>
                    <LottieView
                        style={styles.lottie}
                        source={require("../assets/images/congratulationsStar.json")}
                        autoPlay={true}
                        loop={true}/>
                    <Text style={styles.informationBox}>Thank you for participating in the daily challenge. You will soon receive feedback from the administration and the possibility of winning a badge.</Text>
                <TouchableOpacity style={styles.button}
                                  onPress={this.goHome}>
                    <Text style={styles.buttonText}>GO BACK</Text>
                </TouchableOpacity>
                </View>
            </>

        )
    }
}

const styles = StyleSheet.create({
    container:{
        backgroundColor: '#93B4E5',
        flex: 1
    },
    informationBox:{
        fontFamily: 'Roboto_700Bold',
        fontSize: 20,
        padding: 20,
        marginTop: 300
    },
    lottie:{
        flex:1,
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft:0,
        marginTop: -60
    },
    title:{
        marginTop: 50,
        fontSize: 30,
        fontFamily: 'Roboto_700Bold',
        color: '#5a28ff',
        textTransform: 'uppercase',
        textAlign: 'center',
        marginBottom:50
    },
    button:{
        backgroundColor: '#5a28ff',
        height: 50,
        width: 100,
        borderRadius: 25,
        marginLeft: 250,
        padding:15
    },
    buttonText:{
        textAlign: 'center',
        fontWeight: 'bold'
    }
})
