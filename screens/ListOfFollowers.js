import React, {Component} from "react";
import {Dimensions, SafeAreaView, ScrollView, StatusBar, StyleSheet, View} from "react-native";
import YourFamilyLightModeIcon from "../assets/icons/YourFamilyLightModeIcon";
import FamilyCard from "../components/followerComponents/cards/FamilyCard";
import {Toolbar} from "react-native-material-ui";
import {renderIf} from "../utilities/CommonMethods";
import {isIphoneX} from "react-native-iphone-x-helper";

export default class ListOfFollowers extends Component{
    constructor(props) {
        super();
    }

    render() {

        const screenHeight = Dimensions.get('window').height

        return(
            <>
                <StatusBar animated={ true }
                           backgroundColor="#ABC4E9"/>
                {renderIf(isIphoneX(),  <Toolbar style={{ container: { backgroundColor: '#93b4e5', marginTop: 50 } }}
                                                 centerElement="YOUR FAMILY"/>)}
                {renderIf(!isIphoneX(), <Toolbar style={{ container: { backgroundColor: '#93b4e5' } }}
                                                 centerElement="YOUR FAMILY"/>)}
                <View style={styles.container}>
                    <SafeAreaView style={styles.safeArea}
                                  style={{height: screenHeight}}>
                        <ScrollView vertical={true}
                                    style={styles.scrollView}>
                            <View style={styles.familyCard}>
                                <FamilyCard/>
                            </View>
                            <View style={styles.familyCard}>
                                <FamilyCard/>
                            </View>
                            <View style={styles.familyCard}>
                                <FamilyCard/>
                            </View>
                            <View style={styles.familyCard}>
                                <FamilyCard/>
                            </View>
                            <View style={styles.familyCard}>
                                <FamilyCard/>
                            </View>
                            <View style={styles.familyCard}>
                                <FamilyCard/>
                            </View>
                            <View style={styles.familyCard}>
                                <FamilyCard/>
                            </View>
                            <View style={styles.familyCard}>
                                <FamilyCard/>
                            </View>
                            <View style={styles.familyCard}>
                                <FamilyCard/>
                            </View>
                            <View style={styles.familyCard}>
                                <FamilyCard/>
                            </View>
                            <YourFamilyLightModeIcon style={styles.icon}/>
                        </ScrollView>
                    </SafeAreaView>
                </View>
            </>

        )
    }
}

const styles = StyleSheet.create({
    container:{
        backgroundColor: '#CBDBF2',
        flex: 1
    },
    familyCard:{

    },
    scrollView:{
        flex: 1,
        paddingTop: StatusBar.currentHeight,
        paddingVertical: 20,
    },

    icon:{
        marginTop: 20,
        marginLeft: 25,
        marginRight:20,
        marginBottom: 150
    }
})
