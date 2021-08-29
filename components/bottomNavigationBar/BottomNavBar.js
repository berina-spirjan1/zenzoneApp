import React from 'react';
import {
    View,
    Text,
    TouchableOpacity
} from 'react-native';
import { createBottomTabNavigator, BottomTabBar} from "@react-navigation/bottom-tabs";
import HomePage from "../../screens/HomePage";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";

const Tab = createBottomTabNavigator();

function BottomNavBar(){
    return(
        <Tab.Navigator>
            <Tab.Screen name={'Activities'}
                        component={HomePage}
                        options={{
                            tabBarIcon: ({focused}) =>(
                                <FontAwesome5 name={'book-reader'}
                                              size={focused ? 22 : 20}
                                              color={focused ? '#000' : '#616C75'}/>
                            )
                        }}/>

        </Tab.Navigator>
    )
}

export default BottomNavBar;
