import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import MainPage from './src/components/MainPage/MainPage';
import { Provider } from 'react-redux';
import {store} from './src/store';
const App=()=> {
  return (
    <Provider store={store}>
      <MainPage></MainPage>
    </Provider>
  );
}
export default App;