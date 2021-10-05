import React from 'react';
import {
    Image,
    StyleSheet,
    View
} from "react-native";

//design for followers card that are just mockups
function FollowerCard(){
    return(
            <View style={styles.icon}>
                <Image source={require('../../../assets/images/bosnianFlag.png')}
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
        borderRadius: 25,
        shadowColor: "#000000",
        shadowOffset: {
            width: 0,
            height: 8,
        },
        shadowOpacity: 0.44,
        shadowRadius: 10.84,
        elevation: 16
    }
});
