import React, {Component} from "react";
import {StyleSheet, Text, TextInput, View, ScrollView, TouchableOpacity, Alert, SafeAreaView,StatusBar} from "react-native";
import ZenIconDarkMode from "../components/ZenIconDarkMode";
import {LinearGradient} from "expo-linear-gradient";
import ZenIconLightMode from "../components/ZenIconLightMode";
import {Dimensions} from "react-native";

export default class SignUp extends Component{
    constructor(props) {
        super();
    }
    render() {

        const screenHeight = Dimensions.get('window').height

        return (
            <View style={stylesLightMode.backgroundStyle}>
                <Text style={stylesLightMode.welcomeTitle}>WELCOME TO </Text>
                <Text style={stylesLightMode.zenzoneTitle}>ZENZONE</Text>
                <SafeAreaView style={stylesLightMode.container}>
                    <ScrollView vertical={true} style={stylesLightMode.scrollView}>
                        <Text style={stylesLightMode.hintText}>Username</Text>
                        <TextInput style={stylesLightMode.inputLabel}/>
                        <Text style={stylesLightMode.hintText}>Full name</Text>
                        <TextInput style={stylesLightMode.inputLabel}/>
                        <Text style={stylesLightMode.hintText}>E-mail</Text>
                        <TextInput style={stylesLightMode.inputLabel}/>
                        <Text style={stylesLightMode.hintText}>Office location</Text>
                        <TextInput style={stylesLightMode.inputLabel}/>
                        <Text style={stylesLightMode.hintText}>Work position</Text>
                        <TextInput style={stylesLightMode.inputLabel}/>
                        <Text style={stylesLightMode.hintText}>Password</Text>
                        <TextInput style={stylesLightMode.inputLabel}/>
                        <Text style={stylesLightMode.hintText}>Confirm password</Text>
                        <TextInput style={stylesLightMode.inputLabel}/>
                        <Text style={stylesLightMode.loginHelp}>Already have your ZenZone account?
                            <Text style={{color: "#334A6D", fontWeight: 'bold'}}> Login</Text></Text>
                        <TouchableOpacity onPress={() => Alert.alert('Go back')}>
                        <LinearGradient
                            colors={["#93B4E5", "#334A6D"]}
                            style={stylesDarkMode.buttonLogin}>
                            <Text style={stylesDarkMode.buttonText}>LOGIN</Text>
                        </LinearGradient>
                        {/*<LinearGradient
                            colors={["#6594DA", "#334A6D"]}
                            style={stylesLightMode.buttonLogin}>
                            <Text style={stylesLightMode.buttonText}>SIGN UP</Text>
                        </LinearGradient>*/}
                    </TouchableOpacity>
                        {/*<ZenIconLightMode style={stylesLightMode.icon}/>*/}
                        <ZenIconDarkMode style={stylesLightMode.icon}/>
                    </ScrollView>
                </SafeAreaView>
            </View>
        );
    }
}


const stylesLightMode=StyleSheet.create({
    backgroundStyle: {
        backgroundColor: "#93B4E5"
    },
    welcomeTitle: {
        fontSize: 28,
        color: '#000000',
        fontWeight: 'bold',
        textAlign: 'center',
        justifyContent: 'center',
        top: 60
    },
    zenzoneTitle: {
        fontSize: 28,
        color: '#334A6D',
        fontWeight: 'bold',
        textAlign: 'center',
        justifyContent: 'center',
        top: 60
    },
    container:{
        flex: 1,
        paddingTop: StatusBar.currentHeight,
        paddingVertical: 20,
        height: screenHeight
    },
    scrollView:{
        alignSelf: 'stretch',
        marginTop:70,
        marginBottom:50
    },
    hintText: {
        margin: 17,
        marginLeft: 20,
        fontWeight: 'bold'
    },
    inputLabel: {
        height: 50,
        margin: 0,
        padding: 10,
        marginLeft: 20,
        marginRight: 30,
        borderRadius: 27,
        backgroundColor: 'white',
        marginTop:0,
        opacity: 0.40,
        color: '#000000',
        borderWidth: 0,
        shadowColor: '#000000',
        elevation: 5,
        shadowOffset: {width: 20, height: 2},
        shadowOpacity: 1,
        shadowRadius: 10,

    },
    buttonLogin: {
        top: 5,
        left: 240,
        width: 100,
        height: 45,
        borderRadius: 26,
        opacity: 0.8,
        marginBottom:50
    },
    buttonText: {
        textAlign: 'center',
        marginTop: 12,
        color: "#083960",
        fontSize: 16,
        fontWeight: 'bold'
    },
    loginHelp:{
        textAlign: 'left',
        color: "#000000",
        marginBottom:20,
        marginLeft:20,
        marginTop:10
    },
    icon: {
        flex: 1,
        marginTop: -90,
        marginBottom:0,
        justifyContent: 'center'
    }
})


const stylesDarkMode=StyleSheet.create({
    backgroundStyle: {
        backgroundColor: "#2D284B"
    },
    welcomeTitle: {
        fontSize: 28,
        color: '#FFFFFF',
        fontWeight: 'bold',
        textAlign: 'center',
        justifyContent: 'center',
        top: 60
    },
    zenzoneTitle: {
        fontSize: 28,
        color: '#1C70B3',
        fontWeight: 'bold',
        textAlign: 'center',
        justifyContent: 'center',
        top: 60
    },
    container:{
        flex: 1,
        paddingTop: StatusBar.currentHeight,
        paddingVertical: 20
    },
    scrollView:{
        alignSelf: 'stretch',
        marginTop:70,
        marginBottom:50
    },
    hintText: {
        margin: 17,
        marginLeft: 20,
        fontWeight: 'bold',
        color:"#FFFFFF"
    },
    inputLabel: {
        height: 50,
        margin: 0,
        padding: 10,
        marginLeft: 20,
        marginRight: 30,
        borderRadius: 27,
        backgroundColor: 'white',
        marginTop:0,
        opacity: 0.40,
        color: '#FFFFFF',
        borderWidth: 0,
        shadowColor: '#000000',
        elevation: 5,
        shadowOffset: {width: 20, height: 2},
        shadowOpacity: 1,
        shadowRadius: 10,

    },
    buttonLogin: {
        top: 5,
        left: 240,
        width: 100,
        height: 45,
        borderRadius: 26,
        opacity: 0.8,
        marginBottom:50
    },
    buttonText: {
        textAlign: 'center',
        marginTop: 12,
        color: "#FFFFFF",
        fontSize: 16,
        fontWeight: 'bold'
    },
    loginHelp:{
        textAlign: 'left',
        color: "#FFFFFF",
        marginBottom:20,
        marginLeft:20,
        marginTop:10
    },
    icon: {
        flex: 1,
        marginTop: -90,
        marginBottom:0,
        justifyContent: 'center'
    }
})
