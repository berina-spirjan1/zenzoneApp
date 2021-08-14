import React, {Component} from "react";
import {Alert, SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View} from "react-native";
import {LinearGradient} from "expo-linear-gradient";
import ZenIconLightMode from "../components/ZenIconLightMode";
import ZenIconDarkMode from "../components/ZenIconDarkMode";

export default class Login extends Component {
    constructor(props) {
        super();
    }
    render() {
        return (
            <View style={stylesDarkMode.backgroundStyle}>
                <Text style={stylesDarkMode.welcomeTitle}>WELCOME TO </Text>
                <Text style={stylesDarkMode.zenzoneTitle}>ZENZONE</Text>
                <SafeAreaView>
                    <Text style={stylesDarkMode.username}>Username</Text>
                    <TextInput style={stylesDarkMode.inputUsername}/>
                    <Text style={stylesDarkMode.password}>Password</Text>
                    <TextInput style={stylesDarkMode.inputPassword}/>
                </SafeAreaView>
                <Text style={stylesDarkMode.forgotLoginDetails}>Forgot your login details?
                    <Text style={stylesDarkMode.helpLogin}> Get help logging in</Text>
                </Text>
                <View>
                    <TouchableOpacity onPress={() => Alert.alert('Go back')}>
                        {/*<LinearGradient
                            colors={["#93B4E5", "#334A6D"]}
                            style={stylesDarkMode.buttonLogin}>
                            <Text style={stylesDarkMode.loginText}>LOGIN</Text>
                        </LinearGradient>*/}
                        <LinearGradient
                            colors={["#6594DA", "#334A6D"]}
                            style={stylesDarkMode.buttonLogin}>
                            <Text style={stylesDarkMode.loginText}>LOGIN</Text>
                        </LinearGradient>
                    </TouchableOpacity>
                </View>
                <ZenIconDarkMode style={stylesLightMode.icon}/>
                {/*}*/}
                {/*else{*/}
                {/*    //<ZenIconDarkMode style={stylesLightMode.icon}/>*/}
                {/*}*/}

            </View>

        )
    }
}
const stylesLightMode = StyleSheet.create({
    backgroundStyle: {
        backgroundColor: "#93B4E5"
    },
    welcomeTitle: {
        fontSize: 28,
        color: '#000000',
        fontWeight: 'bold',
        textAlign: 'center',
        justifyContent: 'center',
        top: 107
    },
    zenzoneTitle: {
        fontSize: 28,
        color: '#334A6D',
        fontWeight: 'bold',
        textAlign: 'center',
        justifyContent: 'center',
        top: 105
    },
    username: {
        top: 130,
        margin: 17,
        marginLeft: 20,
        fontWeight: 'bold'
    },
    inputUsername: {
        height: 50,
        margin: 12,
        padding: 10,
        marginLeft: 20,
        marginRight: 30,
        borderRadius: 27,
        marginTop: 130,
        backgroundColor: 'white',
        opacity: 0.40,
        color: '#000000',
        borderWidth: 0,
        shadowColor: '#000000',
        elevation: 5,
        shadowOffset: {width: 20, height: 2},
        shadowOpacity: 1,
        shadowRadius: 10,

    },
    password: {
        margin: 17,
        marginLeft: 20,
        fontWeight: 'bold'
    },
    inputPassword: {
        height: 50,
        margin: 10,
        padding: 10,
        marginLeft: 20,
        marginRight: 30,
        borderRadius: 27,
        marginTop: 0,
        backgroundColor: 'white',
        opacity: 0.40,
        color: '#000000',
        borderWidth: 0,
        shadowColor: '#000000',
        elevation: 5,
        shadowOffset: {width: 20, height: 2},
        shadowOpacity: 1,
        shadowRadius: 10
    },
    forgotLoginDetails: {
        color: '#000000',
        fontWeight: 'bold',
        margin: 17,
        marginLeft: 20
    },
    helpLogin: {
        color: '#334A6D',
        fontWeight: 'bold'
    },
    buttonLogin: {
        top: 5,
        left: 240,
        width: 100,
        height: 45,
        borderRadius: 26,
        opacity: 0.8
    },
    loginText: {
        textAlign: 'center',
        marginTop: 12,
        color: "#083960",
        fontSize: 16,
        fontWeight: 'bold'
    },
    icon: {
        flex: 1,
        marginTop: -50,
        justifyContent: 'center'
    }
});


const stylesDarkMode = StyleSheet.create({
    backgroundStyle: {
        backgroundColor: "#2D284B"
    },
    welcomeTitle: {
        fontSize: 28,
        color: '#FFFFFF',
        fontWeight: 'bold',
        textAlign: 'center',
        justifyContent: 'center',
        top: 107
    },
    zenzoneTitle: {
        fontSize: 28,
        color: '#1C70B3',
        fontWeight: 'bold',
        textAlign: 'center',
        justifyContent: 'center',
        top: 105
    },
    username: {
        top: 130,
        margin: 17,
        marginLeft: 20,
        fontWeight: 'bold',
        color:"#FFFFFF"
    },
    inputUsername: {
        height: 50,
        margin: 12,
        padding: 10,
        marginLeft: 20,
        marginRight: 30,
        borderRadius: 27,
        marginTop: 130,
        backgroundColor: 'white',
        opacity: 0.40,
        color: '#FFFFFF',
        borderWidth: 0,
        shadowColor: '#000000',
        elevation: 5,
        shadowOffset: {width: 20, height: 2},
        shadowOpacity: 1,
        shadowRadius: 10,

    },
    password: {
        margin: 17,
        marginLeft: 20,
        fontWeight: 'bold',
        color:"#FFFFFF"
    },
    inputPassword: {
        height: 50,
        margin: 10,
        padding: 10,
        marginLeft: 20,
        marginRight: 30,
        borderRadius: 27,
        marginTop: 0,
        backgroundColor: 'white',
        opacity: 0.40,
        color: '#000000',
        borderWidth: 0,
        shadowColor: '#000000',
        elevation: 5,
        shadowOffset: {width: 20, height: 2},
        shadowOpacity: 1,
        shadowRadius: 10
    },
    forgotLoginDetails: {
        color: '#FFFFFF',
        fontWeight: 'bold',
        margin: 17,
        marginLeft: 20
    },
    helpLogin: {
        color: '#6594DA',
        fontWeight: 'bold'
    },
    buttonLogin: {
        top: 5,
        left: 240,
        width: 100,
        height: 45,
        borderRadius: 26,
        opacity: 0.8
    },
    loginText: {
        textAlign: 'center',
        marginTop: 12,
        color: "#FFFFFF",
        fontSize: 16,
        fontWeight: 'bold'
    },
    icon: {
        flex: 1,
        marginTop: -50,
        justifyContent: 'center'
    }
});
