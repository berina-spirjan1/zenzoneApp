import React, {Component, useState} from "react";
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
import { FontAwesome5 } from "@expo/vector-icons";

import {Actions} from "react-native-router-flux";
import Cload from "../../assets/icons/Cload";
import Icon from "../../assets/icons/Icon";
import {API_URL, LOGIN, REGISTER} from "../../configuration/config";
import {Provider} from "react-redux";
import store from "../../redux/store";
import {authFailed, authStarted, authSuccess} from "../../redux/actions";

export default class SignUp extends Component {
    constructor(props) {
        super();
    }

    login() {
        Actions.login()
    }

    validate = (text) => {
        console.log(text);
        let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;
        if (reg.test(text) === false) {
            console.log("Email is Not Correct");
            this.setState({ email: text })
            return false;
        }
        else {
            this.setState({ email: text })
            console.log("Email is Correct");
        }
    }

    render() {

        const screenHeight = Dimensions.get('window').height

        const [username, setUsername] = '';
        const [first_name, setFirstName] = '';
        const [last_name, setLastName] = '';
        const [email, setEmail] = '';
        const [office_location, setOfficeLocation] = '';
        const [work_position, setWorkPosition] = '';
        const [password, setPassword] = '';
        const [confirm_password, setConfirmPassword] = '';

        // const [message, setMessage] = useState('');
        // const [isLogin, setIsLogin] = useState(true);
        // const [isError, setIsError] = useState(false);

        // const onChangeHandler = () => {
        //     setIsLogin(!isLogin);
        //     setMessage('');
        // }
        //
        // const onLoggedIn = token =>{
        //     fetch(`${REGISTER}`,{
        //         method: 'POST',
        //         headers:{
        //             "Content-Type": "application/json",
        //             "Accept": "application/json",
        //         },
        //     })
        //         .then(async res => {
        //             try{
        //                 const jsonRes = await res.json();
        //                 if(res.status===200){
        //                     store.dispatch(authSuccess());
        //                 }
        //             }
        //             catch (err){
        //                 console.log(err);
        //             }
        //         })
        //         .catch(err =>{
        //             console.log(err);
        //         });
        // }

        const onSubmitHandler = () =>{

            const user = {
                username,
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
                        const jsonRes = await res.json();
                        console.log(user)
                        if(res.status!==200){
                            store.dispatch(authFailed());
                        }
                        else{
                            store.dispatch(authStarted());
                        }
                    }
                    catch (err){
                        console.log(err);
                    }
                })
        };

        // const getMessage = () =>{
        //     const status = isError ? `Error: ` : `Success: `;
        //     return status + message;
        // }


        return (
            <Provider store={store}>
                <StatusBar
                    animated={true}
                    backgroundColor="#334A6D"/>
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
                                           onChangeText={username}>
                                    {/*<FontAwesome5 name={'signature'}*/}
                                    {/*              size={18}*/}
                                    {/*              color={'#000000'}/>*/}
                                </TextInput>
                                <Text style={stylesLightMode.formValidation}>The username field shoudn't be empty.</Text>
                                <Text style={stylesLightMode.hintText}>First name</Text>
                                <TextInput style={stylesLightMode.inputLabel}
                                           onChangeText={setFirstName}>
                                    {/*<FontAwesome5 name={'user'}*/}
                                    {/*              size={18}*/}
                                    {/*              color={'#000000'}/>*/}
                                </TextInput>
                                <Text style={stylesLightMode.formValidation}>The first name field shoudn't be empty.</Text>
                                <Text style={stylesLightMode.hintText}>Last name</Text>
                                <TextInput style={stylesLightMode.inputLabel}
                                           onChangeText={setLastName}>
                                    {/*<FontAwesome5 name={'user'}*/}
                                    {/*              size={18}*/}
                                    {/*              color={'#000000'}/>*/}
                                </TextInput>
                                <Text style={stylesLightMode.formValidation}>The last name field shoudn't be empty.</Text>
                                <Text style={stylesLightMode.hintText}>E-mail</Text>
                                <TextInput style={stylesLightMode.inputLabel}
                                           // onChangeText={(text) => this.validate(text)}
                                           onChangeText={setEmail}>
                                    {/*<FontAwesome5 name={'envelope'}*/}
                                    {/*              size={18}*/}
                                    {/*              color={'#000000'}/>*/}
                                </TextInput>
                                <Text style={stylesLightMode.formValidation}>The e-mail field shoudn't be empty.</Text>
                                <Text style={stylesLightMode.hintText}>Office location</Text>
                                <TextInput style={stylesLightMode.inputLabel}
                                           onChangeText={setOfficeLocation}>
                                    {/*<FontAwesome5 name={'map-marker-alt'}*/}
                                    {/*              size={18}*/}
                                    {/*              color={'#000000'}/>*/}
                                </TextInput>
                                <Text style={stylesLightMode.formValidation}>The office location field shoudn't be empty.</Text>
                                <Text style={stylesLightMode.hintText}>Work position</Text>
                                <TextInput style={stylesLightMode.inputLabel}
                                           onChangeText={setWorkPosition}>
                                    {/*<FontAwesome5 name={'briefcase'}*/}
                                    {/*              size={18}*/}
                                    {/*              color={'#000000'}/>*/}
                                </TextInput>
                                <Text style={stylesLightMode.formValidation}>The work position field shoudn't be empty.</Text>
                                <Text style={stylesLightMode.hintText}>Password</Text>
                                <TextInput style={stylesLightMode.inputLabel}
                                           secureTextEntry={true}
                                           onChangeText={setPassword}>
                                    {/*<FontAwesome5 name={'key'}*/}
                                    {/*              size={18}*/}
                                    {/*              color={'#000000'}/>*/}
                                </TextInput>
                                <Text style={stylesLightMode.formValidation}>The password field shoudn't be empty.</Text>
                                <Text style={stylesLightMode.hintText}
                                      secureTextEntry={true}
                                      onChangeText={setConfirmPassword}>Confirm password</Text>
                                <TextInput style={stylesLightMode.inputLabel}>
                                    {/*<FontAwesome5 name={'lock'}*/}
                                    {/*              size={18}*/}
                                    {/*              color={'#000000'}/>*/}
                                </TextInput>
                                <Text style={stylesLightMode.formValidation}>The confirm password field shoudn't be empty.</Text>
                                <Text style={stylesLightMode.loginHelp}>Already have your ZenZone account?
                                    <Text style={{color: "#334A6D", fontWeight: 'bold'}}
                                          onPress={this.login}> Login</Text></Text>
                                <TouchableOpacity style={stylesLightMode.button}
                                                  onPress={onSubmitHandler}>
                                    <Text style={stylesDarkMode.buttonText}>SIGN UP</Text>
                                </TouchableOpacity>
                                <Icon style={stylesLightMode.icon}/>
                        </ScrollView>
                    </SafeAreaView>
                </View>
        </Provider>

        );
    }
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
