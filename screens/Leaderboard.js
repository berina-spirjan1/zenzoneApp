import React, {Component} from "react";
import {
    View,
    Text,
    StyleSheet,
    SafeAreaView,
    ScrollView,
    Dimensions,
    StatusBar,
    ImageBackground,
    Image
} from "react-native";
import LeaderboardSingleListCard from "../components/leaderboardComponents/LeaderboardSingleListCard";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";

export default class Leaderboard extends Component{
    constructor(props) {
        super();
    }

    render() {

        const screenHeight = Dimensions.get('window').height

        return (
          <View style={styles.container}>
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
              <View style={{marginBottom: 50}}/>
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
        marginTop: -80,
        flex: 1,
        marginBottom:300
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
        marginTop: -140,
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
        top:-150,
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
