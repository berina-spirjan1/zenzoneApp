import React, {Component} from "react";
import {
    Dimensions,
    Image,
    ImageBackground,
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    View
} from "react-native";
import LeaderboardSingleListCard from "../components/leaderboardComponents/LeaderboardSingleListCard";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import {renderIf} from "../utilities/CommonMethods";
import {isIphoneX} from "react-native-iphone-x-helper";
import {Toolbar} from "react-native-material-ui";

export default class Leaderboard extends Component{
    constructor(props) {
        super();
    }
    profile = () => this.props.navigation.navigate("profile")
    render() {

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
                          <Image source={require('../assets/images/rodjoImage.png')}
                                 style={styles.userImageRankings}/>
                          <Text style={styles.usernameFirstPlace}
                                numberOfLines={2}>@rodjo</Text>
                          <Text style={styles.badgesCounterFirstPlace}>15</Text>
                      </View>
                      <View style={styles.secondPlace}>
                          <Image source={require('../assets/images/rodjoImage.png')}
                                 style={styles.userImageRankings}/>
                          <Text style={styles.usernameSecondPlace}
                                numberOfLines={2}>@rodjo</Text>
                          <Text style={styles.badgesCounterSecondPlace}>15</Text>
                      </View>
                      <View style={styles.thirdPlace}>
                          <Image source={require('../assets/images/rodjoImage.png')}
                                 style={styles.userImageRankings}/>
                          <Text style={styles.usernameThirdPlace}
                                numberOfLines={2}>@rodjo</Text>
                          <Text style={styles.badgesCounterThirdPlace}>15</Text>
                      </View>
              </View>
              <SafeAreaView style={styles.safeArea}
                            style={{height: screenHeight}}>
                  <ScrollView vertical={true}
                              style={styles.scrollView}>
                      <View style={styles.leaderboardCard}>
                          <LeaderboardSingleListCard />
                      </View>
                      <View style={styles.leaderboardCard}>
                          <LeaderboardSingleListCard />
                      </View>
                      <View style={styles.leaderboardCard}>
                          <LeaderboardSingleListCard />
                      </View>
                      <View style={styles.leaderboardCard}>
                          <LeaderboardSingleListCard />
                      </View>
                      <View style={styles.leaderboardCard}>
                          <LeaderboardSingleListCard />
                      </View>
                      <View style={styles.leaderboardCard}>
                          <LeaderboardSingleListCard />
                      </View>
                      <View style={styles.leaderboardCard}>
                          <LeaderboardSingleListCard />
                      </View>
                      <View style={styles.leaderboardCard}>
                          <LeaderboardSingleListCard />
                      </View>
                      <View style={styles.leaderboardCard}>
                          <LeaderboardSingleListCard />
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
    }
})
