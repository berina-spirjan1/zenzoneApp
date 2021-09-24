import React, { Component } from "react"
import {
    View,
    Text,
    StyleSheet,
    StatusBar,
    Dimensions
} from "react-native";
import { Toolbar } from "react-native-material-ui";
import {Actions} from "react-native-router-flux";
import {DoDailyChallengeForm} from "./DoDailyChallengeForm";



export default class DoDailyChallenge extends Component{
    constructor(props) {
        super();
    }

    congratulations(){
        Actions.congratulations()
    }


    challengeDetails(){
        Actions.challengeDetails()
    }

    render() {

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
                         onLeftElementPress={this.challengeDetails}/>
                <DoDailyChallengeForm/>
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
    icon:{
        justifyContent: 'center',
        marginLeft: 95,
        marginTop: 0
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
    }
})
