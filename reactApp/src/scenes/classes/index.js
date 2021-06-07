import React from 'react';
import {SafeAreaView, Text, StyleSheet, FlatList, Button} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import {SliderBox} from 'react-native-image-slider-box';
import {HealthItemRow, withAuthorization} from '_atoms';
import {IMAGE_LIST, ROW_DATA} from '_constants/dummyData';

const Root = createStackNavigator();

const ClassNavigation = props => {
  const ClassScreen = () => {
    return (
      <SafeAreaView>
        <FlatList
          renderItem={HealthItemRow}
          data={ROW_DATA}
          keyExtractor={item => item.id}
        />
      </SafeAreaView>
    );
  };

  return (
    <Root.Navigator>
      <Root.Screen
        name="Classes"
        component={ClassScreen}
        options={{
          title: 'Classes',
          headerRight: () => (
            <Button
              onPress={() => alert('This is a button!')}
              title="Info"
              color="red"
            />
          ),
        }}
      />
    </Root.Navigator>
  );
};
const styles = StyleSheet.create({
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 16,
    marginRight: 16,
    marginTop: 16,
    borderLeftWidth: 4,
    borderLeftColor: '#4bbdef',
    paddingLeft: 10,
  },
  navigation: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  paginationBoxStyle: {
    position: 'absolute',
    bottom: 0,
    padding: 0,
    alignItems: 'center',
    alignSelf: 'center',
    justifyContent: 'center',
    paddingVertical: 10,
  },
  dotStyle: {
    width: 10,
    height: 10,
    borderRadius: 5,
    marginHorizontal: 0,
    padding: 0,
    margin: 0,
    backgroundColor: 'rgba(128, 128, 128, 0.92)',
  },
  imageComponentStyle: {
    borderRadius: 15,
    width: '97%',
    marginTop: 15,
  },
});

export default withAuthorization(ClassNavigation);
