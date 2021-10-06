import {
    Alert,
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
import React, { useState } from "react";
import { REGISTER } from "../../configuration/config";
import store from "../../redux/store";
import {
    userRegistrationFailed,
    userRegistrationStarted,
    userRegistrationSuccess
} from "../../redux/actions";
import { useNavigation } from "@react-navigation/native";


export const SignUpWithLocationForm = () =>{

    //defining hook that allows us to access to navigation objects
    const navigation = useNavigation();

    //allowing to state variables in this functional component
    const [name, setName] = useState('');
    const [first_name, setFirstName] =  useState('');
    const [last_name, setLastName] =  useState('');
    const [email, setEmail] =  useState('');
    const [office_location, setOfficeLocation] =  useState('');
    const [work_position, setWorkPosition] =  useState('');
    const [password, setPassword] =  useState('');
    const [confirm_password, setConfirmPassword] =  useState('');

    //we are taking screen height and storing at to variable which we use for scroll view
    const screenHeight = Dimensions.get('window').height

    //navigating to login page
    const loginWithLocationForm = () => navigation.navigate("loginWithLocationForm")

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
                    if(res.status!==200 && res.status!==401){
                        store.dispatch(userRegistrationFailed());
                        Alert.alert("Something went wrong. Try again");
                    }
                    if(res.status===200){
                        loginWithLocationForm();
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
                        </TextInput>
                        <Text style={styles.hintText}>First name</Text>
                        <TextInput style={styles.inputLabel}
                                   onChangeText={setFirstName}>
                        </TextInput>
                        <Text style={styles.hintText}>Last name</Text>
                        <TextInput style={styles.inputLabel}
                                   onChangeText={setLastName}>
                        </TextInput>
                        <Text style={styles.hintText}>E-mail</Text>
                        <TextInput style={styles.inputLabel}
                                   onChangeText={setEmail}>
                        </TextInput>
                        <Text style={styles.hintText}>Office location</Text>
                        <TextInput style={styles.inputLabel}
                                   onChangeText={setOfficeLocation}>
                        </TextInput>
                        <Text style={styles.hintText}>Work position</Text>
                        <TextInput style={styles.inputLabel}
                                   onChangeText={setWorkPosition}>
                        </TextInput>
                        <Text style={styles.hintText}>Password</Text>
                        <TextInput style={styles.inputLabel}
                                   secureTextEntry={true}
                                   onChangeText={setPassword}>
                        </TextInput>
                        <Text style={styles.hintText}>Confirm password</Text>
                        <TextInput style={styles.inputLabel}
                                   secureTextEntry={true}
                                   onChangeText={setConfirmPassword}>
                        </TextInput>
                        <Text style={styles.forgotLoginDetails}>Already have your ZenZone account?
                            <Text style={styles.helpLogin}
                                  onPress={loginWithLocationForm}> Login</Text>
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
