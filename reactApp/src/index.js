import 'react-native-gesture-handler';

import React from 'react';
import {Provider} from 'react-redux';
import {ApolloClient, InMemoryCache, ApolloProvider} from '@apollo/client';

import {FirebaseContext, Firebase} from '_context';
import store from '_store';
import Navigator from '_navigations';
import {BASE_URL} from '@env';

const client = new ApolloClient({
  uri: BASE_URL,
  cache: new InMemoryCache(),
});

const App = () => (
  <ApolloProvider client={client}>
    <Provider store={store}>
      <FirebaseContext.Provider value={new Firebase()}>
        <Navigator />
      </FirebaseContext.Provider>
    </Provider>
  </ApolloProvider>
);

export default App;
