import React, {Component} from "react";
import {
    View,
    StyleSheet,
    StatusBar,
    Text,
    SafeAreaView,
    ScrollView,
    Dimensions,
    FlatList,
    Image,
    TouchableOpacity,
    Alert
} from "react-native";
import {Toolbar} from "react-native-material-ui";

import CategoryCard from "../components/homePageComponents/cards/CategoryCard";
import {Actions} from "react-native-router-flux";
import {
    ACTIVITY,
    BASE_URL,
    CATEGORY
} from "../configuration/config";
import {Card, CardAction} from "react-native-card-view";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import {renderIf} from "../utilities/CommonMethods";

export default class HomePage extends Component{
    constructor(props) {
        super();
    }
    state = {
        data: [],
        // current_page: '',
        // per_page: '',
        searchText: '',
        noData: false,
        noDataCategory: false,
        categories: []
    }

    //added navigations to another component or pages
    sideMenu(){
        Actions.sideMenu()
    }

    leaderboard(){
        Actions.leaderboard()
    }

    daily(){
        Actions.daily()
    }

    settings(){
        Actions.settings()
    }

    componentDidMount() {

        fetch(`${ACTIVITY}`, {
            method: 'GET',
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json",
            }
        })
            .then((response) => response.json())
            .then((responseJson) => {
                console.log(responseJson.data.data);
                this.setState({
                    data: responseJson.data.data
                })
            })
            .catch((error) => {
                console.error(error);
            });

        fetch(`${CATEGORY}`, {
                    method: 'GET',
                    headers: {
                        "Content-Type": "application/json",
                        "Accept": "application/json"
                    }
                })
                    .then((response) => response.json())
                    .then((responseJson) => {
                        // console.log(responseJson);
                        this.setState({
                            categories: responseJson
                        })
                        console.log(this.state.categories)
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
                <Toolbar style={{ container: { backgroundColor: '#93B4E5' } }}
                    leftElement="menu"
                    centerElement="Activities"
                    searchable={{
                        autoFocus: true,
                        placeholder: 'Search',
                        // onChangeText: text => searchFilterFunction(text),
                        // onSearchCloseRequested: () => setName(nameList),
                    }}
                    onLeftElementPress={this.sideMenu}/>

                <SafeAreaView>
                    <ScrollView style={screenHeight}
                                style={styleLightMode.scrollView}>
                        <View style={{flexDirection: 'row'}}>
                            <Text style={styleLightMode.titleCategories}>Categories</Text>
                            <Text style={styleLightMode.seeAll}
                                  onPress={(e) => this.onTextPress(e, 'See all')}>See all</Text>
                        </View>
                        <SafeAreaView>
                            <ScrollView showsHorizontalScrollIndicator={false}
                                        horizontal>

                                <View style={styleLightMode.categoryCard}>
                                    <CategoryCard/>
                                </View>
                                <View style={styleLightMode.categoryCard}>
                                    <CategoryCard/>
                                </View>
                                <View style={styleLightMode.categoryCard}>
                                    <CategoryCard/>
                                </View>
                                <View style={styleLightMode.categoryCard}>
                                    <CategoryCard/>
                                </View>
                                <View style={styleLightMode.categoryCard}>
                                    <CategoryCard/>
                                </View>
                            </ScrollView>
                        </SafeAreaView>
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
                                                          elevation: 16
                                                      }
                                                  }}>
                                                <View style={styleLightMode.header}>
                                                    <Image source={{uri: `${BASE_URL}`+`${obj.user.photo_dir}`+`${obj.user.photo_name}`}}
                                                           style={styleLightMode.profilePicture}/>
                                                    <Text style={styleLightMode.username}
                                                         numberOfLines={3}>{obj.user.name}</Text>
                                                </View>
                                                <Text style={styleLightMode.activityTitle}
                                                      numberOfLines={3}>{"\n"}{obj.title}</Text>
                                                <View>
                                                    <Image source={{uri: `${BASE_URL}`+`${obj.photo_dir}`+`${obj.photo_name}`}}
                                                           style={styleLightMode.activityImage}/>
                                                    {console.log(obj)}
                                                </View>
                                                <View style={{flexDirection: 'row'}}>
                                                    <TouchableOpacity onPress={() => Alert.alert('Like')}>
                                                        <View style={styleLightMode.greenCircle}>
                                                            <Image source={require('../assets/images/rodjoImage.png')}
                                                                   style={styleLightMode.like}/>
                                                        </View>
                                                    </TouchableOpacity>
                                                    <TouchableOpacity onPress={() => Alert.alert('Dislike')}>
                                                        <View style={styleLightMode.redCircle}>
                                                            <Image source={require('../assets/images/rodjoImage.png')}
                                                                   style={styleLightMode.dislike}/>
                                                        </View>
                                                    </TouchableOpacity>
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
                                                                      onPress={() => Alert.alert('Single activity screen needs to open')}>
                                                        <Text style={styleLightMode.buttonText}>Show more</Text>
                                                    </TouchableOpacity>

                                                </CardAction>
                                            </Card></View>
                                        )
                                    },this)}
                                </View>
                            </ScrollView>
                        )}
                        <View>

                        </View>
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
        zIndex: 1
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
        zIndex: 2
    },
    redCircle:{
        backgroundColor: '#FD0628',
        height:30,
        width:30,
        borderRadius:30,
        marginTop:7,
        left:-60
    }
})


