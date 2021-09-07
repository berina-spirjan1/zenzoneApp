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
                               style={styles.imageBackground}
                               resizeMode={'cover'}>
                  <FontAwesome5 name={'crown'}
                                size={30}
                                color={'#FFD700'}
                                style={styles.crownIcon}/>
                  <View style={styles.rankings}>
                      <View style={styles.firstPlace}>
                          <Image source={require('../assets/images/rodjoImage.png')}
                                 style={styles.userImagePlaces}/>
                      </View>
                      <View style={styles.secondPlace}>

                      </View>
                      <View style={styles.thirdPlace}>

                      </View>
                  </View>
              </ImageBackground>
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
        top: 300,
        flex:1,
        paddingTop: StatusBar.currentHeight,
        paddingVertical: 20,
        bottom:2007
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
    },
    rankings:{

    },
    firstPlace:{

    },
    secondPlace:{

    },
    thirdPlace:{

    },
    userImagePlaces:{
        width:100,
        height: 100,
        borderRadius:100
    },
    crownIcon:{

    }
})
