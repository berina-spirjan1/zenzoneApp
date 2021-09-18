import {
    Alert,
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
    changePasswordSuccess,
} from "../../redux/actions";


export const ChangePasswordForm = () =>{

    const [current_password, setCurrentPassword] = useState('')
    const [new_password, setNewPassword] = useState('')
    const [confirm_new_password, setConfirmNewPassword] = useState('')

    const onChangePasswordHandler = () =>{

        const user = {
            current_password,
            new_password,
            confirm_new_password
        };

        fetch(`${CHANGE_PASSWORD}`,{
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json",
            },
            body: JSON.stringify(user)
        })
            .then(async res => {
                try{
                    store.dispatch(changePasswordStarted());

                    const jsonRes = await res.json();

                    console.log(jsonRes.message)
                    if(res.status!==200){
                        store.dispatch(changePasswordFailed());
                    }
                    else{
                        store.dispatch(changePasswordSuccess());
                    }
                }
                catch (err){
                    console.log(err);
                }
            })
    };

    return(
        <View style={styles.container}>
            <Text style={styles.oldPassword}>Old password</Text>
            <TextInput style={styles.inputOldPassword}
                       onChangeText={setCurrentPassword}>
                {/*<FontAwesome5 name={'lock'}*/}
                {/*              size={18}*/}
                {/*              color={'#000000'}/>*/}
            </TextInput>
            <Text style={styles.newPassword}>New password</Text>
            <TextInput style={styles.inputNewPassword}
                       onChangeText={setNewPassword}>
                {/*<FontAwesome5 name={'key'}*/}
                {/*              size={18}*/}
                {/*              color={'#000000'}/>*/}
            </TextInput>
            <Text style={styles.confirmPassword}>Confirm password</Text>
            <TextInput style={styles.inputConfirmPassword}
                       onChangeText={setConfirmNewPassword}>
                {/*<FontAwesome5 name={'lock-open'}*/}
                {/*              size={18}*/}
                {/*              color={'#000000'}/>*/}
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
