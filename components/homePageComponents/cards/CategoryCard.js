import React, {Component} from "react";
import {
    Card,
    CardContent,
    CardAction
} from 'react-native-card-view';

import {
    Text,
    StyleSheet,
    View, AsyncStorage
} from "react-native";

import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import {CATEGORY} from "../../../configuration/config";

export default class CategoryCard extends Component{
    state={
        data: ''
    }

    // componentDidMount = () => {
    //
    //     fetch(`${CATEGORY}`, {
    //         method: 'GET',
    //         headers: {
    //             "Content-Type": "application/json",
    //             "Accept": "application/json"
    //         }
    //     })
    //         .then((response) => response.json())
    //         .then((responseJson) => {
    //             // console.log(responseJson);
    //             this.setState({
    //                 data: responseJson
    //             })
    //             console.log(this.state.data.data)
    //         })
    //         .catch((error) => {
    //             console.error(error);
    //         });
    // }

    render() {
        return(
            <Card  styles={{ card: { backgroundColor: '#79BCE1',
                    borderRadius:30,
                    shadowColor: "#000000",
                    shadowOffset: {
                        width: 0,
                        height: 2,
                    },
                    shadowOpacity: 0.44,
                    shadowRadius: 3,
                    elevation: 5
                }}}>

                <View style={styles.icon}>
                    <FontAwesome5 name={'running'}
                                  size={35}
                                  color={'#000'}/>
                </View>

                <CardContent>
                    <Text style={styles.categoryName}>{this.state.data.title}</Text>
                </CardContent>
                <CardAction >

                </CardAction>
            </Card>
        )
    }


}

const styles = StyleSheet.create({
    button: {
        marginRight: 10
    },
    categoryName:{
        textTransform: 'uppercase',
        fontWeight: 'bold',
        color: '#000000',
        paddingBottom:10
    },
    icon:{
        justifyContent:'center',
        marginTop:20
    }
});
