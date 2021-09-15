import React, {Component} from "react";
import {
    View,
    StyleSheet
} from "react-native";
import LottieView from 'lottie-react-native';


export default class Congratulations extends Component{


    render() {
        return(
            <View style={styles.container}>
                <LottieView
                    style={styles.lottie}
                    source={require("../assets/images/congratulationsStar.json")}
                    autoPlay={true}
                    loop={true}/>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        backgroundColor: '#93B4E5',
        flex: 1
    }
})
