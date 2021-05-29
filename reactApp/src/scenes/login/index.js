import React, {useContext} from 'react';
import {
  SafeAreaView,
  Text,
  StyleSheet,
  TouchableOpacity,
  View,
  TextInput,
} from 'react-native';
import {AuthContext} from '_context';

const LoginScreen = ({navigation}) => {
  const {signIn} = useContext(AuthContext);
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Login</Text>
      </View>
      <View style={styles.footer}>
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Mobile</Text>
          <TextInput
            style={styles.textInput}
            placeholder="Enter Mobile Number"
          />
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Password</Text>
          <TextInput
            style={styles.textInput}
            placeholder="Enter Password"
            secureTextEntry
          />
        </View>
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.button} onPress={() => signIn()}>
            <Text style={styles.navigation}>{'Click Here to Login >>'}</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f9ca47',
  },
  header: {
    flex: 1,
    justifyContent: 'flex-end',
    paddingLeft: 25,
    paddingBottom: 10,
  },
  footer: {
    flex: 2,
    backgroundColor: '#ffffff',
    padding: 25,
    borderTopRightRadius: 25,
    borderTopLeftRadius: 25,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#000000',
  },
  navigation: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#ffffff',
  },
  textInput: {
    borderWidth: 1,
    margin: 5,
    borderRadius: 10,
    paddingLeft: 15,
  },
  label: {
    paddingLeft: 5,
    fontSize: 16,
  },
  inputContainer: {
    marginBottom: 10,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  button: {
    padding: 10,
    borderRadius: 10,
    alignItems: 'center',
    backgroundColor: '#e32f45',
  },
});

export default LoginScreen;
