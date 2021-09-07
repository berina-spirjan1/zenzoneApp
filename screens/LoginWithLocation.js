import React, {Component} from "react";
import {
    View,
    Image,
    StyleSheet,
    Text,
    SafeAreaView,
    TextInput,
    TouchableOpacity, Alert
} from "react-native";
import BackgroundForLoginLocation from "../components/backgrounds/BackgroundForLoginLocation";
import {FontAwesome5} from "@expo/vector-icons";

export default class LoginWithLocation extends Component{
    constructor(props) {
        super();
    }

    //todo add handler for event that you can go to forgot password page, this only shows in terminal
    onTextPress(event, text) {
        console.log(text);
    }

    render() {
        return(
            <View>
                <Image source={require('../assets/images/GothenburgNight.png')}
                       style={styles.imageTop}/>
                <BackgroundForLoginLocation style={styles.backgroundForm}/>
                    <SafeAreaView style={styles.safeArea}>
                        <Text style={styles.welcomeTitle}>WELCOME TO </Text>
                        <Text style={styles.zenzoneTitle}>ZENZONE</Text>
                        <SafeAreaView>
                            <Text style={styles.username}>Username</Text>
                            <TextInput style={styles.inputUsername}>
                                <FontAwesome5 name="user"
                                              size={20}
                                              color={"#000000"}/>
                            </TextInput>
                            <Text style={styles.password}>Password</Text>
                            <TextInput style={styles.inputPassword}>
                                <FontAwesome5 name="lock"
                                              size={20}
                                              color={"#000000"}/>
                            </TextInput>
                        </SafeAreaView>
                        <Text style={styles.forgotLoginDetails}>Forgot your login details?
                            <Text style={styles.helpLogin}
                                  onPress={(e) => this.onTextPress(e, 'Get help logging in')}> Get help logging in</Text>
                        </Text>
                        <TouchableOpacity style={styles.button}
                                          onPress={() => Alert.alert('Login')}>
                            <Text style={styles.loginText}>LOGIN</Text>
                        </TouchableOpacity>
                    </SafeAreaView>


            </View>
        )
    }
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
        zIndex: 1
    },
    welcomeTitle:{
        top:270,
        color: '#FFFFFF',
        textAlign: 'center',
        left:35,
        zIndex: 1,
        fontSize: 28,
        fontWeight: 'bold'
    },
    zenzoneTitle:{
        color: '#6594DA',
        textAlign: 'center',
        left:35,
        top:270,
        zIndex: 1,
        fontSize: 28,
        fontWeight: 'bold'
    },
    username:{
        zIndex: 1,
        top:300,
        color: '#FFFFFF',
        marginLeft: 20
    },
    inputUsername:{
        zIndex: 2,
        height: 50,
        margin: 12,
        padding: 10,
        marginLeft: 20,
        marginRight: -50,
        borderRadius: 27,
        top: 300,
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
        color:'#FFFFFF',
        top:300,
        marginLeft: 20,
        marginTop:10
    },
    inputPassword:{
        zIndex: 1,
        height: 50,
        margin: 10,
        padding: 10,
        marginLeft: 20,
        marginRight: -50,
        borderRadius: 27,
        top:300,
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
    forgotLoginDetails:{
        color: '#FFFFFF',
        marginLeft: 20,
        top: 310
    },
    helpLogin:{
        color: '#1C70B3'
    },
    button:{
        backgroundColor:"#6285B3",
        color:"#000000",
        width: 100,
        left: 250,
        top:330,
        borderRadius: 26,
        padding: 10,
        height: 40,
        paddingTop: 0,
        marginBottom: 20,
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
        marginTop: 10
    },
    backgroundForm:{
        marginTop: -140,
        padding:0,
        shadowOpacity: 40,
        elevation: 40,
        zIndex:0
    },
    imageTop:{

    }
})
