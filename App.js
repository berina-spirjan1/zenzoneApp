import React from 'react';
import {StyleSheet, View,} from 'react-native';
import Login from "./screens/Login";

export default function App() {
    return (<>

            <View>
                <Login/>
            </View></>

    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#93B4E5',
        justifyContent: 'center'
    }
});
