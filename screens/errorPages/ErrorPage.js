import React from "react";
import {
    Alert,
    TouchableOpacity,
    StyleSheet,
    Text,
    View
} from "react-native";
import RobotPictureDarkMode from "../../assets/icons/RobotPictureDarkMode";



function ErrorPage(){

    return(
        <View>
            <RobotPictureDarkMode style={stylesDarkMode.robotPicture}/>
            {/*<RobotPictureLightMode style={stylesLightMode.robotPicture}/>*/}
            <Text style={stylesDarkMode.title}>Something went wrong</Text>
            <Text style={stylesDarkMode.text}>Sorry, we can't find the page you're looking for.</Text>
                <TouchableOpacity
                        style={stylesDarkMode.button}
                        onPress={() => Alert.alert('Go back to home page')}
                >
                    <Text style={stylesDarkMode.buttonText}>GO BACK</Text>
                </TouchableOpacity>
        </View>
    )
}

export default ErrorPage;

const stylesDarkMode=StyleSheet.create({
    robotPicture:{
        margin:10,
    },
    title:{
        fontSize:30,
        color:'#ffffff',
        textShadowColor: 'rgba(0, 0, 0, 1)',
        textShadowOffset: {width: -3, height: 1},
        textShadowRadius: 5,
        margin:17,
        fontWeight: 'bold'
    },
    text:{
        textAlign: 'left',
        fontSize: 20,
        margin: 17,
        color:'#ffffff',
        textShadowColor: 'rgba(0, 0, 0, 0.75)',
        textShadowOffset: {width: -2, height: 1},
        textShadowRadius: 10
    },
    button:{
        margin:17,
        bottom:-20,
        width:120,
        height: 40,
        textAlign: 'center',
        borderRadius: 20,
        shadowColor: "#494875",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        backgroundColor:'#1C1F23',
        shadowOpacity: 1,
        shadowRadius: 5,
        elevation: 5,
        color: '#FFFFFF',
        padding:2,
        paddingTop:0
    },
    buttonText:{
        textAlign: 'center',
        marginTop: 12,
        color: "#FFFFFF",
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom:5
    }
})

const stylesLightMode=StyleSheet.create({
    container:{
        backgroundColor: '#646668',
        padding:102
    },
    robotPicture:{
        margin:10
    },
    title:{
        fontSize:30,
        color:'#000000',
        textShadowColor: 'rgba(255, 255, 255, 255)',
        textShadowOffset: {width: -1, height: 1},
        textShadowRadius: 10,
        margin:17,
        fontWeight: 'bold'
    },
    text:{
        textAlign: 'left',
        fontSize: 20,
        margin: 17,
        textShadowColor: 'rgba(255, 255, 255, 0.75)',
        textShadowOffset: {width: -2, height: 1},
        textShadowRadius: 10
    },
    button:{
        margin:17,
        bottom:-20,
        width:120,
        textAlign: 'center',
        borderRadius: 20,
        shadowColor: "#ffffff",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        backgroundColor: '#1C1F23',
        shadowOpacity: 1,
        shadowRadius: 5,
        elevation: 5,
        color: '#FFFFFF'
    }
})
