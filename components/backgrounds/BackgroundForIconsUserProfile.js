import React from "react";
import {
    StyleSheet,
    View
} from "react-native";


function BackgroundForIconsUserProfile(){
    return(
        <View style={styles.container}/>
    )
}

export default BackgroundForIconsUserProfile;

const styles = StyleSheet.create({
    container:{
        borderRadius: 40,
        width: 40,
        height: 40,
        backgroundColor: '#006a98',
        opacity: 0.5,
        marginLeft:20,
        marginTop: 20,
        zIndex:0
    }
})
