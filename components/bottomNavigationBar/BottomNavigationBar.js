import React from "react";
import {
    BottomTabBar,
    createBottomTabNavigator
} from "@react-navigation/bottom-tabs";
import { FontAwesome5 } from "@expo/vector-icons";
import Svg, { Path } from "react-native-svg";
import {
    View,
    TouchableOpacity,
    StyleSheet
} from 'react-native';

import HomePage from "../../screens/HomePage";
import DailyChallengeDetails from "../../screens/DailyChallengeDetails";
import Leaderboard from "../../screens/Leaderboard";
import SignUp from "../../screens/SignUp";
import Login from "../../screens/Login";
import {isIphoneX} from "react-native-iphone-x-helper";

const Tab = createBottomTabNavigator();

function TabBarCustomButton({accessibilityState, children, onPress}){
    let isSelected = accessibilityState.selected;

    if (isSelected){
        return(
            <View style={{ flex: 1,
                           alignItems: 'center' }}>
                <View style={{ flexDirection: 'row',
                               position: 'absolute',
                               top:0 }}>
                    <View style={{ flex: 1,
                                   backgroundColor: '#93B4E5' }}/>
                    <Svg
                        width={75}
                        height={61}
                        viewBox="0 0 75 61">
                        <Path
                            d={"M75.2 0v61H0V0c4.1 0 7.4 3.1 7.9 7.1C10 21.7 22.5 33 37.7 33c15.2 0 27.7-11.3 29.7-25.9.5-4 3.9-7.1 7.9-7.1h-.1z"}
                            fill={"#93B4E5"}/>
                    </Svg>
                    <View style={{flex: 1, backgroundColor: '#93B4E5'}}/>
                </View>

                <TouchableOpacity style={styles.menuItemButtonPressed}
                                  activeOpacity={1}
                                  onPress={onPress}>
                    {children}
                </TouchableOpacity>

            </View>


        )
    }
    else{
        return(
            <TouchableOpacity style={styles.menuItem}
                              activeOpacity={1}
                              onPress={onPress}>
                {children}
            </TouchableOpacity>
        )
    }

}

function CustomTabBar(props){
    if (isIphoneX()){
        return (
            <View>
                <View style={styles.customTabBar}/>
                <BottomTabBar {...props.props}/>
            </View>

        )
    }
    else{
        return(
            <BottomTabBar {...props.props}/>
            )
    }
}


function BottomNavigationBar(){
    return(
        <Tab.Navigator
            tabBarOptions={{
                showLabel: false,
                style:{
                    borderTopWidth: 0,
                    backgroundColor: 'transparent',
                    elevation: 0
            }
        }}
            tabBar={(props) => (
                <CustomTabBar props={props}/>
            )}
        >
            <Tab.Screen name={'Activities'}
                        component={HomePage}
                        options={{
                            tabBarIcon: ({focused}) => (
                                <FontAwesome5 name={'book-reader'}
                                              size={focused ? 22 : 20}
                                              color={focused ? '#000' : '#616C75'}/>
                            ),
                            tabBarButton: (props) => (
                                <TabBarCustomButton {...props}/>
                            )
                        }}/>
            <Tab.Screen name={'Challenge'}
                        component={DailyChallengeDetails}
                        options={{
                            tabBarIcon: ({focused}) => (
                                <FontAwesome5 name={'clipboard-check'}
                                              size={focused ? 22 : 20}
                                              color={focused ? '#000' : '#616C75'}/>
                            ),
                            tabBarButton: (props) => (
                                <TabBarCustomButton {...props}/>
                            )
                        }}/>
            <Tab.Screen name={'Ranking'}
                        component={Leaderboard}
                        options={{
                            tabBarIcon: ({focused}) => (
                                <FontAwesome5 name={'medal'}
                                              size={focused ? 22 : 20}
                                              color={focused ? '#000' : '#616C75'}/>
                            ),
                            tabBarButton: (props) => (
                                <TabBarCustomButton {...props}/>
                            )
                        }}/>
            <Tab.Screen name={'Login'}
                        component={Login}
                        options={{
                            tabBarIcon: ({focused}) => (
                                <FontAwesome5 name={'user-check'}
                                              size={focused ? 22 : 20}
                                              color={focused ? '#000' : '#616C75'}/>
                            ),
                            tabBarButton: (props) => (
                                <TabBarCustomButton {...props}/>
                            )
                        }}/>
            {/*//todo add screen for creating new activity which will show in bottom navigation*/}
            <Tab.Screen name={'Sign Up'}
                        component={SignUp}
                        options={{
                            tabBarIcon: ({focused}) => (
                                <FontAwesome5 name={'user'}
                                              size={focused ? 22 : 20}
                                              color={focused ? '#000' : '#616C75'}/>
                            ),
                            tabBarButton: (props) => (
                                <TabBarCustomButton {...props}/>
                            )
                        }}/>
        </Tab.Navigator>
    )
}

const styles = StyleSheet.create({
    menuItemButtonPressed:{
        top: -22.5,
        justifyContent: 'center',
        alignItems: 'center',
        width:50,
        height:50,
        borderRadius:25,
        backgroundColor: '#6285B3'
    },
    menuItem:{
        flex:1,
        height: 60,
        backgroundColor: '#93B4E5'
    },
    customTabBar:{
        position: 'absolute',
        bottom:0,
        left:0,
        right:0,
        height: 30,
        backgroundColor: 'white'
    }
})


export default BottomNavigationBar;
