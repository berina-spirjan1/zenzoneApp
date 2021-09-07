import React, {Component} from "react";
import {
    TouchableOpacity,
    StyleSheet,
    Image,
    Text
} from "react-native";

export default class LeaderboardSingleListCard extends Component{
    constructor(props) {
        super()
    }

    render() {
        return(
            <TouchableOpacity style={styles.container}>
                <Image source={require('../../assets/images/rodjoImage.png')}
                       style={styles.userImage}/>
                <Text style={styles.username}>@rodjo_nesto</Text>
                <Text style={styles.badgesCounter}>16</Text>
            </TouchableOpacity>
        )
    }

}

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
    username:{
        fontSize:14,
        marginLeft: 30,
        textAlign: 'center',
        justifyContent: 'center',
        marginTop: 25,
        fontWeight: 'bold'
    },
    badgesCounter:{
        fontWeight: 'bold',
        marginTop: 25,
        left:60,
        marginLeft:10
    }
})
