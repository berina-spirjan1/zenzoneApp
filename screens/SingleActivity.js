import React, {Component} from "react";
import {
    View,
    StyleSheet,
    StatusBar,
    AsyncStorage,
    Image,
    ScrollView,
    SafeAreaView,
    Dimensions,
    Text,
    ImageBackground,
    TouchableOpacity,
    TextInput
} from "react-native";
import {Toolbar} from "react-native-material-ui";
import {SINGLE_ACTIVITY} from "../configuration/config";
import {isIphoneX} from "react-native-iphone-x-helper";
import {renderIf} from "../utilities/CommonMethods";
import {Actions} from "react-native-router-flux";
import {FontAwesome5} from "@expo/vector-icons";

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
                                <Image source={require('../assets/images/user_photo.png')}
                                       style={styles.userProfilePicture}/>
                                <TextInput placeholder={'Create new comment'}
                                           style={styles.createNewComment}/>
                                <View style={{flexDirection: 'row'}}>
                                    <TouchableOpacity style={styles.postButton}>
                                        <Text style={styles.postButtonText}>POST</Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity style={styles.cameraButton}>
                                        <FontAwesome5 name={'camera'}
                                                      color={'#616C75'}
                                                      size={20}/>
                                    </TouchableOpacity>
                                </View>
                                <View style={styles.listOfComments}>
                                    <Text style={styles.allComments}>ALL COMMENTS</Text>
                                    <View style={styles.singleComment}>
                                        <Image source={require('../assets/images/user_photo.png')}
                                               style={styles.userPhotoComment}/>
                                        <Text style={styles.commentDescription}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent et magna auctor risus aliquet porttitor quis sit amet augue. Cras</Text>
                                    </View>
                                    <View style={styles.singleComment}>
                                        <Image source={require('../assets/images/user_photo.png')}
                                               style={styles.userPhotoComment}/>
                                        <Text style={styles.commentDescription}>Lorem ipsum dolor sit amet t augue. Cras</Text>
                                    </View>
                                    <View style={styles.commentWithImage}>
                                        <View style={styles.singleCommentWithImage}>
                                            <Image source={require('../assets/images/user_photo.png')}
                                                   style={styles.userPhotoComment}/>
                                            <Text style={styles.commentDescription}>Lorem ipsum dolor sit amet t augue. Cras</Text>
                                        </View>
                                        <Image source={require('../assets/images/goetheburg.png')}
                                                         style={styles.commentImage}/>
                                    </View>

                                </View>
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
        backgroundColor:  'rgba(98, 133, 179, 0.3)',
        marginTop: 30,
        height: 250,
        borderRadius: 25,
        marginBottom:1000
    },
    userProfilePicture:{
        height: 50,
        width: 50,
        borderRadius: 50,
        marginTop: -30,
        marginLeft: 260
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
    },
    createNewComment:{
        marginLeft: 20,
        marginRight: 20,
        marginTop: 20,
        borderRadius: 20,
        height: 60,
        padding: 10,
        backgroundColor:  'rgba(171, 194,233, 0.8)'
    },
    postButton:{
        height: 40,
        backgroundColor:  'rgba(171, 194,233, 0.8)',
        marginTop: 20,
        width: 80,
        borderRadius: 20,
        padding: 10,
        left:260
    },
    postButtonText:{
        textAlign: 'center',
        alignItems: 'center',
        fontSize: 16,
        textTransform: 'uppercase',
        fontWeight: 'bold'
    },
    cameraButton:{
        backgroundColor:  'rgba(171, 194,233, 0.8)',
        height: 40,
        marginTop: 20,
        width: 40,
        borderRadius: 20,
        padding: 10,
        left: 130
    },
    listOfComments:{
        backgroundColor:  'rgba(171, 194,233, 0.8)',
        marginTop: 30,
        height: 1000,
        borderRadius: 25,
        marginBottom:600
    },
    allComments:{
        textAlign: 'center',
        fontSize: 16,
        marginTop: 20,
        fontWeight: 'bold'
    },
    singleComment:{
        flexDirection: 'row',
        backgroundColor:  'rgba(255, 255, 255, 0.2)',
        borderRadius: 25,
        marginTop: 20,
        padding:10,
        paddingTop: 20,
        marginLeft: 20,
        marginRight: 20
    },
    userPhotoComment:{
        height: 50,
        width: 50,
        marginLeft: 20
    },
    commentDescription:{
        padding:20,
        marginRight: 50,
        marginTop: -20
    },
    commentImage:{
        height: 250,
        width:250,
        marginTop: 20,
        marginLeft: 35,
        borderRadius:25,
        marginBottom: 40
    },
    commentWithImage:{
        backgroundColor:  'rgba(255, 255, 255, 0.2)',
        borderRadius: 25,
        marginTop: 20,
        marginLeft: 20,
        marginRight: 20
    },
    singleCommentWithImage:{
        flexDirection: 'row',
        marginTop: 20,
        padding:10,
        paddingTop: 20,
    }
})
