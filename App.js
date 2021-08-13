import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';
import Splash from "./screens/Splash";
import BackgroundThemeSplashScreen from "./components/BackgroundThemeSplashScreen";
import ErrorPageLightMode from "./screens/lightMode/ErrorPageLightMode";
import ErrorPageDarkMode from "./screens/darkMode/ErrorPageDarkMode";
import Login from "./screens/lightMode/Login";

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
