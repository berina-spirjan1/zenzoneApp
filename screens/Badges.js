import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    ImageBackground,
    Image,
    SafeAreaView,
    ScrollView, Dimensions, AsyncStorage
} from "react-native";
import BadgeCard from "../components/badgesComponents/cards/BadgeCard";
import {USER} from "../configuration/config";
import {Toolbar} from "react-native-material-ui";
import {Actions} from "react-native-router-flux";


export default class Badges extends Component{

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

    profile(){
        Actions.profile()
    }

    render() {

        const screenHeight = Dimensions.get('window').height

        return(
            <View style={styles.container}>
                <Toolbar style={{ container: { backgroundColor: '#93B4E5' } }}
                         leftElement="arrow-back"
                         centerElement="Badges"
                         onLeftElementPress={this.profile}/>
                <ImageBackground source={require('../assets/images/backgroundLeaderboardLightMode.png')}
                                 style={styles.imageBackground}/>
                <Image source={require('../assets/images/user_photo.png')}
                       style={styles.userImage}/>
                <Text style={styles.username}>{this.state.data.name}</Text>

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
        backgroundColor: '#CBDBF2',
        flex: 1
    },
    imageBackground:{
        height: 500,
        width: 700,
        justifyContent: 'center',
        marginLeft:-150,
        marginTop: -130,
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
