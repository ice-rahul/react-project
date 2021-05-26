import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createDrawerNavigator} from '@react-navigation/drawer';

import HomeScreen from '_scenes/home';
import AboutScreen from '_scenes/about';

const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();

const TabsNavigation = () => (
  <Tab.Navigator
    initialRouteName="Home"
    screenOptions={{gestureEnabled: false}}>
    <Tab.Screen name="Home" component={HomeScreen} />
    <Tab.Screen name="About" component={AboutScreen} />
  </Tab.Navigator>
);

function AppNavigator({navigation}) {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Home" component={TabsNavigation} />
    </Drawer.Navigator>
  );
}

export default AppNavigator;
