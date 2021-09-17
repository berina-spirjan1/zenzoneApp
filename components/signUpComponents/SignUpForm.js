import React, { useState } from "react";
import store from "../../redux/store";
import {
    userRegistrationFailed,
    userRegistrationStarted,
    userRegistrationSuccess
} from "../../redux/actions";
import {
    Dimensions,
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
    Alert
} from "react-native";
import Cload from "../../assets/icons/Cload";
import Icon from "../../assets/icons/Icon";
import { Actions } from "react-native-router-flux";
import { REGISTER } from "../../configuration/config";
import { useNavigation } from "@react-navigation/core";
import validate from "react-native-web/dist/exports/StyleSheet/validate";


export const SignUpForm = () =>{
    const [name, setName] = useState('');
    const [first_name, setFirstName] =  useState('');
    const [last_name, setLastName] =  useState('');
    const [email, setEmail] =  useState('');
    const [office_location, setOfficeLocation] =  useState('');
    const [work_position, setWorkPosition] =  useState('');
    const [password, setPassword] =  useState('');
    const [confirm_password, setConfirmPassword] =  useState('');

    const screenHeight = Dimensions.get('window').height


    const validate = (text) => {
        console.log(text);
        let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;
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
    <View style={stylesLightMode.backgroundStyle}>
        <Cload style={stylesLightMode.cloads}/>
        <Text style={stylesLightMode.welcomeTitle}>WELCOME TO </Text>
        <Text style={stylesLightMode.zenzoneTitle}>ZENZONE</Text>
        <SafeAreaView style={stylesLightMode.container}
                      style={{height: screenHeight}}>
            <ScrollView vertical={true}
                        style={stylesLightMode.scrollView}>
                <Text style={stylesLightMode.hintText}>Username</Text>
                <TextInput style={stylesLightMode.inputLabel}
                           onChangeText={setName}>
                    {/*<FontAwesome5 name={'signature'}*/}
                    {/*              size={18}*/}
                    {/*              color={'#000000'}/>*/}
                </TextInput>
                <Text style={stylesLightMode.formValidation}>The name field is required.</Text>
                <Text style={stylesLightMode.hintText}>First name</Text>
                <TextInput style={stylesLightMode.inputLabel}
                           onChangeText={setFirstName}>
                    {/*<FontAwesome5 name={'user'}*/}
                    {/*              size={18}*/}
                    {/*              color={'#000000'}/>*/}
                </TextInput>
                <Text style={stylesLightMode.formValidation}>The first name field is required.</Text>
                <Text style={stylesLightMode.hintText}>Last name</Text>
                <TextInput style={stylesLightMode.inputLabel}
                           onChangeText={setLastName}>
                    {/*<FontAwesome5 name={'user'}*/}
                    {/*              size={18}*/}
                    {/*              color={'#000000'}/>*/}
                </TextInput>
                <Text style={stylesLightMode.formValidation}>The last name field is required.</Text>
                <Text style={stylesLightMode.hintText}>E-mail</Text>
                <TextInput style={stylesLightMode.inputLabel}
                    // onChangeText={(text) => this.validate(text)}
                           onChangeText={setEmail}>
                    {/*<FontAwesome5 name={'envelope'}*/}
                    {/*              size={18}*/}
                    {/*              color={'#000000'}/>*/}
                </TextInput>
                <Text style={stylesLightMode.formValidation}>The email has already been taken.</Text>
                <Text style={stylesLightMode.hintText}>Office location</Text>
                <TextInput style={stylesLightMode.inputLabel}
                           onChangeText={setOfficeLocation}>
                    {/*<FontAwesome5 name={'map-marker-alt'}*/}
                    {/*              size={18}*/}
                    {/*              color={'#000000'}/>*/}
                </TextInput>
                <Text style={stylesLightMode.formValidation}>The office location field is required.</Text>
                <Text style={stylesLightMode.hintText}>Work position</Text>
                <TextInput style={stylesLightMode.inputLabel}
                           onChangeText={setWorkPosition}>
                    {/*<FontAwesome5 name={'briefcase'}*/}
                    {/*              size={18}*/}
                    {/*              color={'#000000'}/>*/}
                </TextInput>
                <Text style={stylesLightMode.formValidation}>The work position field is required.</Text>
                <Text style={stylesLightMode.hintText}>Password</Text>
                <TextInput style={stylesLightMode.inputLabel}
                           secureTextEntry={true}
                           onChangeText={setPassword}>
                    {/*<FontAwesome5 name={'key'}*/}
                    {/*              size={18}*/}
                    {/*              color={'#000000'}/>*/}
                </TextInput>
                <Text style={stylesLightMode.formValidation}>The password field is required.</Text>
                <Text style={stylesLightMode.hintText}>Confirm password</Text>
                <TextInput style={stylesLightMode.inputLabel}
                           secureTextEntry={true}
                           onChangeText={setConfirmPassword}>
                    {/*<FontAwesome5 name={'lock'}*/}
                    {/*              size={18}*/}
                    {/*              color={'#000000'}/>*/}
                </TextInput>
                <Text style={stylesLightMode.formValidation}>The confirm password field is required.</Text>
                <Text style={stylesLightMode.loginHelp}>Already have your ZenZone account?
                    <Text style={{color: "#334A6D", fontWeight: 'bold'}}
                          // onPress={login}
                    > Login</Text></Text>
                <TouchableOpacity style={stylesLightMode.button}
                                  onPress={onSubmitHandler}>
                    <Text style={stylesDarkMode.buttonText}>SIGN UP</Text>
                </TouchableOpacity>
                <Icon style={stylesLightMode.icon}/>
            </ScrollView>
        </SafeAreaView>
    </View>
    )
}


const stylesLightMode = StyleSheet.create({
    backgroundStyle: {
        backgroundColor: "#93B4E5"
    },
    cloads:{
        top:50,
        left:0
    },
    welcomeTitle: {
        fontSize: 28,
        color: '#000000',
        fontWeight: 'bold',
        textAlign: 'center',
        justifyContent: 'center',
        top:-100
    },
    zenzoneTitle: {
        fontSize: 28,
        color: '#334A6D',
        fontWeight: 'bold',
        textAlign: 'center',
        justifyContent: 'center',
        top: -100
    },
    container: {
        flex:1,
        paddingTop: StatusBar.currentHeight,
        paddingVertical: 20
    },
    scrollView: {
        alignSelf: 'stretch',
        marginTop: -60,
        marginBottom: 50
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
        marginTop: 0,
        opacity: 0.3,
        color: '#000000',
        borderWidth: 0,
        shadowColor: '#000000',
        elevation: 5,
        shadowOffset: {width: 5, height: 2},
        shadowOpacity: 1,
        shadowRadius: 5,

    },
    buttonLogin: {
        top: 5,
        left: 240,
        width: 100,
        height: 45,
        borderRadius: 26,
        opacity: 0.8,
        marginBottom: 50
    },
    button:{
        backgroundColor:"#6C63FF",
        color:"#000000",
        width: 100,
        left:227,
        borderRadius:26,
        padding:1,
        height:40,
        paddingTop:0
    },
    buttonText: {
        textAlign: 'center',
        justifyContent: 'center',
        color: "#083960",
        fontSize: 16,
        fontWeight: 'bold'
    },
    loginHelp: {
        marginLeft:20,
        color: "#000000",
        marginBottom: 20,
        marginTop: 10
    },
    icon: {
        flex: 1,
        marginTop: 0,
        marginBottom: 200,
        justifyContent: 'center'
    },
    formValidation:{
        marginLeft:30,
        fontSize:12,
        color: 'red',
        marginTop:5,
        fontFamily: 'Roboto_300Light'
    }
})


const stylesDarkMode = StyleSheet.create({
    backgroundStyle: {
        backgroundColor: "#1C1F23"
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
        color: '#FFFFFF',
        fontWeight: 'bold',
        textAlign: 'center',
        justifyContent: 'center',
        top: 60
    },
    container: {
        flex: 1,
        paddingTop: StatusBar.currentHeight,
        paddingVertical: 20
    },
    scrollView: {
        alignSelf: 'stretch',
        marginTop: 70,
        marginBottom: 50
    },
    hintText: {
        margin: 17,
        marginLeft: 20,
        fontWeight: 'bold',
        color: "#FFFFFF"
    },
    inputLabel: {
        height: 50,
        margin: 0,
        padding: 10,
        marginLeft: 20,
        marginRight: 30,
        borderRadius: 27,
        backgroundColor: 'white',
        marginTop: 0,
        opacity: 0.40,
        color: '#FFFFFF',
        borderWidth: 0,
        shadowColor: '#000000',
        elevation: 5,
        shadowOffset: {width: 20, height: 2},
        shadowOpacity: 1,
        shadowRadius: 10,
    },

    buttonText: {
        textAlign: 'center',
        marginTop: 12,
        color: "#FFFFFF",
        fontSize: 16,
        fontWeight: 'bold'
    },
    loginHelp: {
        textAlign: 'left',
        color: "#FFFFFF",
        marginBottom: 20,
        marginLeft: 20,
        marginTop: 10
    },
    icon: {
        flex: 1,
        marginTop: 0,
        marginBottom: 100,
        justifyContent: 'center'
    }
})
