import React, {useContext} from 'react';
import {AuthContext} from '../../context/context';
import {SafeAreaView, Text, TouchableOpacity, StyleSheet} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';

const Root = createStackNavigator();

const HomeScreen = () => {
  const {signOut} = useContext(AuthContext);
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Screen: Home</Text>

      <TouchableOpacity onPress={() => signOut()}>
        <Text style={styles.navigation}>SignOut</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const HomeNavigation = () => {
  return (
    <Root.Navigator>
      <Root.Screen name="Home" component={HomeScreen} />
    </Root.Navigator>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 32,
  },
  navigation: {
    fontSize: 24,
    fontWeight: 'bold',
  },
});

export default HomeNavigation;
