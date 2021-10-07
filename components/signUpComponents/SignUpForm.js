import React, { useState } from "react";
import store from "../../redux/store";
import {
    userRegistrationFailed,
    userRegistrationStarted,
    userRegistrationSuccess
} from "../../redux/actions";
import {
    Alert,
    Dimensions,
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View
} from "react-native";
import Cload from "../../assets/icons/Cload";
import Icon from "../../assets/icons/Icon";
import { Actions } from "react-native-router-flux";
import { REGISTER } from "../../configuration/config";
import {useNavigation} from "@react-navigation/native";


export const SignUpForm = () =>{

    //defining hook that allows us to access to navigation objects
    const navigation = useNavigation();

    //allowing to state variables in this functional component
    const [data, setData] = useState({
        name: '',
        first_name: '',
        last_name: '',
        email: '',
        office_location: '',
        work_position: '',
        confirm_password: '',
        password: '',
        check_textInputChange: false,
        secureTextEntry: true,
        isValidUser: true,
        isValidPassword: true,
        isValidName: true,
        isValidFirstName: true,
        isValidLastName: true,
        isValidOfficeLocation: true,
        isValidWorkPosition: true,
        isValidConfirmPassword: true,
        isValidEmail:true
    });

    const validation = (email) => {
        const expression = /(?!.*\.{2})^([a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+(\.[a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+)*|"((([\t]*\r\n)?[\t]+)?([\x01-\x08\x0b\x0c\x0e-\x1f\x7f\x21\x23-\x5b\x5d-\x7e\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|\\[\x01-\x09\x0b\x0c\x0d-\x7f\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))*(([\t]*\r\n)?[\t]+)?")@(([a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.)+([a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.?$/i;

        return expression.test(String(email).toLowerCase())
    }

    const nameInputChange = (val) => {
        if (val.trim().length >= 2) {
            setData({
                ...data,
                name: val,
                check_textInputChange: true,
                isValidName: true,
                isValidUser: true
            });
        } else {
            setData({
                ...data,
                name: val,
                check_textInputChange: false,
                isValidName: false,
                isValidUser: false,
            });
        }
    };

    const firstNameInputChange = (val) => {
        if (val.trim().length >= 2) {
            setData({
                ...data,
                first_name: val,
                check_textInputChange: true,
                isValidFirstName: true,
                isValidUser: true
            });
        } else {
            setData({
                ...data,
                first_name: val,
                check_textInputChange: false,
                isValidFirstName: false,
                isValidUser: false,
            });
        }
    };

    const lastNameInputChange = (val) => {
        if (val.trim().length >= 2) {
            setData({
                ...data,
                last_name: val,
                check_textInputChange: true,
                isValidLastName: true,
                isValidUser: true
            });
        } else {
            setData({
                ...data,
                last_name: val,
                check_textInputChange: false,
                isValidLastName: false,
                isValidUser: false,
            });
        }
    };

    const emailInputChange = (val) => {
        if (val.trim().length >= 4 && validation(val)) {
            setData({
                ...data,
                email: val,
                check_textInputChange: true,
                isValidUser: true,
                isValidEmail: true
            });
        } else {
            setData({
                ...data,
                email: val,
                check_textInputChange: false,
                isValidUser: false,
                isValidEmail: false
            });
        }
    };

    const officeLocationInputChange = (val) => {
        if (val.trim().length >= 2) {
            setData({
                ...data,
                office_location: val,
                isValidOfficeLocation: true,
                isValidUser: true,
            });
        } else {
            setData({
                ...data,
                office_location: val,
                isValidOfficeLocation: true,
                isValidUser: false,
            });
        }
    };

    const workPositionInputChange = (val) => {
        if (val.trim().length >= 2) {
            setData({
                ...data,
                work_position: val,
                isValidWorkPosition: true,
                isValidUser: true,
            });
        } else {
            setData({
                ...data,
                work_position: val,
                isValidWorkPosition: false,
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
                isValidUser: true,
            });
        } else {
            setData({
                ...data,
                password: val,
                isValidPassword: false,
                isValidUser: false,
            });
        }
    };


    const confirmPasswordChange = (val) => {
        if (val.trim().length >= 8) {
            setData({
                ...data,
                confirm_password: val,
                isValidConfirmPassword: true,
                isValidUser: true,
            });
        } else {
            setData({
                ...data,
                confirm_password: val,
                isValidConfirmPassword: false,
                isValidUser: false,
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

    //we are taking screen height and storing at to variable which we use for scroll view
    const screenHeight = Dimensions.get('window').height

    //navigating to login page
    const login = () => navigation.navigate("login")

    //validating input for email address
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

    //function that is activating when user press button for sign up into our application
    //we are sending all information's about user to api and api approves it or rejected.
    const onSubmitHandler = () =>{

        const user = {
            name: data.name,
            first_name: data.first_name,
            last_name: data.last_name,
            email: data.email,
            office_location: data.office_location,
            work_position: data.work_position,
            password: data.password,
            confirm_password: data.confirm_password
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
                    if(res.status!==200 && res.status!==401){
                        store.dispatch(userRegistrationFailed());
                    }
                    if(res.status===200){
                        login();
                        store.dispatch(userRegistrationSuccess());
                    }
                    if(res.status===401){
                        Alert.alert("Please check your information's and input it correctly.")
                    }
                }
                catch (err){
                    console.log(err);
                }
            })
    };

    return(
        <View style={stylesLightMode.backgroundStyle}>
            <SafeAreaView style={stylesLightMode.container}
                          style={{height: screenHeight}}>
                <ScrollView vertical={true}
                            style={stylesLightMode.scrollView}>
                    <Cload style={stylesLightMode.cloads}/>
                    <Text style={stylesLightMode.welcomeTitle}>WELCOME TO </Text>
                    <Text style={stylesLightMode.zenzoneTitle}>ZENZONE</Text>
                    <Text style={stylesLightMode.hintText}>Username</Text>
                    <TextInput style={stylesLightMode.inputLabel}
                               onChangeText={(val) => nameInputChange(val)}
                               onEndEditing={(e) => handleValidUser(e.nativeEvent.text)}>
                    </TextInput>
                    {data.isValidName ? null : (
                        <Text style={stylesDarkMode.errorMsg}>Username must be 2 characters long.</Text>
                    )}
                    <Text style={stylesLightMode.hintText}>First name</Text>
                    <TextInput style={stylesLightMode.inputLabel}
                               onChangeText={(val) => firstNameInputChange(val)}
                               onEndEditing={(e) => handleValidUser(e.nativeEvent.text)}>
                    </TextInput>
                    {data.isValidFirstName ? null : (
                        <Text style={stylesDarkMode.errorMsg}>First name must be 2 characters long.</Text>
                    )}
                    <Text style={stylesLightMode.hintText}>Last name</Text>
                    <TextInput style={stylesLightMode.inputLabel}
                               onChangeText={(val) => lastNameInputChange(val)}
                               onEndEditing={(e) => handleValidUser(e.nativeEvent.text)}>
                    </TextInput>
                    {data.isValidLastName ? null : (
                        <Text style={stylesDarkMode.errorMsg}>Last name must be 2 characters long.</Text>
                    )}
                    <Text style={stylesLightMode.hintText}>E-mail</Text>
                    <TextInput style={stylesLightMode.inputLabel}
                               onChangeText={(val) => emailInputChange(val)}
                               onEndEditing={(e) => handleValidUser(e.nativeEvent.text)}>
                    </TextInput>
                    {data.isValidEmail ? null : (
                        <Text style={stylesDarkMode.errorMsg}>Incorrect e-mail address.</Text>
                    )}
                    <Text style={stylesLightMode.hintText}>Office location</Text>
                    <TextInput style={stylesLightMode.inputLabel}
                               onChangeText={(val) => officeLocationInputChange(val)}
                               onEndEditing={(e) => handleValidUser(e.nativeEvent.text)}>
                    </TextInput>
                    {data.isValidOfficeLocation ? null : (
                        <Text style={stylesDarkMode.errorMsg}>Office location must be 2 characters long.</Text>
                    )}
                    <Text style={stylesLightMode.hintText}>Work position</Text>
                    <TextInput style={stylesLightMode.inputLabel}
                               onChangeText={(val) => workPositionInputChange(val)}
                               onEndEditing={(e) => handleValidUser(e.nativeEvent.text)}>
                    </TextInput>
                    {data.isValidWorkPosition ? null : (
                        <Text style={stylesDarkMode.errorMsg}>Work position must be 2 characters long.</Text>
                    )}
                    <Text style={stylesLightMode.hintText}>Password</Text>
                    <TextInput style={stylesLightMode.inputLabel}
                               secureTextEntry={true}
                               onChangeText={(val) => handlePasswordChange(val)}
                               onEndEditing={(e) => handleValidUser(e.nativeEvent.text)}>
                    </TextInput>
                    {data.isValidPassword ? null : (
                        <Text style={stylesDarkMode.errorMsg}>Password must be 8 characters long.</Text>
                    )}
                    <Text style={stylesLightMode.hintText}>Confirm password</Text>
                    <TextInput style={stylesLightMode.inputLabel}
                               secureTextEntry={true}
                               onChangeText={(val) => confirmPasswordChange(val)}
                               onEndEditing={(e) => handleValidUser(e.nativeEvent.text)}>
                    </TextInput>
                    {data.isValidConfirmPassword ? null : (
                        <Text style={stylesDarkMode.errorMsg}>Confirm password must be 8 characters long.</Text>
                    )}
                    <Text style={stylesLightMode.loginHelp}>Already have your ZenZone account?
                        <Text style={{color: "#334A6D", fontWeight: 'bold'}}
                              onPress={login}
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
        top:90,
        left:0
    },
    welcomeTitle: {
        fontSize: 28,
        color: '#000000',
        fontWeight: 'bold',
        textAlign: 'center',
        justifyContent: 'center',
        top:-50
    },
    zenzoneTitle: {
        fontSize: 28,
        color: '#334A6D',
        fontWeight: 'bold',
        textAlign: 'center',
        justifyContent: 'center',
        top: -50
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
        marginBottom: 0,
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
    },
    errorMsg:{
        fontSize: 12,
        color: '#334A6D',
        marginLeft: 20
    }
})
