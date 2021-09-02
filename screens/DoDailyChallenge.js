import React, {Component} from "react"
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    Alert,
    StatusBar,
    TextInput,
    SafeAreaView,
    ScrollView, Dimensions
} from "react-native";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import {Toolbar} from "react-native-material-ui";


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
                <SafeAreaView>
                    <ScrollView vertical={true}
                                style={screenHeight}>
                        <Text style={styles.title}>Title</Text>
                        <TextInput numberOfLines={2}
                                   placeholder={'Activity title'}
                                   style={styles.titleInput}/>
                        <View style={{flexDirection: 'row'}}>
                            <Text style={styles.comment}>Comment</Text>
                            <Text style={styles.counter}>1/1000</Text>
                        </View>

                        <TextInput numberOfLines={10}
                                   placeholder={'Enter description for activity'}
                                   style={styles.activityDescription}/>
                    </ScrollView>
                </SafeAreaView>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        fontFamily: 'Roboto_400Regular'
    },
    buttonContainer:{
        backgroundColor: '#6285B3',
        width: 300,
        height: 200,
        padding: 50,
        borderRadius: 26,
        marginTop: 30,
        marginLeft: 20
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
        height: 50,
        marginLeft: 20,
        marginTop: 10,
        padding: 10
    }
})
