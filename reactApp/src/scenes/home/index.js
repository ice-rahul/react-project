import React from 'react';
import {SafeAreaView, Text, TouchableHighlight} from 'react-native';
import {HelloWorld} from '_atoms';
import {createStackNavigator} from '@react-navigation/stack';

const Root = createStackNavigator();

const HomeScreen = () => (
  <SafeAreaView>
    <Text>Screen: Home</Text>

    <TouchableHighlight>
      <Text>Go to About</Text>
    </TouchableHighlight>
    <HelloWorld name="Rahul Agrawal" />
  </SafeAreaView>
);

const HomeNavigation = () => {
  return (
    <Root.Navigator>
      <Root.Screen name="Home" component={HomeScreen} />
    </Root.Navigator>
  );
};

export default HomeNavigation;
