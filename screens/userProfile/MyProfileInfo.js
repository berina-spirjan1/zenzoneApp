import React, {Component} from "react";
import {
    View,
    StyleSheet, StatusBar, ImageBackground, Image, Text, SafeAreaView, ScrollView, TouchableOpacity
} from "react-native";
import {Toolbar} from "react-native-material-ui";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";

export default class MyProfileInfo extends Component{
    constructor(props) {
        super();
    }

    render(){
        return(
            <View style={styles.container}>
                <StatusBar
                    animated={true}
                    backgroundColor="#334A6D"/>
                <Toolbar style={{ container: { backgroundColor: '#93B4E5' } }}
                         leftElement="arrow-back"
                         centerElement="My profile"/>
                <ImageBackground source={require('../../assets/images/backgroundLeaderboardLightMode.png')}
                                 style={styles.imageBackground}/>
                <Image source={require('../../assets/images/rodjoImage.png')}
                       style={styles.userImage}/>
                <Text style={styles.username}>@arnel_maric</Text>
                <SafeAreaView>
                    <ScrollView vertical={true}
                                style={{marginTop:0}}>
                        <TouchableOpacity style={styles.items}>
                            <View style={styles.itemRow}>
                                <FontAwesome5 name={'signature'}
                                              size={20}
                                              color={'#616C75'}
                                              style={styles.icon}/>
                                <Text style={styles.menuItem}>username</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.items}>
                            <View style={styles.itemRow}>
                                <FontAwesome5 name={'user-circle'}
                                              size={20}
                                              color={'#616C75'}
                                              style={styles.icon}/>
                                <Text style={styles.menuItem}>first name</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.items}>
                            <View style={styles.itemRow}>
                                <FontAwesome5 name={'user-circle'}
                                              size={20}
                                              color={'#616C75'}
                                              style={styles.icon}/>
                                <Text style={styles.menuItem}>last name</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.items}>
                            <View style={styles.itemRow}>
                                <FontAwesome5 name={'envelope'}
                                              size={20}
                                              color={'#616C75'}
                                              style={styles.icon}/>
                                <Text style={styles.menuItem}>e-mail adress</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.items}>
                            <View style={styles.itemRow}>
                                <FontAwesome5 name={'map-marker-alt'}
                                              size={20}
                                              color={'#616C75'}/>
                                <Text style={styles.menuItem}>office location</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.items}>
                            <View style={styles.itemRow}>
                                <FontAwesome5 name={'briefcase'}
                                              size={20}
                                              color={'#616C75'}/>
                                <Text style={styles.menuItem}>work position</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.bottomTabBar}>
                            <View style={styles.itemRow}>
                                <FontAwesome5 name={'lock'}
                                              size={20}
                                              color={'#3B495E'}/>
                                <Text style={styles.menuItem}>Change password</Text>
                            </View>

                        </TouchableOpacity>
                    </ScrollView>
                </SafeAreaView>

            </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
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
