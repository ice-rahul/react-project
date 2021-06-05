import React, {useState, useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import {Text, View, StyleSheet} from 'react-native';
import {connect} from 'react-redux';

import AuthNavigator from './auth-navigator';
import AppNavigator from './app-navigator';
import withAuthentication from '_atoms/session/withAuthentication';

const Root = createStackNavigator();

const Navigator = props => {
  const [isLoading, setIsLoading] = useState(true);
  const [userToken, setUserToken] = useState(null);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  }, []);

  useEffect(() => {
    setUserToken(props.authUser);
  }, [props.authUser]);

  if (isLoading) {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Fitness Club</Text>
        <Text style={styles.trainer}>By: Mr. Trainer</Text>
      </View>
    );
  }

  return (
    <NavigationContainer initialRouteName="Login">
      <Root.Navigator headerMode="none">
        {userToken ? (
          <Root.Screen
            name="app"
            children={AppNavigator}
            options={{
              animationEnabled: false,
            }}
          />
        ) : (
          <Root.Screen
            name="auth"
            children={AuthNavigator}
            options={{
              animationEnabled: false,
            }}
          />
        )}
      </Root.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f9ca47',
  },
  title: {
    fontSize: 32,
  },
  trainer: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});

const mapStateToProps = state => ({
  authUser: state.sessionState.authUser,
});

export default connect(mapStateToProps)(withAuthentication(Navigator));
