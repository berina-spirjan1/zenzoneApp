import React from "react";
import {NavigationContainer} from "@react-navigation/native";
import {createDrawerNavigator} from "@react-navigation/drawer";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";

import Login from "../../screens/login/Login";
import SignUp from "../../screens/signUp/SignUp";

import {RouterHomePageStack} from "../../routes/RoutesHomePageStack";
import {RoutesLoginSignUpStack} from "../../routes/RoutesLoginSignUpStack";
import {RoutesForChallengeStack} from "../../routes/RoutesForChallengeStack";

const Drawer = createDrawerNavigator();

function SideMenu(){
    return (
        <NavigationContainer independent={true}>
            <Drawer.Navigator initialRouteName={'Activities'}
                              drawerPosition={'left'}
                              drawerType={'slide'}
                              edgeWidth={500}
                              hideStatusBar={true}
                              overlayColor={'#CBDBF2'}
                              drawerStyle={{
                                  backgroundColor: '#616C75',
                                  width:150
                              }}
                              screenOptions={{
                                  drawerActiveTintColor: '#93B4E5',
                                  headerShown: false,
                                  swipeEnabled: true,
                                  gestureEnabled: true,
                                  headerTitleAlign: 'left',
                                  headerStyle:{
                                      backgroundColor: '#93B4E5'
                                  },
                                  headerTintColor: '#000000',
                                  headerTitleStyle: {
                                      fontSize:20,
                                  }
                              }}>
               <Drawer.Screen name={'Activities'}
                              component={RouterHomePageStack}
                              options={{
                                  title: 'Activities',
                                  drawerIcon: ({focused}) =>(
                                      <FontAwesome5 name={'book-reader'}
                                                    size={focused ? 22 : 20}
                                                    color={focused ? '#000' : '#616C75'}/>
                                  )
                              }}/>
                <Drawer.Screen name={'Login'}
                               component={RoutesLoginSignUpStack}
                               options={{
                                   headerShown: false,
                                   title: 'Login',
                                   drawerIcon: ({focused}) =>(
                                       <FontAwesome5 name={'user'}
                                                     size={focused ? 22 : 20}
                                                     color={focused ? '#000' : '#616C75'}/>
                                   )
                               }}/>
               <Drawer.Screen name={'Sign Up'}
                              component={SignUp}
                              options={{
                                  headerShown: false,
                                  title: 'Sign Up',
                                  drawerIcon: ({focused}) => (
                                      <FontAwesome5 name={'user-check'}
                                                    size={focused ? 22 : 20}
                                                    color={focused ? '#000' : '#616C75'}/>
                                  )
                              }}/>
                <Drawer.Screen name={"Today's challenge"}
                               component={RoutesForChallengeStack}
                               options={{
                                   headerShown: false,
                                   title: "Today's challenge",
                                   drawerIcon: ({focused}) => (
                                       <FontAwesome5 name={'flag-checkered'}
                                                     size={focused ? 22 : 20}
                                                     color={focused ? '#000' : '#616C75'}/>
                                   )
                               }}/>
            </Drawer.Navigator>
        </NavigationContainer>
    )
}

export default SideMenu;
