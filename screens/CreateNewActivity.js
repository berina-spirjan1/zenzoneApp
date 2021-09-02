import React, {Component} from "react";
import {
    View,
    Text,
    ScrollView,
    StyleSheet,
    SafeAreaView
} from "react-native";
import CategoryCard from "../components/homePageComponents/cards/CategoryCard";


export default class CreateNewActivity extends Component{
    constructor(props) {
        super();
    }
    render() {
        return(
            <View style={styles.container}>
                <Text style={styles.chooseCategory}>choose category</Text>
                    <SafeAreaView>
                        <ScrollView horizontal
                                    showsHorizontalScrollIndicator={false}>
                            <View style={styles.categoryCard}>
                                <CategoryCard/>
                            </View>
                            <View style={styles.categoryCard}>
                                <CategoryCard/>
                            </View>
                            <View style={styles.categoryCard}>
                                <CategoryCard/>
                            </View>
                        </ScrollView>
                    </SafeAreaView>

            </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        fontFamily: 'Roboto_400Regular',
        backgroundColor: '#CBDBF2'
    },
    chooseCategory:{
        fontWeight: 'bold',
        fontSize: 17,
        color: '#000000',
        marginLeft: 20
    },
    categoryCard:{

    }
})
