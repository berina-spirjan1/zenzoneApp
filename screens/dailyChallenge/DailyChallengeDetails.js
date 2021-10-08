import React, {Component} from "react";
import {
    Alert,
    AsyncStorage,
    Dimensions,
    Image,
    ImageBackground,
    Platform,
    RefreshControl,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    TextInput,
    View
} from "react-native";
import { SafeAreaView } from "react-navigation";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import {
    BASE_URL,
    COMMENT,
    DAILY_CHALLENGE,
    SINGLE_ACTIVITY,
    USER
} from "../../configuration/config";
import { renderIf } from "../../utilities/CommonMethods";
import { isIphoneX } from "react-native-iphone-x-helper";
import { Toolbar } from "react-native-material-ui";
import ConvertDate from "../../utilities/ConvertDate";
import store from "../../redux/store";
import {
    failedDeletingComment,
    failedPostingComment,
    staredGettingDailyInfo,
    startedDeletingComment,
    startedGettingActivityInfo,
    startedPostingComment,
    startedUpdatingUserInfo, successfullyDeletedComment,
    successfullyPostedComment,
} from "../../redux/actions";
import DailyChallengeCounter from "./DailyChallengeCounter";
import * as ImagePicker from "expo-image-picker";
import {TouchableOpacity} from "react-native-gesture-handler";


export default class DailyChallengeDetails extends Component{
    constructor(props) {
        super(props);
    }

    state={
        data:[],
        descriptionForComment: '',
        image: null,
        imageUri: '',
        imageExtension: '',
        userData: [],
        commentArray: [],
        userInfo: [],
        id: null,
        token: null
    }

    doDaily = () => this.props.navigation.navigate("doDaily")

    componentDidMount = async () => {

        let token = await AsyncStorage.getItem('jwt')
        token = JSON.parse(token)


        fetch(`${DAILY_CHALLENGE}`, {
            method: 'GET',
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            }
        })
            .then((response) => response.json())
            .then((responseJson) => {
                store.dispatch(staredGettingDailyInfo())
                console.log(responseJson)
                this.setState({
                    data: responseJson.data[0],
                    id: responseJson.data[0].id
                })
                // if(responseJson.data[0].length!==0){
                //     store.dispatch(successfullyGotDailyInfo())
                // }
                // else{
                //     store.dispatch(failedAtGettingDailyInfo())
                // }


                fetch(`${SINGLE_ACTIVITY}/${this.state.id}`, {
                    method: 'GET',
                    headers: {
                        "Content-Type": "application/json",
                        "Accept": "application/json"
                    }
                })
                    .then((response) => response.json())
                    .then((responseJson) => {
                        store.dispatch(startedGettingActivityInfo())
                        this.setState({
                            commentArray: responseJson.data[0].comments
                        })
                        // if(responseJson.data[0].comments.length!==0){
                        //     store.dispatch(successfullyGettingActivityInfo())
                        // }
                        // else{
                        //     store.dispatch(failedAtGettingActivityInfo())
                        // }
                    })
                    .catch((error) => {
                        console.error(error);
                    });
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
                store.dispatch(startedUpdatingUserInfo())
                this.setState({
                    userData: responseJson,
                    refresh: false
                })
                // if(responseJson.length!==0){
                //     store.dispatch(successfullyUpdatedUserInfo())
                // }
                // else{
                //     store.dispatch(failedUpdatingUserInfo())
                // }
            })
            .catch((error) => {
                console.error(error);
            });

    }

    pickImage = async() =>{
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            aspect: [4, 4],
            quality: 0.5
        });


        this.setState({ image: result})

        this.setState({ imageUri: Platform.OS === "android" ? this.state.image.uri : this.state.image.uri.replace("file:///", "")})

        if (!result.cancelled) {
            this.setState({image: ''})
        }
        this.setState({imageExtension: this.state.imageUri.split('.').pop()})

    };

    congratulations = () => this.props.navigation.navigate("congratulations")

    async postComment(activity_id){
        let token = await AsyncStorage.getItem('jwt')
        token = JSON.parse(token)
        console.log(token)
        this.setState({token: token})

        const comment = new FormData();
        comment.append('activity_id', activity_id);
        comment.append('description', this.state.descriptionForComment);
        if(this.state.image!=null){
            const imageType = this.state.image.type
            const extension = this.state.imageExtension

            comment.append('image',{
                name: `${imageType}.${extension}`,
                type:  `${imageType}/${extension}`,
                uri: this.state.imageUri
            });
        }

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
                    store.dispatch(startedPostingComment());

                    const jsonRes = await res.json();

                    console.log(jsonRes)
                    if (res.status !== 200 && res.status!==400) {
                        store.dispatch(failedPostingComment());
                    }
                    if(res.status===401){
                        Alert.alert("Please login to add comment.")
                    }
                    if(res.status===200) {
                        this.congratulations();
                        store.dispatch(successfullyPostedComment());
                    }
                } catch (err) {
                    console.log(err);
                }
            })
    }

    async deleteComment(comment_id){

        let token = await AsyncStorage.getItem('jwt')
        token = JSON.parse(token)

        const commentObject = {
            id: comment_id
        }

        fetch(`${COMMENT}/${comment_id}`,{
            method: 'DELETE',
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json",
                'Authorization': 'Bearer ' + token
            },
            body: commentObject
        })
            .then(async res => {
                try {
                    store.dispatch(startedDeletingComment());

                    const jsonRes = await res.json();

                    console.log(jsonRes)
                    if (res.status !== 200) {
                        store.dispatch(failedDeletingComment());
                        Alert.alert("Something went wrong, please try again.")

                    }
                    if(res.status===200) {
                        Alert.alert("Successfully deleted comment.")
                        store.dispatch(successfullyDeletedComment());
                    }
                } catch (err) {
                    console.log(err);
                }
            })
    }

    render(){

        const screenHeight = Dimensions.get('window').height

        return (
            <>
                {renderIf(this.state.data.length!==0,
                    <View style={styles.container}>
                                <StatusBar
                                    animated={true}
                                    backgroundColor="#6285B3"/>
                                {renderIf(isIphoneX(), <Toolbar style={{ container: { backgroundColor: '#93B4E5', marginTop: 50 } }}
                                                                centerElement={this.state.data.title}/>)}
                                {renderIf(!isIphoneX(), <Toolbar style={{ container: { backgroundColor: '#93B4E5' } }}
                                                                 centerElement={this.state.data.title}/> )}
                                <SafeAreaView style={styles.safeArea}
                                              style={{height: screenHeight}}>
                                    <ScrollView vertical={true}
                                                style={styles.scrollView}
                                                refreshControl={
                                                    <RefreshControl
                                                        refreshing={this.state.refresh}
                                                        onRefresh={this.componentDidMount}
                                                    />}>
                                            <ImageBackground source={require('../../assets/images/img_1.png')}
                                                             style={styles.activityImage}/>
                                        <View style={styles.activityWrapper}>
                                            <View style={styles.likeWrapper}>
                                                <View>
                                                        <Image source={require('../../assets/images/user_photo.png')}
                                                               style={styles.userWithoutImage}/>
                                                </View>
                                            </View>
                                            <View style={styles.activityInfoWrapper}>
                                                <Text style={styles.activityTitle}>{this.state.data.title}</Text>
                                                <Text style={styles.activityDescription}>{this.state.data.description}</Text>
                                                <Text style={styles.createdDate}>Start date: {ConvertDate(this.state.data.start_date)}</Text>
                                                <Text style={styles.createdDate}>End date: {ConvertDate(this.state.data.end_date)}</Text>
                                            </View>
                                            <>

                                                    <View style={styles.userWrapper}>


                                                {renderIf(this.state.userData.photo_dir!==null,
                                                    <Image source={{uri: `${BASE_URL}`+`${this.state.userData.photo_dir}`+`${this.state.userData.photo_name}`}}
                                                           style={styles.userProfilePicture}/>
                                                )}
                                                {renderIf(this.state.userData.photo_dir===null,
                                                    <Image source={require('../../assets/images/user_photo.png')}
                                                           style={styles.userProfilePicture}/>
                                                )}
                                                        <TextInput placeholder={'Create new comment'}
                                                                   style={styles.createNewComment}
                                                                   onChangeText={text => this.setState({descriptionForComment: text })}/>
                                                        <View style={{flexDirection: 'row'}}>
                                                            <TouchableOpacity containerStyle={styles.postButton}>
                                                                <Text style={styles.postButtonText}
                                                                      onPress={async()=>{await this.postComment(this.state.data.id)}}>POST</Text>
                                                            </TouchableOpacity>
                                                            <TouchableOpacity containerStyle={styles.cameraButton}
                                                                              onPress={this.pickImage}>
                                                                <FontAwesome5 name={'camera'}
                                                                              color={'#616C75'}
                                                                              size={20}/>
                                                            </TouchableOpacity>
                                                        </View>
                                                <View style={styles.listOfComments}>
                                                    <Text style={styles.allComments}>ALL COMMENTS</Text>
                                                    {renderIf(this.state.commentArray.length!==0,
                                                        <>
                                                            {this.state.commentArray.map(function(obj,i) {
                                                                return (
                                                                    <View key={i}>
                                                                        {renderIf(obj.approved===-1,
                                                                            <>
                                                                            <View style={styles.singleCommentContainer}>
                                                                                <View style={styles.singleComment}>
                                                                                    {renderIf(obj.user.photo===null || this.state.token===null,
                                                                                        <Image source={require('../../assets/images/user_photo.png')}
                                                                                               style={styles.userPhotoComment}/>
                                                                                    )}
                                                                                    {renderIf(obj.user.photo!==null && this.state.token!==null,
                                                                                        <Image source={{uri: `${BASE_URL}`+`${obj.user.photo_dir}`+`${obj.user.photo_name}`}}
                                                                                               style={styles.userPhotoComment}/>
                                                                                    )}
                                                                                    <Text style={styles.commentDescription}>{obj.description}</Text>
                                                                                </View>
                                                                                {renderIf(this.state.userData.id===obj.user.id,
                                                                                    <TouchableOpacity containerStyle={styles.deleteButtonInSingle}>
                                                                                        <FontAwesome5 name={'trash-alt'}
                                                                                                      color={'#616C75'}
                                                                                                      size={15}
                                                                                                      onPress={async () => {await this.deleteComment(obj.id)}}
                                                                                                      style={styles.iconDelete}/>
                                                                                    </TouchableOpacity>
                                                                                )}

                                                                            </View>
                                                                                {renderIf(obj.photo_dir!==null,
                                                                                    <View style={styles.commentWithImage}>
                                                                                        <View style={styles.singleCommentWithImage}>
                                                                                            {renderIf(obj.user.photo===null,
                                                                                                <Image source={require('../../assets/images/user_photo.png')}
                                                                                                       style={styles.userPhotoComment}/>
                                                                                            )}
                                                                                            {renderIf(obj.user.photo!==null,
                                                                                                <Image source={{uri: `${BASE_URL}`+`${obj.user.photo_dir}`+`${obj.user.photo_name}`}}
                                                                                                       style={styles.userPhotoComment}/>
                                                                                            )}
                                                                                            <Text style={styles.commentDescription}>{obj.description}</Text>
                                                                                            {renderIf(this.state.userData.id===obj.user.id,
                                                                                                <TouchableOpacity containerStyle={styles.deleteButton}
                                                                                                                  onPress={async () => {await this.deleteComment(obj.id)}}>
                                                                                                    <FontAwesome5 name={'trash-alt'}
                                                                                                                  color={'#616C75'}
                                                                                                                  size={15}/>
                                                                                                </TouchableOpacity>
                                                                                            )}
                                                                                        </View>
                                                                                        <Image source={{uri: `${BASE_URL}`+`${obj.photo_dir}`+`${obj.photo_name}`}}
                                                                                               style={styles.commentImage}/>
                                                                                        {renderIf(this.state.userData.id===obj.user.id,
                                                                                            <TouchableOpacity containerStyle={styles.deleteButton}
                                                                                                              onPress={async () => {await this.deleteComment(obj.id)}}>
                                                                                                <FontAwesome5 name={'trash-alt'}
                                                                                                              color={'#616C75'}
                                                                                                              size={15}/>
                                                                                            </TouchableOpacity>
                                                                                        )}

                                                                                    </View>
                                                                                )}
                                                                            </>
                                                                        )}
                                                                        {renderIf(obj.approved===0,
                                                                            <>
                                                                                <View style={styles.singleCommentContainerRejected}>
                                                                                    <View style={styles.singleComment}>
                                                                                        {renderIf(obj.user.photo===null || this.state.token===null,
                                                                                            <Image source={require('../../assets/images/user_photo.png')}
                                                                                                   style={styles.userPhotoComment}/>
                                                                                        )}
                                                                                        {renderIf(obj.user.photo!==null && this.state.token!==null,
                                                                                            <Image source={{uri: `${BASE_URL}`+`${obj.user.photo_dir}`+`${obj.user.photo_name}`}}
                                                                                                   style={styles.userPhotoComment}/>
                                                                                        )}
                                                                                        <Text style={styles.commentDescription}>{obj.description}</Text>
                                                                                    </View>
                                                                                    {renderIf(this.state.userData.id===obj.user.id,
                                                                                        <TouchableOpacity containerStyle={styles.deleteButtonInSingle}>
                                                                                            <FontAwesome5 name={'trash-alt'}
                                                                                                          color={'#616C75'}
                                                                                                          size={15}
                                                                                                          onPress={async () => {await this.deleteComment(obj.id)}}
                                                                                                          style={styles.iconDelete}/>
                                                                                        </TouchableOpacity>
                                                                                    )}

                                                                                </View>
                                                                                {renderIf(obj.photo_dir!==null,
                                                                                    <View style={styles.commentWithImageRejected}>
                                                                                        <View style={styles.singleCommentWithImage}>
                                                                                            {renderIf(obj.user.photo===null,
                                                                                                <Image source={require('../../assets/images/user_photo.png')}
                                                                                                       style={styles.userPhotoComment}/>
                                                                                            )}
                                                                                            {renderIf(obj.user.photo!==null,
                                                                                                <Image source={{uri: `${BASE_URL}`+`${obj.user.photo_dir}`+`${obj.user.photo_name}`}}
                                                                                                       style={styles.userPhotoComment}/>
                                                                                            )}
                                                                                            <Text style={styles.commentDescription}>{obj.description}</Text>
                                                                                            {renderIf(this.state.userData.id===obj.user.id,
                                                                                                <TouchableOpacity containerStyle={styles.deleteButton}
                                                                                                                  onPress={async () => {await this.deleteComment(obj.id)}}>
                                                                                                    <FontAwesome5 name={'trash-alt'}
                                                                                                                  color={'#616C75'}
                                                                                                                  size={15}/>
                                                                                                </TouchableOpacity>
                                                                                            )}
                                                                                        </View>
                                                                                        <Image source={{uri: `${BASE_URL}`+`${obj.photo_dir}`+`${obj.photo_name}`}}
                                                                                               style={styles.commentImage}/>
                                                                                        {renderIf(this.state.userData.id===obj.user.id,
                                                                                            <TouchableOpacity containerStyle={styles.deleteButton}
                                                                                                              onPress={async () => {await this.deleteComment(obj.id)}}>
                                                                                                <FontAwesome5 name={'trash-alt'}
                                                                                                              color={'#616C75'}
                                                                                                              size={15}/>
                                                                                            </TouchableOpacity>
                                                                                        )}

                                                                                    </View>
                                                                                )}
                                                                            </>
                                                                        )}
                                                                        {renderIf(obj.approved===1,
                                                                            <>
                                                                                <View style={styles.singleCommentContainerAccepted}>
                                                                                    <View style={styles.singleComment}>
                                                                                        {renderIf(obj.user.photo===null || this.state.token===null,
                                                                                            <Image source={require('../../assets/images/user_photo.png')}
                                                                                                   style={styles.userPhotoComment}/>
                                                                                        )}
                                                                                        {renderIf(obj.user.photo!==null && this.state.token!==null,
                                                                                            <Image source={{uri: `${BASE_URL}`+`${obj.user.photo_dir}`+`${obj.user.photo_name}`}}
                                                                                                   style={styles.userPhotoComment}/>
                                                                                        )}
                                                                                        <Text style={styles.commentDescription}>{obj.description}</Text>
                                                                                    </View>
                                                                                    {renderIf(this.state.userData.id===obj.user.id,
                                                                                        <TouchableOpacity containerStyle={styles.deleteButtonInSingle}>
                                                                                            <FontAwesome5 name={'trash-alt'}
                                                                                                          color={'#616C75'}
                                                                                                          size={15}
                                                                                                          onPress={async () => {await this.deleteComment(obj.id)}}
                                                                                                          style={styles.iconDelete}/>
                                                                                        </TouchableOpacity>
                                                                                    )}

                                                                                </View>
                                                                                {renderIf(obj.photo_dir!==null,
                                                                                    <View style={styles.commentWithImageAccepted}>
                                                                                        <View style={styles.singleCommentWithImage}>
                                                                                            {renderIf(obj.user.photo===null,
                                                                                                <Image source={require('../../assets/images/user_photo.png')}
                                                                                                       style={styles.userPhotoComment}/>
                                                                                            )}
                                                                                            {renderIf(obj.user.photo!==null,
                                                                                                <Image source={{uri: `${BASE_URL}`+`${obj.user.photo_dir}`+`${obj.user.photo_name}`}}
                                                                                                       style={styles.userPhotoComment}/>
                                                                                            )}
                                                                                            <Text style={styles.commentDescription}>{obj.description}</Text>
                                                                                            {renderIf(this.state.userData.id===obj.user.id,
                                                                                                <TouchableOpacity containerStyle={styles.deleteButton}
                                                                                                                  onPress={async () => {await this.deleteComment(obj.id)}}>
                                                                                                    <FontAwesome5 name={'trash-alt'}
                                                                                                                  color={'#616C75'}
                                                                                                                  size={15}/>
                                                                                                </TouchableOpacity>
                                                                                            )}
                                                                                        </View>
                                                                                        <Image source={{uri: `${BASE_URL}`+`${obj.photo_dir}`+`${obj.photo_name}`}}
                                                                                               style={styles.commentImage}/>
                                                                                        {renderIf(this.state.userData.id===obj.user.id,
                                                                                            <TouchableOpacity containerStyle={styles.deleteButton}
                                                                                                              onPress={async () => {await this.deleteComment(obj.id)}}>
                                                                                                <FontAwesome5 name={'trash-alt'}
                                                                                                              color={'#616C75'}
                                                                                                              size={15}/>
                                                                                            </TouchableOpacity>
                                                                                        )}

                                                                                    </View>
                                                                                )}
                                                                            </>
                                                                        )}
                                                                    </View>
                                                                )
                                                            }, this)}
                                                        </>)}
                                                </View>
                                            </View></>
                                        </View>
                                    </ScrollView>
                                </SafeAreaView>
                    </View>
                )}
                {renderIf(this.state.data.length===0,
                    <DailyChallengeCounter/>
                )}
            </>

        )
    }
}


const styles = StyleSheet.create({
    container:{
        backgroundColor: '#cbdbf2',
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
        borderRadius: 25,
        height: 5000
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
        marginTop: 0
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
        color: '#616C75'
    },
    createNewComment:{
        marginLeft: 20,
        marginRight: 20,
        marginTop: 40,
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
    singleCommentContainer:{
        backgroundColor:  'rgba(255, 255, 255, 0.2)',
        borderRadius: 25,
        marginTop: 20,
        padding:10,
        paddingTop: 20,
        marginLeft: 20,
        marginRight: 20
    },
    singleComment:{
        flexDirection: 'row',
    },
    userPhotoComment:{
        height: 50,
        width: 50,
        marginLeft: 20,
        borderRadius: 50
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
    commentWithImageAccepted:{
        backgroundColor:  'rgba(187, 240, 194, 0.4)',
        borderRadius: 25,
        marginTop: 20,
        marginLeft: 20,
        marginRight: 20
    },
    commentWithImageRejected:{
        backgroundColor:  'rgba(250, 180, 192, 0.2)',
        borderRadius: 25,
        marginTop: 20,
        marginLeft: 20,
        marginRight: 20
    },
    singleCommentContainerRejected:{
        backgroundColor:  'rgba(250, 180, 192, 0.2)',
        borderRadius: 25,
        marginTop: 20,
        padding:10,
        paddingTop: 20,
        marginLeft: 20,
        marginRight: 20
    },
    singleCommentContainerAccepted:{
        backgroundColor:  'rgba(187, 240, 194, 0.4)',
        borderRadius: 25,
        marginTop: 20,
        padding:10,
        paddingTop: 20,
        marginLeft: 20,
        marginRight: 20
    },
    singleCommentWithImage:{
        flexDirection: 'row',
        marginTop: 20,
        padding:10,
        paddingTop: 20,
    },
    deleteButton:{
        backgroundColor:  'rgba(98, 133, 179, 0.5)',
        height: 30,
        marginTop: -20,
        width: 30,
        borderRadius: 20,
        padding: 5,
        marginLeft: 255,
        paddingLeft: 8,
        paddingTop: 7,
        marginBottom: 10
    },
    deleteButtonInSingle:{
        backgroundColor:  'rgba(98, 133, 179, 0.5)',
        height: 30,
        width: 30,
        borderRadius: 20,
        padding: 5,
        paddingLeft: 8,
        paddingTop: 7,
        marginBottom: 10,
        left: 250
    },
    iconDelete:{
        justifyContent: 'center'
    }
})
