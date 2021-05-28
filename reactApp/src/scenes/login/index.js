import React, {useContext} from 'react';
import {SafeAreaView, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {AuthContext} from '../../context/context';

const LoginScreen = ({navigation}) => {
  const {signIn} = useContext(AuthContext);
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Screen: Login</Text>

      <TouchableOpacity onPress={() => signIn()}>
        <Text style={styles.navigation}>{'Go to Home >> '}</Text>
      </TouchableOpacity>
    </SafeAreaView>
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

export default LoginScreen;
