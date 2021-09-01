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
    Image,
    View
} from "react-native";

import Button from 'react-native-button';

function ActivityCard(){
    return(
            <Card style={styles.card}>
                <View style={styles.header}>
                    <Image source={require("../../../assets/images/icon.png")}
                           style={styles.profilePicture}/>

                    <Text style={styles.username}>lejla_1234</Text>
                    <Text style={styles.activityTitle}>Taj Mahal</Text>
                </View>

                <CardContent>
                    <Text>Content</Text>
                </CardContent>
                <CardAction >
                    <Button style={styles.button}>Button 1</Button>

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
    header:{
      marginTop:17,
        flexDirection: 'row'
    },
    profilePicture:{
        width: 70,
        height: 70,
        borderRadius:25
    },
    username:{
        marginLeft:30,
        fontWeight: 'bold'
    },
    activityTitle:{

    }
});
