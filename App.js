import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';
import Splash from "./screens/Splash";

export default function App() {
  return (
      <View style={styles.container}>
        <Splash/>
      </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#CBDBF2',
    alignItems: 'center',
    justifyContent: 'center',
  }
});
