import {Alert, SafeAreaView, StatusBar, StyleSheet, Text, TextInput, TouchableOpacity, View} from "react-native";
import LottieView from "lottie-react-native";
import {FontAwesome5} from "@expo/vector-icons";
import Icon from "../../assets/icons/Icon";
import React, {useState} from "react";
import {LOGIN, REGISTER} from "../../configuration/config";
import store from "../../redux/store";
import {authFailed, authStarted, authSuccess} from "../../redux/actions";


export const LoginForm = () =>{

    const [email, setEmail] = useState('');
    const [password, setPassword] =  useState('');

    const onLoginHandler = () =>{

        const user = {
            email,
            password,
        };

        fetch(`${LOGIN}`,{
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json",
            },
            body: JSON.stringify(user)
        })
            .then(async res => {
                try{

                    store.dispatch(authStarted());

                    const jsonRes = await res.json();
                    // const token = jsonRes.data.token;
                    // console.log(token)
                    console.log(jsonRes)

                    if(res.status!==200){
                        store.dispatch(authFailed());
                    }
                    else{
                        store.dispatch(authSuccess());
                    }
                }
                catch (err){
                    console.log(err);
                }
            })
    };

    return(
        <View style={stylesLightMode.container}>
            <StatusBar animated={true}
                       backgroundColor="#6285B3"/>
            <View style={stylesDarkMode.backgroundStyle}>
                <LottieView style={stylesDarkMode.lottie}
                            source={require("../../assets/images/stars.json")}
                            autoPlay
                            loop={true}/>
                <Text style={stylesDarkMode.welcomeTitle}>WELCOME TO </Text>
                <Text style={stylesDarkMode.zenzoneTitle}>ZENZONE</Text>
                <SafeAreaView>
                    <Text style={stylesDarkMode.username}>E-mail</Text>
                    <TextInput style={stylesDarkMode.inputUsername}
                               onChangeText={setEmail}>
                        {/*<FontAwesome5 name="user"*/}
                        {/*              size={20}*/}
                        {/*              color={"#000000"}/>*/}
                    </TextInput>
                    <Text style={stylesDarkMode.password}>Password</Text>
                    <TextInput style={stylesDarkMode.inputPassword}
                               onChangeText={setPassword}>
                        {/*<FontAwesome5 name="lock"*/}
                        {/*              size={20}*/}
                        {/*              color={"#000000"}/>*/}
                    </TextInput>
                </SafeAreaView>
                <Text style={stylesDarkMode.forgotLoginDetails}>Forgot your login details?
                    <Text style={stylesDarkMode.helpLogin}
                          // onPress={this.forgotPassword}
                    >
                        Get help logging in</Text>
                </Text>
                <View>
                    <TouchableOpacity
                        style={stylesDarkMode.button}
                        onPress={onLoginHandler}>
                        <Text style={stylesDarkMode.loginText}>LOGIN</Text>
                    </TouchableOpacity>
                </View>
                <Text style={stylesDarkMode.signUp}>You still don't have your ZenZone account?</Text>
                <View style={{flexDirection: 'row'}}>
                    <Text style={stylesDarkMode.next}
                          // onPress={this.signup}
                    >Sign up</Text>
                    <FontAwesome5 name={'chevron-right'}
                                  size={16}
                                  color={'#FFFFFF'}
                                  style={stylesDarkMode.nextIcon}/>
                </View>
                <Icon style={stylesLightMode.icon}/>



            </View>
        </View>
    )
}


const stylesLightMode = StyleSheet.create({
    container:{
        fontFamily: 'Roboto_400Regular'
    },
    backgroundStyle: {
        backgroundColor: "#93B4E5"
    },
    lottie:{
        flex:1,
        marginLeft:40,
        width: 100,
        height: 100,
        alignItems: 'center',
        justifyContent: 'center',
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
        shadowRadius: 10

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
        opacity: 1,
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
    },
    signUp:{

    }
});


const stylesDarkMode = StyleSheet.create({
    backgroundStyle: {
        backgroundColor: "#1C1F23"
    },
    lottie:{
        flex:1,
        marginLeft:40,
        alignItems: 'center',
        justifyContent: 'center',
    },
    stars:{
        top:-150,
        left:0
    },
    welcomeTitle: {
        fontSize: 28,
        color: '#FFFFFF',
        fontWeight: 'bold',
        textAlign: 'center',
        justifyContent: 'center',
        top: 80
    },
    zenzoneTitle: {
        fontSize: 28,
        color: '#FFFFFF',
        fontWeight: 'bold',
        textAlign: 'center',
        justifyContent: 'center',
        top: 85
    },
    username: {
        top: 100,
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
        marginTop: 100,
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
    button:{
        backgroundColor:"#6285B3",
        color:"#000000",
        width: 100,
        left: 227,
        borderRadius: 26,
        padding: 1,
        height: 40,
        paddingTop: 0,
        marginBottom: 20
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
        marginTop: 50,
        marginBottom: 100,
        justifyContent: 'center'
    },
    signUp:{
        fontSize: 10,
        color: '#FFFFFF',
        marginLeft: 150,
        marginTop: 50

    },
    next: {
        color: '#FFFFFF',
        textTransform: 'uppercase',
        fontFamily: 'Roboto_100Thin_Italic',
        fontSize: 12,
        marginLeft: 290
    }
    ,
    nextIcon:{
        marginLeft:-80
    }
});

