import React, { Component } from 'react';
import {
    View,
    Text,
    TextInput,
    StyleSheet,
    TouchableOpacity,
    StatusBar,
    Alert
} from 'react-native';
import {FontAwesome5} from "@expo/vector-icons";
import ChangePasswordLightIcon from "../components/icons/ChangePasswordLightIcon";

export default class ChangePassword extends Component{
    constructor(props) {
        super();
    }

    render() {
        return (
            <>
                <StatusBar animated={true}
                           backgroundColor="#83A9E1"/>
                <View style={styles.container}>
                    <Text style={styles.oldPassword}>Old password</Text>
                    <TextInput style={styles.inputOldPassword}>
                        <FontAwesome5 name={'lock'}
                                      size={18}
                                      color={'#000000'}/>
                    </TextInput>
                    <Text style={styles.newPassword}>New password</Text>
                    <TextInput style={styles.inputNewPassword}>
                        <FontAwesome5 name={'key'}
                                      size={18}
                                      color={'#000000'}/>
                    </TextInput>
                    <Text style={styles.confirmPassword}>Confirm password</Text>
                    <TextInput style={styles.inputConfirmPassword}>
                        <FontAwesome5 name={'lock-open'}
                                      size={18}
                                      color={'#000000'}/>
                    </TextInput>
                    <TouchableOpacity style={styles.button}
                                      onPress={() => Alert.dialog('Confirm button clicked')}>
                        <Text style={styles.buttonText}>Confirm</Text>
                    </TouchableOpacity>
                    <ChangePasswordLightIcon style={styles.changePasswordIcon}/>
                </View>
            </>

        )
    }
}


//todo add dark mode colors

const styles = StyleSheet.create({
    container:{
        backgroundColor: '#cbdbf2'
    },
    oldPassword:{
        color: '#000000',
        fontSize: 16,
        marginLeft: 20,
        top: 50
    },
    inputOldPassword:{
        height: 50,
        margin: 12,
        padding: 10,
        marginLeft: 20,
        marginRight: 30,
        borderRadius: 27,
        marginTop: 65,
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
        marginTop: 20,
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
    inputConfirmPassword:{
        height: 50,
        margin: 12,
        padding: 10,
        marginLeft: 20,
        marginRight: 30,
        borderRadius: 27,
        marginTop: 20,
        backgroundColor: 'white',
        opacity: 0.40,
        color: '#000000',
        borderWidth: 0,
        shadowColor: '#000000',
        elevation: 5,
        shadowOffset: { width: 20, height: 2 },
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
        elevation: 5,
        shadowOffset: { width: 20, height: 2 },
        shadowOpacity: 1,
        shadowRadius: 10,
        marginTop:20,
        left: 225
    },
    buttonText:{
        textTransform: 'uppercase',
        justifyContent: 'center',
        textAlign: 'center',
        padding: 12,
        fontWeight: 'bold'
    },
    changePasswordIcon:{
        top: -45,
        left: 50
    }
})
