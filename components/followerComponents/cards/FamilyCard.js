import React from "react";
import {Image, StyleSheet, Text, TouchableOpacity} from "react-native";


function FamilyCard(){
    return(
        <TouchableOpacity style={styles.container}>
            <Image source={require('../../../assets/images/rodjoImage.png')}
                   style={styles.userImage}/>
            <Text style={styles.username}>@rodjo_nesto</Text>
        </TouchableOpacity>
    )
}

export default FamilyCard;


const styles = StyleSheet.create({
    container:{
        backgroundColor: '#93b4e5',
        borderRadius: 40,
        marginLeft: 20,
        marginRight: 20,
        height: 90,
        flexDirection: 'row',
        padding: 10,
        marginTop:10
    },
    userImage:{
        borderRadius: 70,
        height: 70,
        width: 70
    },
    username: {
        fontSize: 14,
        marginLeft: 30,
        textAlign: 'center',
        justifyContent: 'center',
        marginTop: 25,
        fontWeight: 'bold'
    }
})
