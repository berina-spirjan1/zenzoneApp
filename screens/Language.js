import React, {Component, useState} from 'react';
import { View,
         StyleSheet,
         Text,
         CheckBox,
         StatusBar,
         TouchableOpacity,
         Image,
         Alert
} from 'react-native';

import { FontAwesome5 } from "@expo/vector-icons";

export default class Language extends Component{
    constructor(props) {
        super();
    }


    render() {

        const [username, setUsername] = useState('')
        const [userProfilePicture, setUserProfilePicture] = useState('')
        const [isEnglish, setEnglish] = useState(true)

        const getData = () => {
            //GET request
            fetch('https://neki.json', {
                method: 'GET',
                //Request Type
            })
                .then((response) => response.json())
                //If response is in json then in success
                .then((responseJson) => {
                    //Success
                    alert(JSON.stringify(responseJson));
                    console.log(responseJson);
                })
                //If response is not in json then in error
                .catch((error) => {
                    //Error
                    alert(JSON.stringify(error));
                    console.error(error);
                });
        }

            return(
            <>
                <StatusBar animated={ true }
                           backgroundColor="#ABC4E9"/>
                <View style={ styles.container }>
                    <Text style={ styles.account }>Account</Text>
                    <View style={ styles.userInformation }>
                        <Image source={ require('../assets/images/userIcon.svg') }
                               style={ styles.image }/>
                        <Text style={ styles.username }>{setUsername}</Text>
                        <Text style={ styles.personalInfo }>Personal info</Text>
                        <TouchableOpacity style={ styles.buttonUserInfo }
                                          onPress={() => Alert.alert('Button user info clicked')}>
                            <FontAwesome5 name={'arrow-right'}
                                          size={13}
                                          color={'#847F7F'}/>
                        </TouchableOpacity>
                    </View>
                    <Text style={ styles.languageSettings }>Language settings</Text>
                    <View style={ styles.languages }>
                        <View style={ styles.englishLanguage }>
                            <Image source={ require('../assets/images/english_flag.png') }
                                   style={ styles.englishFlag }/>
                            <Text style={ styles.englishText }>English</Text>
                            <CheckBox value={ isEnglish }
                                      onValueChange={ setEnglish }
                                      style={ styles.checkboxEnglish }/>
                        </View>
                        <View style={styles.bosnianLanguage}>
                            <Image source={ require('../assets/images/bosnian_flag.png') }
                                   style={ styles.bosnianFlag }/>
                            <Text style={ styles.bosnianText }>Bosnian</Text>
                            <CheckBox value={ isEnglish }
                                      onValueChange={ setEnglish }
                                      style={ styles.checkboxBosnian }/>
                        </View>
                    </View>
                </View>
            </>

        )
    }
}

const styles = StyleSheet.create({
    container:{
        backgroundColor: '#CBDBF2'
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
        marginLeft: 20,
        height: 50,
        width: 220,
        borderRadius: 27
    },
    englishFlag:{
        height: 50,
        width: 50,
        borderRadius: 50
    },
    englishText:{
        left:150
    },
    checkboxEnglish:{
        backgroundColor: '#FFFFFF'
    },
    bosnianLanguage:{
        backgroundColor: '#ABC4E9',
        padding: 8,
        marginLeft: 20,
        height: 50,
        width: 220,
        borderRadius: 27
    },
    bosnianFlag:{
        height: 50,
        width: 50,
        borderRadius: 50
    },
    bosnianText:{

    },
    checkboxBosnian:{
        backgroundColor: '#FFFFFF'
    }
})
