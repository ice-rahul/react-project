import React from 'react';
import {SafeAreaView, Text, StyleSheet, FlatList} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import {SliderBox} from 'react-native-image-slider-box';
import {HealthItemRow, withAuthorization} from '_atoms';
import {IMAGE_LIST, ROW_DATA} from '_constants/dummyData';

const Root = createStackNavigator();

const HomeNavigation = props => {
  const HomeScreen = () => {
    return (
      <SafeAreaView>
        <SliderBox
          images={IMAGE_LIST}
          sliderBoxHeight={200}
          onCurrentImagePressed={index =>
            console.warn(`image ${index} pressed`)
          }
          dotColor="#FFEE58"
          inactiveDotColor="#90A4AE"
          paginationBoxVerticalPadding={20}
          autoplay
          circleLoop
          resizeMethod={'resize'}
          resizeMode={'cover'}
          paginationBoxStyle={styles.paginationBoxStyle}
          dotStyle={styles.dotStyle}
          ImageComponentStyle={styles.imageComponentStyle}
          imageLoadingColor="#2196F3"
        />
        <Text style={styles.title}>Health Tips</Text>

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
      <Root.Screen name="Home" component={HomeScreen} />
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

export default withAuthorization(HomeNavigation);
