import React, {Component} from "react";
import {
    View,
    StyleSheet,
    StatusBar,
    Text,
    SafeAreaView,
    ScrollView,
    Dimensions,
    Image,
    TouchableOpacity,
    AsyncStorage,
    TouchableHighlight,
    RefreshControl
} from "react-native";
import {Toolbar} from "react-native-material-ui";

import { Actions } from "react-native-router-flux";
import {
    ACTIVITY,
    BASE_URL,
    CATEGORY,
    DISLIKE,
    LIKE,

} from "../configuration/config";
import {Card, CardAction, CardContent} from "react-native-card-view";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import {renderIf} from "../utilities/CommonMethods";
import Loader from "../utilities/Loader";
import store from "../redux/store";
import {userRegistrationFailed, userRegistrationStarted, userRegistrationSuccess} from "../redux/actions";
import {isIphoneX} from "react-native-iphone-x-helper";


export default class HomePage extends Component{
    constructor(props) {
        super();
    }
    state = {
        data: [],
        searchText: '',
        noData: false,
        noDataCategory: false,
        categories: [],
        isLoading: true,
        isLoadingCategories: true,
        isActiveLike: false,
        isActiveDislike: false,
        refresh: true,
        currentPage: 0,
        lastPage: 1
    }

    //added navigations to another component or pages
    sideMenu(){
        Actions.sideMenu()
    }

    leaderboard2(){
        Actions.leaderboard2()
    }

    daily(){
        Actions.daily()
    }

    settings(){
        Actions.settings()
    }

    seeAll() {
        Actions.seeAll()
    }

    updateSearch = (searchText) => {
        this.setState({ searchText });
        fetch(`${ACTIVITY}?searchKey=${this.state.searchText}`, {
            method: 'GET',
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            }
        })
            .then((response) => response.json())
            .then((responseJson) => {

                this.setState({
                    data: responseJson.data.data
                })
            })
            .catch((error) => {
                console.error(error);
            });
    };

    componentWillMount(pageCategories=1) {
        fetch(`${CATEGORY}?page=${pageCategories}`, {
            method: 'GET',
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            }
        })
            .then((response) => response.json())
            .then((responseJson) => {

                this.setState({
                    categories: [...this.state.categories, ...responseJson.data.data],
                    isLoadingCategories: false,
                    refresh: false
                })
                if(responseJson.data.data.length!==0){
                    pageCategories++;
                    return this.componentWillMount(pageCategories)
                }
            })
            .catch((error) => {
                console.error(error);
            });
    }


    componentDidMount(page=1) {

        fetch(`${ACTIVITY}?page=${page}`, {
            method: 'GET',
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json",
            }
        })
            .then((response) => response.json())
            .then((responseJson) => {
                    this.setState({
                        data: [...this.state.data, ...responseJson.data.data],
                        isLoading: false,
                        refresh: false,
                    })
                    if(responseJson.data.data.length!==0){
                        page++;
                        return this.componentDidMount(page)
                    }
            })
            .catch((error) => {
                console.error(error);
            });

    }

    async handleLike(id) {

        let tokenHelper = await AsyncStorage.getItem('jwt')
        tokenHelper = JSON.parse(tokenHelper)

        const likeObject = {
            activity_id: id
        }

        console.log(likeObject.token)

        fetch(`${LIKE}`, {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json",
                'Authorization': 'Bearer ' + tokenHelper
            }
        })
            .then(async res => {
                try {
                    store.dispatch(userRegistrationStarted());

                    const jsonRes = await res.json();

                    console.log(jsonRes)
                    if (res.status !== 200) {
                        store.dispatch(userRegistrationFailed());
                    } else {
                        alert('Successfully liked')
                        store.dispatch(userRegistrationSuccess());
                    }
                } catch (err) {
                    console.log(err);
                }
            })
    }

    async handleRemoveLike(id) {

        let tokenHelper = await AsyncStorage.getItem('jwt')
        tokenHelper = JSON.parse(tokenHelper)

        const likeObject = {
            activity_id: id
        }

        console.log(likeObject.token)

        fetch(`${LIKE}`, {
            method: 'DELETE',
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json",
                'Authorization': 'Bearer ' + tokenHelper
            },
            body: JSON.stringify(likeObject)
        })
            .then(async res => {
                try {
                    store.dispatch(userRegistrationStarted());

                    const jsonRes = await res.json();

                    console.log(jsonRes)
                    if (res.status !== 200) {
                        store.dispatch(userRegistrationFailed());
                    } else {
                        console.log('removed like')
                        store.dispatch(userRegistrationSuccess());
                    }
                } catch (err) {
                    console.log(err);
                }
            })
    }


    async handleDislike(id) {
        let tokenHelper = await AsyncStorage.getItem('jwt')
        tokenHelper = JSON.parse(tokenHelper)

        const likeObject = {
            activity_id: id
        }

        console.log(likeObject.token)

        fetch(`${DISLIKE}`, {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json",
                'Authorization': 'Bearer ' + tokenHelper
            },
            body: JSON.stringify(likeObject)
        })
            .then(async res => {
                try {
                    store.dispatch(userRegistrationStarted());

                    const jsonRes = await res.json();

                    console.log(jsonRes)
                    if (res.status !== 200) {
                        store.dispatch(userRegistrationFailed());
                    } else {
                        alert('Successfully disliked activity')
                        store.dispatch(userRegistrationSuccess());
                    }
                } catch (err) {
                    console.log(err);
                }
            })
    }

    async handleRemoveDislike(id) {
        let tokenHelper = await AsyncStorage.getItem('jwt')
        tokenHelper = JSON.parse(tokenHelper)

        const likeObject = {
            activity_id: id
        }

        console.log(likeObject.token)

        fetch(`${DISLIKE}`, {
            method: 'DELETE',
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json",
                'Authorization': 'Bearer ' + tokenHelper
            },
            body: JSON.stringify(likeObject)
        })
            .then(async res => {
                try {
                    store.dispatch(userRegistrationStarted());

                    const jsonRes = await res.json();

                    console.log(jsonRes)
                    if (res.status !== 200) {
                        store.dispatch(userRegistrationFailed());
                    } else {
                        console.log('dislike')
                        store.dispatch(userRegistrationSuccess());
                    }
                } catch (err) {
                    console.log(err);
                }
            })
    }

    singleActivity(){
        Actions.singleActivity()
    }

    async showMore(id) {
        await AsyncStorage.setItem('id', JSON.stringify(id))
        this.singleActivity()
    }

    async isLogin(){
        let login = await AsyncStorage.getItem('isLogin')
        login = JSON.parse(login)
        return login;
    }

    filterActivitiesUsingCategory(category_id){
        fetch(`${ACTIVITY}?category=${category_id}`, {
            method: 'GET',
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            }
        })
            .then((response) => response.json())
            .then((responseJson) => {
                this.setState({
                    data: responseJson.data.data
                })
            })
            .catch((error) => {
                console.error(error);
            });
    }

    render() {

        const screenHeight = Dimensions.get('window').height

        return(
            <View style={styleLightMode.container}>
                <StatusBar
                    animated={true}
                    backgroundColor="#6285B3"/>
                {renderIf(isIphoneX(),<Toolbar style={{ container: { backgroundColor: '#93B4E5',marginTop:50 } }}
                                               leftElement="menu"
                                               centerElement="Activities"
                                               searchable={{
                                                   autoFocus: true,
                                                   placeholder: 'Search',
                                                   onChangeText: text => this.updateSearch(text),
                                                   onSearchCloseRequested: (page=1) => this.componentDidMount(page),
                                               }}
                                               onLeftElementPress={this.sideMenu}/>)}
                {renderIf(!isIphoneX(),<Toolbar style={{ container: { backgroundColor: '#93B4E5' } }}
                                                leftElement="menu"
                                                centerElement="Activities"
                                                searchable={{
                                                    autoFocus: true,
                                                    placeholder: 'Search',
                                                    onChangeText: text => this.updateSearch(text),
                                                    onSearchCloseRequested: (page=1) => this.componentDidMount(page),
                                                }}
                                                onLeftElementPress={this.sideMenu}/>)}

                {this.state.isLoading ? <Loader show={true} loading={this.state.isLoading} /> : null}
                <SafeAreaView>
                    <ScrollView style={screenHeight}
                                style={styleLightMode.scrollView}
                                refreshControl={
                                    <RefreshControl
                                        refreshing={this.state.refresh}
                                        onRefresh={this.componentDidMount}
                                    />}>
                        <View style={{flexDirection: 'row'}}>
                            <Text style={styleLightMode.titleCategories}>Categories</Text>
                            <Text style={styleLightMode.seeAll}
                                  onPress={this.seeAll}>See all</Text>
                        </View>
                        {renderIf(this.state.noDataCategory, <Text style={{textAlign: 'center'}}>No data found.</Text>)}
                        {renderIf(this.state.categories.length,
                            <ScrollView horizontal={true}
                                        showsHorizontalScrollIndicator={false}>
                                <View style={{flexDirection: 'row'}}>
                                    {this.state.categories.map(function(obj,i) {
                                        return (
                                            <TouchableOpacity style={styleLightMode.categoryCard}
                                                              onPress={() => this.filterActivitiesUsingCategory(obj.id)}>
                                                <Card  styles={{ card: { backgroundColor: obj.color,
                                                        borderRadius:30,
                                                        shadowColor: "#000000",
                                                        shadowOffset: {
                                                            width: 0,
                                                            height: 2,
                                                        },
                                                        shadowOpacity: 0.44,
                                                        shadowRadius: 3,
                                                        elevation: 5
                                                    }}}>
                                                    <View style={styleLightMode.icon2}>
                                                        <FontAwesome5 name={obj.icon}
                                                                      size={35}
                                                                      color={'#000000'}/>
                                                    </View>
                                                    <CardContent>
                                                        <Text style={styleLightMode.categoryName}>{obj.title}</Text>
                                                    </CardContent>
                                                </Card>
                                            </TouchableOpacity>
                                        )
                                    },this)}
                                </View>
                            </ScrollView>
                        )}
                        <Text style={styleLightMode.singleCategoryName}>Travel</Text>
                        {renderIf(this.state.noData, <Text style={{textAlign: 'center'}}>No data found.</Text>)}
                        {renderIf(this.state.data.length,
                            <ScrollView vertical>
                                <View>
                                    {this.state.data.map(function(obj,i) {
                                        return (
                                            <View style={styleLightMode.activityCard}>
                                            <Card style={styleLightMode.card}
                                                  styles={{
                                                      card: {
                                                          backgroundColor: '#93B4E5',
                                                          borderRadius: 30,
                                                          shadowColor: "#000000",
                                                          shadowOffset: {
                                                              width: 0,
                                                              height: 8,
                                                          },
                                                          shadowOpacity: 0.44,
                                                          shadowRadius: 10.84,
                                                          elevation: 16,
                                                          alignItems: 'center'
                                                      }
                                                  }}>
                                                <View style={styleLightMode.header}>
                                                    {renderIf(obj.user.photo_dir===null, <Image source={require('../assets/images/user_photo.png')}
                                                                                                         style={styleLightMode.profilePicture}/>)}
                                                    {renderIf(obj.user.photo_dir!==null,<Image source={{uri: `${BASE_URL}`+`${obj.user.photo_dir}`+`${obj.user.photo_name}`}}
                                                           style={styleLightMode.profilePicture}/>)}
                                                    {renderIf(!this.isLogin,
                                                        <Image source={require('../assets/images/user_photo.png')}
                                                               style={styleLightMode.profilePicture}/>
                                                    )}
                                                    {renderIf(this.isLogin()!==null,
                                                        <Text style={styleLightMode.username}
                                                              numberOfLines={1}>{obj.user.name}</Text>
                                                    )}
                                                    {renderIf(this.isLogin()===null,
                                                        <Text style={styleLightMode.username}
                                                              numberOfLines={1}>anonymous user</Text>
                                                    )}
                                                </View>
                                                <Text style={styleLightMode.activityTitle}
                                                      numberOfLines={3}>{"\n"}{obj.title}</Text>
                                                <View>
                                                    {renderIf(obj.photo_dir===null, <Image source={require('../assets/images/photoForPosts.png')} style={styleLightMode.activityImage}/>)}
                                                    {renderIf(obj.photo_dir!==null,<Image source={{uri: `${BASE_URL}`+`${obj.photo_dir}`+`${obj.photo_name}`}}
                                                                                          style={styleLightMode.activityImage}/>)}

                                                </View>
                                                <View style={{flexDirection: 'row'}}>
                                                    {renderIf(obj.liked===null,
                                                        <>
                                                            <TouchableHighlight onPress={async () => {await this.handleRemoveLike(obj.id)}}
                                                                                style={styleLightMode.greenCircle}>
                                                                <FontAwesome5 name={'thumbs-up'}
                                                                              size={17}
                                                                              color={'black'}
                                                                              style={styleLightMode.likeDislikeIcon}/>
                                                            </TouchableHighlight>
                                                            <TouchableHighlight onPress={async () => {await this.handleRemoveDislike(obj.id)}}
                                                                                style={styleLightMode.redCircle}>
                                                                <FontAwesome5 name={'thumbs-down'}
                                                                              size={17}
                                                                              color={'black'}
                                                                              style={styleLightMode.likeDislikeIcon}/>
                                                            </TouchableHighlight>
                                                        </>
                                                    )}
                                                    {renderIf(obj.liked===1,
                                                        <>
                                                            <TouchableHighlight onPress={async () => {await this.handleRemoveLike(obj.id)}}
                                                                                style={styleLightMode.greenCircle}>
                                                                <FontAwesome5 name={'thumbs-up'}
                                                                              size={17}
                                                                              color={'black'}
                                                                              style={styleLightMode.likeDislikeIcon}/>
                                                            </TouchableHighlight>
                                                            <TouchableHighlight onPress={async () => {await this.handleDislike(obj.id)}}
                                                                                style={styleLightMode.redCircle}
                                                                                disabled={true}>
                                                                <FontAwesome5 name={'thumbs-down'}
                                                                              size={17}
                                                                              color={'black'}
                                                                              style={styleLightMode.likeDislikeIcon}/>
                                                            </TouchableHighlight>
                                                        </>
                                                    )}
                                                    {renderIf(obj.liked===0,
                                                        <>
                                                            <TouchableHighlight onPress={async () => {await this.handleLike(obj.id)}}
                                                                                style={styleLightMode.greenCircle}
                                                                                disabled={true}>
                                                                <FontAwesome5 name={'thumbs-up'}
                                                                              size={17}
                                                                              color={'black'}
                                                                              style={styleLightMode.likeDislikeIcon}/>
                                                            </TouchableHighlight>
                                                            <TouchableHighlight onPress={async () => {await this.handleRemoveDislike(obj.id)}}
                                                                                style={styleLightMode.redCircle}
                                                                                underlayColor={'red'}>
                                                                <FontAwesome5 name={'thumbs-down'}
                                                                              size={17}
                                                                              color={'black'}
                                                                              style={styleLightMode.likeDislikeIcon}/>
                                                            </TouchableHighlight>
                                                        </>
                                                    )}

                                                    <FontAwesome5 name={'comment'}
                                                                  size={29}
                                                                  color={'#000000'}
                                                                  style={styleLightMode.commentIcon}/>
                                                </View>
                                                <Text style={styleLightMode.activityText}
                                                      numberOfLines={3}>
                                                    {obj.description}
                                                </Text>
                                                <CardAction>
                                                    <TouchableOpacity style={styleLightMode.button}
                                                                      onPress={async () => {await this.showMore(obj.id)}}>
                                                        <Text style={styleLightMode.buttonText}>Show more</Text>
                                                    </TouchableOpacity>
                                                </CardAction>
                                            </Card></View>
                                        )
                                    },this)}
                                </View>
                            </ScrollView>
                        )}
                    </ScrollView>
                </SafeAreaView>
            </View>

        )
    }
}


const styleLightMode = StyleSheet.create({
    container:{
        backgroundColor: '#cbdbf2',
        flex:1,
        fontFamily:'Roboto_400Regular'
    },
    bottomNavigationBar:{
        flex: 1,
        justifyContent: 'flex-end'
    },
    titleCategories:{
        fontSize: 16,
        marginTop: 15,
        marginLeft: 20,
        marginRight: 180,
        textTransform: 'uppercase',
        fontWeight:'bold'
    },
    seeAll:{
        marginRight: 20,
        marginTop: 15
    },
    categoryCard:{
        height: 115,
        width: 95,
        marginTop: 10,
        marginLeft: 17,
        borderRadius: 50
    },
    singleCategoryName:{
        fontSize: 14,
        marginLeft: 20,
        marginTop: 30,
        fontWeight: 'bold',
        textTransform: 'uppercase'
    },
    activityCard:{
        height: 550,
        width: 300,
        marginTop: 10,
        marginLeft:27,
        borderRadius: 50,
        marginBottom: 20
    },
    followers:{
        marginRight: 20,
        color: '#000000',
        marginBottom:10,
        marginTop: -40,
        marginLeft: 20,
        textTransform: 'uppercase',
        fontWeight: 'bold'
    },
    followerCard:{
        height: 100,
        width: 100,
        marginLeft: 17,
        marginBottom: 100
    },
    familyActivities:{
        marginTop: -65,
        textTransform: 'uppercase',
        fontWeight: 'bold',
        marginLeft: 20
    },
    button: {
        marginRight: 10,
        backgroundColor: '#6285B3',
        borderRadius: 20,
        height:30,
        width:100,
        left:60,
        bottom: 10
    },
    buttonText:{
        justifyContent: 'center',
        textAlign: 'center',
        fontWeight: 'bold',
        textTransform:'uppercase',
        padding:5,
        fontFamily:'Roboto_400Regular'
    },
    header:{
        marginTop:17,
        flexDirection: 'row'
    },
    profilePicture:{
        width: 50,
        height: 50,
        borderRadius:70,
        marginLeft: -50
    },
    username:{
        marginLeft:30,
        fontWeight: 'bold',
        justifyContent: 'center',
        fontStyle: 'italic',
        color: '#616C75',
        marginTop: 15
    },
    activityTitle:{
        marginLeft: 25,
        marginRight: 20,
        marginTop: 0,
        justifyContent: 'center',
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize:16,
        color: '#4c545b',
    },
    activityImage:{
        marginTop:20,
        width: 250,
        height:250,
        borderRadius:39,
        borderColor: '#616C75',
        borderWidth: 1
    },
    like:{
        marginTop: 0,
        height:30,
        width:30,
        borderRadius:30,
        left:0,
        zIndex: 1
    },
    dislike:{
        height:30,
        width:30,
        borderRadius:30,
        marginTop:0,
        left:0,
        zIndex: 1,
        transform: [{ rotate: '180deg'}]
    },
    activityText:{
        marginLeft: 25,
        marginRight: 20,
        marginTop:15,
        marginBottom: 10
    },
    commentIcon:{
        left:60,top:5
    },
    greenCircle:{
        backgroundColor: '#06FD37',
        height: 30,
        width:30,
        borderRadius:30,
        marginTop: 7,
        left:-65,
        zIndex: 10,
        elevation:10,
        padding: 5
    },
    redCircle:{
        backgroundColor: '#FD0628',
        height: 30,
        width:30,
        borderRadius:30,
        marginTop: 7,
        left:-60,
        zIndex: 10,
        elevation:10,
        padding: 5
    },
    categoryName:{
        textTransform: 'uppercase',
        fontWeight: 'bold',
        color: '#000000',
        paddingBottom:10,
        fontSize: 11
    },
    icon2:{
        justifyContent:'center',
        marginTop:20
    },
    likeDislikeIcon:{
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 2
    }
})


