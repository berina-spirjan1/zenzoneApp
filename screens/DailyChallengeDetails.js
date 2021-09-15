import React, {Component} from "react";
import {
    Dimensions,
    Image,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    View,
    TouchableOpacity
} from "react-native";
import {SafeAreaView} from "react-navigation";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import {Actions} from "react-native-router-flux";

export default class DailyChallengeDetails extends Component{
    constructor(props) {
        super(props);
    }

    doDaily(){
        Actions.doDaily()
    }

    /*componentDidMount = () => {
        fetch('https://neki_api.json',{
            method: 'GET'
        })
            .then((response) => response.json())
            .then((responseJson) => {
                console.log(responseJson);

                this.setState({
                    data: responseJson
                })
            })
            .catch((error) => {
                console.error(error);
            });
    }*/

    render(){

        const screenHeight = Dimensions.get('window').height

        return (
            <View style={stylesLightMode.container}>
                <Image style={stylesLightMode.image}
                       source={require('../assets/images/img_1.png')}/>
                <Text style={stylesLightMode.title}>daily challenge</Text>

                <SafeAreaView style={stylesLightMode.safeArea}
                              style={{height: screenHeight}}>
                    <ScrollView vertical
                                style={stylesLightMode.scrollView}>
                        {/*<Text style={stylesLightMode.text}>{this.state.data}</Text>*/}
                        <Text style={stylesLightMode.text}>
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
                            semper ultricies.
                        </Text>
                        <TouchableOpacity style={stylesLightMode.button}
                                          onPress={this.doDaily}>
                            <FontAwesome5 name={'check'}
                                          size={20}
                                          color={'#000000'}
                                          style={stylesLightMode.buttonIcon}/>
                        </TouchableOpacity>
                    </ScrollView>
                </SafeAreaView>
            </View>
        )
    }
}


const stylesLightMode = StyleSheet.create({
    container:{
        backgroundColor: "#CBDBF2",
        fontWeight: "bold"
    },
    title:{
        fontSize:27,
        textTransform: "uppercase",
        textAlign: "center",
        justifyContent: "center",
        marginTop:20,
        marginBottom:20
    },
    image:{
        width:360,
        height:340
    },
    safeArea:{
        flex: 1,
        paddingTop: StatusBar.currentHeight,
        paddingVertical: 20
    },
    text:{
        fontSize:20,
        shadowColor: '#727272',
        elevation: 5,
        shadowOffset: {width: 20, height: 2},
        shadowOpacity: 1,
        shadowRadius: 10,
        textAlign:"justify",
        padding: 10
    },
    button:{
        backgroundColor: "#384674",
        height: 50,
        width: 50,
        borderRadius: 60,
        padding: 15,
        marginLeft: 270,
        marginBottom: 100
    },
    scrollView:{
        alignSelf: 'stretch',
        marginTop: 0,
        marginBottom:420,
        padding:10
    },
    buttonIcon:{
        textAlign: 'center',
        justifyContent: 'center'
    }
})
