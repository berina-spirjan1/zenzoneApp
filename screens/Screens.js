import React, {Component} from "react";
import {View, SafeAreaView,TouchableOpacity, Text} from "react-native";

export default class Screens extends Component{
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <View>
                <SafeAreaView style={{flex:1}}>
                    <TouchableOpacity
                        style={{alignItems: "flex-end", margin:16}}
                        onPress={this.props.navigation.openDrawer}>
                        <View
                            style={{flex:1, alignItems: "center", justifyContent: "center"}}>
                            <Text style={styles.text}>{this.props.name}</Text>
                        </View>
                    </TouchableOpacity>
                </SafeAreaView>
            </View>
        )
    }
}

const styles=StyleSheet.create({
    text:{
        color:"#616C75",
        fontSize: 15
    }
})

