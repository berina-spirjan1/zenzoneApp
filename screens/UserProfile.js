import React, {Component} from "react";
import {
    View,
    StyleSheet,
    StatusBar,
    ImageBackground,
    Image,
    Text,
    TouchableOpacity,
    SafeAreaView,
    ScrollView
} from "react-native";
import {Toolbar} from "react-native-material-ui";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";

export default class UserProfile extends Component{
    constructor(props) {
        super();
    }

    render() {
        return(
            <View style={styles.container}>
                <StatusBar
                    animated={true}
                    backgroundColor="#334A6D"/>
                <Toolbar style={{ container: { backgroundColor: '#93B4E5' } }}
                         centerElement="Profile"/>
                <ImageBackground source={require('../assets/images/backgroundLeaderboardLightMode.png')}
                                 style={styles.imageBackground}/>
                <Image source={require('../assets/images/rodjoImage.png')}
                       style={styles.userImage}/>
                <Text style={styles.username}>@arnel_maric</Text>
                <SafeAreaView>
                    <ScrollView vertical={true}
                                style={{marginTop:0}}>
                        <TouchableOpacity style={styles.items}>
                            <View style={styles.itemRow}>
                                <FontAwesome5 name={'user'}
                                              size={20}
                                              color={'#616C75'}
                                              style={styles.icon}/>
                                <Text style={styles.menuItem}>My profile</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.items}>
                            <View style={styles.itemRow}>
                                <FontAwesome5 name={'certificate'}
                                              size={20}
                                              color={'#616C75'}
                                              style={styles.icon}/>
                                <Text style={styles.menuItem}>Badges</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.items}>
                            <View style={styles.itemRow}>
                                <FontAwesome5 name={'medal'}
                                              size={20}
                                              color={'#616C75'}
                                              style={styles.icon}/>
                                <Text style={styles.menuItem}>Leaderboard for this month</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.items}>
                            <View style={styles.itemRow}>
                                <FontAwesome5 name={'book-reader'}
                                              size={20}
                                              color={'#616C75'}
                                              style={styles.icon}/>
                                <Text style={styles.menuItem}>Activities</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.items}>
                            <View style={styles.itemRow}>
                                <FontAwesome5 name={'cog'}
                                              size={20}
                                              color={'#616C75'}/>
                                <Text style={styles.menuItem}>Settings</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.bottomTabBar}>
                            <View style={styles.itemRow}>
                                <FontAwesome5 name={'sign-in-alt'}
                                              size={20}
                                              color={'#3B495E'}/>
                                <Text style={styles.menuItem}>Logout</Text>
                            </View>

                        </TouchableOpacity>
                    </ScrollView>
                </SafeAreaView>

            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#CBDBF2',
        flex: 1
    },
    imageBackground:{
        height: 520,
        width: 700,
        justifyContent: 'center',
        marginLeft:-170,
        marginTop: -90,
        opacity:0.5,
        flex: 1,
        marginBottom:300
    },
    userImage:{
        width: 150,
        height: 150,
        borderRadius: 200,
        top: -80,
        left:110,
        textAlign: 'center'
    },
    username:{
        fontSize: 22,
        top:-70,
        fontFamily: 'Roboto_700Bold_Italic',
        textAlign: 'center',
        color:'#505760'
    },
    items:{
        borderWidth: 0,
        backgroundColor:'#CBDBF2'
    },
    itemRow:{
        top: 10,
        flexDirection: 'row',
        paddingLeft: 80,
        height: 60,

    },
    menuItem:{
        marginTop:2,
        marginLeft: 45,
        fontFamily: 'Roboto_700Bold_Italic',
        fontWeight: 'bold',
        color: '#616C75'
    },
    bottomTabBar:{
        backgroundColor: '#93B4E5',
        height: 60,
        paddingLeft: 0,
        paddingTop:10
    }
})
