import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ImageBackground,
  ScrollView,
} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import {withAuthorization} from '_atoms';
import Avatar from '_assets/images/avatar.png';
import bgpro from '_assets/images/bgpro.jpg';

const Root = createStackNavigator();

const ProfileNavigation = props => {
  const ProfileScreen = () => {
    return (
      <ScrollView>
      <View style={styles.container}>
        <View style={styles.header}>
          <ImageBackground
            source={bgpro}
            style={styles.image}></ImageBackground>
        </View>
        <Image style={styles.avatar} source={Avatar} />
        <View style={styles.body}>
          <View style={styles.bodyContent}>
            <Text style={styles.name}>Rajeshwar Kashyap</Text>
            <Text style={styles.info}>Mobile Application developer</Text>
            <Text style={styles.description}>
              Lorem ipsum dolor sit amet, saepe sapientem eu nam. Qui ne assum
              electram expetendis, omittam deseruisse consequuntur ius an,
            </Text>

            <TouchableOpacity style={styles.buttonContainer}>
              <Text>Opcion 1</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.buttonContainer}>
              <Text>Opcion 2</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
      </ScrollView>
    );
  };

  return (
    <Root.Navigator>
      <Root.Screen name="Profile" component={ProfileScreen} />
    </Root.Navigator>
  );
};
const styles = StyleSheet.create({
  header: {
    backgroundColor: '#00BFFF',
    height: 200,
  },
  image: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  avatar: {
    width: 130,
    height: 130,
    borderRadius: 63,
    borderWidth: 4,
    borderColor: 'white',
    marginBottom: 10,
    alignSelf: 'center',
    position: 'absolute',
    marginTop: 130,
  },
  name: {
    fontSize: 22,
    color: 'red',
    fontWeight: '600',
  },
  body: {
    marginTop: 40,
  },
  bodyContent: {
    flex: 0,
    alignItems: 'center',
    padding: 30,
  },
  name: {
    fontSize: 28,
    color: '#696969',
    fontWeight: '600',
  },
  info: {
    fontSize: 16,
    color: '#00BFFF',
    marginTop: 10,
  },
  description: {
    fontSize: 16,
    color: '#696969',
    marginTop: 10,
    textAlign: 'center',
  },
  buttonContainer: {
    marginTop: 10,
    height: 45,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
    width: 250,
    borderRadius: 30,
    backgroundColor: '#00BFFF',
  },
});

export default withAuthorization(ProfileNavigation);
