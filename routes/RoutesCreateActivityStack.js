import React from "react";
import {createNativeStackNavigator} from "react-native-screens/native-stack";
import AllCategories from "../screens/AllCategories";
import {CreateNewActivityForm} from "../components/createNewActivityComponents/CreateNewActivityForm";
import SuccessfullyAddedActivity from "../screens/SuccessfullyAddedActivity";
import CreateNewActivity from "../screens/CreateNewActivity";


const Stack = createNativeStackNavigator()

export const RoutesCreateActivityStack = () =>{
    return(
            <Stack.Navigator initialRouteName={"createActivity"}>
                <Stack.Screen name={"createActivity"}
                              component={CreateNewActivity}
                              options={{
                                  headerShown: false
                              }}/>
                <Stack.Screen name={"switchSuccessfullyAddedCreateActivity"}
                              component={SuccessfullyAddedActivity}
                              options={{
                                  headerShown: false
                              }}/>
                <Stack.Screen name={"seeAllCategories"}
                              component={AllCategories}
                              options={{
                                  headerShown: false
                              }}/>
                <Stack.Screen name={"fromForm"}
                              component={CreateNewActivityForm}
                              options={{
                                  headerShown: false
                              }}/>
            </Stack.Navigator>
    )
}
