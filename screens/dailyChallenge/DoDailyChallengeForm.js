import React, {useEffect, useState} from "react";
import {
    Platform,
    SafeAreaView, ScrollView, StatusBar, Text, TextInput, TouchableOpacity,
    View, StyleSheet, Dimensions
} from "react-native";
import ImageUploaderChallenge from "../../components/imageUploader/ImageUploaderChallenge";
import DoChallengeIconDarkMode from "../../assets/icons/DoChallengeIconDarkMode";
import * as ImagePicker from "expo-image-picker";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";


export function DoDailyChallengeForm(){

    const [image, setImage] = useState(null);
    const screenHeight = Dimensions.get('window').height

    useEffect(() => {
        (async () => {
            if (Platform.OS !== 'web') {
                const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
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
            aspect: [4, 3],
            quality: 1,
        });

        console.log(result);

        if (!result.cancelled) {
            setImage('');
        }
    };


    return(
        <View>
            <View style={{marginTop: 100, marginBottom: 80}}>
                <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                    <TouchableOpacity style={styles.buttonContainer}
                                      onPress={pickImage}>
                        <FontAwesome5 name={'camera'}
                                      size={45}
                                      color={'#000'}
                                      style={styles.icon}/>
                        <Text style={styles.uploadImageText}>Upload image</Text>
                    </TouchableOpacity>
                </View>
            </View>

            <SafeAreaView style={styles.safeAreaContainer}
                          style={{height: screenHeight}}>
                <ScrollView style={styles.scrollView}
                            vertical={true}>
                    <View style={{flexDirection: 'row'}}>
                        <Text style={styles.comment}>Comment</Text>
                        <Text style={styles.counter}>0/1000</Text>
                    </View>

                    <TextInput numberOfLines={10}
                               placeholder={'Enter description for activity'}
                               style={styles.activityDescription}
                               multiline={true}/>
                    <DoChallengeIconDarkMode style={{ marginTop: 10 }}/>
                    <TouchableOpacity style={styles.finishButton}
                                      // onPress={this.congratulations}
                    >
                        <Text style={styles.finishText}>finish</Text>
                    </TouchableOpacity>
                </ScrollView>
            </SafeAreaView>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        fontFamily: 'Roboto_400Regular',
        backgroundColor: '#CBDBF2'
    },
    buttonContainer:{
        backgroundColor: '#6285B3',
        marginRight: 20,
        height: 150,
        padding: 50,
        borderRadius: 26,
        marginTop: 30,
        marginLeft: 20,
        shadowColor: "#000000",
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.44,
        shadowRadius: 5,
        elevation: 10
    },
    uploadImageText:{
        textTransform: 'uppercase',
        textAlign:'center',
        justifyContent: 'center',
        fontWeight: 'bold',
        marginTop: 5,
        marginLeft:13
    },
    comment:{
        fontSize: 17,
        fontWeight: 'bold',
        textTransform: 'uppercase',
        marginLeft: 20,
        marginTop: 30,

    },
    counter:{
        marginLeft: 185,
        marginTop: 30
    },
    title:{
        textTransform: 'uppercase',
        fontWeight: 'bold',
        fontSize: 17,
        marginLeft: 20,
        marginTop:10
    },
    activityDescription:{
        backgroundColor: '#FFF',
        opacity: 0.5,
        borderRadius: 26,
        marginRight:20,
        height: 200,
        marginLeft: 20,
        marginTop: 10,
        padding: 20
    },
    titleInput:{
        backgroundColor: '#FFF',
        opacity: 0.5,
        borderRadius: 26,
        width: 300,
        marginLeft: 20,
        marginTop: 10,
        padding: 10
    },
    safeAreaContainer:{
        flex:1,
        paddingTop: StatusBar.currentHeight,
        paddingVertical: 20
    },
    scrollView:{
        alignSelf: 'stretch',
        marginTop: 20,
        marginBottom: 50
    },
    finishButton:{
        backgroundColor: '#6285b3',
        height: 40,
        width: 100,
        marginTop:-70,
        borderRadius: 18,
        padding: 10,
        shadowColor: "#000000",
        shadowOffset: {
            width: 0,
            height: 6,
        },
        shadowOpacity: 0.2,
        shadowRadius: 3.84,
        elevation: 2,
        marginBottom:300,
        left:230
    },
    finishText:{
        textTransform: 'uppercase',
        color: '#000000',
        fontWeight: 'bold',
        textAlign: 'center',
        fontSize:16
    },
    icon:{
        justifyContent: 'center',
        marginLeft: 40,
        marginTop: 0
    },
})
