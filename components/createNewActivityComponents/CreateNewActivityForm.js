import React, {useState} from "react";
import {SafeAreaView, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View} from "react-native";
import CategoryCard from "../homePageComponents/cards/CategoryCard";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import ImageUploaderActivity from "../imageUploader/ImageUploaderActivity";
import {Actions} from "react-native-router-flux";
import {ACTIVITY, ACTIVITY_PUBLIC, REGISTER} from "../../configuration/config";
import store from "../../redux/store";
import {userRegistrationFailed, userRegistrationStarted, userRegistrationSuccess} from "../../redux/actions";


export const CreateNewActivityForm = () =>{

    // const [title, setTitle] = useState('')
    // const [description, setDescription] = useState('')
    // const [photo, setPhoto] = useState('')
    // const [like_counter, setLikeCounter] = useState('')
    // const [dislike_counter, setDislikeCounter] = useState('')
    // const [badge, setBadge] = useState(null)
    // const [public, setPublic] = useState(false)
    // const [status, setStatus] = useState(-1)
    // const [liked, setLiked] = useState(null)
    // const [user_id, setUserId] = useState('')
    // const [category_id, setCategoryId] = useState('')
    //
    const switchSuccessfullyAddedCreateActivity = () =>{
        Actions.switchSuccessfullyAddedCreateActivity()
    }
    //
    // const postNewActivity = () =>{
    //     const activity = {
    //         title,
    //         description,
    //         photo,
    //         like_counter,
    //         dislike_counter,
    //         badge,
    //         public,
    //         status,
    //         liked,
    //         user_id,
    //         category_id
    //     }
    //     fetch(`${ACTIVITY}`,{
    //         method: 'POST',
    //         headers: {
    //             "Content-Type": "application/json",
    //             "Accept": "application/json",
    //         },
    //         body: JSON.stringify(activity)
    //     })
    //         .then(async res => {
    //             try{
    //                 store.dispatch(userRegistrationStarted());
    //
    //                 const jsonRes = await res.json();
    //
    //                 console.log(jsonRes.message)
    //                 if(res.status!==200){
    //                     store.dispatch(userRegistrationFailed());
    //                 }
    //                 else{
    //                     store.dispatch(userRegistrationSuccess());
    //                 }
    //             }
    //             catch (err){
    //                 console.log(err);
    //             }
    //         })
    // }

    return(
        <View style={styles.container}>
            <SafeAreaView>
                <ScrollView>
                    <View style={{flexDirection: 'row'}}>
                        <Text style={styles.chooseCategory}>choose category</Text>
                        <Text style={styles.seeAll}
                              // onPress={(e) => this.onTextPress(e, 'See all')}
                        >See all</Text>
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
                            <ImageUploaderActivity/>
                        </ScrollView>
                    </SafeAreaView>
                    <TouchableOpacity style={styles.postActivityButton}
                                      onPress={switchSuccessfullyAddedCreateActivity}>
                        <Text style={styles.postActivityText}>POST ACTIVITY</Text>
                    </TouchableOpacity>

                </ScrollView>
            </SafeAreaView>

        </View>
    )
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
