import React from 'react';
import {StyleSheet, View} from 'react-native';
import ChangePassword from "./screens/ChangePassword";
import Navigator from './routes/Drawer';
import ForgotPassword from "./screens/ForgotPassword";
import Login from "./screens/Login";
import HomePage from "./screens/HomePage";

export default function App() {
    return (
        <View >
            <ForgotPassword/>
        </View>
    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#646668',
        justifyContent: 'center'
    }
});

