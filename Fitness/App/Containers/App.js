import 'react-native-gesture-handler';
import React from 'react';
import {StatusBar} from 'react-native';
import AppNavigation from '../Navigation/AppNavigation';

export default function App() {
  return (
    <>
      <StatusBar
        translucent
        barStyle={'dark-content'}
        backgroundColor={'transparent'}
      />
      <AppNavigation />
    </>
  );
}
