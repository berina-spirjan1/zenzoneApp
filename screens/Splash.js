import React, {Component} from 'react';
import {AsyncStorage, View} from "react-native";
import LottieView from 'lottie-react-native';
import ZenZoneTitle from "../assets/icons/ZenZoneTitle";
import {Actions} from "react-native-router-flux";
import {renderIf} from "../utilities/CommonMethods";
import {getTheme} from "../utilities/GetTheme";

const duration = 3 * 1000;
export default class Splash extends Component{

    componentDidMount() {
        setTimeout(() => this.toBottomNavigationBar(), duration)
    }

    toBottomNavigationBar(){
        Actions.toBottomNavigationBar()
    }

    render() {

        return(
            <>
                    <View style={styles.container}>
                        {console.log("OVO JE UHVACENA TEMA",getTheme())}
                        <LottieView
                            style={styles.lottie}
                            source={require("../assets/images/men.json")}
                            autoPlay={true}
                            loop={true}/>
                        <ZenZoneTitle style={styles.title}/>
                    </View>
            </>

        )
    }
}

const styles={
    container:{
        backgroundColor: '#CBDBF2',
        flex: 1
    },
    lottie:{
        flex:1,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: -50
    },
    title: {
        marginTop: 500,
        marginLeft: 50
    }
}

