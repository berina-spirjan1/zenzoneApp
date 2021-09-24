import React, {Component} from "react";
import {
    View,
    StyleSheet,
    StatusBar, AsyncStorage, Image, ScrollView,
    SafeAreaView, Dimensions, Text, ImageBackground, TouchableOpacity
} from "react-native";
import {Toolbar} from "react-native-material-ui";
import {ACTIVITY, SINGLE_ACTIVITY, USER} from "../configuration/config";
import {isIphoneX} from "react-native-iphone-x-helper";
import {renderIf} from "../utilities/CommonMethods";
import {Actions} from "react-native-router-flux";

export default class SingleActivity extends Component{
    constructor(props) {
        super();
    }
    state:{
        data: '',
    }


    async componentDidMount() {
        let id = AsyncStorage.getItem('id')
        console.log("ovo je id ", id)
        id = JSON.stringify(id)

        let tokenHelper = await AsyncStorage.getItem('jwt')
        tokenHelper = JSON.parse(tokenHelper)
        console.log("OVO JE TOKEN", tokenHelper)

        console.log("----------", id)

        fetch(`${SINGLE_ACTIVITY}/21`, {
            method: 'GET',
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json",
                'Authorization': 'Bearer ' + tokenHelper
            }
        })
            .then((response) => response.json())
            .then((responseJson) => {
                console.log(responseJson);
                this.setState({
                    data: responseJson
                })
            })
            .catch((error) => {
                console.error(error);
            });
    }

    homePageActivities(){
        Actions.homePageActivities()
    }

    render() {

        const screenHeight = Dimensions.get('window').height

        return(
            <View style={styles.container}>
                <StatusBar
                    animated={true}
                    backgroundColor="#6285B3"/>
                {renderIf(isIphoneX(), <Toolbar style={{ container: { backgroundColor: '#93B4E5', marginTop: 50 } }}
                                                leftElement="arrow-back"
                                                centerElement="Activity title"
                                                onLeftElementPress={this.homePageActivities}/>)}
                {renderIf(!isIphoneX(), <Toolbar style={{ container: { backgroundColor: '#93B4E5' } }}
                                                        leftElement="arrow-back"
                                                        centerElement="Activity title"
                                                        onLeftElementPress={this.homePageActivities}/> )}
                <SafeAreaView style={styles.safeArea}
                              style={{height: screenHeight}}>
                    <ScrollView vertical={true}
                                style={styles.scrollView}>
                        <ImageBackground source={require('../assets/images/taj_mahal.jpg')}
                                         style={styles.activityImage}>
                        </ImageBackground>
                        <View style={styles.activityWrapper}>
                            <View style={styles.likeWrapper}>
                                <TouchableOpacity>
                                    <Image source={require('../assets/images/rodjoImage.png')}
                                           style={styles.likeImage}/>
                                </TouchableOpacity>
                            </View>
                            <View style={styles.activityInfoWrapper}>
                                <Text style={styles.activityTitle}>activity title</Text>
                                <Text style={styles.activityDescription}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent et magna auctor risus aliquet porttitor quis sit amet augue. Cras at ligula risus. Vivamus nec nisl maximus erat fermentum porta non id nulla. Vivamus ac magna vitae est consectetur sollicitudin at eget arcu. Nunc nec porta purus. Quisque lacinia varius accumsan. Suspendisse scelerisque justo mattis nunc viverra, a ornare elit bibendum. Ut laoreet ipsum non nibh semper, at congue mi consectetur. Pellentesque sit amet rutrum eros. Morbi id consectetur erat. Phasellus at mi vitae diam egestas sagittis. Suspendisse eu egestas tortor, non maximus dolor. In nec eros nulla.</Text>
                                <Text style={styles.username}>angel_traveler</Text>
                                <Text style={styles.createdDate}>Created at: 2021-08-27T14:16:41.000000Z</Text>

                            </View>
                            <View style={styles.userWrapper}>
                                <Image source={require('../assets/images/rodjoImage.png')}
                                       style={styles.userProfilePicture}/>

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
    activityImage:{
        height: Dimensions.get('window').height * 0.6,
        width: 380
    },
    safeArea:{

    },
    scrollView:{
        alignSelf: 'stretch',
    },
    activityWrapper:{
        backgroundColor: '#93B4E5',
        marginTop: -50,
        borderRadius: 25
    },
    likeImage:{
        height: 32,
        width: 32,
        borderRadius: 32
    },
    likeWrapper:{
        position: 'absolute',
        right: 40,
        top: -30,
        height: 64,
        width: 64,
        borderRadius: 64,
        backgroundColor: '#6285B3',
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: '#000000',
        shadowOffset:{
            width: 2,
            height: 0,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5
    },
    activityTitle:{
        marginTop: 20,
        textTransform: 'uppercase',
        fontWeight: 'bold',
        fontSize: 20,
        padding: 20
    },
    activityDescription:{
        padding: 20,
        fontSize: 16
    },
    userWrapper:{
        backgroundColor: '#CBDBF2',
        marginTop: 30,
        height: 120,
        borderRadius: 25,
        marginBottom:200
    },
    userProfilePicture:{
        height: 50,
        width: 50,
        borderRadius: 50,
        marginTop: -25,
        marginLeft: 20
    },
    username: {
        fontSize: 14,
        marginLeft: 20,
        fontStyle: 'italic',
        color: '#616C75'
    },
    createdDate: {
        fontSize: 12,
        marginLeft: 20,
        fontStyle: 'italic',
        color: '#616C75',
        marginBottom: 20
    }
})
