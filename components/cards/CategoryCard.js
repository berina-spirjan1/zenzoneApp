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

function CategoryCard(){
    return(
        <Card style={styles.card}
              style = {{borderRadius: 100}}>

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

export default CategoryCard;

const styles = StyleSheet.create({
    button: {
        marginRight: 10
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
