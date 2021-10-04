import React from "react";
import {StyleSheet, View} from "react-native";
import BadgeShape from "../../../assets/icons/BadgeShape";

function BadgeCard(){
    return(
        <View style={styles.container}>
            <BadgeShape/>
        </View>
    )
}

export default BadgeCard;

const styles = StyleSheet.create({
    container:{

    }
})
