import React from 'react';
import {StyleSheet, View,} from 'react-native';
import Login from "./screens/Login";
import SignUp from "./screens/SignUp";
import BottomNavigationBar from "./components/bottomNavigationBar/BottomNavigationBar";


export default function App() {
    return (<>

            <View>
                <BottomNavigationBar/>
            </View></>

    );
}



const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#646668',
        justifyContent: 'center'
    }
});
