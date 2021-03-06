import React, {Component} from "react";
import {
    AsyncStorage,
    Image,
    StyleSheet,
    Text,
    View
} from "react-native";
import NextButton from "../buttons/NextButton";
import {
    BASE_URL,
    USER
} from "../../configuration/config";
import { renderIf } from "../../utilities/CommonMethods";
import {
    failedGettingUserInfo,
    startedGettingUserInfo,
    successfullyGotUserInfo
} from "../../redux/actions";
import store from "../../redux/store";

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
                store.dispatch(startedGettingUserInfo())
                console.log(responseJson);
                this.setState({
                    data: responseJson
                })
                if(this.state.data.length!==0){
                    store.dispatch(successfullyGotUserInfo())
                }
                else{
                    store.dispatch(failedGettingUserInfo())
                }
            })
            .catch((error) => {
                console.error(error);
            });
    }

    //navigating to page that contains information's about user
    profileInfo = () => this.props.navigation.navigate("profileInfo")

    render() {
        return(
            <View>
                <Text style={styles.account}>Account</Text>
                <View style={styles.userInfo}>
                    {renderIf(this.state.data.photo_dir===null, <Image source={require('../../assets/images/user_photo.png')}
                                                                style={styles.userImage}/>)}
                    {renderIf(this.state.data.photo_dir!==null, <Image source={{uri: `${BASE_URL}`+`${this.state.data.photo_dir}`+`${this.state.data.photo_name}`}}
                                                                       style={styles.userProfileImage}/>)}

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
