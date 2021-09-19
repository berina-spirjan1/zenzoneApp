import React, { Component } from "react";
import {
    View,
    StyleSheet,
    StatusBar,
    ImageBackground,
    Image,
    Text,
    SafeAreaView,
    ScrollView,
    TouchableOpacity,
    Dimensions,
    AsyncStorage
} from "react-native";
import { Toolbar } from "react-native-material-ui";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";

import {onLogoutHandler} from "../../components/logout/Logout";
import {USER} from "../../configuration/config";

export default class MyProfileInfo extends Component{
    constructor(props) {
        super();
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
                // console.log(this.state.data)
            })
            .catch((error) => {
                console.error(error);
            });
    }


    render(){

        const screenHeight = Dimensions.get('window').height

        return(
            <View style={styles.container}>
                <StatusBar
                    animated={true}
                    backgroundColor="#334A6D"/>
                <Toolbar style={{ container: { backgroundColor: '#93B4E5' } }}
                         leftElement="arrow-back"
                         centerElement="My profile"
                         rightElement={{
                             menu: {
                                 icon: "more-vert",
                                 labels: ["Most popular activities", "Daily challenge", "Leaderboard", "Theme","Logout"]
                             }
                         }}/>
                <ImageBackground source={require('../../assets/images/backgroundLeaderboardLightMode.png')}
                                 style={styles.imageBackground}/>
                <Image source={require('../../assets/images/rodjoImage.png')}
                       style={styles.userImage}/>
                <Text style={styles.username}>{this.state.data.name}</Text>
                <View style={styles.followersFollowing}>
                    <Text style={styles.followers}>Followers</Text>
                    <Text style={styles.following}>Following</Text>
                </View>
                <View style={styles.counters}>
                    <Text style={styles.counterFollowers}>{this.state.data.followers_counter}</Text>
                    <Text style={styles.following}>{this.state.data.following_counter}</Text>
                </View>
                <SafeAreaView style={styles.safeArea}
                              style={{height: screenHeight}}>
                    <ScrollView vertical={true}
                                style={styles.scrollView}>
                        <TouchableOpacity style={styles.items}>
                            <View style={styles.itemRow}>
                                <FontAwesome5 name={'signature'}
                                              size={16}
                                              color={'#616C75'}
                                              style={styles.icon}/>
                                <Text style={styles.menuItem}>{this.state.data.name}</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.items}>
                            <View style={styles.itemRow}>
                                <FontAwesome5 name={'user-circle'}
                                              size={20}
                                              color={'#616C75'}
                                              style={styles.icon}/>
                                <Text style={styles.menuItem}>{this.state.data.first_name}</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.items}>
                            <View style={styles.itemRow}>
                                <FontAwesome5 name={'user-circle'}
                                              size={20}
                                              color={'#616C75'}
                                              style={styles.icon}/>
                                <Text style={styles.menuItem}>{this.state.data.last_name}</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.items}>
                            <View style={styles.itemRow}>
                                <FontAwesome5 name={'envelope'}
                                              size={20}
                                              color={'#616C75'}
                                              style={styles.icon}/>
                                <Text style={styles.menuItem}>{this.state.data.email}</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.items}>
                            <View style={styles.itemRow}>
                                <FontAwesome5 name={'map-marker-alt'}
                                              size={20}
                                              color={'#616C75'}/>
                                <Text style={styles.menuItem}>{this.state.data.office_location}</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.items}>
                            <View style={styles.itemRow}>
                                <FontAwesome5 name={'briefcase'}
                                              size={20}
                                              color={'#616C75'}/>
                                <Text style={styles.menuItem}>{this.state.data.work_position}</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.bottomTabBar}
                                          onPress={async () => {
                                              await onLogoutHandler()
                                          }}>
                            <View style={styles.itemRow}>
                                <FontAwesome5 name={'lock'}
                                              size={20}
                                              color={'#3B495E'}/>
                                <Text style={styles.menuItem}>Change password</Text>
                            </View>
                        </TouchableOpacity>
                        <View style={{marginBottom:100}}/>
                    </ScrollView>
                </SafeAreaView>

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
        height: 520,
        width: 700,
        justifyContent: 'center',
        marginLeft:-170,
        marginTop: -100,
        opacity:0.5,
        flex: 1,
        marginBottom:300
    },
    userImage:{
        width: 150,
        height: 150,
        borderRadius: 200,
        top: -140,
        left:110,
        textAlign: 'center'
    },
    username:{
        fontSize: 22,
        top:-130,
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
    bottomTabBar:{
        backgroundColor: '#93B4E5',
        height: 60,
        paddingLeft: 0,
        paddingTop:10
    },
    safeArea:{
        flex:1,
        paddingTop: StatusBar.currentHeight,
        paddingVertical: 20
    },
    scrollView:{
        alignSelf: 'stretch',
        marginTop: -10,
        marginBottom: 415
    },
    followersFollowing:{
        flexDirection: 'row',
        marginTop: -110,
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
    }
})
