import {
    Alert, AsyncStorage,
    Dimensions,
    Image,
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View
} from "react-native";
import BackgroundForLoginLocation from "../../components/backgrounds/BackgroundForLoginLocation";
import { FontAwesome5 } from "@expo/vector-icons";
import React, { useState } from "react";
import {LOGIN, LOGOUT} from "../../configuration/config";
import store from "../../redux/store";
import {
    authFailed,
    authStarted,
    authSuccess, userLogoutFailed, userLogoutStarted, userLogoutSuccess
} from "../../redux/actions";
import {Actions} from "react-native-router-flux";


export const LoginWithLocationForm = () =>{

    const screenHeight = Dimensions.get('window').height

    const [email, setEmail] = useState('');
    const [password, setPassword] =  useState('');

    const goToUserInfo = () =>{
        Actions.goToUserInfo()
    }

    const forgotPassword = () =>{
        Actions.forgotPassword()
    }

    const signup = () =>{
        Actions.signup()
    }

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

                    console.log(jsonRes)
                    console.log(jsonRes.data.token)
                    if(res.status!==200){
                        store.dispatch(authFailed());
                    }
                    else{
                        if(jsonRes.data.token){
                            await AsyncStorage.setItem('jwt', JSON.stringify(jsonRes.data.token))
                        }
                        goToUserInfo();
                        store.dispatch(authSuccess());
                    }
                }
                catch (err){
                    console.log(err);
                }
            })
    };


    return(
        <View>
            <Image source={require('../../assets/images/GothenburgNight.png')}
                   style={styles.imageTop}/>
            <BackgroundForLoginLocation style={styles.backgroundForm}/>
            <SafeAreaView style={styles.safeArea}>
                <Text style={styles.welcomeTitle}>WELCOME TO </Text>
                <Text style={styles.zenzoneTitle}>ZENZONE</Text>
                <SafeAreaView style={styles.safeAreaScroll}
                              style={{height: screenHeight}}>
                    <ScrollView vertical={true}
                                style={styles.scrollView}>
                        <Text style={styles.hintText}>E-mail</Text>
                        <TextInput style={styles.inputLabel}
                                   onChangeText={setEmail}>
                        </TextInput>
                        <Text style={styles.hintText}>Password</Text>
                        <TextInput style={styles.inputLabel}
                                   secureTextEntry={true}
                                   onChangeText={setPassword}>
                        </TextInput>
                        <Text style={styles.forgotLoginDetails}>Forgot your login details?
                            <Text style={styles.helpLogin}
                                  onPress={forgotPassword}> Get help logging in</Text>
                        </Text>
                        <TouchableOpacity style={styles.button}
                                          onPress={onLoginHandler}>
                            <Text style={styles.loginText}>LOGIN</Text>
                        </TouchableOpacity>
                    </ScrollView>
                </SafeAreaView>
            </SafeAreaView>
        </View>
    )
}


const styles = StyleSheet.create({
    container:{

    },
    image:{
        justifyContent: 'flex-start',
        margin: 20,
        width: 150,
        height: 150
    },
    safeArea:{
        position: 'absolute',
        zIndex: 0,
        elevation:0,
    },
    welcomeTitle:{
        top:270,
        color: '#FFFFFF',
        textAlign: 'center',
        zIndex: 1,
        elevation:1,
        fontSize: 28,
        fontWeight: 'bold'
    },
    zenzoneTitle:{
        color: '#6594DA',
        textAlign: 'center',
        top:270,
        zIndex: 1,
        elevation: 1,
        fontSize: 28,
        fontWeight: 'bold'
    },
    safeAreaScroll:{
        flex:1,
        paddingTop: StatusBar.currentHeight,
        paddingVertical: 20
    },
    scrollView:{
        alignSelf: 'stretch',
        marginTop: 300,
        marginBottom: 50
    },
    hintText:{
        zIndex: 1,
        color: '#FFFFFF',
        marginLeft: 20
    },
    inputLabel:{
        zIndex: 2,
        height: 50,
        margin: 12,
        padding: 10,
        width:330,
        marginRight:20,
        marginLeft:20,
        borderRadius: 27,
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
    password:{
        zIndex: 1,
        elevation:1,
        color:'#FFFFFF',
        top:300,
        marginLeft: 20,
        marginTop:10
    },
    forgotLoginDetails:{
        color: '#FFFFFF',
        marginLeft: 20,
    },
    helpLogin:{
        color: '#6594DA',
        fontWeight: 'bold'
    },
    button:{
        backgroundColor:"#6285B3",
        color:"#000000",
        width: 100,
        left: 250,
        marginTop:30,
        borderRadius: 26,
        padding: 10,
        height: 40,
        paddingTop: 0,
        marginBottom: 170,
        shadowColor: "#000000",
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.10,
        shadowRadius: 5,
        elevation: 8
    },
    loginText:{
        color: '#FFFFFF',
        fontWeight: 'bold',
        textAlign: 'center',
        justifyContent: 'center',
        marginTop: 10,
        textTransform: 'uppercase'
    },
    backgroundForm:{
        marginTop: -160,
        padding:0,
        shadowOpacity: 40,
        zIndex:0,
        elevation:0
    },
    imageTop:{

    }
})
