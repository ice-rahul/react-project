import React, {useEffect, useContext} from 'react';
import {connect} from 'react-redux';
import {setAuthUser} from '_actions';
import {FirebaseContext} from '_context';
import AsyncStorage from '@react-native-async-storage/async-storage';

const withAuthentication = Component => {
  const NewComponent = props => {
    const firebase = useContext(FirebaseContext);

    const saveToLocalStorage = async authUser => {
      try {
        await AsyncStorage.setItem('authUser', JSON.stringify(authUser));
      } catch (error) {
        // Error saving data
      }
    };

    const getFromLocalStorage = async key => {
      try {
        const userAge = await AsyncStorage.getItem(key);
        return userAge;
      } catch (e) {
        return 'Failed to fetch the data from storage';
      }
    };

    const fallback = async () => {
      await AsyncStorage.removeItem('authUser');
      props.setAuthUser(null);
    };

    const next = authUser => {
      saveToLocalStorage(authUser);
      props.setAuthUser(authUser);
    };

    const syncUser = async () => {
      const authUser = await getFromLocalStorage('authUser');
      let user = null;
      if (authUser !== null) {
        user = JSON.parse(authUser);
      }
      props.setAuthUser(user);
      firebase.onAuthChangeListener(next, fallback);
    };

    useEffect(() => {
      syncUser();
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    return <Component {...props} />;
  };
  return connect(null, {setAuthUser})(NewComponent);
};

export default withAuthentication;
