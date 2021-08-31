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
    StyleSheet
} from "react-native";

import Button from 'react-native-button';

function ActivityCard(){
    return(
        <Card style={styles.card}>
            <CardTitle>
                <Text style={styles.title}>Card Title</Text>
            </CardTitle>
            <CardContent>
                <Text>Content</Text>
            </CardContent>
            <CardAction >
                <Button
                    style={styles.button}
                    >
                    Button 1
                </Button>

            </CardAction>
        </Card>
    )
}

export default ActivityCard;

const styles = StyleSheet.create({
    title: {
        fontSize: 38,
        backgroundColor: 'transparent'
    },
    button: {
        marginRight: 10
    },
    card:{
        borderRadius:25
    }
});
