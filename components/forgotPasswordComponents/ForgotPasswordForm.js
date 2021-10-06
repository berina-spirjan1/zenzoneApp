import {
    Alert,
    StatusBar,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View
} from "react-native";
import ForgotPasswordFormIcon from "../../assets/icons/ForgotPasswordFormIcon";
import ForgotPasswordWomenIcon from "../../assets/icons/ForgotPasswordWomenIcon";
import React, { useState } from "react";
import {FORGOT_PASSWORD} from "../../configuration/config";
import store from "../../redux/store";
import {
    forgotPasswordChangedSuccess,
    forgotPasswordChangingFailed,
    forgotPasswordChangingStarted,
} from "../../redux/actions";
import { useNavigation } from "@react-navigation/native";


export const ForgotPasswordForm = () =>{

    //defining hook that allows us to access to navigation objects
    const navigation = useNavigation();

    //allowing to state variable in this functional component
    const [email, setEmail] = useState('');

    //adding function to navigate to check email page
    const checkEmail = () => navigation.navigate("checkEmail")


    //function that use taken email address and sends it to api that requires to send user new accessing link
    const onResetHandler = () =>{

        const user = {
            email,
        };

        fetch(`${FORGOT_PASSWORD}`,{
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json",
            },
            body: JSON.stringify(user)
        })
            .then(async res => {
                try{
                    store.dispatch(forgotPasswordChangingStarted());

                    const jsonRes = await res.json();

                    console.log(jsonRes.message)
                    if(res.status!==200){
                        store.dispatch(forgotPasswordChangingFailed());
                        Alert.alert("Something went wrong. Please try again.")
                    }
                    if(res.status===200){
                        store.dispatch(forgotPasswordChangedSuccess());
                        checkEmail();
                    }
                }
                catch (err){
                    console.log(err);
                }
            })
    };

    return(
        <View style={ styles.container }>

            <StatusBar
                animated={true}
                backgroundColor="#6285B3"/>
            <TextInput style={ styles.inputEmail }
                       onChangeText={setEmail}>
            </TextInput>
            <TouchableOpacity style={ styles.button }
                              onPress={onResetHandler}>
                <Text style={ styles.resetPassword }>Reset password</Text>
            </TouchableOpacity>
            <ForgotPasswordFormIcon style={{ top: -290}}>
            </ForgotPasswordFormIcon>

            <ForgotPasswordWomenIcon style={ styles.womenIcon }/>
        </View>
    )
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
