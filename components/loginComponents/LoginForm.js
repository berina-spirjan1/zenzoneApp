import {
    Alert,
    AsyncStorage,
    SafeAreaView,
    StatusBar,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View
} from "react-native";
import LottieView from "lottie-react-native";
import { FontAwesome5 } from "@expo/vector-icons";
import Icon from "../../assets/icons/Icon";
import React, { useState } from "react";
import { LOGIN } from "../../configuration/config";
import store from "../../redux/store";
import {
    authFailed,
    authStarted,
    authSuccess
} from "../../redux/actions";

import { useNavigation } from "@react-navigation/native";

export const LoginForm = () =>{

    //defining hook that allows us to access to navigation objects
    const navigation = useNavigation();

    //allowing to state variables in this functional component
    const [data, setData] = useState({
        email: '',
        password: '',
        check_textInputChange: false,
        secureTextEntry: true,
        isValidUser: true,
        isValidPassword: true
    });

    const validate = (email) => {
        const expression = /(?!.*\.{2})^([a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+(\.[a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+)*|"((([\t]*\r\n)?[\t]+)?([\x01-\x08\x0b\x0c\x0e-\x1f\x7f\x21\x23-\x5b\x5d-\x7e\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|\\[\x01-\x09\x0b\x0c\x0d-\x7f\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))*(([\t]*\r\n)?[\t]+)?")@(([a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.)+([a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.?$/i;

        return expression.test(String(email).toLowerCase())
    }

    const emailInputChange = (val) => {
        if (val.trim().length >= 4 && validate(val)) {
            setData({
                ...data,
                email: val,
                check_textInputChange: true,
                isValidUser: true,
            });
        } else {
            setData({
                ...data,
                email: val,
                check_textInputChange: false,
                isValidUser: false,
            });
        }
    };

    const handlePasswordChange = (val) => {
        if (val.trim().length >= 8) {
            setData({
                ...data,
                password: val,
                isValidPassword: true,
            });
        } else {
            setData({
                ...data,
                password: val,
                isValidPassword: false,
            });
        }
    };

    const handleValidUser = (val) => {
        if (val.trim().length >= 4) {
            setData({
                ...data,
                isValidUser: true,
            });
        } else {
            setData({
                ...data,
                isValidUser: false,
            });
        }
    };


    //redirection to user profile
    const goToUserInfo = () => navigation.navigate("switchLoginToUser")

    //navigating to forgot password page
    const forgotPassword = () => navigation.navigate("forgotPassword")

    //navigating to signup page
    const signup = () => navigation.navigate("signup")

    //function that calls when user press button login, which handle action that if username and password are correct it
    //returns token that is active in app until user logout from app
    const onLoginHandler = () =>{

        const user = {
            email: data.email,
            password: data.password,
        };
        console.log("--------------",user)

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

                    console.log(jsonRes)
                    console.log(jsonRes.data.token)
                    if(res.status!==200 && res.status!==401){
                        store.dispatch(authFailed());
                    }
                    if(res.status===401){
                        Alert.alert("Please check your information's.")
                    }
                    if(res.status===200){
                        if(jsonRes.data.token!==null){
                            await AsyncStorage.setItem('jwt', JSON.stringify(jsonRes.data.token))
                            goToUserInfo();
                            store.dispatch(authSuccess());
                        }
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
                               onChangeText={(val) => emailInputChange(val)}
                               onEndEditing={(e) => handleValidUser(e.nativeEvent.text)}>
                    </TextInput>
                    {data.isValidUser ? null : (
                        <Text style={stylesDarkMode.errorMsg}>Incorrect e-mail address.</Text>
                    )}
                    <Text style={stylesDarkMode.password}>Password</Text>
                    <TextInput style={stylesDarkMode.inputPassword}
                               secureTextEntry={true}
                               onChangeText={(val) => handlePasswordChange(val)}>
                    </TextInput>
                    {data.isValidPassword ? null : (
                        <Text style={stylesDarkMode.errorMsg}>Password must be 8 characters long.</Text>
                    )}
                </SafeAreaView>
                <Text style={stylesDarkMode.forgotLoginDetails}>Forgot your login details?
                    <Text style={stylesDarkMode.helpLogin}
                          onPress={forgotPassword}
                    > Get help logging in</Text>
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
                          onPress={signup}
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
        justifyContent: 'center',
        marginBottom: 100
    },
    signUp:{

    }
});


const stylesDarkMode = StyleSheet.create({
    backgroundStyle: {
        backgroundColor: "#1C1F23",
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
        marginTop: 10
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
    },
    errorMsg:{
        fontSize: 12,
        color: 'red',
        marginLeft: 20
    }
});

