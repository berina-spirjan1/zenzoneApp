import React, { Component } from "react";
import {
    View,
    Text,
    TextInput,
    StyleSheet,
    StatusBar,
    TouchableOpacity,
    Alert
} from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";


import ForgotPasswordFormIcon from "../assets/icons/ForgotPasswordFormIcon";
import ForgotPasswordWomenIcon from "../assets/icons/ForgotPasswordWomenIcon";
import { Toolbar } from "react-native-material-ui";

export default class ForgotPassword extends Component{
    constructor(props) {
        super();
    }

    render() {
        return(
            <>
                <Toolbar style={{ container: { backgroundColor: '#93B4E5' }}}
                         centerElement=" Forgot password"/>
                <View style={ styles.container }>

                    <StatusBar
                        animated={true}
                        backgroundColor="#6285B3"/>
                    <TextInput style={ styles.inputEmail }>
                        <FontAwesome5 name={'envelope'}
                                      size={18}
                                      color={'#000000'}/>
                    </TextInput>
                    <TouchableOpacity style={ styles.button }
                                      onPress={() => Alert.alert('Button clicked')}>
                        <Text style={ styles.resetPassword }>Reset password</Text>
                    </TouchableOpacity>
                    <ForgotPasswordFormIcon style={{ top: -290}}>
                    </ForgotPasswordFormIcon>

                    <ForgotPasswordWomenIcon style={ styles.womenIcon }/>
                </View>
        </>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        backgroundColor: '#646668'
    },
    toolBar:{
        backgroundColor: '#000000'
    },
    email:{
        color: '#FFFFFF',
        top: 320,
    },
    inputEmail:{
        height: 50,
        width: 200,
        margin: 12,
        padding: 10,
        marginLeft: 45,
        marginRight: 30,
        borderRadius: 27,
        marginTop: 130,
        backgroundColor: '#FFFFFF',
        opacity: 0.5,
        color: '#000000',
        borderWidth: 0,
        shadowColor: '#000000',
        elevation: 5,
        shadowOffset: { width: 20, height: 2 },
        shadowOpacity: 1,
        shadowRadius: 10,
        top: 140,
        zIndex: 2
    },
    button:{
        backgroundColor: '#6285B3',
        height: 40,
        top: 150,
        width: 150,
        borderRadius: 27,
        marginLeft: 70,
        zIndex: 2
    },
    resetPassword:{
        textAlign: 'center',
        justifyContent: 'center',
        fontWeight: 'bold',
        padding:12,
        textTransform: 'uppercase'
    },
    womenIcon:{
        top: -360
    }
})
