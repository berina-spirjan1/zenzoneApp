import React, {Component} from "react";
import {
    View,
    SafeAreaView,
    StyleSheet,
    ScrollView, Dimensions, ImageBackground, Image, Text, AsyncStorage
} from "react-native";
import MyActivityCard from "../components/myActivitiesComponent/cards/MyActivityCard";
import { Toolbar } from "react-native-material-ui";
import { Actions } from "react-native-router-flux";
import {BASE_URL, USER} from "../configuration/config";

export default class MyActivities extends Component{
    constructor(props) {
        super();
    }

    myProfileInfoBack(){
        Actions.myProfileInfoBack()
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

    render() {

        const screenHeight = Dimensions.get('window').height

        return(
            <View style={styles.container}>
                <Toolbar style={{ container: { backgroundColor: '#93B4E5' } }}
                         leftElement="arrow-back"
                         centerElement="My activities"
                         onLeftElementPress={this.myProfileInfoBack}/>
                <ImageBackground source={require('../assets/images/backgroundLeaderboardLightMode.png')}
                                 style={styles.imageBackground}/>
                <Image source={{uri: `${BASE_URL}`+`${this.state.data.photo_dir}`+`${this.state.data.photo_name}`}}
                       style={styles.userImage}/>
                <Text style={styles.username}>{this.state.data.name}</Text>
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
        marginTop: -20,
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
    username:{
        fontSize: 22,
        top:-70,
        fontFamily: 'Roboto_700Bold_Italic',
        textAlign: 'center',
        color:'#505760'
    },
})
