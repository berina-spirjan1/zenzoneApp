import React, {Component} from "react";
import {
    View,
    SafeAreaView,
    StyleSheet,
    ScrollView, Dimensions, ImageBackground, Image, Text
} from "react-native";
import MyActivityCard from "../components/myActivitiesComponent/cards/MyActivityCard";

export default class MyActivities extends Component{
    constructor(props) {
        super();
    }


    render() {

        const screenHeight = Dimensions.get('window').height

        return(
            <View style={styles.container}>
                <ImageBackground source={require('../assets/images/backgroundLeaderboardLightMode.png')}
                                 style={styles.imageBackground}/>
                <Image source={require('../assets/images/rodjoImage.png')}
                       style={styles.userImage}/>
                <Text style={styles.username}>@arnel_maric</Text>
                <SafeAreaView style={styles.safeArea}
                              style={{height: screenHeight}}>
                    <ScrollView vertical={true}
                                style={styles.scrollView}>
                        <View style={styles.activityCard}>
                            <MyActivityCard/>
                        </View>
                        <View style={styles.activityCard}>
                            <MyActivityCard/>
                        </View>
                        <View style={styles.activityCard}>
                            <MyActivityCard/>
                        </View>
                        <View style={styles.activityCard}>
                            <MyActivityCard/>
                        </View>
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
    userHeaderInfo: {

    },
    activityCard:{
        margin: 20,
        marginBottom: 5
    },
    safeArea:{

    },
    scrollView:{
        marginTop: 20,
        marginBottom: 470
    },
    imageBackground:{
        height: 520,
        width: 900,
        justifyContent: 'center',
        marginLeft:-250,
        marginTop: -80,
        flex: 1,
        marginBottom:300,
        opacity:0.5
    },
    userImage:{
        width: 150,
        height: 150,
        borderRadius: 200,
        top: -40,
        left:110,
        textAlign: 'center'
    },
    username:{
        fontSize: 22,
        top:-30,
        fontFamily: 'Roboto_700Bold_Italic',
        textAlign: 'center',
        color:'#505760'
    },
})
