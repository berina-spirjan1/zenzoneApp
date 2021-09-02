import React, {Component} from "react"
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    Alert
} from "react-native";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";


export default class DoDailyChallenge extends Component{
    constructor(props) {
        super();
    }
    render() {
        return(
            <View style={styles.container}>
                <TouchableOpacity style={styles.buttonContainer}
                                  //todo add function for upload image
                                  onPress={() => Alert.alert('Upload image')}>
                    <FontAwesome5 name={'camera'}
                                  size={45}
                                  color={'#000'}
                                  style={styles.icon}/>
                    <Text style={styles.uploadImageText}>Upload image</Text>
                </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        fontFamily: 'Roboto_400Regular'
    },
    buttonContainer:{
        backgroundColor: '#6285B3',
        width: 300,
        height: 200,
        padding:50,
        borderRadius:20,
        marginTop:30,
        marginLeft: 20
    },
    uploadImageText:{
        textTransform: 'uppercase',
        textAlign:'center',
        justifyContent: 'center',
        fontWeight: 'bold',
        marginTop:5
    },
    icon:{
        justifyContent: 'center',
        marginLeft: 75,
        marginTop:20
    }
})
