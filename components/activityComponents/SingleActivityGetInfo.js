import React from "react";
import {Dimensions, Image, SafeAreaView, ScrollView, StatusBar, StyleSheet, Text, View} from "react-native";
import {Toolbar} from "react-native-material-ui";
import {ACTIVITY_PUBLIC} from "../../configuration/config";


export const SingleActivityGetInfo = () =>{
    const screenHeight = Dimensions.get('window').height

    // const getSingleActivityInfo = () =>{
    //     fetch(`${ACTIVITY_PUBLIC}`, {
    //         method: 'GET',
    //         headers: {
    //             "Content-Type": "application/json",
    //             "Accept": "application/json",
    //         },
    //     })
    //         .then((response) => response.json())
    //         //If response is in json then in success
    //         .then((responseJson) => {
    //             //Success
    //             alert(JSON.stringify(responseJson));
    //             console.log(responseJson);
    //         })
    //         //If response is not in json then in error
    //         .catch((error) => {
    //             //Error
    //             alert(JSON.stringify(error));
    //             console.error(error);
    //         });
    // }


    return(
        <View style={styles.container}>
            <SafeAreaView style={styles.safeArea}
                          style={{height: screenHeight}}>
                <ScrollView vertical={true}
                            style={styles.scrollView}>
                    <Image source={require('../assets/images/taj_mahal.jpg')}
                           style={styles.image}/>
                    <Text style={styles.activityTitle}>Activity title</Text>
                    <Text style={styles.description}> Lorem ipsum dolor sit amet,
                        consectetur adipiscing elit.
                        Vestibulum iaculis tortor odio, a
                        rutrum tortor faucibus cursus.
                        Nulla fringilla congue magna vitae
                        fermentum. Quisque eleifend arcu
                        non cursus laoreet. Duis efficitur
                        mattis eros convallis placerat.
                        Maecenas lorem dui, gravida at
                        odio eget, semper molestie leo.
                        Pellentesque rhoncus facilisis mi
                        semper ultricies.
                        Lorem ipsum dolor sit amet,
                        consectetur adipiscing elit.
                        Vestibulum iaculis tortor odio, a
                        rutrum tortor faucibus cursus.
                        Nulla fringilla congue magna vitae
                        fermentum. Quisque eleifend arcu
                        non cursus laoreet. Duis efficitur
                        mattis eros convallis placerat.
                        Maecenas lorem dui, gravida at
                        odio eget, semper molestie leo.
                        Pellentesque rhoncus facilisis mi
                        semper ultricies.</Text>
                    <View style={{marginBottom: 100}}/>
                </ScrollView>
            </SafeAreaView>
        </View>
    )
}



const styles = StyleSheet.create({
    container:{
        backgroundColor: '#93B4E5',
        flex: 1
    },
    image:{
        height: 500,
        width: 360,
        marginTop:60
    },
    safeArea:{
        flex:1,
        paddingTop: StatusBar.currentHeight,
        paddingVertical: 20
    },
    scrollView:{
        alignSelf: 'stretch',
        marginTop: -60,
        marginBottom: 50
    },
    activityTitle:{
        fontSize: 20,
        textTransform: 'uppercase',
        fontFamily: 'Roboto_700Bold_Italic',
        textAlign: 'center',
        padding:20
    },
    description:{
        padding:20,
        fontSize:16
    }
})
