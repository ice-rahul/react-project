import React, {useContext} from 'react';
import {FirebaseContext} from '_context';
import {SafeAreaView, Text, TouchableOpacity, StyleSheet} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import {connect} from 'react-redux';
import {setAuthUser} from '_actions';

const Root = createStackNavigator();

const HomeNavigation = props => {
  const HomeScreen = () => {
    const {doSignOut} = useContext(FirebaseContext);
    return (
      <SafeAreaView style={styles.container}>
        <Text style={styles.title}>Screen: Home</Text>

        <TouchableOpacity onPress={doSignOut}>
          <Text style={styles.navigation}>SignOut</Text>
        </TouchableOpacity>
      </SafeAreaView>
    );
  };

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

export default connect(null, {setAuthUser})(HomeNavigation);
