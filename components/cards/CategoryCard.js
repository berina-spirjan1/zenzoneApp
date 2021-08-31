import React from "react";
import {
    Card,
    CardImage,
    CardTitle,
    CardContent,
    CardAction
} from 'react-native-card-view';

import {
    Text,
    StyleSheet,
    View
} from "react-native";

import FontAwesome5 from "react-native-vector-icons/FontAwesome5";

function ActivityCard(){
    return(
        <Card style={styles.card}>

            <View style={styles.icon}>
                <FontAwesome5 name={'running'}
                              size={35}
                              color={'#000'}/>
            </View>

            <CardContent>
                <Text style={styles.categoryName}>Sport</Text>
            </CardContent>
            <CardAction >

            </CardAction>
        </Card>
    )
}

export default ActivityCard;

const styles = StyleSheet.create({
    button: {
        marginRight: 10
    },
    card:{
        borderRadius:25,
        height:100
    },
    categoryName:{
        textTransform: 'uppercase',
        fontWeight: 'bold',
        color: '#000000'
    },
    icon:{
        justifyContent:'center',
        marginTop:20
    }
});
