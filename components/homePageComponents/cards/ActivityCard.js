import React from "react";
import {
    Card,
    CardAction
} from 'react-native-card-view';

import {
    Text,
    StyleSheet,
    Image,
    View,
    TouchableOpacity,
    Alert
} from "react-native";

import FontAwesome5 from "react-native-vector-icons/FontAwesome5";

function ActivityCard(){
    return(
            <Card style={styles.card}
                  styles={{ card: { backgroundColor: '#93B4E5',
                                    borderRadius:30,
                                    shadowColor: "#000000",
                                    shadowOffset: {
                                          width: 0,
                                          height: 8,
                                      },
                                    shadowOpacity: 0.44,
                                    shadowRadius: 10.84,
                                    elevation: 16 }}}>
                <View style={styles.header}>
                    <Image source={require("../../../assets/images/icon.png")}
                           style={styles.profilePicture}/>
                    <Text style={styles.username}>lejla_1234</Text>
                    <Text style={styles.activityTitle}>Taj Mahal</Text>
                </View>
                <View>
                    <Image source={require('../../../assets/images/taj_mahal.jpg')}
                           style={styles.activityImage}/>
                </View>
                <View style={{flexDirection: 'row'}}>
                    <TouchableOpacity onPress={() => Alert.alert('Like')}>
                        <View style={styles.greenCircle}>
                            <Image source={require('../../../assets/images/rodjoImage.png')}
                                   style={styles.like}/>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={ () => Alert.alert('Dislike')}>
                        <View style={styles.redCircle}>
                            <Image source={require('../../../assets/images/rodjoImage.png')}
                                   style={styles.dislike}/>
                        </View>
                    </TouchableOpacity>
                    <FontAwesome5 name={'comment'}
                                  size={29}
                                  color={'#000000'}
                                  style={styles.commentIcon}/>
                </View>
                <Text style={styles.activityText}
                      numberOfLines={4}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris metus erat, auctor eu molestie sed, tristique id est.
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris metus erat, auctor eu molestie sed, tristique id est.
                </Text>

                <CardAction >
                    <TouchableOpacity style={styles.button}
                                      onPress={() => Alert.alert('Single activity screen needs to open')}>
                        <Text style={styles.buttonText}>Show more</Text>
                    </TouchableOpacity>

                </CardAction>
            </Card>

    )
}

export default ActivityCard;

const styles = StyleSheet.create({
    button: {
        marginRight: 10,
        backgroundColor: '#6285B3',
        borderRadius: 20,
        height:30,
        width:100,
        left:60
    },
    buttonText:{
        justifyContent: 'center',
        textAlign: 'center',
        fontWeight: 'bold',
        textTransform:'uppercase',
        padding:5,
        fontFamily:'Roboto_400Regular'
    },
    header:{
      marginTop:17,
        flexDirection: 'row'
    },
    profilePicture:{
        width: 70,
        height: 70,
        borderRadius:25
    },
    username:{
        marginLeft:30,
        fontWeight: 'bold'
    },
    activityTitle:{

    },
    activityImage:{
        marginTop:25,
        width: 223.5,
        height:223.06,
        borderRadius:59
    },
    like:{
        marginTop: 0,
        height:30,
        width:30,
        borderRadius:30,
        left:0,
        zIndex: 1
    },
    dislike:{
        height:30,
        width:30,
        borderRadius:30,
        marginTop:0,
        left:0
    },
    activityText:{
        marginLeft: 25,
        marginRight: 20,
        marginTop:10
    },
    commentIcon:{
        left:60
    },
    greenCircle:{
        backgroundColor: '#06FD37',
        height: 30,
        width:30,
        borderRadius:30,
        marginTop: 7,
        left:-65,
        zIndex: 2
    },
    redCircle:{
        backgroundColor: '#FD0628',
        height:30,
        width:30,
        borderRadius:30,
        marginTop:7,
        left:-60
    }
});
