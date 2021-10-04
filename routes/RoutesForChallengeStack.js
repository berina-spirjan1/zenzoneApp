import React from "react";
import {createNativeStackNavigator} from "react-native-screens/native-stack";

import DailyChallengeDetails from "../screens/dailyChallenge/DailyChallengeDetails";
import Congratulations from "../screens/dailyChallenge/Congratulations";
import DailyChallengeCounter from "../screens/dailyChallenge/DailyChallengeCounter";

const Stack = createNativeStackNavigator()

export const RoutesForChallengeStack = () =>{
    return(
            <Stack.Navigator>
                <Stack.Screen name={"challengeDetails"}
                              component={DailyChallengeDetails}
                              options={{
                                  headerShown: false
                              }}/>
                <Stack.Screen name={"congratulations"}
                              component={Congratulations}
                              options={{
                                  headerShown: false
                              }}/>
                <Stack.Screen name={"waitingForChallenge"}
                              component={DailyChallengeCounter}
                              options={{
                                  headerShown: false
                              }}/>
            </Stack.Navigator>
    )
}
