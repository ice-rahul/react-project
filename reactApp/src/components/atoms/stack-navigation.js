import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

const Root = createStackNavigator();

const StackNavigation = ({component, name}) => {
  return (
    <Root.Navigator>
      <Root.Screen name={name} component={component} />
    </Root.Navigator>
  );
};

export default StackNavigation;
