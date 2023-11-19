/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
} from 'react-native';

import Home from './src/screens/Home';

function App(): JSX.Element {
  return (
    <SafeAreaView style={styles.mainContainer}>
      <StatusBar backgroundColor={"#fff"} barStyle={'dark-content'} />
      <Home />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: "#f0f0ff",
  },
});

export default App;
