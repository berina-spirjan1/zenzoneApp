import {
    Alert,
    AsyncStorage,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View
} from "react-native";
import ChangePasswordLightIcon from "../../assets/icons/ChangePasswordLightIcon";
import React, { useState } from "react";
import { CHANGE_PASSWORD } from "../../configuration/config";
import store from "../../redux/store";
import {
    changePasswordFailed,
    changePasswordStarted,
    changePasswordSuccess
} from "../../redux/actions";
import { useNavigation } from "@react-navigation/native";


export const ChangePasswordForm = () =>{

    //defining hook that allows us to access to navigation objects
    const navigation = useNavigation();

    //allowing to state variables in this functional component
    const [current_password, setCurrentPassword] = useState('')
    const [new_password, setNewPassword] = useState('')
    const [confirm_new_password, setConfirmNewPassword] = useState('')

    //adding function to navigate to login page
    const login = () => navigation.navigate("login")

    //function for sending request to api for changing password
    const onChangePasswordHandler = async () => {

        let token = await AsyncStorage.getItem('jwt')
        token = JSON.parse(token)

        const user = {
            current_password,
            new_password,
            confirm_new_password
        };

        fetch(`${CHANGE_PASSWORD}`, {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json",
                'Authorization': 'Bearer ' + token
            },
            body: JSON.stringify(user)
        })
            .then(async res => {
                try {
                    store.dispatch(changePasswordStarted());

                    const jsonRes = await res.json();

                    console.log(jsonRes.message)
                    if (res.status !== 200) {
                        store.dispatch(changePasswordFailed());
                    }
                    if(res.status===200){
                        login();
                        store.dispatch(changePasswordSuccess());
                    }
                    else {
                        Alert.alert("Something went wrong. Please try again.")
                    }
                } catch (err) {
                    console.log(err);
                }
            })
    };

    return(
        <View style={styles.container}>
            <Text style={styles.oldPassword}>Old password</Text>
            <TextInput style={styles.inputOldPassword}
                       onChangeText={setCurrentPassword}
                       secureTextEntry={true}>
            </TextInput>
            <Text style={styles.newPassword}>New password</Text>
            <TextInput style={styles.inputNewPassword}
                       onChangeText={setNewPassword}
                       secureTextEntry={true}>
            </TextInput>
            <Text style={styles.confirmPassword}>Confirm password</Text>
            <TextInput style={styles.inputConfirmPassword}
                       onChangeText={setConfirmNewPassword}
                       secureTextEntry={true}>
            </TextInput>
            <View>
                <TouchableOpacity style={styles.button}
                                  onPress={onChangePasswordHandler}>
                    <Text style={styles.buttonText}>Confirm</Text>
                </TouchableOpacity>
            </View>
            <ChangePasswordLightIcon style={styles.changePasswordIcon}/>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        backgroundColor: '#cbdbf2'
    },
    oldPassword:{
        color: '#000000',
        fontSize: 16,
        marginLeft: 20,
        top: 30
    },
    inputOldPassword:{
        height: 50,
        margin: 12,
        padding: 10,
        marginLeft: 20,
        marginRight: 30,
        borderRadius: 27,
        marginTop: 40,
        backgroundColor: 'white',
        opacity: 0.40,
        color: '#000000',
        borderWidth: 0,
        shadowColor: '#000000',
        elevation: 5,
        shadowOffset: {width: 5, height: 2},
        shadowOpacity: 1,
        shadowRadius: 10
    },
    newPassword:{
        color: '#000000',
        fontSize: 16,
        marginLeft: 20
    },
    inputNewPassword:{
        height: 50,
        margin: 12,
        padding: 10,
        marginLeft: 20,
        marginRight: 30,
        borderRadius: 27,
        marginTop: 10,
        backgroundColor: 'white',
        opacity: 0.40,
        color: '#000000',
        borderWidth: 0,
        shadowColor: '#000000',
        elevation: 5,
        shadowOffset: {width: 5, height: 2},
        shadowOpacity: 1,
        shadowRadius: 10
    },
    inputConfirmPassword:{
        height: 50,
        margin: 12,
        padding: 10,
        marginLeft: 20,
        marginRight: 30,
        borderRadius: 27,
        marginTop: 10,
        backgroundColor: 'white',
        opacity: 0.40,
        color: '#000000',
        borderWidth: 0,
        shadowColor: '#000000',
        elevation: 5,
        shadowOffset: { width: 5, height: 2 },
        shadowOpacity: 1,
        shadowRadius: 10
    },
    confirmPassword:{
        color: '#000000',
        fontSize: 16,
        marginLeft: 20
    },
    button:{
        backgroundColor: '#6285b3',
        height: 40,
        width: 100,
        borderRadius: 18,
        shadowColor: '#000000',
        elevation: 3,
        shadowOffset: { width: 1, height: 0 },
        shadowOpacity: 1,
        shadowRadius: 2,
        marginTop:20,
        left: 225,
        marginBottom: 12
    },
    buttonText:{
        textTransform: 'uppercase',
        justifyContent: 'center',
        textAlign: 'center',
        padding: 12,
        fontWeight: 'bold'
    },
    changePasswordIcon:{
        top: -35,
        left: 20
    }
})
