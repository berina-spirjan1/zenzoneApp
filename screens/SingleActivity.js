import React, {Component} from "react";
import {
    View,
    Text,
    StyleSheet,
    Image
} from "react-native";

export default class SingleActivity extends Component{
    constructor(props) {
        super();
    }

    render() {
        return(
            <View style={styles.container}>
                <Image source={require('../assets/images/taj_mahal.jpg')}
                       style={styles.image}/>
            </View>
        )
    }
}


const styles = StyleSheet.create({
    container:{
        backgroundColor: '#93B4E5',
        flex: 1
    },
    image:{

    }
})
