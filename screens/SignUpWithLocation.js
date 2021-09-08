import React, {Component} from "react";
import {
    View,
    TextInput,
    Text,
    Image,
    StyleSheet,
    SafeAreaView,
    ScrollView,
    Dimensions,
    StatusBar,
    TouchableOpacity,
    Alert
} from 'react-native'
import BackgroundForLoginLocation from "../components/backgrounds/BackgroundForLoginLocation";

import { FontAwesome5 } from "@expo/vector-icons";


export default class SignUpWithLocation extends Component{
    constructor(props) {
        super();
    }

    render(){

        const screenHeight = Dimensions.get('window').height

        return(
            <View>
                <Image source={require('../assets/images/GothenburgNight.png')}
                       style={styles.imageTop}/>
                <BackgroundForLoginLocation style={styles.backgroundForm}/>
                <SafeAreaView style={styles.safeArea}>
                    <Text style={styles.welcomeTitle}>WELCOME TO </Text>
                    <Text style={styles.zenzoneTitle}>ZENZONE</Text>
                    <SafeAreaView style={styles.safeAreaScroll}
                                  style={{height: screenHeight}}>
                        <ScrollView vertical={true}
                                    style={styles.scrollView}>
                            <Text style={styles.hintText}>Username</Text>
                            <TextInput style={styles.inputLabel}>
                                <FontAwesome5 name="user"
                                              size={18}
                                              color={"#000000"}/>
                            </TextInput>
                            <Text style={styles.hintText}>First name</Text>
                            <TextInput style={styles.inputLabel}>
                                <FontAwesome5 name={'user'}
                                              size={18}
                                              color={'#000000'}/>
                            </TextInput>
                            <Text style={styles.hintText}>Last name</Text>
                            <TextInput style={styles.inputLabel}>
                                <FontAwesome5 name={'user'}
                                              size={18}
                                              color={'#000000'}/>
                            </TextInput>
                            <Text style={styles.hintText}>E-mail</Text>
                            <TextInput style={styles.inputLabel}
                                       onChangeText={(text) => this.validate(text)}>
                                <FontAwesome5 name={'envelope'}
                                              size={18}
                                              color={'#000000'}/>
                            </TextInput>
                            <Text style={styles.hintText}>Office location</Text>
                            <TextInput style={styles.inputLabel}>
                                <FontAwesome5 name={'map-marker-alt'}
                                              size={18}
                                              color={'#000000'}/>
                            </TextInput>
                            <Text style={styles.hintText}>Work position</Text>
                            <TextInput style={styles.inputLabel}>
                                <FontAwesome5 name={'briefcase'}
                                              size={18}
                                              color={'#000000'}/>
                            </TextInput>
                            <Text style={styles.hintText}>Password</Text>
                            <TextInput style={styles.inputLabel}>
                                <FontAwesome5 name="lock"
                                              size={20}
                                              color={"#000000"}/>
                            </TextInput>
                            <Text style={styles.hintText}>Confirm password</Text>
                            <TextInput style={styles.inputLabel}>
                                <FontAwesome5 name={'lock'}
                                              size={18}
                                              color={'#000000'}/>
                            </TextInput>
                            <Text style={styles.forgotLoginDetails}>Already have your ZenZone account?
                                <Text style={styles.helpLogin}
                                      onPress={(e) => this.onTextPress(e, 'Get help logging in')}> Login</Text>
                            </Text>
                            <TouchableOpacity style={styles.button}
                                              onPress={() => Alert.alert('SignUp')}>
                                <Text style={styles.loginText}>SIGN UP</Text>
                            </TouchableOpacity>
                        </ScrollView>
                    </SafeAreaView>
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
        zIndex: 2
    },
    welcomeTitle:{
        top:270,
        color: '#FFFFFF',
        textAlign: 'center',
        zIndex: 1,
        fontSize: 28,
        fontWeight: 'bold'
    },
    zenzoneTitle:{
        color: '#6594DA',
        textAlign: 'center',
        top:270,
        zIndex: 1,
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
        color: '#1C70B3',
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
        elevation: 40,
        zIndex:0
    },
    imageTop:{

    }
})
