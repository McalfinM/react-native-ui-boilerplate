import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import Router from './src/router';
import { navigationRef } from './src/router/navigationRef'


const App = () => {
  return (
    <NavigationContainer ref={navigationRef}>
      <Router />
    </NavigationContainer>
  )
}

export default App

const styles = StyleSheet.create({})
