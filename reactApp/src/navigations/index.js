import React, {useState, useEffect, useMemo} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {AuthContext} from '_context';
import {Text} from 'react-native';

import AuthNavigator from './auth-navigator';
import AppNavigator from './app-navigator';

const Root = createStackNavigator();

const Navigator = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [userToken, setUserToken] = useState(null);

  const authContext = useMemo(() => {
    return {
      signIn: () => {
        setIsLoading(false);
        setUserToken('Rahul');
      },
      signUp: () => {
        setIsLoading(false);
        setUserToken('Rahul');
      },
      signOut: () => {
        setIsLoading(false);
        setUserToken(null);
      },
    };
  }, []);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, []);

  if (isLoading) {
    return <Text>Hello</Text>;
  }

  return (
    <AuthContext.Provider value={authContext}>
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
    </AuthContext.Provider>
  );
};

export default Navigator;
