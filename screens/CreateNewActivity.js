import React, {Component} from "react";
import {AsyncStorage, StatusBar, StyleSheet, View} from "react-native";

import {Toolbar} from "react-native-material-ui";
import {CreateNewActivityForm} from "../components/createNewActivityComponents/CreateNewActivityForm";
import {renderIf} from "../utilities/CommonMethods";
import {isIphoneX} from "react-native-iphone-x-helper";
import WaitingToPostActivity from "./WaitingToPostActivity";

export default class CreateNewActivity extends Component{
    constructor(props) {
        super();
    }
    state = {
        token: null
    }

    //function that returns token that is given from async storage.
    async componentDidMount() {
        let tokenHelper = await AsyncStorage.getItem('jwt')
        tokenHelper = JSON.parse(tokenHelper)

        this.setState({token: tokenHelper})
    }


    render() {
        return(
            <>
                {renderIf(this.state.token!==null,
                    <View style={styles.container}>
                        <StatusBar
                            animated={true}
                            backgroundColor="#6285B3"/>
                        {renderIf(isIphoneX(),<Toolbar style={{ container: { backgroundColor: '#93B4E5', marginTop: 50 } }}
                                                       centerElement="Activities"/> )}
                        {renderIf(!isIphoneX(), <Toolbar style={{ container: { backgroundColor: '#93B4E5' } }}
                                                         centerElement="Activities"/>)}
                        <CreateNewActivityForm/>

                    </View>
                )}
                {renderIf(this.state.token===null,
                    <WaitingToPostActivity/>
                )}
            </>

        )
    }
}

const styles = StyleSheet.create({
    container:{
        fontFamily: 'Roboto_400Regular',
        backgroundColor: '#CBDBF2',
        flex:1
    }
})
