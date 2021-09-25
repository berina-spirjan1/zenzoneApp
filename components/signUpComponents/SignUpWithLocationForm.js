import {
    Alert,
    Dimensions,
    Image,
    SafeAreaView,
    ScrollView, StatusBar, StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View
} from "react-native";
import BackgroundForLoginLocation from "../../components/backgrounds/BackgroundForLoginLocation";
import { FontAwesome5 } from "@expo/vector-icons";
import React, { useState } from "react";
import { Actions } from "react-native-router-flux";
import { REGISTER } from "../../configuration/config";
import store from "../../redux/store";
import {
    userRegistrationFailed,
    userRegistrationStarted,
    userRegistrationSuccess
} from "../../redux/actions";


export const SignUpWithLocationForm = () =>{

    const [name, setName] = useState('');
    const [first_name, setFirstName] =  useState('');
    const [last_name, setLastName] =  useState('');
    const [email, setEmail] =  useState('');
    const [office_location, setOfficeLocation] =  useState('');
    const [work_position, setWorkPosition] =  useState('');
    const [password, setPassword] =  useState('');
    const [confirm_password, setConfirmPassword] =  useState('');

    const screenHeight = Dimensions.get('window').height

    const login = () =>{
        Actions.login()
    }


    const validate = (text) => {
        console.log(text);
        let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/.com;
        if (reg.test(text) === false) {
            this.setState({ email: text })
            return false;
        }
        else {
            this.setState({ email: text })
            return true;
        }
    }

    // const redirectToLogin = () =>{
    //     Actions.login()
    // }

    const onSubmitHandler = () =>{

        const user = {
            name,
            first_name,
            last_name,
            email,
            password,
            confirm_password,
            office_location,
            work_position,
        };

        fetch(`${REGISTER}`,{
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json",
            },
            body: JSON.stringify(user)
        })
            .then(async res => {
                try{
                    store.dispatch(userRegistrationStarted());

                    const jsonRes = await res.json();

                    console.log(jsonRes.message)
                    if(res.status!==200){
                        store.dispatch(userRegistrationFailed());
                    }
                    else{
                        store.dispatch(userRegistrationSuccess());
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
                        <Text style={styles.hintText}>Username</Text>
                        <TextInput style={styles.inputLabel}
                                   onChangeText={setName}>
                            {/*<FontAwesome5 name="user"*/}
                            {/*              size={18}*/}
                            {/*              color={"#000000"}/>*/}
                        </TextInput>
                        <Text style={styles.hintText}>First name</Text>
                        <TextInput style={styles.inputLabel}
                                   onChangeText={setFirstName}>
                            {/*<FontAwesome5 name={'user'}*/}
                            {/*              size={18}*/}
                            {/*              color={'#000000'}/>*/}
                        </TextInput>
                        <Text style={styles.hintText}>Last name</Text>
                        <TextInput style={styles.inputLabel}
                                   onChangeText={setLastName}>
                            {/*<FontAwesome5 name={'user'}*/}
                            {/*              size={18}*/}
                            {/*              color={'#000000'}/>*/}
                        </TextInput>
                        <Text style={styles.hintText}>E-mail</Text>
                        <TextInput style={styles.inputLabel}
                                   onChangeText={setEmail}>
                            {/*<FontAwesome5 name={'envelope'}*/}
                            {/*              size={18}*/}
                            {/*              color={'#000000'}/>*/}
                        </TextInput>
                        <Text style={styles.hintText}>Office location</Text>
                        <TextInput style={styles.inputLabel}
                                   onChangeText={setOfficeLocation}>
                            {/*<FontAwesome5 name={'map-marker-alt'}*/}
                            {/*              size={18}*/}
                            {/*              color={'#000000'}/>*/}
                        </TextInput>
                        <Text style={styles.hintText}>Work position</Text>
                        <TextInput style={styles.inputLabel}
                                   onChangeText={setWorkPosition}>
                            {/*<FontAwesome5 name={'briefcase'}*/}
                            {/*              size={18}*/}
                            {/*              color={'#000000'}/>*/}
                        </TextInput>
                        <Text style={styles.hintText}>Password</Text>
                        <TextInput style={styles.inputLabel}
                                   secureTextEntry={true}
                                   onChangeText={setPassword}>
                            {/*<FontAwesome5 name="lock"*/}
                            {/*              size={20}*/}
                            {/*              color={"#000000"}/>*/}
                        </TextInput>
                        <Text style={styles.hintText}>Confirm password</Text>
                        <TextInput style={styles.inputLabel}
                                   secureTextEntry={true}
                                   onChangeText={setConfirmPassword}>
                            {/*<FontAwesome5 name={'lock'}*/}
                            {/*              size={18}*/}
                            {/*              color={'#000000'}/>*/}
                        </TextInput>
                        <Text style={styles.forgotLoginDetails}>Already have your ZenZone account?
                            <Text style={styles.helpLogin}
                                  onPress={(e) => this.onTextPress(e, 'Get help logging in')}> Login</Text>
                        </Text>
                        <TouchableOpacity style={styles.button}
                                          onPress={onSubmitHandler}>
                            <Text style={styles.loginText}>SIGN UP</Text>
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
