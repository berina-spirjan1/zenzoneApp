import React, {Component} from "react";
import {View, Text, Image} from "react-native";
import {ImageBackground, ScrollView} from "react-native-web";
import {LinearGradient} from "expo-linear-gradient";


export default class SideBar extends Component{
    constructor(props) {
        super();
    }

    render(){
        return(
            <ScrollView>
                <LinearGradient colors={["#6594DA", "#334A6D"]}>
                    <Image
                        source={require("../components/MenuIcon")} style={styles.menuIcon}/>
                    <Text style={styles.subtitle}>The real meditation is how you live your life.</Text>
                </LinearGradient>
            </ScrollView>
        )
    }
}

const stylesLightMode=StyleSheet.create({
    container:{
        flex:1
    },
    menuIcon:{
       width:80,
       height:80,
       borderRadius:40
    },
    subtitle:{
        fontWeight: 'bold',
        fontSize: 16,
        color:"#6391D6"
    }
})
