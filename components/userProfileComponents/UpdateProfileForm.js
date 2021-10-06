import React, {useEffect, useState} from "react";
import {
    Alert,
    AsyncStorage,
    Dimensions,
    Image,
    Platform,
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View
} from "react-native";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import * as ImagePicker from "expo-image-picker";
import {
    BASE_URL,
    USER,
    USER_UPDATE
} from "../../configuration/config";
import store from "../../redux/store";
import {
    failedAddingActivity, failedUpdatingUserInfo,
    startedAddingActivity, startedUpdatingUserInfo,
    successfullyAddedActivity, successfullyUpdatedUserInfo
} from "../../redux/actions";
import { renderIf } from "../../utilities/CommonMethods";


export const UpdateProfileForm = () =>{

    //we are taking screen height and storing at to variable which we use for scroll view
    const screenHeight = Dimensions.get('window').height

    //allowing to state variables in this functional component
    let [image, setImage] = useState(null)
    const [first_name, setFirstName] = useState('')
    const [last_name, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [office_location, setOfficeLocation] = useState('')
    const [work_position, setWorkPosition] = useState('')
    const [imageUri, setImageUri] = useState('')
    const [extension, setExtension] = useState('')
    const [nameInitial, setNameInitial] = useState('')
    const [firstNameInitial, setFirstNameInitial] = useState('')
    const [lastNameInitial, setLastNameInitial] = useState('')
    const [emailInitial, setEmailInitial] = useState('')
    const [officeLocationInitial, setOfficeLocationInitial] = useState('')
    const [workPositionInitial, setWorkPositionInitial] = useState('')
    const [followersInitial, setFollowersInitial] = useState('');
    const [followingInitial, setFollowingInitial] = useState('');
    const [photoDirInitial, setPhotoDirInitial] = useState('');
    const [photoNameInitial, setPhotoNameInitial] = useState('');

    //hook for adding side effect for allowing access to gallery
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

    //we are taking image from gallery and cropping it
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


    const updateProfile = async () => {

        let token = await AsyncStorage.getItem('jwt')
        token = JSON.parse(token)

        const imageType = image.type
        setExtension(imageUri.split('.').pop())
        const user = new FormData();
        user.append('first_name',first_name);
        user.append('last_name',last_name);
        user.append('email',email);
        user.append('office_location', office_location);
        user.append('work_position', work_position);
        user.append('avatar', {
            name: `${imageType}.${extension}`,
            type:  `${imageType}/${extension}`,
            uri: imageUri
        });
        fetch(`${USER_UPDATE}`, {
            method: 'POST',
            headers: {
                "Content-Type": "multipart/form-data",
                "Accept": "application/json",
                'Authorization': 'Bearer ' + token
            },
            body: user
        })
            .then(async res => {
                try {
                    store.dispatch(startedUpdatingUserInfo());

                    const jsonRes = await res.json();

                    console.log(jsonRes)
                    if (res.status !== 200) {
                        Alert.alert("Something went wrong. Please try again.")
                        store.dispatch(failedUpdatingUserInfo());
                    }
                    if(res.status===200) {
                        store.dispatch(successfullyUpdatedUserInfo());
                        switchToMyProfileInfo()
                    }
                } catch (err) {
                    console.log(err);
                }
            })
    }

    useEffect(()=>{
        (async () =>{
            let token = await AsyncStorage.getItem('jwt')
            token = JSON.parse(token)

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
                    console.log(responseJson);
                    setNameInitial(responseJson.name);
                    setFirstNameInitial(responseJson.first_name);
                    setLastNameInitial(responseJson.last_name);
                    setEmailInitial(responseJson.email);
                    setOfficeLocationInitial(responseJson.office_location);
                    setWorkPositionInitial(responseJson.work_position);
                    setFollowersInitial(responseJson.followers_counter);
                    setFollowingInitial(responseJson.following_counter);
                    setPhotoDirInitial(responseJson.photo_dir);
                    setPhotoNameInitial(responseJson.photo_name);

                })
                .catch((error) => {
                    console.error(error);
                });
        })();
    }, []);

    //navigation back to profile information's
    const switchToMyProfileInfo = () => this.props.navigation.navigate("switchToMyProfileInfo")


    return(
        <View>
            <TouchableOpacity style={styles.uploadImage}
                              onPress={pickImage}>
                {renderIf(photoDirInitial===null,
                    <Image source={require('../../assets/images/user_photo.png')}
                              style={styles.userImageDefault}/>
                )}
                {renderIf(photoDirInitial!==null,

                    <Image source={{uri: `${BASE_URL}`+`${photoDirInitial}`+`${photoNameInitial}`}}
                           style={styles.userImageDefault}/>
                )}
            </TouchableOpacity>
            <TouchableOpacity style={styles.littleCamera}>
                <FontAwesome5 name={'camera'}
                              size={20}
                              color={'#505760'}
                              style={styles.cameraIcon}/>
            </TouchableOpacity>
            <Text style={styles.username}>{nameInitial}</Text>
            <View style={styles.followersFollowing}>
                <Text style={styles.followers}>Followers</Text>
                <Text style={styles.following}>Following</Text>
            </View>
            <View style={styles.counters}>
                <Text style={styles.counterFollowers}>{followersInitial}</Text>
                <Text style={styles.following}>{followingInitial}</Text>
            </View>
            <SafeAreaView style={styles.safeArea}
                          style={{height: screenHeight}}>
                <ScrollView vertical={true}
                            style={styles.scrollView}>
                    <TouchableOpacity style={styles.items}>
                        <View style={styles.itemRow}>
                            <FontAwesome5 name={'signature'}
                                          size={16}
                                          color={'#616C75'}
                                          style={styles.icon}/>
                            <Text style={styles.menuItem2}>{nameInitial}</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.items}>
                        <View style={styles.itemRow}>
                            <FontAwesome5 name={'user-circle'}
                                          size={20}
                                          color={'#616C75'}
                                          style={styles.icon}/>
                            <TextInput style={styles.menuItem}
                                       placeholder={firstNameInitial}
                                       onChangeText={setFirstName}/>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.items}>
                        <View style={styles.itemRow}>
                            <FontAwesome5 name={'user-circle'}
                                          size={20}
                                          color={'#616C75'}
                                          style={styles.icon}/>
                            <TextInput style={styles.menuItem}
                                       placeholder={lastNameInitial}
                                       onChangeText={setLastName}/>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.items}>
                        <View style={styles.itemRow}>
                            <FontAwesome5 name={'envelope'}
                                          size={20}
                                          color={'#616C75'}
                                          style={styles.icon}/>
                            <TextInput style={styles.menuItem}
                                       placeholder={emailInitial}
                                       onChangeText={setEmail}/>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.items}>
                        <View style={styles.itemRow}>
                            <FontAwesome5 name={'map-marker-alt'}
                                          size={26}
                                          color={'#616C75'}/>
                            <TextInput style={styles.menuItem}
                                       placeholder={officeLocationInitial}
                                       onChangeText={setOfficeLocation}/>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.items}>
                        <View style={styles.itemRow}>
                            <FontAwesome5 name={'briefcase'}
                                          size={20}
                                          color={'#616C75'}/>
                            <TextInput style={styles.menuItem}
                                       placeholder={workPositionInitial}
                                       onChangeText={setWorkPosition}/>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button}
                                      onPress={updateProfile}>
                        <Text style={styles.buttonText}>Update button</Text>
                    </TouchableOpacity>
                    <View style={{marginBottom:50}}/>
                </ScrollView>
            </SafeAreaView>

        </View>
    )
}

const styles = StyleSheet.create({
    username:{
        fontSize: 22,
        top:-100,
        fontFamily: 'Roboto_700Bold_Italic',
        textAlign: 'center',
        color:'#505760'
    },
    items:{
        borderWidth: 0,
        backgroundColor:'#CBDBF2'
    },
    itemRow:{
        top: 0,
        flexDirection: 'row',
        paddingLeft: 80,
        height: 60
    },
    menuItem2:{
        marginTop:2,
        marginLeft: 45,
        fontFamily: 'Roboto_700Bold_Italic',
        fontWeight: 'bold',
        color: '#616C75',
        width: 300
    },
    menuItem:{
        marginTop:-40,
        marginLeft: 45,
        fontFamily: 'Roboto_700Bold_Italic',
        fontWeight: 'bold',
        color: '#616C75',
        width: 300
    },
    bottomTabBar:{
        backgroundColor: '#93B4E5',
        height: 60,
        paddingLeft: 0,
        paddingTop: 10
    },
    safeArea:{
        flex:1,
        paddingTop: StatusBar.currentHeight,
        paddingVertical: 20
    },
    scrollView:{
        alignSelf: 'stretch',
        marginTop: -20,
        marginBottom: 415
    },
    followersFollowing:{
        flexDirection: 'row',
        marginTop: -60,
        marginBottom: 100
    },
    followers:{
        marginLeft: 40,
        marginRight:140,
        fontSize: 16,
        fontFamily: 'Roboto_700Bold_Italic',
        fontWeight: 'bold',
        color:'#505760'
    },
    following: {
        fontSize: 16,
        fontFamily: 'Roboto_700Bold_Italic',
        fontWeight: 'bold',
        color:'#505760'
    },
    counters:{
        flexDirection: 'row',
        marginTop: -100,
        marginBottom: 75
    },
    counterFollowers:{
        marginLeft: 70,
        marginRight: 200,
        fontSize: 16,
        fontFamily: 'Roboto_700Bold_Italic',
        fontWeight: 'bold',
        color:'#505760'
    },
    counterFollowing:{
        fontSize: 16,
        fontFamily: 'Roboto_700Bold_Italic',
        fontWeight: 'bold',
        color:'#505760'
    },
    button:{
        backgroundColor: '#93B4E5',
        width: 150,
        height: 50,
        left: 170,
        padding: 10,
        marginBottom: 20,
        borderRadius: 25
    },
    buttonText:{
        textAlign: 'center',
        textTransform: 'uppercase',
        fontWeight: 'bold',
        fontSize: 14,
        justifyContent: 'center',
        marginTop: 7
    },
    uploadImage:{
        backgroundColor: '#93B4E5',
        width: 100,
        height: 100,
        borderRadius: 100,
        marginLeft: 130,
        marginTop: -100,
        marginBottom: 100
    },
    cameraIcon:{

    },
    upload:{
        marginTop: 5,
        textAlign: 'center',
        fontWeight: 'bold'
    },
    userImageDefault:{
        width: 100,
        height: 100,
        borderRadius: 100,
        marginBottom: 100
    },
    littleCamera:{
        backgroundColor: '#FFF',
        height: 30,
        width: 30,
        borderRadius: 30,
        marginTop: -130,
        marginLeft: 200,
        marginBottom: 100,
        padding: 5
    }

})
