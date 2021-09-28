import React, {Component} from "react";
import {
    View,
    StyleSheet, Text, ScrollView, StatusBar
} from "react-native";
import {renderIf} from "../utilities/CommonMethods";
import {Card, CardAction, CardContent} from "react-native-card-view";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import {CATEGORY} from "../configuration/config";
import {Toolbar} from "react-native-material-ui";
import {Actions} from "react-native-router-flux";
import {isIphoneX} from "react-native-iphone-x-helper";


export default class AllCategories extends Component{
    state = {
        data: [],
        // current_page: '',
        // per_page: '',
        noDataCategory: false,
        categories: []
    }

    componentDidMount(page=1) {
        fetch(`${CATEGORY}?page=${page}`, {
            method: 'GET',
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            }
        })
            .then((response) => response.json())
            .then((responseJson) => {
                this.setState({
                    categories: responseJson.data.data
                })
                if(responseJson.data.data.length!==0){
                    page++;
                    return this.componentDidMount(page)
                }
                console.log(responseJson)
            })
            .catch((error) => {
                console.error(error);
            });
    }

    homePageActivities(){
        Actions.homePageActivities()
    }


    render() {
        return(
            <View style={styles.container}>
                <StatusBar animated={true}
                           backgroundColor="#6285B3"/>
                {renderIf(isIphoneX(), <Toolbar style={{ container: { backgroundColor: '#93B4E5', marginTop: 50 }}}
                                                leftElement={'arrow-back'}
                                                centerElement="All categories"
                                                onLeftElementPress={this.homePageActivities}/>)}
                {renderIf(!isIphoneX(), <Toolbar style={{ container: { backgroundColor: '#93B4E5' }}}
                                                 leftElement={'arrow-back'}
                                                 centerElement="All categories"
                                                 onLeftElementPress={this.homePageActivities}/>)}
                {renderIf(this.state.noDataCategory, <Text style={{textAlign: 'center'}}>No data found.</Text>)}
                {renderIf(this.state.categories.length,
                    <ScrollView horizontal={true}
                                showsHorizontalScrollIndicator={false}>
                        <View style={{flexDirection: 'column', flexWrap: 'wrap'}}>
                            {this.state.categories.map(function(obj,i) {
                                return (
                                    <View style={styles.categoryCard}>
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

                                            <View style={styles.icon2}>
                                                <FontAwesome5 name={obj.icon}
                                                              size={35}
                                                              color={'#000000'}/>
                                            </View>

                                            <CardContent>
                                                <Text style={styles.categoryName}
                                                numberOfLines={2}>{obj.title}</Text>
                                            </CardContent>
                                            <CardAction >

                                            </CardAction>
                                        </Card>
                                    </View>
                                )
                            },this)}
                        </View>
                    </ScrollView>
                )}
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        backgroundColor: '#cbdbf2',
        flex:1,
    },
    categoryCard:{
        height: 115,
        width: 95,
        marginTop: 10,
        marginLeft: 17,
        borderRadius: 50
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
    }
})
