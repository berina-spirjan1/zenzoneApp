import React from "react";
import {Card, CardAction} from "react-native-card-view";
import {
    Alert,
    Image,
    Text,
    TouchableOpacity,
    View,
    StyleSheet
} from "react-native";


function MyActivityCard(){
    return(
        <Card style={styles.card}
              styles={{ card: { backgroundColor: '#93B4E5',
                      borderRadius:30,
                      shadowColor: "#000000",
                      shadowOffset: {
                          width: 0,
                          height: 8,
                      },
                      shadowOpacity: 0.44,
                      shadowRadius: 10.84,
                      elevation: 16 }}}>
            <View style={styles.activityParagraph}>
                <Image source={require('../../../assets/images/GothenburgNight.png')}
                       style={styles.activitySmallImage}/>
                <Text style={styles.activityTitle}
                      numberOfLines={2}>Šetnja do Starog mosta</Text>
                <Text>{"\n"}</Text>
            </View>
            <CardAction >
                <TouchableOpacity style={styles.button}
                                  onPress={() => Alert.alert('Single activity screen needs to open')}>
                    <Text style={styles.buttonText}>Show more</Text>
                </TouchableOpacity>

            </CardAction>
        </Card>

    )
}

export default MyActivityCard;

const styles = StyleSheet.create({
    activityParagraph:{
        flexDirection: 'row',
        padding: 10
    },
    activitySmallImage:{
        height: 100,
        width: 100,
        borderRadius: 11,
        marginLeft: 20,
        marginTop: 10
    },
    activityTitle:{
        fontSize: 18,
        fontFamily: 'Roboto_400Regular',
        marginTop: 20,
        marginLeft: 10,
        marginRight: 10,
        paddingRight: 10
    },
    button:{
        backgroundColor: '#6285B3',
        borderRadius: 12,
        height: 30,
        width: 90,
        marginTop: -70,
        marginLeft: 20,
        padding: 7
    },
    buttonText:{
        fontFamily: 'Roboto_500Medium',
        fontSize: 12,
        textAlign: 'center',
        textTransform: 'uppercase'
    }
})
