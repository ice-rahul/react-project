import React from 'react';
import {StyleSheet, View, Image, Text, TouchableOpacity} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
// import {createDrawerNavigator} from '@react-navigation/drawer';
import HomeIcon from '_assets/images/home.png';
import HomeSelectedIcon from '_assets/images/home_selected.png';
import ClassIcon from '_assets/images/classes.png';
import ClassSelectedIcon from '_assets/images/classes_selected.png';
import AddIcon from '_assets/images/add.png';
import ProfileIcon from '_assets/images/user.png';
import ProfileSelectedIcon from '_assets/images/user_selected.png';
import ChatIcon from '_assets/images/chat.png';
import ChatSelectedIcon from '_assets/images/chat_selected.png';

import HomeScreen from '_scenes/home';
import AboutScreen from '_scenes/about';
import ChatScreen from '_scenes/chat';
import ClassesScreen from '_scenes/classes';
import ProfileScreen from '_scenes/profile';

const Tab = createBottomTabNavigator();
// const Drawer = createDrawerNavigator();

const CustomTabBarButton = ({children, onPress}) => (
  <TouchableOpacity style={styles.customTabBarButton} onPress={onPress}>
    <View style={styles.customTabBarButtonLayout}>{children}</View>
  </TouchableOpacity>
);

const TabsNavigation = () => (
  <Tab.Navigator
    initialRouteName="Home"
    screenOptions={{gestureEnabled: false}}
    tabBarOptions={{
      showLabel: false,
      style: {
        position: 'absolute',
        bottom: 25,
        left: 20,
        right: 20,
        elevation: 0,
        backgroundColor: '#ffffff',
        borderRadius: 15,
        height: 70,
        ...styles.shadow,
      },
    }}>
    <Tab.Screen
      name="Home"
      component={HomeScreen}
      options={{
        tabBarIcon: ({focused}) => (
          <View style={styles.tabBarBtnAlignment}>
            <Image
              source={focused ? HomeSelectedIcon : HomeIcon}
              resizeMode="contain"
              style={focused ? styles.tabBarImageFocused : styles.tabBarImage}
            />
            <Text
              style={focused ? styles.tabBarTitleFocused : styles.tabBarTitle}>
              Home
            </Text>
          </View>
        ),
      }}
    />
    <Tab.Screen
      name="Classes"
      component={ClassesScreen}
      options={{
        tabBarIcon: ({focused}) => (
          <View style={styles.tabBarBtnAlignment}>
            <Image
              source={focused ? ClassSelectedIcon : ClassIcon}
              resizeMode="contain"
              style={focused ? styles.tabBarImageFocused : styles.tabBarImage}
            />
            <Text
              style={focused ? styles.tabBarTitleFocused : styles.tabBarTitle}>
              Classes
            </Text>
          </View>
        ),
      }}
    />
    <Tab.Screen
      name="Add"
      component={AboutScreen}
      options={{
        tabBarIcon: ({focused}) => (
          <Image
            source={AddIcon}
            resizeMode="contain"
            style={styles.tabBarCustomButton}
          />
        ),
        tabBarButton: props => <CustomTabBarButton {...props} />,
      }}
    />
    <Tab.Screen
      name="Profile"
      component={ProfileScreen}
      options={{
        tabBarIcon: ({focused}) => (
          <View style={styles.tabBarBtnAlignment}>
            <Image
              source={focused ? ProfileSelectedIcon : ProfileIcon}
              resizeMode="contain"
              style={focused ? styles.tabBarImageFocused : styles.tabBarImage}
            />
            <Text
              style={focused ? styles.tabBarTitleFocused : styles.tabBarTitle}>
              Profile
            </Text>
          </View>
        ),
      }}
    />
    <Tab.Screen
      name="Contact"
      component={ChatScreen}
      options={{
        tabBarIcon: ({focused}) => (
          <View style={styles.tabBarBtnAlignment}>
            <Image
              source={focused ? ChatSelectedIcon : ChatIcon}
              resizeMode="contain"
              style={focused ? styles.tabBarImageFocused : styles.tabBarImage}
            />
            <Text
              style={focused ? styles.tabBarTitleFocused : styles.tabBarTitle}>
              Contact
            </Text>
          </View>
        ),
      }}
    />
  </Tab.Navigator>
);

function AppNavigator({navigation}) {
  return (
    <>
      <TabsNavigation />
      {/*<Drawer.Navigator>
        <Drawer.Screen name="Home" children={TabsNavigation} />
      </Drawer.Navigator>
      */}
    </>
  );
}

const styles = StyleSheet.create({
  shadow: {
    shadowColor: '#7F5DF0',
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.5,
    elevation: 5,
  },
  customTabBarButton: {
    top: -30,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#7F5DF0',
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.5,
    elevation: 5,
  },
  customTabBarButtonLayout: {
    width: 70,
    height: 70,
    borderRadius: 35,
    backgroundColor: '#e32f45',
  },
  tabBarImageFocused: {
    width: 25,
    height: 25,
    tintColor: '#e32f45',
  },
  tabBarImage: {
    width: 25,
    height: 25,
    tintColor: '#748c94',
  },
  tabBarTitleFocused: {
    color: '#e32f45',
    fontSize: 12,
  },
  tabBarTitle: {
    color: '#748c94',
    fontSize: 12,
  },
  tabBarBtnAlignment: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  tabBarCustomButton: {
    width: 30,
    height: 30,
    tintColor: '#ffffff',
  },
});

export default AppNavigator;
