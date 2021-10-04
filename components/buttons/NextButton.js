import React from "react";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import {StyleSheet, TouchableOpacity} from "react-native";


function NextButton({onPress}){
    return(
        <TouchableOpacity style={styles.nextButton}
                          onPress={onPress}>
            <FontAwesome5 name={'chevron-right'}
                          size={15}
                          color={'#000000'}
                          style={styles.icon}/>
        </TouchableOpacity>
    )
}

export default NextButton;

const styles = StyleSheet.create({
    nextButton:{
        height: 40,
        width: 40,
        backgroundColor: '#FFFDFD',
        borderRadius: 10,
        marginLeft:55,
        marginTop:30
    },
    icon:{
        justifyContent: 'center',
        textAlign: 'center',
        marginTop:15
    }
})
