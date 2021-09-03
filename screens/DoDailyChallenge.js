import React, { Component } from "react"
import {
    View,
    Text,
    StyleSheet,
    Image,
    TouchableOpacity,
    Alert,
    StatusBar,
    TextInput,
    SafeAreaView,
    ScrollView, Dimensions
} from "react-native";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import { Toolbar } from "react-native-material-ui";
import DoChallengeIconDarkMode from "../assets/icons/DoChallengeIconDarkMode";


export default class DoDailyChallenge extends Component{
    constructor(props) {
        super();
    }
    render() {

        const screenHeight = Dimensions.get('window').height

        return(
            <View style={styles.container}>
                <StatusBar
                    animated={true}
                    backgroundColor="#6285B3"/>
                <Toolbar style={{ container: { backgroundColor: '#93B4E5' } }}
                         leftElement="arrow-back"
                         centerElement="Today's challenge"
                         rightElement={{
                             menu: {
                                 icon: "more-vert",
                                 labels: ["Activities", "Daily challenge", "Leaderboard", "Login"]
                             }
                         }}
                         onRightElementPress={ (label) => { console.log(label) }}/>
                <TouchableOpacity style={styles.buttonContainer}
                                  //todo add function for upload image
                                  onPress={() => Alert.alert('Upload image')}>
                    <FontAwesome5 name={'camera'}
                                  size={45}
                                  color={'#000'}
                                  style={styles.icon}/>
                    <Text style={styles.uploadImageText}>Upload image</Text>
                </TouchableOpacity>
                <SafeAreaView style={styles.safeAreaContainer}
                              style={{height: screenHeight}}>
                    <ScrollView style={styles.scrollView}>
                        <View style={{flexDirection: 'row'}}>
                            <Text style={styles.comment}>Comment</Text>
                            <Text style={styles.counter}>1/1000</Text>
                        </View>

                        <TextInput numberOfLines={10}
                                   placeholder={'Enter description for activity'}
                                   style={styles.activityDescription}
                                   multiline={true}/>
                        <Image source={require('../assets/images/DoDailyChallenge.svg')}
                               style={styles.imageForDaily}/>
                        <TouchableOpacity style={styles.finishButton}
                                          //todo add function for sending report for daily challenge to backend
                                          onPress={() => Alert.alert('Finish daily')}>
                            <Text style={styles.finishText}>finish</Text>
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
        backgroundColor: '#CBDBF2'
    },
    buttonContainer:{
        backgroundColor: '#6285B3',
        width: 300,
        height: 200,
        padding: 50,
        borderRadius: 26,
        marginTop: 30,
        marginLeft: 20,
        shadowColor: "#000000",
        shadowOffset: {
            width: 0,
            height: 8,
        },
        shadowOpacity: 0.44,
        shadowRadius: 10.84,
        elevation: 16
    },
    uploadImageText:{
        textTransform: 'uppercase',
        textAlign:'center',
        justifyContent: 'center',
        fontWeight: 'bold',
        marginTop: 5
    },
    icon:{
        justifyContent: 'center',
        marginLeft: 75,
        marginTop: 20
    },
    comment:{
        fontSize: 17,
        fontWeight: 'bold',
        textTransform: 'uppercase',
        marginLeft: 20,
        marginTop: 10
    },
    counter:{
        marginLeft: 160,
        marginTop: 10,
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
        width: 300,
        height: 200,
        marginLeft: 20,
        marginTop: 10,
        padding: 10,
        marginBottom: 100
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
        marginTop: 10,
        marginBottom: 50
    },
    imageForDaily:{
        width: 200,
        height: 100
    },
    finishButton:{
        backgroundColor: '#6285b3',
        height: 40,
        width: 100,
        borderRadius: 18
    }
})
