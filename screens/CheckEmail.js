import React from "react";
import {
    View,
    StyleSheet,
    Text, TouchableOpacity
} from "react-native";
import LottieView from "lottie-react-native";
import {Actions} from "react-native-router-flux";

function CheckEmail (){

    const login = () =>{
        Actions.login()
    }

    return(
        <View style={styles.container}>
            <LottieView
                style={styles.lottie}
                source={require("../assets/images/checkEmail.json")}
                autoPlay={true}
                loop={true}/>
            <Text style={styles.text}>Please check your e-mail to reset your password.</Text>
            <TouchableOpacity style={styles.button}
                              onPress={login}>
                <Text style={styles.buttonText}>BACK TO LOGIN</Text>
            </TouchableOpacity>
        </View>
    )
}

export default CheckEmail;

const styles = StyleSheet.create({
    container:{
        backgroundColor: '#CBDBF2',
        flex: 1
    },
    lottie:{
        flex:1,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: -50
    },
    text:{
        fontSize: 20,
        marginTop: 400,
        padding: 20,
        fontWeight: 'bold'
    },
    button:{
        backgroundColor: '#93B4E5',
        color:"#000000",
        width: 140,
        left: 180,
        borderRadius: 26,
        padding: 1,
        height: 40,
        paddingTop: 0,
        marginBottom: 20
    },
    buttonText:{
        fontSize: 16,
        fontWeight: 'bold',
        marginTop: 10,
        textAlign: 'center',
        justifyContent: 'center'
    }
})
