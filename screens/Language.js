import React, {Component, useState} from "react";
import { View,
         StyleSheet,
         Text,
         CheckBox,
         StatusBar,
         TouchableOpacity,
         Image,
         Alert
} from "react-native";

import UserInfoComponent from "../components/userProfileComponents/UserInfoComponent";

export default class Language extends Component{
    constructor(props) {
        super();
    }


    render() {

            return(
            <>
                <StatusBar animated={ true }
                           backgroundColor="#ABC4E9"/>
                <View style={ styles.container }>
                    <UserInfoComponent/>
                    <Text style={ styles.languageSettings }>Language settings</Text>
                    <View style={ styles.languages }>
                        <View style={ styles.englishLanguage }>
                            <Image source={ require('../assets/images/englishFlag.png') }
                                   style={ styles.englishFlag }/>
                            <Text style={ styles.englishText }>English</Text>
                            <CheckBox style={ styles.checkboxEnglish }/>
                        </View>
                        <View style={styles.bosnianLanguage}>
                            <Image source={ require('../assets/images/bosnianFlag.png') }
                                   style={ styles.bosnianFlag }/>
                            <Text style={ styles.bosnianText }>Bosnian</Text>
                            <CheckBox style={ styles.checkboxBosnian }/>
                        </View>
                    </View>
                </View>
            </>

        )
    }
}

const styles = StyleSheet.create({
    container:{
        backgroundColor: '#CBDBF2',
        flex: 1
    },
    account:{
        color: '#000000',
        fontWeight: 'bold',
        marginLeft: 20,
        marginTop: 50,
        fontSize: 20
    },
    userInformation:{

    },
    image:{
        height: 100,
        width: 100,
        borderRadius: 100
    },
    languageSettings:{
        color: '#393F48',
        fontWeight: 'bold',
        fontSize: 20,
        marginLeft: 20,
        marginTop: 50
    },
    languages:{
        color: '#455061',
        fontSize: 18
    },
    username:{
        fontSize: 20,
        color: '#515A65'
    },
    personalInfo:{
        fontSize: 18,
        color: '#6F7988'
    },
    buttonUserInfo:{

    },
    englishLanguage:{
        backgroundColor: '#ABC4E9',
        padding: 8,
        marginTop: 20,
        marginLeft: 20,
        height: 70,
        width: 310,
        borderRadius: 27,
        marginBottom: 20,
        flexDirection: 'row'
    },
    englishFlag:{
        height: 50,
        width: 50,
        borderRadius: 50
    },
    englishText:{
        marginLeft: 50,
        marginTop: 15,
        fontFamily: 'Roboto_700Bold',
        fontSize: 18,
        color: '#455061'
    },
    checkboxEnglish:{
        backgroundColor: '#FFFFFF',
        marginLeft: 85,
        marginTop: 10
    },
    bosnianLanguage:{
        backgroundColor: '#ABC4E9',
        padding: 8,
        marginLeft: 20,
        height: 70,
        width: 310,
        borderRadius: 27,
        flexDirection: 'row'
    },
    bosnianFlag:{
        height: 50,
        width: 50,
        borderRadius: 50
    },
    bosnianText:{
        marginLeft: 50,
        marginTop: 15,
        fontFamily: 'Roboto_700Bold',
        fontSize: 18,
        color: '#455061'
    },
    checkboxBosnian:{
        backgroundColor: '#FFFFFF',
        borderRadius: 20,
        marginTop: 10,
        marginLeft: 80
    }
})
