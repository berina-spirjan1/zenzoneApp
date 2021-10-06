import React, {Component} from "react";
import {
    Alert,
    AsyncStorage,
    Dimensions,
    Image,
    ImageBackground,
    Platform,
    RefreshControl,
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View
} from "react-native";
import { Toolbar } from "react-native-material-ui";
import {
    BASE_URL,
    COMMENT,
    SINGLE_ACTIVITY,
    USER
} from "../configuration/config";
import { isIphoneX } from "react-native-iphone-x-helper";
import { renderIf } from "../utilities/CommonMethods";
import { FontAwesome5 } from "@expo/vector-icons";
import store from "../redux/store";
import {
    failedAtGettingActivityInfo,
    failedDeletingComment,
    failedGettingUserInfo,
    failedPostingComment,
    startedDeletingComment,
    startedGettingActivityInfo,
    startedGettingUserInfo,
    startedPostingComment,
    successfullyDeletedComment,
    successfullyGettingActivityInfo,
    successfullyGotUserInfo,
    successfullyPostedComment,
} from "../redux/actions";
import * as ImagePicker from "expo-image-picker";
import ConvertDate from "../utilities/ConvertDate";

export default class SingleActivity extends Component{
    constructor(props) {
        super();

    }

    state = {
        data: [],
        isLoading: true,
        userInfo: [],
        userData: [],
        commentArray: [],
        descriptionForComment: '',
        image: null,
        imageUri: '',
        imageExtension: '',
        refresh: false,
        my_id: '',
        token: null
    }

    //we are taking image from gallery and cropping it
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

    //navigation to page that contains information's about user who created current activity
    goToAboutUserWhoCreatedActivity = () => this.props.navigation.navigate("goToAboutUserWhoCreatedActivity")

    //at this function we are storing user id which we use to get information's about user
    async showUser(user_id){
        await AsyncStorage.setItem('user_id',JSON.stringify(user_id))
        if(this.state.token!==null){
            this.goToAboutUserWhoCreatedActivity()
        }
    }

    async componentDidMount() {

        this.setState({refresh: true})

        //we are taking activity id and token from async storage
        let id = await AsyncStorage.getItem("id")
        id = JSON.parse(id)

        let token = await AsyncStorage.getItem('jwt')
        token = JSON.parse(token)

        this.setState({token: token})

        //at fetch method we are getting information's about single activity that is selected
        fetch(`${SINGLE_ACTIVITY}/${id}`, {
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
                    data: responseJson.data[0],
                    userInfo: responseJson.data[0].user,
                    commentArray: responseJson.data[0].comments,
                    refresh: false
                })
                if(this.state.data.length!==0){
                    store.dispatch(successfullyGettingActivityInfo())
                }
                else{
                    store.dispatch(failedAtGettingActivityInfo())
                }
            })
            .catch((error) => {
                console.error(error);
            });

        //we are fetching information's about user
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
                store.dispatch(startedGettingUserInfo())
                this.setState({
                    userData: responseJson,
                    refresh: false
                })
                if(this.state.userData.length===0){
                    store.dispatch(successfullyGotUserInfo())
                }
                else{
                    store.dispatch(failedGettingUserInfo())
                }
            })
            .catch((error) => {
                console.error(error);
            });
    }

    //navigation to same page to refresh it
    singleActivity = () => this.props.navigation.navigate("singleActivity")

    //at this function we are are taking one argument that is activity id and posting new comment for that activity
    async postComment(activity_id){
        let token = await AsyncStorage.getItem('jwt')
        token = JSON.parse(token)
        console.log(token)

        //we are creating body for comment
        const comment = new FormData();
        comment.append('activity_id', activity_id);
        comment.append('description', this.state.descriptionForComment);

        if(this.state.image!==null){
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
                    if (res.status !== 200 && res.status!==401) {
                        store.dispatch(failedPostingComment());
                        Alert.alert("Something went wrong. Try again.")
                    }
                    if(res.status===200){
                        this.singleActivity()
                        store.dispatch(successfullyPostedComment());
                    }
                    if(res.status===401){
                        Alert.alert("Something went wrong. Try again.")
                    }
                } catch (err) {
                    console.log(err);
                }
            })
    }

    //function that calls method at which we are fetching data to delete comment.
    deleteFunction(comment_id){
        (async () => {
            await this.deleteComment(comment_id)
        })();
    }

    //function for deleting single comment at activity, only for users that are logged and they created current comment
    async deleteComment(comment_id){

        const commentObject = {
            id: comment_id
        }
        console.log(commentObject)
         let token = await AsyncStorage.getItem('jwt')
         token = JSON.parse(token)

         fetch(`${COMMENT}/${comment_id}`, {
             method: 'DELETE',
             headers: {
                 "Content-Type": "application/json",
                 "Accept": "application/json",
                 'Authorization': 'Bearer ' + token
             },
             body: JSON.stringify(commentObject)
         })
             .then(async res => {
                 try {
                     store.dispatch(startedDeletingComment());

                     const jsonRes = await res.json();

                     console.log(jsonRes)
                     if (res.status !== 200 && res.status!==400) {
                         store.dispatch(failedDeletingComment());
                         Alert.alert("Something went wrong. Try again.")
                     }
                     if(res.status===200){
                         Alert.alert('Successfully deleted comment')
                         store.dispatch(successfullyDeletedComment());
                     }
                     if(res.status===401){
                         Alert.alert("Something went wrong. Try again.")
                     }
                 } catch (err) {
                     console.log(err);
                 }
             })
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
                                                onLeftElementPress={()=>this.props.navigation.navigate("homePageActivities")}/>)}
                {renderIf(!isIphoneX(), <Toolbar style={{ container: { backgroundColor: '#93B4E5' } }}
                                                        leftElement="arrow-back"
                                                        centerElement={this.state.data.title}
                                                        onLeftElementPress={()=>this.props.navigation.navigate("homePageActivities")}/> )}
                <SafeAreaView style={styles.safeArea}
                              style={{height: screenHeight}}>
                    <ScrollView vertical={true}
                                style={styles.scrollView}
                                refreshControl={
                                    <RefreshControl
                                        refreshing={this.state.refresh}
                                        onRefresh={this.componentDidMount}
                                    />}>
                        {renderIf(this.state.data.photo_dir!==null,
                            <ImageBackground source={{uri: `${BASE_URL}` + `${this.state.data.photo_dir}` + `${this.state.data.photo_name}`}}
                                             style={styles.activityImage}/>)}
                        {renderIf(this.state.data.photo_dir===null,
                            <ImageBackground source={require('../assets/images/photoForPosts.png')}
                                             style={styles.activityImage}/>)}
                        <View style={styles.activityWrapper}>
                            <View style={styles.likeWrapper}>
                                <TouchableOpacity onPress={async () => {await this.showUser(this.state.userInfo.id)}}>
                                    {renderIf(this.state.userInfo.photo_dir!==0 && this.state.token!==null,
                                        <Image source={{uri: `${BASE_URL}`+`${this.state.userInfo.photo_dir}`+`${this.state.userInfo.photo_name}`}}
                                               style={styles.likeImage}/>)}
                                    {renderIf(isIphoneX(),
                                            <>
                                                {renderIf(this.state.userInfo.photo_dir===null || this.state.token===null,
                                                    <Image source={require('../assets/images/user_photo.png')}
                                                           style={styles.userWithoutImageIphone}/>)}
                                            </>
                                    )}
                                    {renderIf(!isIphoneX(),
                                        <>
                                            {renderIf(this.state.userInfo.photo_dir===null || this.state.token===null,
                                                <Image source={require('../assets/images/user_photo.png')}
                                                       style={styles.userWithoutImage}/>)}
                                        </>
                                    )}

                                </TouchableOpacity>
                            </View>
                            <View style={styles.activityInfoWrapper}>
                                <Text style={styles.activityTitle}>{this.state.data.title}</Text>
                                <Text style={styles.activityDescription}>{this.state.data.description}</Text>
                                {renderIf(this.state.token===null,
                                    <Text style={styles.username}>{this.state.userInfo.name}</Text>
                                )}
                                {renderIf(this.state.token!==null,
                                    <Text style={styles.username}>{this.state.userInfo.first_name}</Text>
                                )}
                                <Text style={styles.createdDate}>{ConvertDate(this.state.data.created_at)}</Text>
                            </View>

                            <View style={styles.userWrapper}>
                                {renderIf(this.state.userData.photo_dir!==null,
                                    <Image source={{uri: `${BASE_URL}`+`${this.state.userData.photo_dir}`+`${this.state.userData.photo_name}`}}
                                           style={styles.userProfilePicture}/>
                                )}
                                {renderIf(this.state.userData.photo_dir===null,
                                    <Image source={require('../assets/images/user_photo.png')}
                                           style={styles.userProfilePicture}/>
                                )}
                                {renderIf(this.state.token!==null,
                                    <>
                                        <TextInput placeholder={'Create new comment'}
                                                   style={styles.createNewComment}
                                                   onChangeText={text => this.setState({descriptionForComment: text })}/>
                                        <View style={{flexDirection: 'row'}}>
                                            <TouchableOpacity style={styles.postButton}
                                                              onPress={async()=>{await this.postComment(this.state.data.id)}}>
                                                <Text style={styles.postButtonText}>POST</Text>
                                            </TouchableOpacity>
                                            <TouchableOpacity style={styles.cameraButton}
                                                              onPress={this.pickImage}>
                                                <FontAwesome5 name={'camera'}
                                                              color={'#616C75'}
                                                              size={20}/>
                                            </TouchableOpacity>
                                        </View>
                                    </>
                                )}
                                <View style={styles.listOfComments}>
                                    <Text style={styles.allComments}>ALL COMMENTS</Text>
                                    {renderIf(this.state.commentArray.length!==0,
                                        <>
                                            {this.state.commentArray.map(function(obj,i) {
                                                return (
                                                    <>
                                                        {renderIf(obj.photo_dir===null,
                                                            <TouchableOpacity style={styles.singleCommentContainer}>
                                                                <View style={styles.singleComment}>
                                                                    {renderIf(obj.user.photo===null || this.state.token===null,
                                                                        <Image source={require('../assets/images/user_photo.png')}
                                                                               style={styles.userPhotoComment}/>
                                                                    )}
                                                                    {renderIf(obj.user.photo!==null && this.state.token!==null,
                                                                        <Image source={{uri: `${BASE_URL}`+`${obj.user.photo_dir}`+`${obj.user.photo_name}`}}
                                                                               style={styles.userPhotoComment}/>
                                                                    )}
                                                                    <Text style={styles.commentDescription}>{obj.description}</Text>
                                                                </View>
                                                                {renderIf(this.state.userData.id===obj.user.id,
                                                                    <TouchableOpacity style={styles.deleteButtonInSingle}
                                                                                      >
                                                                        <FontAwesome5 name={'trash-alt'}
                                                                                      color={'#616C75'}
                                                                                      size={15}
                                                                                      onPress={async () => {await this.deleteComment(obj.id)}}
                                                                                      style={styles.iconDelete}/>
                                                                    </TouchableOpacity>
                                                                )}

                                                            </TouchableOpacity>
                                                        )}
                                                        {renderIf(obj.photo_dir!==null,
                                                            <View style={styles.commentWithImage}>
                                                                <View style={styles.singleCommentWithImage}>
                                                                    {renderIf(this.state.token)}
                                                                    {renderIf(obj.user.photo===null || this.state.token===null,
                                                                        <Image source={require('../assets/images/user_photo.png')}
                                                                               style={styles.userPhotoComment}/>
                                                                    )}
                                                                    {renderIf(obj.user.photo!==null && this.state.token!==null,
                                                                        <Image source={{uri: `${BASE_URL}`+`${obj.user.photo_dir}`+`${obj.user.photo_name}`}}
                                                                               style={styles.userPhotoComment}/>
                                                                    )}
                                                                    <Text style={styles.commentDescription}>{obj.description}</Text>
                                                                    {renderIf(this.state.userData.id===obj.user.id,
                                                                        <TouchableOpacity style={styles.deleteButton}
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
                                                                    <TouchableOpacity style={styles.deleteButton}
                                                                                      onPress={async () => {await this.deleteComment(obj.id)}}>
                                                                        <FontAwesome5 name={'trash-alt'}
                                                                                      color={'#616C75'}
                                                                                      size={15}/>
                                                                    </TouchableOpacity>
                                                                )}
                                                            </View>
                                                        )}
                                                    </>
                                                )
                                            },this)}
                                        </>)}
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
        borderRadius: 25,
        height: 5000
    },
    likeImage:{
        height: 60,
        width: 60,
        borderRadius: 60
    },
    userWithoutImageIphone:{
        height: 60,
        width: 60,
        borderRadius: 60,
        marginTop: 0
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
