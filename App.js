/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState} from 'react';
import {StyleSheet, StatusBar, View} from 'react-native';
import {Icon, Button, Text, Root} from 'native-base';
import Welcome from './src/pages/Welcome/Welcome';
import Search from './src/pages/Search/Search';
import Home from './src/pages/Home/Home';
import Login from './src/pages/Login/Login';
import Signup from './src/pages/Signup/Signup';
import Dashboard from './src/pages/Dashboard/Dashboard';
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

const Stack = createStackNavigator();

const App = () => {
  return (
    <Root>
    <>
      <NavigationContainer>
        <Stack.Navigator
        screenOptions={{
          headerShown: false
        }}>
          <Stack.Screen name="Welcome" component={Welcome} />
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="Signup" component={Signup} />
          <Stack.Screen name="Dashboard" component={Dashboard} />
          {/* <Stack.Screen name="Search" component={Search} /> */}
        </Stack.Navigator>
      </NavigationContainer>
    </>
    </Root>
  );
};

export default App;
