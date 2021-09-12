import React, {Component} from "react";
import {
    View,
    Text,
    ScrollView,
    StyleSheet,
    SafeAreaView,
    StatusBar,
    TextInput,
    TouchableOpacity,
    Alert
} from "react-native";
import CategoryCard from "../components/homePageComponents/cards/CategoryCard";

import { Toolbar } from "react-native-material-ui";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import ImageUploader from "../components/ImageUploader";

export default class CreateNewActivity extends Component{
    constructor(props) {
        super();
    }
    render() {
        return(
            <View style={styles.container}>
                <StatusBar
                    animated={true}
                    backgroundColor="#6285B3"/>
                <Toolbar style={{ container: { backgroundColor: '#93B4E5' } }}
                         // leftElement="arrow-back"
                         centerElement="Activities"
                         onRightElementPress={ (label) => { console.log(label) }}/>
                <SafeAreaView>
                             <ScrollView>
                                 <View style={{flexDirection: 'row'}}>
                                     <Text style={styles.chooseCategory}>choose category</Text>
                                     <Text style={styles.seeAll}
                                           onPress={(e) => this.onTextPress(e, 'See all')}>See all</Text>
                                 </View>
                                 <SafeAreaView>
                                     <ScrollView horizontal
                                                 showsHorizontalScrollIndicator={false}>
                                         <View style={styles.categoryCard}>
                                             <CategoryCard/>
                                         </View>
                                         <View style={styles.categoryCard}>
                                             <CategoryCard/>
                                         </View>
                                         <View style={styles.categoryCard}>
                                             <CategoryCard/>
                                         </View>
                                         <View style={styles.categoryCard}>
                                             <CategoryCard/>
                                         </View>
                                         <View style={styles.categoryCard}>
                                             <CategoryCard/>
                                         </View>
                                     </ScrollView>
                                 </SafeAreaView>
                                 <Text style={styles.title}>Title</Text>
                                 <TextInput numberOfLines={2}
                                            placeholder={'Activity title'}
                                            style={styles.titleInput}/>
                                 <View style={{flexDirection: 'row'}}>
                                     <Text style={styles.comment}>Description</Text>
                                     <Text style={styles.counter}>0/1000</Text>
                                 </View>

                                 <TextInput numberOfLines={10}
                                            placeholder={'Enter description for activity'}
                                            style={styles.activityDescription}
                                            multiline={true}/>
                                 <View style={styles.addPhotoSection}>
                                     <FontAwesome5 name={'camera'}
                                                   size={25}
                                                   color={'#000000'}/>
                                     <Text style={styles.addPhoto}>Add photo</Text>
                                 </View>

                                 <SafeAreaView>
                                     <ScrollView horizontal
                                                 showsHorizontalScrollIndicator={false}>
                                         <ImageUploader/>
                                     </ScrollView>
                                 </SafeAreaView>
                                 <TouchableOpacity style={styles.postActivityButton}
                                     //todo add post activity successfull page that miss in Adobe xd
                                                   onPress={() => Alert.alert('Post activity successfull page')}>
                                     <Text style={styles.postActivityText}>POST ACTIVITY</Text>
                                 </TouchableOpacity>

                             </ScrollView>
                </SafeAreaView>

            </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        fontFamily: 'Roboto_400Regular',
        backgroundColor: '#CBDBF2',
        flex:1
    },
    chooseCategory:{
        fontWeight: 'bold',
        fontSize: 17,
        color: '#000000',
        marginLeft: 20,
        marginTop: 30,
        textTransform: 'uppercase'
    },
    categoryCard:{
        height: 115,
        width: 95,
        marginTop: 10,
        marginLeft: 17,
        borderRadius: 50
    },
    seeAll:{
        marginRight: 20,
        marginTop: 30,
        marginLeft: 120
    },
    title:{
        textTransform: 'uppercase',
        fontWeight: 'bold',
        fontSize: 14,
        marginLeft: 20,
        marginTop:30
    },
    titleInput:{
        backgroundColor: '#FFF',
        opacity: 0.5,
        borderRadius: 26,
        marginRight:20,
        marginLeft: 20,
        marginTop: 10,
        padding: 10
    },
    comment:{
        fontSize: 14,
        fontWeight: 'bold',
        textTransform: 'uppercase',
        marginLeft: 20,
        marginTop: 10
    },
    counter:{
        marginLeft: 160,
        marginTop: 10,
    },
    activityDescription:{
        backgroundColor: '#FFF',
        opacity: 0.5,
        borderRadius: 26,
        marginRight:20,
        height: 200,
        marginLeft: 20,
        marginTop: 10,
        padding: 10
    },
    addPhotoSection:{
        flexDirection: 'row',
        marginTop: 15,
        marginLeft:20,

    },

    addPhoto:{
        textTransform: 'uppercase',
        fontSize: 14,
        fontWeight: 'bold',
        marginLeft:5,
        marginTop:6
    },
    postActivityButton:{
        marginBottom:100,
        backgroundColor: '#6285b3',
        borderRadius: 18,
        marginTop: 30,
        height: 40,
        width: 131,
        left:200,
        padding:10,
        shadowColor: "#000000",
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowOpacity: 0.2,
        shadowRadius: 3.84,
        elevation: 2,
    },
    postActivityText:{
        textAlign: 'center',
        justifyContent: 'center',
        fontWeight:'bold'
    }
})
