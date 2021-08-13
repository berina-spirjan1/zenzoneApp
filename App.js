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

export default function App() {
  return (<>

      <View style={styles.container}>
        <ErrorPageLightMode/>
      </View></>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#CBDBF1',
    justifyContent: 'center'
  }
});
