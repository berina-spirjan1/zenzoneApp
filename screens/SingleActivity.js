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
import {BASE_URL, COMMENT, SINGLE_ACTIVITY, USER} from "../configuration/config";
import {isIphoneX} from "react-native-iphone-x-helper";
import {renderIf} from "../utilities/CommonMethods";
import {Actions} from "react-native-router-flux";
import {FontAwesome5} from "@expo/vector-icons";
import store from "../redux/store";
import {userRegistrationFailed, userRegistrationStarted, userRegistrationSuccess} from "../redux/actions";

export default class SingleActivity extends Component{
    constructor(props) {
        super();

    }

    state = {
        data: [],
        isLoading: true,
        userInfo: [],
        userData: [],
        commentArray: []
    }

    async componentDidMount() {

        let id = await AsyncStorage.getItem("id")
        id = JSON.parse(id)

        let token = await AsyncStorage.getItem('jwt')
        token = JSON.parse(token)

        fetch(`${SINGLE_ACTIVITY}/${id}`, {
            method: 'GET',
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            }
        })
            .then((response) => response.json())
            .then((responseJson) => {
                console.log(responseJson);
                this.setState({
                    data: responseJson.data[0],
                    userInfo: responseJson.data[0].user,
                    commentArray: responseJson.data[0].comments
                })
            })
            .catch((error) => {
                console.error(error);
            });

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
                this.setState({
                    userData: responseJson
                })
            })
            .catch((error) => {
                console.error(error);
            });
    }

    async postComment(activity_id){
        let token = await AsyncStorage.getItem('jwt')
        token = JSON.parse(token)
        console.log(token)

        const comment = new FormData();
        comment.append('activity_id', activity_id);
        comment.append('description', "ĆAO SVIMA");


        console.log(comment)

        fetch(`${COMMENT}`,{
            method: 'POST',
            headers: {
                "Content-Type": "multipart/form-data",
                "Accept": "application/json",
                'Authorization': 'Bearer ' + token
            },
            body: comment
        })
            .then(async res => {
                try {
                    store.dispatch(userRegistrationStarted());

                    const jsonRes = await res.json();

                    console.log(jsonRes)
                    if (res.status !== 200) {
                        store.dispatch(userRegistrationFailed());
                    } else {
                        store.dispatch(userRegistrationSuccess());
                    }
                } catch (err) {
                    console.log(err);
                }
            })
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
                                                centerElement={this.state.data.title}
                                                onLeftElementPress={this.homePageActivities}/>)}
                {renderIf(!isIphoneX(), <Toolbar style={{ container: { backgroundColor: '#93B4E5' } }}
                                                        leftElement="arrow-back"
                                                        centerElement={this.state.data.title}
                                                        onLeftElementPress={this.homePageActivities}/> )}
                <SafeAreaView style={styles.safeArea}
                              style={{height: screenHeight}}>
                    <ScrollView vertical={true}
                                style={styles.scrollView}>
                        {renderIf(this.state.data.photo_dir!==null,
                            <ImageBackground source={{uri: `${BASE_URL}` + `${this.state.data.photo_dir}` + `${this.state.data.photo_name}`}}
                                             style={styles.activityImage}/>)}
                        {renderIf(this.state.data.photo_dir===null,
                            <ImageBackground source={require('../assets/images/photoForPosts.png')}
                                             style={styles.activityImage}/>)}
                        <View style={styles.activityWrapper}>
                            <View style={styles.likeWrapper}>
                                <TouchableOpacity>
                                    {renderIf(this.state.userInfo.photo_dir!==0,
                                        <Image source={{uri: `${BASE_URL}`+`${this.state.userInfo.photo_dir}`+`${this.state.userInfo.photo_name}`}}
                                               style={styles.likeImage}/>)}
                                    {renderIf(this.state.userInfo.photo_dir===null,
                                        <Image source={require('../assets/images/user_photo.png')}
                                               style={styles.userWithoutImage}/>)}
                                </TouchableOpacity>
                            </View>
                            <View style={styles.activityInfoWrapper}>
                                <Text style={styles.activityTitle}>{this.state.data.title}</Text>
                                <Text style={styles.activityDescription}>{this.state.data.description}</Text>
                                <Text style={styles.username}>{this.state.userInfo.name}</Text>
                                <Text style={styles.createdDate}>{this.state.data.created_at}</Text>
                            </View>
                            <View style={styles.userWrapper}>
                                <Image source={{uri: `${BASE_URL}`+`${this.state.userData.photo_dir}`+`${this.state.userData.photo_name}`}}
                                       style={styles.userProfilePicture}/>
                                <TextInput placeholder={'Create new comment'}
                                           style={styles.createNewComment}/>
                                <View style={{flexDirection: 'row'}}>
                                    <TouchableOpacity style={styles.postButton}>
                                        <Text style={styles.postButtonText}
                                              onPress={async()=>{await this.postComment(this.state.data.id)}}>POST</Text>
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
        height: 60,
        width: 60,
        borderRadius: 60
    },
    userWithoutImage:{
        height: 60,
        width: 60,
        borderRadius: 60,
        marginTop: -60
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
