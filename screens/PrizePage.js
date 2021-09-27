import React from "react";
import {
    View,
    StyleSheet,
    Text, StatusBar
} from "react-native";
import {Toolbar} from "react-native-material-ui";
import LottieView from "lottie-react-native";
import {renderIf} from "../utilities/CommonMethods";
import {isIphoneX} from "react-native-iphone-x-helper";



function PrizePage(){
    return(
        <View style={styles.container}>
            <StatusBar
                animated={true}
                backgroundColor="#6285B3"/>
            {renderIf(isIphoneX(), <Toolbar style={{ container: { backgroundColor: '#93B4E5', marginTop: 50 } }}
                                            centerElement="Surprise"/>)}
            {renderIf(!isIphoneX(), <Toolbar style={{ container: { backgroundColor: '#93B4E5' } }}
                                             centerElement="Surprise"/>)}

            <LottieView
                style={styles.lottie}
                source={require("../assets/images/wonPrize.json")}
                autoPlay={true}
                loop={true}/>
            <Text style={styles.title}>Congrats!</Text>
            <Text style={styles.information}>You won a prize. To get it, contact your HR manager and the information about the award itself is a surprise.</Text>
        </View>
    )
}

export default PrizePage;

const styles = StyleSheet.create({
    container:{
        backgroundColor: '#CBDBF2',
        flex: 1
    },
    title:{
        fontSize: 40,
        textTransform: 'uppercase',
        fontWeight: 'bold',
        marginTop: 350,
        textAlign: 'center'
    },
    lottie:{
        flex:1,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: -80
    },
    information:{
        marginTop: 20,
        padding: 20,
        fontSize: 20
    }
})
