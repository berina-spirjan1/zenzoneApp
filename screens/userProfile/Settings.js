import React, { Component } from "react";
import {
    View,
    StyleSheet,
    Text, StatusBar, AsyncStorage
} from "react-native";
import {Toolbar} from "react-native-material-ui";

import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import ToggleSwitch from "toggle-switch-react-native";
import UserInfoComponent from "../../components/userProfileComponents/UserInfoComponent";
import BackgroundForIconsUserProfile from "../../components/backgrounds/BackgroundForIconsUserProfile";
import NextButton from "../../components/buttons/NextButton";
import {Actions} from "react-native-router-flux";
import {USER} from "../../configuration/config";
import {renderIf} from "../../utilities/CommonMethods";
import {isIphoneX} from "react-native-iphone-x-helper";


export default class Settings extends Component{
    constructor(props) {
        super();
    }

    state = {
        data: ''
    }

    toLanguage(){
        Actions.toLanguage()
    }

    toHelp(){
        Actions.toHelp()
    }

    toInfoMain(){
        Actions.toInfoMain()
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



    render() {

        return(
            <View style={styles.container}>
                <StatusBar
                    animated={true}
                    backgroundColor="#334A6D"/>
                {renderIf(isIphoneX(),  <Toolbar style={{ container: { backgroundColor: '#93B4E5', marginTop: 50 } }}
                                                 leftElement="arrow-back"
                                                 centerElement="Settings"
                                                 onLeftElementPress={this.toInfoMain}/>)}
                {renderIf(!isIphoneX(),<Toolbar style={{ container: { backgroundColor: '#93B4E5' } }}
                                                       leftElement="arrow-back"
                                                       centerElement="Settings"
                                                       onLeftElementPress={this.toInfoMain}/>)}
                <UserInfoComponent/>
                <Text style={styles.settings}>Settings</Text>
                <View style={styles.language}>
                    <BackgroundForIconsUserProfile/>
                    <FontAwesome5 name={'language'}
                                  size={20}
                                  color={'#3A4F72'}
                                  style={styles.icon}/>
                    <Text style={styles.titleSection}>Language</Text>
                    <View style={styles.buttonNext}>
                        <NextButton onPress={this.toLanguage}/>
                    </View>
                </View>
                <View style={styles.darkLightMode}>
                    <BackgroundForIconsUserProfile/>
                    <FontAwesome5 name={'moon'}
                                  size={20}
                                  color={'#3A4F72'}
                                  style={styles.icon}/>
                    <Text style={styles.titleSection}> Dark/Light mode</Text>
                    <ToggleSwitch
                        isOn={false}
                        onColor="#FFFDFD"
                        offColor="#393f48"
                        labelStyle={{ color: "black", fontWeight: "900" }}
                        size="medium"
                        onToggle={isOn => console.log("changed to : ", isOn)}
                        style={styles.toggleButton}
                    />
                </View>
                <View style={styles.helpSection}>
                    <BackgroundForIconsUserProfile/>
                    <FontAwesome5 name={'life-ring'}
                                  size={20}
                                  color={'#3A4F72'}
                                  style={styles.icon}/>
                    <Text style={styles.titleSection}> Help</Text>
                    <View style={styles.buttonNext2}>
                        <NextButton onPress={this.toHelp}/>
                    </View>
                </View>
            </View>
        )
    }

}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#cbdbf2'
    },
    settings:{
        color: '#393f48',
        fontFamily:'Roboto_700Bold_Italic',
        fontSize: 20,
        marginTop: 60,
        marginLeft: 20
    },
    backgroundIcon:{
        marginLeft:20
    },
    language:{
        flexDirection: 'row',
        marginTop:10
    },
    icon:{
        marginTop:30,
        marginLeft:-32
    },
    titleSection:{
        fontSize: 16,
        marginTop: 30,
        marginLeft: 50,
        fontWeight: 'bold',
        color: '#393f48'
    },
    buttonNext:{
        marginTop:-10,
        marginLeft:60
    },
    darkLightMode:{
        flexDirection: 'row',
        marginTop:20
    },
    toggleButton:{
        marginLeft:65,
        marginTop:25
    },
    helpSection:{
        flexDirection: 'row',
        marginTop:20
    },
    buttonNext2:{
        marginTop:-10,
        marginLeft:105
    }
})
