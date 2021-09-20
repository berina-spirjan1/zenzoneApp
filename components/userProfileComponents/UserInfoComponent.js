import React, {Component} from "react";
import {
    Image,
    Text,
    TouchableOpacity,
    View,
    StyleSheet, AsyncStorage
} from "react-native";
import NextButton from "../buttons/NextButton";
import {USER} from "../../configuration/config";
import {Actions} from "react-native-router-flux";

export default class UserInfoComponent extends Component{
    state = {
        data: ''
    }

    componentDidMount = async () => {
        let token = await AsyncStorage.getItem('jwt')
        token = JSON.parse(token)

        fetch(`${USER}`, {
            method: 'GET',
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json",
                'Authorization': 'Bearer ' + token
            }
        })
            .then((response) => response.json())
            .then((responseJson) => {
                console.log(responseJson);
                this.setState({
                    data: responseJson
                })
                // console.log(this.state.data)
            })
            .catch((error) => {
                console.error(error);
            });
    }

    profileInfo(){
        Actions.profileInfo()
    }

    render() {
        return(
            <View>
                <Text style={styles.account}>Account</Text>
                <View style={styles.userInfo}>
                    <Image source={require('../../assets/images/rodjoImage.png')}
                           style={styles.userProfileImage}/>
                    <Text style={styles.username}>{this.state.data.name}</Text>
                    <Text style={styles.personalInfo}>{"\n"}Personal info</Text>
                    <NextButton onPress={this.profileInfo}/>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    account:{
        fontSize: 20,
        fontFamily:'Roboto_700Bold_Italic',
        fontWeight: 'bold',
        marginTop: 45,
        marginLeft: 20,
        color: '#393F48'
    },
    userProfileImage:{
        width: 100,
        height: 100,
        borderRadius: 100,
        marginLeft: 20
    },
    userInfo:{
        flexDirection: 'row',
        marginTop: 25
    },
    username:{
        fontWeight: 'bold',
        marginLeft: 30,
        marginTop:30,
        color:'#393F48'
    },
    nextButton:{
        height: 40,
        width: 40,
        backgroundColor: '#FFFDFD',
        borderRadius: 10,
        marginLeft:55,
        marginTop:30
    },
    personalInfo:{
        marginLeft:-90,
        marginTop:40
    },
    icon:{
        justifyContent: 'center',
        textAlign: 'center',
        marginTop:10
    }
})
