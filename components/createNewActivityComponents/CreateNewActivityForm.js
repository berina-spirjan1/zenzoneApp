import React, {useEffect, useState} from "react";
import {
    AsyncStorage,
    Platform,
    SafeAreaView,
    ScrollView,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View
} from "react-native";
import CategoryCard from "../homePageComponents/cards/CategoryCard";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import {Actions} from "react-native-router-flux";
import {ACTIVITY, CATEGORY} from "../../configuration/config";
import store from "../../redux/store";
import {failedAddingActivity, startedAddingActivity, successfullyAddedActivity,} from "../../redux/actions";
import * as ImagePicker from "expo-image-picker";
import {renderIf} from "../../utilities/CommonMethods";
import {Card, CardAction, CardContent} from "react-native-card-view";

export const CreateNewActivityForm = () => {

    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    let [image, setImage] = useState(null);
    const [imageUri, setImageUri] = useState('')
    const [extension, setExtension] = useState('')
    let [data,setData] = useState([])
    const [category_id, setCategoryId] = useState(1)

    useEffect(() => {
        (async () => {
            if (Platform.OS !== 'web') {
                const {status} = await ImagePicker.requestMediaLibraryPermissionsAsync();
                if (status !== 'granted') {
                    alert('Sorry, we need camera roll permissions to make this work!');
                }
            }
        })();
    }, []);

    const pickImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            aspect: [3, 3],
            quality: 0.5
        });
        image = result
        console.log(result);
        setImageUri(Platform.OS === "android" ? image.uri : image.uri.replace("file:///", ""))

        if (!result.cancelled) {
            setImage('');
        }

    };
    const getCategories = () =>{
        fetch(`${CATEGORY}`, {
            method: 'GET',
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            }
        })
            .then((response) => response.json())
            .then((responseJson) => {
                setData(responseJson.data.data)
                console.log("--------------------------",data)
            })
            .catch((error) => {
                console.error(error);
            });
    }


    const postNewActivity = async () => {

        console.log("OVO JE FAJL", image)

        let token = await AsyncStorage.getItem('jwt')
        token = JSON.parse(token)
        const imageType = image.type
        setExtension(imageUri.split('.').pop())
        const activity = new FormData();
        activity.append('category_id',category_id);

        activity.append('title', title);
        activity.append('image', {
            name: `${imageType}.${extension}`,
            type:  `${imageType}/${extension}`,
            uri: imageUri
        });
        activity.append('description', description)
        fetch(`${ACTIVITY}`, {
            method: 'POST',
            headers: {
                "Content-Type": "multipart/form-data",
                "Accept": "application/json",
                'Authorization': 'Bearer ' + token
            },
            body: activity
        })
            .then(async res => {
                try {
                    store.dispatch(startedAddingActivity());

                    const jsonRes = await res.json();

                    console.log(jsonRes)
                    if (res.status !== 200) {
                        console.log(res.status)
                        store.dispatch(failedAddingActivity());
                    } else {
                        store.dispatch(successfullyAddedActivity());
                        switchSuccessfullyAddedCreateActivity()
                    }
                } catch (err) {
                    console.log(err);
                }
            })
    }




    const switchSuccessfullyAddedCreateActivity = () => {
        Actions.switchSuccessfullyAddedCreateActivity()
    }

    const saveCategoryId = (i) =>{
        setCategoryId(i)
        console.log(i)
    }

    return (
        <View style={styles.container}>
            <SafeAreaView>
                <ScrollView>
                    <View style={{flexDirection: 'row'}}>
                        <Text style={styles.chooseCategory}>choose category</Text>
                        <Text style={styles.seeAll}
                            // onPress={(e) => this.onTextPress(e, 'See all')}
                        >See all</Text>
                    </View>
                    {console.log("HEREEEEEEEEEEEEEEEE",data)}
                    {renderIf(data.length,
                        <ScrollView horizontal={true}
                                    showsHorizontalScrollIndicator={false}>
                            <View style={{flexDirection: 'row'}}>
                                {data.map(function(obj,i) {
                                    return (
                                        <TouchableOpacity style={styles.categoryCard}
                                                          onPress={() => saveCategoryId(i)}>
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
                                                    <Text style={styles.categoryName}>{obj.title}</Text>
                                                </CardContent>
                                                <CardAction >

                                                </CardAction>
                                            </Card>
                                        </TouchableOpacity>
                                    )
                                },this)}
                            </View>
                        </ScrollView>
                    )}
                    <Text style={styles.title}>Title</Text>
                    <TextInput numberOfLines={2}
                               placeholder={'Activity title'}
                               onChangeText={setTitle}
                               style={styles.titleInput}/>
                    <View style={{flexDirection: 'row'}}>
                        <Text style={styles.comment}>Description</Text>
                        <Text style={styles.counter}>0/1000</Text>
                    </View>

                    <TextInput numberOfLines={10}
                               placeholder={'Enter description for activity'}
                               onChangeText={setDescription}
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
                            <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
                                <TouchableOpacity style={styles.cardAddPhoto}
                                                  onPress={pickImage}>
                                    <FontAwesome5 name={'camera'}
                                                  size={20}
                                                  color={'#000000'}
                                                  style={styles.cameraIcon}/>
                                    <Text style={styles.add}>Add</Text>
                                </TouchableOpacity>
                                {/*{image && <Image source={{ uri: image }} style={{ width: 223.06, height: 223.06 }} />}*/}
                            </View>
                        </ScrollView>
                    </SafeAreaView>
                    <TouchableOpacity style={styles.postActivityButton}
                                      onPress={async () => {
                                          await postNewActivity()
                                      }}>
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
        marginBottom:50,
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
    },
    cardAddPhoto:{
        backgroundColor:'#6285b3',
        marginTop:15,
        width: 90,
        height: 90,
        borderRadius: 25,
        marginLeft:20,
        justifyContent: 'center',
        textAlign: 'center',
        shadowColor: "#000000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.2,
        shadowRadius: 3.84,
        elevation: 3

    },
    cameraIcon:{
        justifyContent: 'center',
        marginTop:10,
        marginLeft:35
    },
    add:{
        textTransform:'uppercase',
        marginLeft:30
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
