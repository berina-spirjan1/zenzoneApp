import React, {Component} from "react";
import {
    AsyncStorage,
    Dimensions,
    Image,
    ImageBackground,
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
    TextInput
} from "react-native";
import { USER } from "../configuration/config";
import { Actions } from "react-native-router-flux";
import { Toolbar } from "react-native-material-ui";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import {UpdateProfileForm} from "../components/userProfileComponents/UpdateProfileForm";
import {renderIf} from "../utilities/CommonMethods";
import {isIphoneX} from "react-native-iphone-x-helper";


export default class UpdateProfile extends Component{
    constructor(props) {
        super();
    }
    state = {
        data: '',
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
            })
            .catch((error) => {
                console.error(error);
            });
    }

    switchToChangePassword(){
        Actions.switchToChangePassword()
    }

    render(){


        return(
            <View style={styles.container}>
                <StatusBar
                    animated={true}
                    backgroundColor="#334A6D"/>
                {renderIf(isIphoneX(), <Toolbar style={{ container: { backgroundColor: '#93B4E5', marginTop: 50 } }}
                                                leftElement="arrow-back"
                                                centerElement="Update profile"/>)}
                {renderIf(!isIphoneX(), <Toolbar style={{ container: { backgroundColor: '#93B4E5' } }}
                                                 leftElement="arrow-back"
                                                 centerElement="Update profile"/>)}
                <ImageBackground source={require('../assets/images/backgroundLeaderboardLightMode.png')}
                                 style={styles.imageBackground}/>
                <UpdateProfileForm/>

            </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        backgroundColor: '#CBDBF2',
        flex: 1
    },
    imageBackground:{
        height: 500,
        width: 700,
        justifyContent: 'center',
        marginLeft:-150,
        marginTop: -150,
        flex: 1,
        marginBottom:300,
        opacity:0.2
    },
    userImage:{
        width: 100,
        height: 100,
        borderRadius: 200,
        top: -100,
        left:130,
        textAlign: 'center'
    },
    username:{
        fontSize: 22,
        top:-100,
        fontFamily: 'Roboto_700Bold_Italic',
        textAlign: 'center',
        color:'#505760'
    },
    items:{
        borderWidth: 0,
        backgroundColor:'#CBDBF2'
    },
    itemRow:{
        top: 0,
        flexDirection: 'row',
        paddingLeft: 80,
        height: 60,

    },
    menuItem2:{
        marginTop:2,
        marginLeft: 45,
        fontFamily: 'Roboto_700Bold_Italic',
        fontWeight: 'bold',
        color: '#616C75'
    },
    menuItem:{
        marginTop:-40,
        marginLeft: 45,
        fontFamily: 'Roboto_700Bold_Italic',
        fontWeight: 'bold',
        color: '#616C75'
    },
    bottomTabBar:{
        backgroundColor: '#93B4E5',
        height: 60,
        paddingLeft: 0,
        paddingTop: 10
    },
    safeArea:{
        flex:1,
        paddingTop: StatusBar.currentHeight,
        paddingVertical: 20
    },
    scrollView:{
        alignSelf: 'stretch',
        marginTop: -20,
        marginBottom: 415
    },
    followersFollowing:{
        flexDirection: 'row',
        marginTop: -60,
        marginBottom: 100
    },
    followers:{
        marginLeft: 40,
        marginRight:140,
        fontSize: 16,
        fontFamily: 'Roboto_700Bold_Italic',
        fontWeight: 'bold',
        color:'#505760'
    },
    following: {
        fontSize: 16,
        fontFamily: 'Roboto_700Bold_Italic',
        fontWeight: 'bold',
        color:'#505760'
    },
    counters:{
        flexDirection: 'row',
        marginTop: -100,
        marginBottom: 75
    },
    counterFollowers:{
        marginLeft: 70,
        marginRight: 200,
        fontSize: 16,
        fontFamily: 'Roboto_700Bold_Italic',
        fontWeight: 'bold',
        color:'#505760'
    },
    counterFollowing:{
        fontSize: 16,
        fontFamily: 'Roboto_700Bold_Italic',
        fontWeight: 'bold',
        color:'#505760'
    },
    button:{
        backgroundColor: '#93B4E5',
        width: 150,
        height: 50,
        left: 170,
        padding: 10,
        marginBottom: 20,
        borderRadius: 25
    },
    buttonText:{
        textAlign: 'center',
        textTransform: 'uppercase',
        fontWeight: 'bold',
        fontSize: 14,
        justifyContent: 'center',
        marginTop: 7
    },
    uploadImage:{
        backgroundColor: '#93B4E5',
        width: 100,
        height: 100,
        borderRadius: 100,
        marginLeft: 130,
        marginTop: -100,
        marginBottom: 100
    },
    cameraIcon:{

    },
    upload:{
        marginTop: 5,
        textAlign: 'center',
        fontWeight: 'bold'
    },
    userImageDefault:{
        width: 100,
        height: 100,
        borderRadius: 100,
        marginBottom: 100
    },
    littleCamera:{
        backgroundColor: '#FFF',
        height: 30,
        width: 30,
        borderRadius: 30,
        marginTop: -130,
        marginLeft: 200,
        marginBottom: 100,
        padding: 5
    }

})
