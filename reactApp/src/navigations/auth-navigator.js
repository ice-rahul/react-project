import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import LoginScreen from '_scenes/login';
const Stack = createStackNavigator();

function AuthNavigator({navigation}) {
  return (
    <Stack.Navigator
      initialRouteName="Login"
      screenOptions={{gestureEnabled: false}}>
      <Stack.Screen
        name="Login"
        component={LoginScreen}
        options={{title: 'My React App'}}
      />
    </Stack.Navigator>
  );
}

export default AuthNavigator;
