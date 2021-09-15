import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    ImageBackground,
    Image,
    SafeAreaView,
    ScrollView, Dimensions
} from "react-native";
import BadgeCard from "../components/badgesComponents/cards/BadgeCard";


export default class Badges extends Component{
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
                        <View style={styles.singleRow}>
                            <View style={styles.singleBadge}>
                                <BadgeCard/>
                            </View>
                            <View style={styles.singleBadge}>
                                <BadgeCard/>
                            </View>
                            <View style={styles.singleBadge}>
                                <BadgeCard/>
                            </View>
                            <View style={styles.singleBadge}>
                                <BadgeCard/>
                            </View>
                        </View>
                    </ScrollView>
                </SafeAreaView>
            </View>
        )
    }
}


const styles = StyleSheet.create({
    container:{

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
    username:{
        fontSize: 22,
        top:-70,
        fontFamily: 'Roboto_700Bold_Italic',
        textAlign: 'center',
        color:'#505760'
    },
    singleBadge:{
        marginLeft: 20,
        width: 60,
        height: 60
    },
    singleRow: {
        flexDirection: 'row',
        marginBottom: 10,
        marginLeft:-20,
        textAlign: 'center',
        justifyContent: 'center'
    }
})
