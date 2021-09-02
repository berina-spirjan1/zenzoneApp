import React, {Component} from "react";
import {
    View,
    StyleSheet,
    StatusBar,
    Text,
    SafeAreaView,
    ScrollView,
    Dimensions
} from "react-native";
import {Toolbar} from "react-native-material-ui";

import CategoryCard from "../components/homePageComponents/cards/CategoryCard";
import ActivityCard from "../components/homePageComponents/cards/ActivityCard";
import FollowerCard from "../components/homePageComponents/cards/FollowerCard";

export default class HomePage extends Component{
    constructor(props) {
        super();
    }

    //todo add handler for event that you can go to forgot password page, this only shows in terminal
    onTextPress(event, text) {
        console.log(text);
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
                    rightElement={{
                        menu: {
                            icon: "more-vert",
                            labels: ["Most popular activities", "Daily challenge", "Leaderboard", "Theme"]
                        }
                    }}
                    onRightElementPress={ (label) => { console.log(label) }}/>

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
                        <SafeAreaView>
                            <ScrollView horizontal
                                        showsHorizontalScrollIndicator={false}>
                                <View style={styleLightMode.activityCard}>
                                    <ActivityCard />
                                </View>
                                <View style={styleLightMode.activityCard}>
                                    <ActivityCard />
                                </View>
                                <View style={styleLightMode.activityCard}>
                                    <ActivityCard />
                                </View>
                                <View style={styleLightMode.activityCard}>
                                    <ActivityCard />
                                </View>
                            </ScrollView>
                        </SafeAreaView>

                        <Text style={styleLightMode.followers}>Followers</Text>
                        <SafeAreaView>
                            <ScrollView horizontal
                                        showHorizontalScrollIndicator={false}>
                                <View style={styleLightMode.followerCard}>
                                    <FollowerCard/>
                                </View>
                                <View style={styleLightMode.followerCard}>
                                    <FollowerCard/>
                                </View>
                                <View style={styleLightMode.followerCard}>
                                    <FollowerCard/>
                                </View>
                                <View style={styleLightMode.followerCard}>
                                    <FollowerCard/>
                                </View>
                            </ScrollView>
                        </SafeAreaView>
                        <Text style={styleLightMode.famillyActivities}>Familly activities</Text>
                        <SafeAreaView>
                            <ScrollView horizontal
                                        showsHorizontalScrollIndicator={false}>
                                <View style={styleLightMode.activityCard}>
                                    <ActivityCard />
                                </View>
                                <View style={styleLightMode.activityCard}>
                                    <ActivityCard />
                                </View>
                                <View style={styleLightMode.activityCard}>
                                    <ActivityCard />
                                </View>
                                <View style={styleLightMode.activityCard}>
                                    <ActivityCard />
                                </View>
                            </ScrollView>
                        </SafeAreaView>
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
        width: 90,
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
        height: 520,
        width: 284,
        marginTop: 10,
        marginLeft:17,
        borderRadius: 50,
        marginBottom:70
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
    famillyActivities:{
        marginTop: -65,
        textTransform: 'uppercase',
        fontWeight: 'bold',
        marginLeft: 20
    }
})


