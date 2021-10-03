import React, { Component } from "react";
import {
    View,
    StyleSheet,
    StatusBar,
    ImageBackground,
    Image,
    Text,
    TouchableOpacity,
    SafeAreaView,
    ScrollView, Dimensions, AsyncStorage, Alert
} from "react-native";
import { Toolbar } from "react-native-material-ui";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import { Actions } from "react-native-router-flux";
import {
    BASE_URL, LOGOUT,
    USER
} from "../../configuration/config";
import { renderIf } from "../../utilities/CommonMethods";
import { isIphoneX } from "react-native-iphone-x-helper";
import store from "../../redux/store";
import {userLogoutFailed, userLogoutStarted, userLogoutSuccess} from "../../redux/actions";

export default class UserProfile extends Component{
    constructor(props) {
        super();
    }

    myProfile(){
        Actions.myProfile()
    }

    badges(){
        Actions.badges()
    }

    leaderboard(){
        Actions.leaderboard()
    }

    activities(){
        Actions.activities()
    }

    settings(){
        Actions.settings()
    }


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
                AsyncStorage.setItem('city',JSON.stringify(this.state.data.office_location))
            })
            .catch((error) => {
                console.error(error);
            });

    }

    login(){
        Actions.login()
    }

    switchToLogoutPage(){
        Actions.switchToLogoutPage()
    }


    onLogoutHandler = async () => {

        let token = await AsyncStorage.getItem('jwt')
        token = JSON.parse(token)

        fetch(`${LOGOUT}`, {
            method: 'POST',
            mode: 'no-cors',
            cache: 'default',
            credentials: 'same-origin',
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json",
                'Authorization': 'Bearer ' + token
            },
        })
            .then(async res => {
                try {
                    store.dispatch(userLogoutStarted());

                    const jsonRes = await res.json();

                    console.log(jsonRes)
                    if (res.status !== 200) {
                        store.dispatch(userLogoutFailed());
                    } else {
                        await AsyncStorage.clear()
                        this.switchToLogoutPage()
                        store.dispatch(userLogoutSuccess());
                    }
                } catch (err) {
                    console.log(err);
                }
            })
    };


    render() {

        const screenHeight = Dimensions.get('window').height

        return(
            <View style={styles.container}>
                <StatusBar
                    animated={true}
                    backgroundColor="#334A6D"/>
                {renderIf(isIphoneX(), <Toolbar style={{ container: { backgroundColor: '#93B4E5', marginTop: 50 } }}
                                                centerElement="Profile"/>)}
                {renderIf(!isIphoneX(), <Toolbar style={{ container: { backgroundColor: '#93B4E5' } }}
                                                        centerElement="Profile"/>)}

                <ImageBackground source={require('../../assets/images/backgroundLeaderboardLightMode.png')}
                                 style={styles.imageBackground}/>
                {renderIf(this.state.data.photo_dir===null, <Image source={require('../../assets/images/user_photo.png')}
                                                                   style={styles.userImage}/>)}
                {renderIf(this.state.data.photo_dir!==null, <Image source={{uri: `${BASE_URL}`+`${this.state.data.photo_dir}`+`${this.state.data.photo_name}`}}
                                                                   style={styles.userImage}/>)}

                <Text style={styles.username}>{this.state.data.name}</Text>
                <SafeAreaView style={styles.safeArea}
                              style={{height: screenHeight}}>
                    <ScrollView vertical={true}
                                style={styles.scrollView}>
                        <TouchableOpacity style={styles.items}
                                          onPress={this.myProfile}>
                            <View style={styles.itemRow}>
                                <FontAwesome5 name={'user'}
                                              size={20}
                                              color={'#616C75'}
                                              style={styles.icon}/>
                                <Text style={styles.menuItem}>My profile</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.items}
                                          onPress={this.badges}>
                            <View style={styles.itemRow}>
                                <FontAwesome5 name={'certificate'}
                                              size={20}
                                              color={'#616C75'}
                                              style={styles.icon}/>
                                <Text style={styles.menuItem}>Badges</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.items}
                                          onPress={this.leaderboard}>
                            <View style={styles.itemRow}>
                                <FontAwesome5 name={'medal'}
                                              size={20}
                                              color={'#616C75'}
                                              style={styles.icon}/>
                                <Text style={styles.menuItem}>Leaderboard for this month</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.items}
                                          onPress={this.activities}>
                            <View style={styles.itemRow}>
                                <FontAwesome5 name={'book-reader'}
                                              size={20}
                                              color={'#616C75'}
                                              style={styles.icon}/>
                                <Text style={styles.menuItem}>Activities</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.items}
                                          onPress={this.settings}>
                            <View style={styles.itemRow}>
                                <FontAwesome5 name={'cog'}
                                              size={20}
                                              color={'#616C75'}/>
                                <Text style={styles.menuItem}>Settings</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.items}
                                          onPress={this.onLogoutHandler}>
                            <View style={styles.itemRow}>
                                <FontAwesome5 name={'sign-out-alt'}
                                              size={20}
                                              color={'#616C75'}/>
                                <Text style={styles.menuItem}>Logout</Text>
                            </View>
                        </TouchableOpacity>
                        <View style={styles.bottom}/>
                    </ScrollView>
                </SafeAreaView>

            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
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
        width: 150,
        height: 150,
        borderRadius: 200,
        top: -80,
        left:110,
        textAlign: 'center'
    },
    username:{
        fontSize: 22,
        top:-70,
        fontFamily: 'Roboto_700Bold_Italic',
        textAlign: 'center',
        color:'#505760'
    },
    items:{
        borderWidth: 0,
        backgroundColor:'#CBDBF2'
    },
    itemRow:{
        top: 10,
        flexDirection: 'row',
        paddingLeft: 80,
        height: 60,

    },
    menuItem:{
        marginTop:2,
        marginLeft: 45,
        fontFamily: 'Roboto_700Bold_Italic',
        fontWeight: 'bold',
        color: '#616C75'
    },
    bottom:{
        marginBottom: 220
    },
    safeArea:{
        flex:1,
        paddingTop: StatusBar.currentHeight,
        paddingVertical: 20
    },
    scrollView:{
        alignSelf: 'stretch',
        marginBottom: 250
    }
})
