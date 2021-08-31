import React, {Component} from "react";
import {
    View,
    StyleSheet,
    StatusBar,
    Text,
    SafeAreaView,
    ScrollView, Dimensions
} from "react-native";
import {Toolbar} from "react-native-material-ui";
import ActivityCard from "../components/cards/ActivityCard";
import CategoryCard from "../components/cards/CategoryCard";

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

                    </ScrollView>

                </SafeAreaView>
                <View style={styleLightMode.card}>
                    <CategoryCard/>
                </View>

            </View>

        )
    }
}


const styleLightMode = StyleSheet.create({
    container:{
        backgroundColor: '#cbdbf2',
        flex:1
    },
    bottomNavigationBar:{
        flex: 1,
        justifyContent: 'flex-end'
    },
    titleCategories:{
        fontSize:16,
        marginTop: 15,
        marginLeft: 20,
        marginRight: 180,
        textTransform: 'uppercase',
        fontWeight: 'bold'
    },
    seeAll:{
        marginRight: 20,
        marginTop:15
    },
    card:{
        height:106,
        width:90,
        marginTop: 10,
        marginLeft:17
    }
})

const styleDarkMode=StyleSheet.create({
    container:{

    }
})

