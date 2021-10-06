import React, {Component} from "react";
import {
    Dimensions,
    Image,
    ImageBackground,
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text, TouchableOpacity,
    View
} from "react-native";

import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import {renderIf} from "../utilities/CommonMethods";
import {isIphoneX} from "react-native-iphone-x-helper";
import {Toolbar} from "react-native-material-ui";
import {BASE_URL, TOP_USERS} from "../configuration/config";
import store from "../redux/store";
import {
    failedAtLoadingCategories, failedGettingUserInfo, startedGettingUserInfo, startedLoadingActivities,
    startedLoadingCategories, successfullyGotUserInfo,
    successfullyLoadedActivities,
    successfullyLoadedCategories
} from "../redux/actions";

export default class Leaderboard extends Component{
    constructor(props) {
        super();
    }

    state={
        firstPlace: [],
        secondPlace: [],
        thirdPlace: [],
        fourPlace: [],
        fivePlace: [],
        data: []
    }

    componentDidMount() {
        fetch(`${TOP_USERS}?per_page=5`, {
            method: 'GET',
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            }
        })
            .then((response) => response.json())
            .then((responseJson) => {
                store.dispatch(startedGettingUserInfo())
                this.setState({
                    data: responseJson,
                    firstPlace: responseJson.data[0],
                    secondPlace: responseJson.data[1],
                    thirdPlace: responseJson.data[2],
                    fourPlace: responseJson.data[3],
                    fivePlace: responseJson.data[4]
                })
                if(responseJson.data.length!==0){
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

    //navigating back to user profile
    profile = () => this.props.navigation.navigate("profile")


    render() {

        //we are taking height of device and saving it to variable
        const screenHeight = Dimensions.get('window').height

        return (
          <View style={styles.container}>
              {renderIf(isIphoneX(),  <Toolbar style={{ container: { backgroundColor: '#93B4E5', marginTop: 50 } }}
                                               leftElement="arrow-back"
                                               centerElement="Leaderboard"
                                               onLeftElementPress={this.profile}/>)}
              {renderIf(!isIphoneX(), <Toolbar style={{ container: { backgroundColor: '#93B4E5' } }}
                                               leftElement="arrow-back"
                                               centerElement="Leaderboard"
                                               onLeftElementPress={this.profile}/> )}
              <ImageBackground source={require('../assets/images/backgroundLeaderboardLightMode.png')}
                               style={styles.imageBackground}/>
              <FontAwesome5 name={'crown'}
                            size={40}
                            color={'#FFD700'}
                            style={styles.crownIcon}/>
              <View style={styles.rankings}>
                      <View style={styles.firstPlace}>
                          {renderIf(this.state.firstPlace.photo_dir===null,
                              <Image source={require('../assets/images/user_photo.png')}
                                     style={styles.userImageRankings}/>
                          )}
                          {renderIf(this.state.firstPlace.photo_dir===null,
                              <Image source={{uri: `${BASE_URL}`+`${this.state.firstPlace.photo_dir}`+`${this.state.firstPlace.photo_name}`}}/>
                          )}
                          <Text style={styles.usernameFirstPlace}
                                numberOfLines={2}>1. {this.state.firstPlace.first_name}</Text>
                          <Text style={styles.badgesCounterFirstPlace}>{this.state.firstPlace.challenge_counter}</Text>
                      </View>
                      <View style={styles.secondPlace}>
                          {renderIf(this.state.secondPlace.photo_dir===null,
                              <Image source={require('../assets/images/user_photo.png')}
                                     style={styles.userImageRankings}/>
                          )}
                          {renderIf(this.state.secondPlace.photo_dir!==null,
                              <Image source={{uri: `${BASE_URL}`+`${this.state.secondPlace.photo_dir}`+`${this.state.secondPlace.photo_name}`}}
                                     style={styles.userImageRankings}/>
                          )}
                          <Text style={styles.usernameSecondPlace}
                                numberOfLines={2}>2. {this.state.secondPlace.first_name}</Text>
                          <Text style={styles.badgesCounterSecondPlace}>{this.state.secondPlace.challenge_counter}</Text>
                      </View>
                      <View style={styles.thirdPlace}>
                          {renderIf(this.state.thirdPlace.photo_dir===null,
                            <Image source={require('../assets/images/user_photo.png')}
                                   style={styles.userImageRankings}/>
                          )}
                          {renderIf(this.state.thirdPlace.photo_dir!==null,
                              <Image source={{uri: `${BASE_URL}`+`${this.state.thirdPlace.photo_dir}`+`${this.state.thirdPlace.photo_name}`}}
                                     style={styles.userImageRankings}/>
                          )}
                          <Text style={styles.usernameThirdPlace}
                                numberOfLines={2}>3. {this.state.thirdPlace.first_name}</Text>
                          <Text style={styles.badgesCounterThirdPlace}>{this.state.thirdPlace.challenge_counter}</Text>
                      </View>
              </View>
              <SafeAreaView style={styles.safeArea}
                            style={{height: screenHeight}}>
                  <ScrollView vertical={true}
                              style={styles.scrollView}>
                      <View style={styles.leaderboardCard}>
                          <TouchableOpacity style={styles.container2}>
                              {renderIf(this.state.fourPlace.photo_dir===null,
                                  <Image source={require('../assets/images/user_photo.png')}
                                         style={styles.userImage}/>
                              )}
                              {renderIf(this.state.fourPlace.photo_dir===null,
                                  <Image source={{uri: `${BASE_URL}`+`${this.state.fourPlace.photo_dir}`+`${this.state.fourPlace.photo_name}`}}
                                         style={styles.userImage}/>
                              )}
                              <Text style={styles.username}>{this.state.fourPlace.first_name}</Text>
                              <Text style={styles.badgesCounter}>{this.state.fourPlace.challenge_counter}</Text>
                          </TouchableOpacity>
                      </View>
                      <View style={styles.leaderboardCard}>
                          <TouchableOpacity style={styles.container2}>
                              {renderIf(this.state.fivePlace.photo_dir===null,
                                  <Image source={require('../assets/images/user_photo.png')}
                                         style={styles.userImage}/>
                              )}
                              {renderIf(this.state.fivePlace.photo_dir===null,
                                  <Image source={{uri: `${BASE_URL}`+`${this.state.fivePlace.photo_dir}`+`${this.state.fivePlace.photo_name}`}}
                                         style={styles.userImage}/>
                              )}
                              <Text style={styles.username}>{this.state.fivePlace.first_name}</Text>
                              <Text style={styles.badgesCounter}>{this.state.fivePlace.challenge_counter}</Text>
                          </TouchableOpacity>
                      </View>
                  </ScrollView>
              </SafeAreaView>
              <View style={{marginBottom: 140}}/>
          </View>
        );
    }
}


const styles = StyleSheet.create({
    container:{
        backgroundColor: '#CBDBF2',
        flex: 1
    },
    leaderboardCard:{
        marginTop: 20
    },
    safeArea:{
        flex:1,
        paddingTop: StatusBar.currentHeight,
        paddingVertical: 20
    },
    scrollView:{
        alignSelf: 'stretch',
    },
    imageBackground:{
        height: 520,
        width: 900,
        justifyContent: 'center',
        marginLeft:-250,
        marginTop: -150,
        flex: 1,
        marginBottom:300,
        opacity:0.2
    },
    rankings:{
        // bottom:270
    },
    firstPlace:{
        width:100,
        height:100,
        shadowColor: '#334A6D',
        shadowOffset: {
            width: 10,
            height: 5,
        },
        shadowOpacity: 0.8,
        shadowRadius: 10,
        elevation: 10,
        marginLeft: 130,
        marginTop: -100,
        zIndex:2
    },
    secondPlace:{
        width:100,
        height:100,
        marginLeft:30,
        marginTop:-60,
        shadowColor: '#334A6D',
        shadowOffset: {
            width: 10,
            height: 5,
        },
        shadowOpacity: 0.8,
        shadowRadius: 10,
        elevation: 10,
        marginBottom: 140
    },
    thirdPlace:{
        width:100,
        height:100,
        marginLeft:230,
        marginTop:-220,
        shadowColor: '#334A6D',
        shadowOffset: {
            width: 10,
            height: 5,
        },
        shadowOpacity: 0.8,
        shadowRadius: 10,
        elevation: 10,
        marginBottom: 140
    },
    crownIcon:{
        top:-110,
        left:155
    },
    userImageRankings:{
        height: 100,
        width:100,
        borderRadius:100,
    },
    usernameFirstPlace:{
        marginTop:5,
        textAlign: 'center',
        fontWeight: 'bold',
        color: '#000000'
    },
    badgesCounterFirstPlace:{
        textAlign: 'center',
        fontWeight: 'bold',
        color: '#334A6D'
    },
    usernameSecondPlace:{
        fontWeight: 'bold',
        textAlign: 'center',
        marginTop:5
    },
    badgesCounterSecondPlace:{
        textAlign: 'center',
        color:'#334A6D',
        fontWeight: 'bold'
    },
    usernameThirdPlace:{
        fontWeight: 'bold',
        textAlign: 'center',
        marginTop:5
    },
    badgesCounterThirdPlace:{
        textAlign: 'center',
        color:'#334A6D',
        fontWeight: 'bold'
    },
    container2:{
        backgroundColor: '#93b4e5',
        borderRadius: 40,
        marginLeft: 20,
        marginRight: 20,
        height: 90,
        flexDirection: 'row',
        padding: 10,
        marginTop:10
    },
    userImage:{
        borderRadius: 70,
        height: 70,
        width: 70
    },
    username:{
        fontSize:14,
        marginLeft: 30,
        marginTop: 25,
        fontWeight: 'bold'
    },
    badgesCounter:{
        fontWeight: 'bold',
        marginTop: 25,
        left:60,
        marginLeft:10,
        color:'#334A6D'
    }
})
