import 'react-native-gesture-handler';

import React from 'react';
import {Provider} from 'react-redux';

import {FirebaseContext, Firebase} from '_context';
import store from '_store';
import Navigator from '_navigations';

const App = () => (
  <Provider store={store}>
    <FirebaseContext.Provider value={new Firebase()}>
      <Navigator />
    </FirebaseContext.Provider>
  </Provider>
);

export default App;
