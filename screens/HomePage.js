import React, {Component} from "react";
import {
    Alert,
    AsyncStorage,
    Dimensions,
    Image,
    RefreshControl,
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    TouchableOpacity,
    View
} from "react-native";
import {Toolbar} from "react-native-material-ui";
import {
    ACTIVITY,
    BASE_URL,
    CATEGORY,
    DISLIKE,
    LIKE,
    POPULAR_CHALLENGES
} from "../configuration/config";
import {Card, CardAction, CardContent} from "react-native-card-view";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import { renderIf } from "../utilities/CommonMethods";
import Loader from "../utilities/Loader";
import store from "../redux/store";
import {
    failedAtDislikingActivity,
    failedAtLikingActivity,
    failedAtLoadingActivities,
    failedAtLoadingCategories,
    failedRemovingDislike,
    failedRemovingLike,
    startedDislikingActivity,
    startedLikingActivity,
    startedLoadingActivities,
    startedLoadingCategories,
    startedRemovingDislike,
    startedRemovingLike,
    successfullyDislikedActivity,
    successfullyLikedActivity,
    successfullyLoadedActivities,
    successfullyLoadedCategories,
    successfullyRemovedDislike,
    successfullyRemovedLike,
} from "../redux/actions";
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
        lastPage: 1,
        token: null,
        isActiveCategory: false,
        currentCategory: ''
    }

    updateSearch = (searchText) => {
        this.setState({ searchText: searchText });
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
                store.dispatch(startedLoadingCategories())
                this.setState({
                    categories: [...this.state.categories, ...responseJson.data.data],
                    isLoadingCategories: false,
                    refresh: false
                })
                if(this.state.categories.length!==0){
                    store.dispatch(successfullyLoadedCategories())
                }
                else{
                    store.dispatch(failedAtLoadingCategories())
                }
                if(responseJson.data.data.length!==0){
                    pageCategories++;
                    return this.componentWillMount(pageCategories)
                }
            })
            .catch((error) => {
                console.error(error);
            });
    }

    async loadAllActivities(page = 1) {
        let tokenHelper = await AsyncStorage.getItem('jwt')
        tokenHelper = JSON.parse(tokenHelper)

        this.setState({data: []})
        this.setState({token: tokenHelper})

        fetch(`${ACTIVITY}?page=${page}`, {
            method: 'GET',
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json",
                'Authorization': 'Bearer ' + tokenHelper
            }
        })
            .then((response) => response.json())
            .then((responseJson) => {
                store.dispatch(startedLoadingActivities())
                this.setState({
                    data: [...this.state.data, ...responseJson.data.data],
                    isLoading: false,
                    refresh: false,
                })
                if (this.state.data.length !== 0) {
                    store.dispatch(successfullyLoadedActivities())
                } else {
                    store.dispatch(failedAtLoadingActivities())
                }
                if (responseJson.data.data.length !== 0) {
                    page++;
                    return this.componentDidMount(page)
                }
            })
            .catch((error) => {
                console.error(error);
            });
    }

    async loadPopularChallenges(page = 1) {
        let tokenHelper = await AsyncStorage.getItem('jwt')
        tokenHelper = JSON.parse(tokenHelper)

        this.setState({data: []})
        this.setState({token: tokenHelper})

        fetch(`${POPULAR_CHALLENGES}?page=${page}&&popular=1`, {
            method: 'GET',
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json",
                'Authorization': 'Bearer ' + tokenHelper
            }
        })
            .then((response) => response.json())
            .then((responseJson) => {
                console.log("----------",responseJson)
                store.dispatch(startedLoadingActivities())
                this.setState({
                    data: [...this.state.data, ...responseJson.data.data],
                    isLoading: false,
                    refresh: false,
                })
                if (this.state.data.length !== 0) {
                    store.dispatch(successfullyLoadedActivities())
                } else {
                    store.dispatch(failedAtLoadingActivities())
                }
                if (responseJson.data.data.length !== 0) {
                    page++;
                    return this.componentDidMount(page)
                }
            })
            .catch((error) => {
                console.error(error);
            });
    }

    async loadAllPopularActivities(page = 1) {
        let tokenHelper = await AsyncStorage.getItem('jwt')
        tokenHelper = JSON.parse(tokenHelper)
        this.setState({data: []})
        this.setState({token: tokenHelper})

        fetch(`${ACTIVITY}?page=${page}?popular=1`, {
            method: 'GET',
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json",
                'Authorization': 'Bearer ' + tokenHelper
            }
        })
            .then((response) => response.json())
            .then((responseJson) => {
                store.dispatch(startedLoadingActivities())
                this.setState({
                    data: [...this.state.data, ...responseJson.data.data],
                    isLoading: false,
                    refresh: false,
                })
                if (this.state.data.length !== 0) {
                    store.dispatch(successfullyLoadedActivities())
                } else {
                    store.dispatch(failedAtLoadingActivities())
                }
                if (responseJson.data.data.length !== 0) {
                    page++;
                    return this.componentDidMount(page)
                }
            })
            .catch((error) => {
                console.error(error);
            });
    }

    async componentDidMount(page = 1) {
        let tokenHelper = await AsyncStorage.getItem('jwt')
        tokenHelper = JSON.parse(tokenHelper)

        this.setState({token: tokenHelper})

        fetch(`${ACTIVITY}?page=${page}`, {
            method: 'GET',
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json",
                'Authorization': 'Bearer ' + tokenHelper
            }
        })
            .then((response) => response.json())
            .then((responseJson) => {
                store.dispatch(startedLoadingActivities())
                this.setState({
                    data: [...this.state.data, ...responseJson.data.data],
                    isLoading: false,
                    refresh: false,
                })
                if(this.state.data.length!==0){
                    store.dispatch(successfullyLoadedActivities())
                }
                else{
                    store.dispatch(failedAtLoadingActivities())
                }
                if (responseJson.data.data.length !== 0) {
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

        fetch(`${LIKE}`, {
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
                    store.dispatch(startedLikingActivity());

                    const jsonRes = await res.json();

                    if (res.status !== 200 && res.status!==401) {
                        store.dispatch(failedAtLikingActivity());
                        Alert.alert("Something went wrong. Try again.")
                    }
                    if(res.status===200){
                        Alert.alert('Successfully liked activity.')
                        store.dispatch(successfullyLikedActivity());
                    }
                    if(res.status===401){
                        Alert.alert('Please login')
                    }
                } catch (err) {
                    console.log(err);
                }
            })
    }

    async handleRemoveLike(id) {

        let tokenHelper = await AsyncStorage.getItem('jwt')
        tokenHelper = JSON.parse(tokenHelper)
        console.log(tokenHelper)

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
            body:  JSON.stringify(likeObject)
        })
            .then(async res => {
                try {
                    store.dispatch(startedRemovingLike());

                    const jsonRes = await res.json();

                    console.log(jsonRes)
                    console.log(res.status)
                    if (res.status !== 200 && res.status!==401) {
                        store.dispatch(failedRemovingLike());
                        Alert.alert("Something went wrong. Try again.")
                    }
                    if(res.status===200){
                        Alert.alert("Successfully removed like.")
                        store.dispatch(successfullyRemovedLike());
                    }
                    if(res.status===401){
                        Alert.alert('Please login')
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
            body:  JSON.stringify(likeObject)
        })
            .then(async res => {
                try {
                    store.dispatch(startedDislikingActivity());

                    const jsonRes = await res.json();

                    if (res.status !== 200 && res.status!==401) {
                        store.dispatch(failedAtDislikingActivity());
                    }
                    if(res.status===401){
                        Alert.alert('Please login')
                    }
                    if(res.status===200) {
                        Alert.alert("Successfully disliked activity.")
                        store.dispatch(successfullyDislikedActivity());
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

        fetch(`${DISLIKE}`, {
            method: 'DELETE',
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json",
                'Authorization': 'Bearer ' + tokenHelper
            },
            body:  JSON.stringify(likeObject)
        })
            .then(async res => {
                try {
                    store.dispatch(startedRemovingDislike());

                    const jsonRes = await res.json();

                    console.log(res.status)
                    if (res.status !== 200 && res.status!==401) {
                        store.dispatch(failedRemovingDislike());
                    }
                    if(res.status===401){
                        Alert.alert('Please login.')
                    }
                    if(res.status===200){
                        Alert.alert("Successfully removed dislike.")
                        store.dispatch(successfullyRemovedDislike());
                    }
                } catch (err) {
                    console.log(err);
                }
            })
    }

    singleActivity = () => this.props.navigation.navigate("singleActivity")


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
        this.setState({data: []})
        fetch(`${ACTIVITY}?category=${category_id}`, {
            method: 'GET',
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            }
        })
            .then((response) => response.json())
            .then((responseJson) => {
                store.dispatch(startedLoadingActivities())
                this.setState({
                    data: responseJson.data.data,
                    currentCategory: responseJson.data.data[0].category.title
                })
                if(this.state.data.length!==0){
                    store.dispatch(successfullyLoadedActivities())
                }
                else{
                    store.dispatch(failedAtLoadingActivities())
                }
                console.log(responseJson.data.data[0].category.title)
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
                                               onLeftElementPress={() => this.props.navigation.navigate("sideMenu")}/>)}
                {renderIf(!isIphoneX(),<Toolbar style={{ container: { backgroundColor: '#93B4E5' } }}
                                                leftElement="menu"
                                                centerElement="Activities"
                                                searchable={{
                                                    autoFocus: true,
                                                    placeholder: 'Search',
                                                    onChangeText: text => this.updateSearch(text),
                                                    onSearchCloseRequested: (page=1) => this.componentDidMount(page),
                                                }}
                                                onLeftElementPress={() => this.props.navigation.navigate("sideMenu")}/>)}

                {this.state.isLoading ? <Loader show={true} loading={this.state.isLoading} /> : null}
                <SafeAreaView>
                    <ScrollView style={screenHeight}
                                style={styleLightMode.scrollView}
                                refreshControl={
                                    <RefreshControl
                                        refreshing={this.state.refresh}
                                        onRefresh={async () => {await this.loadAllActivities}}
                                    />}>
                        <View style={{flexDirection: 'row'}}>
                            <Text style={styleLightMode.titleCategories}>Categories</Text>
                            <Text style={styleLightMode.seeAll}
                                  onPress={()=>this.props.navigation.navigate("seeAll")}>See all</Text>
                        </View>
                        {renderIf(this.state.noDataCategory, <Text style={{textAlign: 'center'}}>No data found.</Text>)}
                        {renderIf(this.state.categories.length,
                            <ScrollView horizontal={true}
                                        showsHorizontalScrollIndicator={false}>
                                <View style={{flexDirection: 'row'}}>
                                    <TouchableOpacity style={styleLightMode.categoryCard}
                                                      onPress={() => this.loadAllActivities(1)}>
                                        <Card  styles={{ card: { backgroundColor: 'rgba(147,180,229,1)',
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
                                                <FontAwesome5 name={'smile-beam'}
                                                              size={35}
                                                              color={'#000000'}/>
                                            </View>
                                            <CardContent>
                                                <Text style={styleLightMode.categoryName}>SEE ALL</Text>
                                            </CardContent>
                                        </Card>
                                    </TouchableOpacity>
                                    <TouchableOpacity style={styleLightMode.categoryCard}
                                                      onPress={() => this.loadAllPopularActivities(1)}>
                                        <Card  styles={{ card: { backgroundColor: 'rgb(89,116,159)',
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
                                                <FontAwesome5 name={'fire'}
                                                              size={35}
                                                              color={'#000000'}/>
                                            </View>
                                            <CardContent>
                                                <Text style={styleLightMode.categoryNamePopular}>MOST POPULAR</Text>
                                            </CardContent>
                                        </Card>
                                    </TouchableOpacity>
                                    <TouchableOpacity style={styleLightMode.challengeCard}
                                                      onPress={() => this.loadPopularChallenges(1)}>
                                        <Card  styles={{ card: { backgroundColor: '#82b2d9',
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
                                                <FontAwesome5 name={'medal'}
                                                              size={35}
                                                              color={'#000000'}/>
                                            </View>
                                            <CardContent>
                                                <Text style={styleLightMode.challengeName}
                                                      numberOfLines={2}>BEST{"\n"}CHALLENGE</Text>
                                            </CardContent>
                                        </Card>
                                    </TouchableOpacity>
                                    {this.state.categories.map(function(obj,i) {
                                        return (
                                            <View key={i}>
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
                                            </View>
                                        )
                                    },this)}
                                </View>
                            </ScrollView>
                        )}
                        <Text style={styleLightMode.singleCategoryName}>{this.state.currentCategory}</Text>
                        {renderIf(this.state.noData, <Text style={{textAlign: 'center'}}>No data found.</Text>)}
                        {renderIf(this.state.data.length,
                            <ScrollView vertical>
                                <View>
                                    {this.state.data.map(function(obj,i) {
                                        return (
                                            <View style={styleLightMode.activityCard}
                                                  key={i}>
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
                                                              alignItems: 'center',
                                                              justifyContent: 'center'
                                                          }
                                                      }}>
                                                    <View style={styleLightMode.header}>
                                                        {renderIf(this.state.token!==null,
                                                            <>
                                                                {renderIf(obj.user.photo_dir===null || this.state.token===null, <Image source={require('../assets/images/user_photo.png')}
                                                                                                            style={styleLightMode.profilePicture}/>)}
                                                                {renderIf(obj.user.photo_dir!==null && this.state.token!==null,<Image source={{uri: `${BASE_URL}`+`${obj.user.photo_dir}`+`${obj.user.photo_name}`}}
                                                                                                           style={styleLightMode.profilePicture}/>)}
                                                            </>
                                                        )}

                                                        {renderIf(this.state.token===null,
                                                            <Image source={require('../assets/images/user_photo.png')}
                                                                   style={styleLightMode.profilePicture}/>
                                                        )}
                                                        {renderIf(this.state.token!==null,
                                                            <Text style={styleLightMode.username}
                                                                  numberOfLines={1}>{obj.user.first_name}</Text>
                                                        )}
                                                        {renderIf(this.state.token===null,
                                                            <Text style={styleLightMode.username}
                                                                  numberOfLines={1}>{obj.user.name}</Text>
                                                        )}
                                                    </View>
                                                    <Text style={styleLightMode.activityTitle}
                                                          numberOfLines={3}>{"\n"}{obj.title}</Text>
                                                    <View>
                                                        {renderIf(obj.photo_dir===null, <Image source={require('../assets/images/photoForPosts.png')} style={styleLightMode.activityImage}/>)}
                                                        {renderIf(obj.photo_dir!==null, <Image source={{uri: `${BASE_URL}`+`${obj.photo_dir}`+`${obj.photo_name}`}}
                                                                                              style={styleLightMode.activityImage}/>)}

                                                    </View>
                                                    <View style={{flexDirection: 'row'}}>
                                                        {renderIf(obj.liked===null,
                                                            <>
                                                                    <FontAwesome5 name={'thumbs-up'}
                                                                                  size={25}
                                                                                  color={'green'}
                                                                                  style={styleLightMode.likeIcon}
                                                                                  onPress={async () => {await this.handleLike(obj.id)}}/>
                                                                    <FontAwesome5 name={'thumbs-down'}
                                                                                  size={25}
                                                                                  color={'red'}
                                                                                  style={styleLightMode.dislikeIcon}
                                                                                  onPress={async () => {await this.handleDislike(obj.id)}}/>
                                                            </>
                                                        )}
                                                        {renderIf(obj.liked===1,
                                                            <>
                                                                    <FontAwesome5 name={'thumbs-up'}
                                                                                  size={25}
                                                                                  color={'green'}
                                                                                  style={styleLightMode.likeIcon}
                                                                                  onPress={async () => {await this.handleRemoveLike(obj.id)}}/>
                                                                    <FontAwesome5 name={'thumbs-down'}
                                                                                  size={25}
                                                                                  color={'black'}
                                                                                  style={styleLightMode.dislikeIcon}/>
                                                            </>
                                                        )}
                                                        {renderIf(obj.liked===0,
                                                            <>
                                                                    <FontAwesome5 name={'thumbs-up'}
                                                                                  size={25}
                                                                                  color={'black'}
                                                                                  style={styleLightMode.likeIcon}/>
                                                                    <FontAwesome5 name={'thumbs-down'}
                                                                                  size={25}
                                                                                  color={'red'}
                                                                                  style={styleLightMode.dislikeIcon}
                                                                                  onPress={async () => {await this.handleRemoveDislike(obj.id)}}/>
                                                            </>
                                                        )}

                                                        <FontAwesome5 name={'comment'}
                                                                      size={25}
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
    challengeCard:{
        height: 115,
        width: 105,
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
        justifyContent: 'center',
        marginLeft: 35,
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
        justifyContent:'center',
        flexDirection: 'row'
    },
    profilePicture:{
        width: 50,
        height: 50,
        borderRadius:70,
        justifyContent: 'flex-end'
    },
    username:{
        marginLeft:30,
        fontWeight: 'bold',
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
        left:130,top:5
    },
    greenCircle:{
        // backgroundColor: '#06FD37',
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
        // backgroundColor: '#FD0628',
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
    categoryNamePopular:{
        textTransform: 'uppercase',
        fontWeight: 'bold',
        textAlign: 'center',
        color: '#000000',
        paddingBottom:10,
        fontSize: 11
    },
    challengeName:{
        textTransform: 'uppercase',
        fontWeight: 'bold',
        color: '#000000',
        paddingBottom:10,
        fontSize: 11,
        marginTop: -5,
        textAlign: 'center'
    },
    icon2:{
        justifyContent:'center',
        marginTop:20
    },
    likeIcon:{
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: -110,
        marginTop: 5,
        marginRight: 10
    },
    dislikeIcon:{
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 5
    }
})


