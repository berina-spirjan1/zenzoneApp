import React, {Component} from "react";
import {
    StatusBar,
    StyleSheet,
    View,
    Text,
    Image,
    TouchableOpacity,
    SafeAreaView,
    ScrollView,
    Dimensions
} from "react-native";
import {Toolbar} from "react-native-material-ui";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";

export default class UserHelp extends Component{
    constructor(props) {
        super();
    }
    render(){

        const screenHeight = Dimensions.get('window').height

        return(
            <View style={styles.container}>
                <StatusBar
                    animated={true}
                    backgroundColor="#334A6D"/>
                <Toolbar style={{ container: { backgroundColor: '#93B4E5' } }}
                         leftElement="arrow-back"
                         centerElement="Help"/>
                <Text style={styles.account}>Account</Text>
                <View style={styles.userInfo}>
                    <Image source={require('../assets/images/rodjoImage.png')}
                           style={styles.userProfileImage}/>
                    <Text style={styles.username}>@rodjo</Text>
                    <Text style={styles.personalInfo}>{"\n"}Personal info</Text>
                    <TouchableOpacity style={styles.nextButton}>
                        <FontAwesome5 name={'chevron-right'}
                                      size={15}
                                      color={'#000000'}
                                      style={styles.icon}/>
                    </TouchableOpacity>
                </View>
                <Text style={styles.userHelp}>Help</Text>
                <SafeAreaView style={styles.safeArea}
                              style={{height: screenHeight}}>
                    <ScrollView vertical={true}
                                style={styles.scrollView}>
                        <Text style={styles.helpText}>If you need help using our app, the basic instructions are given below.{"\n"}{"\n"}
                            To win one badge you need to do today’s challenge correctly and post a photo as proof that you have done it successfully.{"\n"}{"\n"}
                            If you have doubts about how you can become the best ranked user, it is necessary that your post has the largest number of likes,
                            in which case you get one of the three most popular user status in that month.</Text>
                    </ScrollView>
                </SafeAreaView>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        backgroundColor: '#cbdbf2',
        flex: 1
    },
    account:{
        fontSize: 20,
        fontFamily:'Roboto_700Bold_Italic',
        fontWeight: 'bold',
        marginTop: 45,
        marginLeft: 20,
        color: '#393F48'
    },
    userProfileImage:{
        width: 100,
        height: 100,
        borderRadius: 100,
        marginLeft: 20
    },
    userInfo:{
        flexDirection: 'row',
        marginTop: 25
    },
    username:{
        fontWeight: 'bold',
        marginLeft: 30,
        marginTop:30,
        color:'#393F48'
    },
    nextButton:{
        height: 40,
        width: 40,
        backgroundColor: '#FFFDFD',
        borderRadius: 10,
        marginLeft:55,
        marginTop:30
    },
    personalInfo:{
        marginLeft:-45,
        marginTop:40
    },
    icon:{
        justifyContent: 'center',
        textAlign: 'center',
        marginTop:10
    },
    userHelp:{
        color: '#393f48',
        fontFamily:'Roboto_700Bold_Italic',
        fontSize: 20,
        marginTop:50,
        marginLeft:20
    },
    helpText:{
        padding:20,
        fontSize:16,
        marginBottom:20
    },
    safeArea:{
        flex:1,
        paddingTop: StatusBar.currentHeight,
        paddingVertical: 20
    },
    scrollView:{
        alignSelf: 'stretch',
        marginBottom: 20
    }
})
