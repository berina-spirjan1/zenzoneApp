import React, {Component} from "react";
import {
    View,
    Text,
    ScrollView,
    StyleSheet,
    SafeAreaView, StatusBar, TextInput
} from "react-native";
import CategoryCard from "../components/homePageComponents/cards/CategoryCard";
import {Toolbar} from "react-native-material-ui";


export default class CreateNewActivity extends Component{
    constructor(props) {
        super();
    }
    render() {
        return(
            <View style={styles.container}>
                <StatusBar
                    animated={true}
                    backgroundColor="#6285B3"/>
                <Toolbar style={{ container: { backgroundColor: '#93B4E5' } }}
                         // leftElement="arrow-back"
                         centerElement="Activities"
                         onRightElementPress={ (label) => { console.log(label) }}/>
                <SafeAreaView>
                             <ScrollView>
                                 <View style={{flexDirection: 'row'}}>
                                     <Text style={styles.chooseCategory}>choose category</Text>
                                     <Text style={styles.seeAll}
                                           onPress={(e) => this.onTextPress(e, 'See all')}>See all</Text>
                                 </View>
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
                                         <View style={styles.categoryCard}>
                                             <CategoryCard/>
                                         </View>
                                         <View style={styles.categoryCard}>
                                             <CategoryCard/>
                                         </View>
                                     </ScrollView>
                                 </SafeAreaView>
                                 <Text style={styles.title}>Title</Text>
                                 <TextInput numberOfLines={2}
                                            placeholder={'Activity title'}
                                            style={styles.titleInput}/>
                                 <View style={{flexDirection: 'row'}}>
                                     <Text style={styles.comment}>Comment</Text>
                                     <Text style={styles.counter}>1/1000</Text>
                                 </View>

                                 <TextInput numberOfLines={10}
                                            placeholder={'Enter description for activity'}
                                            style={styles.activityDescription}
                                            multiline={true}/>
                             </ScrollView>
                </SafeAreaView>

            </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        fontFamily: 'Roboto_400Regular',
        backgroundColor: '#CBDBF2',
        flex:1
    },
    chooseCategory:{
        fontWeight: 'bold',
        fontSize: 17,
        color: '#000000',
        marginLeft: 20,
        marginTop: 30,
        textTransform: 'uppercase'
    },
    categoryCard:{
        height: 115,
        width: 90,
        marginTop: 10,
        marginLeft: 17,
        borderRadius: 50
    },
    seeAll:{
        marginRight: 20,
        marginTop: 30,
        marginLeft: 120
    },
    title:{
        textTransform: 'uppercase',
        fontWeight: 'bold',
        fontSize: 17,
        marginLeft: 20,
        marginTop:30
    },
    titleInput:{
        backgroundColor: '#FFF',
        opacity: 0.5,
        borderRadius: 26,
        width: 300,
        marginLeft: 20,
        marginTop: 10,
        padding: 10
    },
    comment:{
        fontSize: 17,
        fontWeight: 'bold',
        textTransform: 'uppercase',
        marginLeft: 20,
        marginTop: 10
    },
    counter:{
        marginLeft: 160,
        marginTop: 10,
    },
    activityDescription:{
        backgroundColor: '#FFF',
        opacity: 0.5,
        borderRadius: 26,
        width: 300,
        height: 200,
        marginLeft: 20,
        marginTop: 10,
        padding: 10,
        marginBottom: 100
    }
})
