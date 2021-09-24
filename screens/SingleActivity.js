import React, {Component} from "react";
import {
    View,
    StyleSheet,
    StatusBar, AsyncStorage
} from "react-native";
import {Toolbar} from "react-native-material-ui";
import {USER} from "../configuration/config";
import {isIphoneX} from "react-native-iphone-x-helper";
import {renderIf} from "../utilities/CommonMethods";

export default class SingleActivity extends Component{
    constructor(props) {
        super();
    }

    render() {
        return(
            <View style={styles.container}>
                <StatusBar
                    animated={true}
                    backgroundColor="#6285B3"/>
                {renderIf(isIphoneX(), <Toolbar style={{ container: { backgroundColor: '#93B4E5', marginTop: 50 } }}
                                                leftElement="arrow-back"
                                                centerElement="Activity title"/>)}
                {renderIf(!isIphoneX(), <Toolbar style={{ container: { backgroundColor: '#93B4E5' } }}
                                                        leftElement="arrow-back"
                                                        centerElement="Activity title"/> )}
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
