import React, { Component } from "react";
import {
    View,
    StyleSheet,
    Text, StatusBar
} from "react-native";
import {Toolbar} from "react-native-material-ui";

import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import ToggleSwitch from "toggle-switch-react-native";
import UserInfoComponent from "../../components/userProfileComponents/UserInfoComponent";
import BackgroundForIconsUserProfile from "../../components/backgrounds/BackgroundForIconsUserProfile";
import NextButton from "../../components/buttons/NextButton";
import {Actions} from "react-native-router-flux";


export default class Settings extends Component{
    constructor(props) {
        super();
    }

    toLanguage(){
        Actions.toLanguage()
    }

    toHelp(){
        Actions.toHelp()
    }

    render() {

        return(
            <View style={styles.container}>
                <StatusBar
                    animated={true}
                    backgroundColor="#334A6D"/>
                <Toolbar style={{ container: { backgroundColor: '#93B4E5' } }}
                         leftElement="arrow-back"
                         centerElement="Settings"/>
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
                        offColor="#FFFDFD"
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
