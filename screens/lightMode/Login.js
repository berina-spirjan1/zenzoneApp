import React, {Component} from "react";
import {View, Text, StyleSheet, SafeAreaView, TextInput, Alert, Button} from "react-native";
import RadialGradient from 'react-native-radial-gradient';
import LoginIcon from "../../components/LoginIcon";
import {TouchableOpacity} from "react-native";

export default class Login extends Component{
    constructor(props) {
        super();
    }
    render() {
        return(
            <View style={styles.backgroundStyle}>
                <Text style={styles.welcomeTitle}>WELCOME TO </Text>
                <Text style={styles.zenzoneTitle}>ZENZONE</Text>
                <SafeAreaView>
                    <Text style={styles.username}>Username</Text>
                    <TextInput style={styles.inputUsername}/>
                    <Text style={styles.password}>Password</Text>
                    <TextInput style={styles.inputPassword}/>
                </SafeAreaView>
                <Text style={styles.forgotLoginDetails}>Forgot your login details?
                    <Text style={styles.helpLogin}> Get help logging in</Text></Text>
                <View >
                    <TouchableOpacity
                        style={styles.buttonLogin}
                        onPress={() => Alert.alert('Go back')}
                    ><Text style={styles.loginText}>LOGIN</Text></TouchableOpacity>
                </View>
                <LoginIcon style={styles.icon}/>
            </View>

        )

    }
}
const styles = StyleSheet.create({
    backgroundStyle:{
        backgroundColor:"#93B4E5"
    },
    welcomeTitle:{
        fontSize:28,
        color:'#000000',
        fontWeight: 'bold',
        textAlign: 'center',
        justifyContent: 'center',
        top:107
    },
    zenzoneTitle:{
        fontSize:28,
        color:'#334A6D',
        fontWeight:'bold',
        textAlign: 'center',
        justifyContent: 'center',
        top:105
    },
    username:{
        top:130,
        margin:17,
        fontWeight:'bold'
    },
    inputUsername: {
        height: 50,
        margin: 12,
        padding: 10,
        borderRadius:27,
        marginTop: 130,
        backgroundColor: 'white',
        opacity:0.40,
        color:'#000000',
        borderWidth:0,
        shadowColor: '#000000',
        elevation:5,
        shadowOffset: { width: 20, height: 2 },
        shadowOpacity: 1,
        shadowRadius: 10

    },
    password:{
        margin:17,
        fontWeight:'bold'
    },
    inputPassword: {
        height: 50,
        margin: 10,
        padding: 10,
        borderRadius:27,
        marginTop: 0,
        backgroundColor: 'white',
        opacity:0.40,
        color:'#000000',
        borderWidth:0,
        shadowColor: '#000000',
        elevation:5,
        shadowOffset: { width: 20, height: 2 },
        shadowOpacity: 1,
        shadowRadius: 10
    },
    forgotLoginDetails:{
        color:'#000000',
        fontWeight:'bold',
        margin:17
    },
    helpLogin:{
        color:'#334A6D',
        fontWeight:'bold'
    },
    buttonLogin:{
        top:20,
        left:240,
        width:100,
        height:45,
        borderRadius:20,
        backgroundColor:"#334A6D",
        opacity:0.8
    },
    loginText:{
        textAlign:'center',
        marginTop:12,
        fontWeight:'bold'
    },
    icon: {
        flex: 1,
        marginTop:460,
        justifyContent: 'center'
    }
});
