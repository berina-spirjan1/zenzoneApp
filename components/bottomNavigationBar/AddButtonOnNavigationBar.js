import React, {Component} from "react";
import {
    View,
    StyleSheet,
    TouchableHighlight,
    Animated
} from "react-native";
import {
    FontAwesome5,
    Feather
} from "@expo/vector-icons";

export default class AddButtonOnNavigationBar extends Component{
    buttonSize= new Animated.Value(1)
    mode = new Animated.Value(0)


    handlePress = () =>{
        Animated.sequence([
            Animated.timing(this.buttonSize, {
                toValue: 0.95,
                 duration: 200
            }),
            Animated.timing(this.buttonSize, {
                toValue: 1
            }),
            Animated.timing(this.mode, {
                toValue: this.mode._value === 0 ? 1 : 0
            })
        ]).start();
    }

    render(){
        const sizeStyle = {
            transform: [{ scale: this.buttonSize }]
        };

        const rotation = this.mode.interpolate({
            inputRange: [0, 1],
            outputRange: ["0deg", "45deg"]
        });

        const activityX = this.mode.interpolate({
            inputRange: [0, 1],
            outputRange: [-24, -100]
        });

        const activityY = this.mode.interpolate({
            inputRange: [0, 1],
            outputRange: [-50, -100]
        });

        const registerX = this.mode.interpolate({
            inputRange: [0, 1],
            outputRange: [-24, -24]
        });

        const registerY = this.mode.interpolate({
            inputRange: [0, 1],
            outputRange: [-50, -150]
        });

        const forgotPasswordX = this.mode.interpolate({
            inputRange: [0, 1],
            outputRange: [-24, 50]
        });

        const forgotPasswordY = this.mode.interpolate({
            inputRange: [0, 1],
            outputRange: [-50, -100]
        });


        return(
            <View style={styles.container}>
                <Animated.View style={{ position: 'absolute', left: activityX, top: activityY}}>
                    <View style={styles.secondaryButton}>
                        <Feather name="feather" size={25} color={"#FFFFFF"}/>
                    </View>
                </Animated.View>
                <Animated.View style={{ position: 'absolute', left: registerX, top: registerY}}>
                    <View style={styles.secondaryButton}>
                        <Feather name="user" size={25} color={"#FFFFFF"}/>
                    </View>
                </Animated.View>
                <Animated.View style={{ position: 'absolute', left: forgotPasswordX, top: forgotPasswordY}}>
                    <View style={styles.secondaryButton}>
                        <Feather name="key" size={25} color={"#FFFFFF"}/>
                    </View>
                </Animated.View>
                <Animated.View style={[styles.button, sizeStyle]}>
                    <TouchableHighlight underlayColor={"#93B4E5"}
                                        onPress={this.handlePress}>
                        <Animated.View style={{ transform: [{ rotate: rotation }] }}>
                            <FontAwesome5 name="plus" size={25} color={"#000000"}/>
                        </Animated.View>
                    </TouchableHighlight>
                </Animated.View>
            </View>
        )
    }
}


const styles= StyleSheet.create({
    container:{
        position: 'absolute',
        alignItems: 'center'
    },
    button:{
        backgroundColor: "#93B4E5",
        alignItems: 'center',
        justifyContent: 'center',
        width: 72,
        height: 72,
        borderRadius: 35,
        position: 'absolute',
        top: -60,
        shadowColor: "#93B4E5",
        shadowOffset: { height: 10 },
        shadowOpacity: 0.3,
        borderWidth: 3,
        borderColor: "#93B4E5"
    },
    secondaryButton:{
        position: 'absolute',
        alignItems: 'center',
        justifyContent: 'center',
        width: 48,
        height: 48,
        borderRadius: 24,
        backgroundColor: '#93B4E5'
    }
})
