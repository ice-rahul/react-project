import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import AuthNavigator from './auth-navigator';
import AppNavigator from './app-navigator';

const Root = createStackNavigator();

const Navigator = () => {
  return (
    <NavigationContainer initialRouteName="Login">
      <Root.Navigator headerMode="none">
        <Root.Screen name="auth" component={AuthNavigator} />
        <Root.Screen name="app" component={AppNavigator} />
      </Root.Navigator>
    </NavigationContainer>
  );
};

export default Navigator;
