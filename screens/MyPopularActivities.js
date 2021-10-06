import React, {Component} from "react";
import {
    AsyncStorage,
    Dimensions,
    Image,
    ImageBackground,
    RefreshControl,
    SafeAreaView,
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View
} from "react-native";

import { Toolbar } from "react-native-material-ui";
import {
    BASE_URL,
    MY_ACTIVITIES,
    USER
} from "../configuration/config";
import { isIphoneX } from "react-native-iphone-x-helper";
import { renderIf } from "../utilities/CommonMethods";
import Loader from "../utilities/Loader";
import { Card } from "react-native-card-view";
import store from "../redux/store";
import {
    failedAtLoadingActivities, failedGettingUserInfo,
    startedGettingUserInfo,
    startedLoadingActivities, successfullyGotUserInfo,
    successfullyLoadedActivities
} from "../redux/actions";

export default class MyPopularActivities extends Component{
    constructor(props) {
        super();
    }

    //navigating back to profile page
    myProfileInfoBack = () => this.props.navigation.navigate("myActivities")

    state = {
        data: [],
        refresh: true,
        isLoading: true,
        userData: []
    }

    componentDidMount = async (page=1) => {

        //we are getting current token that is saved in async storage
        let tokenHelper = await AsyncStorage.getItem('jwt')
        tokenHelper = JSON.parse(tokenHelper)

        //with pagination we are getting all user activities that he created.
        fetch(`${MY_ACTIVITIES}?page=${page}&&popular=1`, {
            method: 'GET',
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json",
                'Authorization': 'Bearer ' + tokenHelper
            }
        })
            .then((response) => response.json())
            .then((responseJson) => {
                store.dispatch(startedLoadingActivities())
                this.setState({
                    data: [...this.state.data, ...responseJson.data.data],
                    isLoading: false,
                    refresh: false,
                })
                if(this.state.data.length!==0){
                    store.dispatch(successfullyLoadedActivities())
                }
                else{
                    store.dispatch(failedAtLoadingActivities())
                }
                if(responseJson.data.data.length!==0){
                    page++;
                    return this.componentDidMount(page)
                }
            })
            .catch((error) => {
                console.error(error);
            });

    }

    async componentWillMount() {

        let token = await AsyncStorage.getItem('jwt')
        token = JSON.parse(token)

        //we are sending token to api and getting information's about user
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
                this.setState({
                    userData: responseJson,
                    refresh: false
                })
                if(this.state.userData.length!==0){
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

    //navigating to single activity page
    goToSingleActivity = () => this.props.navigation.navigate("goToSingleActivity")

    //we are storing activity id at async storage that we will use to get information's about clicked activity
    async showMore(id) {
        await AsyncStorage.setItem('id', JSON.stringify(id))
        this. goToSingleActivity()
    }

    render() {


        const screenHeight = Dimensions.get('window').height

        return(
            <View style={styles.container}>
                {console.log(this.state.data)}
                {renderIf(isIphoneX(),  <Toolbar style={{ container: { backgroundColor: '#93B4E5', marginTop: 50} }}
                                                 leftElement="arrow-back"
                                                 centerElement="My activities"
                                                 onLeftElementPress={this.myProfileInfoBack}/>)}
                {renderIf(!isIphoneX(), <Toolbar style={{ container: { backgroundColor: '#93B4E5' } }}
                                                 leftElement="arrow-back"
                                                 centerElement="My activities"
                                                 onLeftElementPress={this.myProfileInfoBack}/>)}
                <ImageBackground source={require('../assets/images/backgroundLeaderboardLightMode.png')}
                                 style={styles.imageBackground}/>
                {renderIf(this.state.userData.photo_dir===null, <Image source={require('../assets/images/user_photo.png')}
                                                                       style={styles.userImage}/>)}
                {renderIf(this.state.userData.photo_dir!==null, <Image source={{uri: `${BASE_URL}`+`${this.state.userData.photo_dir}`+`${this.state.userData.photo_name}`}}
                                                                       style={styles.userImage}/>)}

                <Text style={styles.username}>{this.state.userData.name}</Text>
                <View style={styles.followersFollowing}>
                    <Text style={styles.followers}>Followers</Text>
                    <Text style={styles.following}>Following</Text>
                </View>
                <View style={styles.counters}>
                    <Text style={styles.counterFollowers}>{this.state.userData.followers_counter}</Text>
                    <Text style={styles.following}>{this.state.userData.following_counter}</Text>
                </View>
                {this.state.isLoading ? <Loader show={true} loading={this.state.isLoading} /> : null}
                <SafeAreaView style={styles.safeArea}
                              style={{height: screenHeight}}>
                    <ScrollView vertical={true}
                                style={styles.scrollView}
                                refreshControl={
                                    <RefreshControl
                                        refreshing={this.state.refresh}
                                        onRefresh={this.componentDidMount}
                                    />}>
                        {renderIf(this.state.data.length,
                            <View>
                                {this.state.data.map(function(obj,i) {
                                    return(
                                        <View style={styles.activityCard}>
                                            <Card style={styles.card}
                                                  styles={{ card: { backgroundColor: '#93B4E5',
                                                          borderRadius:30,
                                                          shadowColor: "#000000",
                                                          shadowOffset: {
                                                              width: 0,
                                                              height: 8,
                                                          },
                                                          shadowOpacity: 0.44,
                                                          shadowRadius: 10.84,
                                                          elevation: 16 }}}>
                                                <View style={styles.activityParagraph}>
                                                    {renderIf(obj.photo_dir!==null,
                                                        <Image source={{uri: `${BASE_URL}`+`${obj.photo_dir}`+`${obj.photo_name}`}}
                                                               style={styles.activitySmallImage}/>
                                                    )}
                                                    {renderIf(obj.photo_dir===null,
                                                        <Image source={require('../assets/images/photoForPosts.png')}
                                                               style={styles.activitySmallImage}/>
                                                    )}
                                                </View>
                                                <View style={{alignContent: 'center'}}>
                                                    <Text style={styles.activityTitle}
                                                          numberOfLines={2}>{obj.title}</Text>
                                                    <Text>{"\n"}</Text>
                                                </View>
                                                <TouchableOpacity style={styles.button}
                                                                  onPress={async () => {await this.showMore(obj.id)}}>
                                                    <Text style={styles.buttonText}>Show more</Text>
                                                </TouchableOpacity>
                                            </Card>
                                        </View>
                                    )
                                },this)}
                            </View>
                        )}
                    </ScrollView>
                    <View style={{marginBottom: 60}}/>
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
    userHeaderInfo: {

    },
    activityCard:{
        marginBottom: 5
    },
    safeArea:{

    },
    scrollView:{
        marginTop: -50,
        marginBottom: 470
    },
    imageBackground:{
        height: 500,
        width: 700,
        justifyContent: 'center',
        marginLeft:-150,
        marginTop: -130,
        flex: 1,
        marginBottom:300,
        opacity:0.5
    },
    userImage:{
        width: 150,
        height: 150,
        borderRadius: 200,
        top: -80,
        left:110,
        textAlign: 'center'
    },

    activityParagraph:{
        padding: 10
    },
    activitySmallImage:{
        height: 100,
        width: 100,
        borderRadius: 11,
        marginTop: 10,
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center'
    },
    activityTitle:{
        fontSize: 18,
        fontFamily: 'Roboto_400Regular',
        textAlign: 'center',
        padding: 20,
        marginBottom: 20
    },
    button:{
        backgroundColor: '#6285B3',
        borderRadius: 12,
        height: 30,
        width: 90,
        marginTop: -70,
        padding: 7,
        alignItems: 'center',
        marginBottom: 20
    },
    buttonText:{
        fontFamily: 'Roboto_500Medium',
        fontSize: 12,
        textAlign: 'center',
        textTransform: 'uppercase',
        fontWeight: 'bold'
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
    username:{
        fontSize: 22,
        top:-80,
        fontFamily: 'Roboto_700Bold_Italic',
        textAlign: 'center',
        color:'#505760'
    },
})
