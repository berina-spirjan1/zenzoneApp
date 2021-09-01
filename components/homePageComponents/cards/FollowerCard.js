import React from 'react';
import {
    Text,
    View,
    StyleSheet,
    Image
} from "react-native";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import {Card, CardAction, CardContent} from "react-native-card-view";

function FollowerCard(){
    return(
            <View style={styles.icon}>
                <Image source={require('../../../assets/images/bosnian_flag.png')}
                        style={styles.image}/>
            </View>
    )
}

export default FollowerCard;


const styles = StyleSheet.create({
    image:{
        width: 100,
        height:100,
        marginTop:0,
        borderRadius: 25
    }
});
