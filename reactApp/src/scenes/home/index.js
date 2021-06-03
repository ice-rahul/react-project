import React, {useContext} from 'react';
import {FirebaseContext} from '_context';
import {
  SafeAreaView,
  Text,
  TouchableOpacity,
  StyleSheet,
  FlatList,
} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import {connect} from 'react-redux';
import {setAuthUser} from '_actions';
import {SliderBox} from 'react-native-image-slider-box';
import CustomRow from 'src/scenes/home/CustomRow';

const Root = createStackNavigator();

const HomeNavigation = props => {
  const HomeScreen = () => {
    const {doSignOut} = useContext(FirebaseContext);
    return (
      <SafeAreaView style={styles.container}>
        <SliderBox
          images={[
            'https://source.unsplash.com/1024x768/?nature',
            'https://source.unsplash.com/1024x768/?water',
            'https://source.unsplash.com/1024x768/?girl',
            'https://source.unsplash.com/1024x768/?tree', // Network image
          ]}
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
          paginationBoxStyle={{
            position: 'absolute',
            bottom: 0,
            padding: 0,
            alignItems: 'center',
            alignSelf: 'center',
            justifyContent: 'center',
            paddingVertical: 10,
          }}
          dotStyle={{
            width: 10,
            height: 10,
            borderRadius: 5,
            marginHorizontal: 0,
            padding: 0,
            margin: 0,
            backgroundColor: 'rgba(128, 128, 128, 0.92)',
          }}
          ImageComponentStyle={{borderRadius: 15, width: '97%', marginTop: 50}}
          imageLoadingColor="#2196F3"
        />
        <FlatList
          data={itemList}
          renderItem={({item}) => (
            <CustomRow
              title={item.title}
              description={item.description}
              image_url={item.image_url}
            />
          )}
        />
        <Text style={styles.title}>Screen: Home</Text>

        <TouchableOpacity onPress={doSignOut}>
          <Text style={styles.navigation}>SignOut</Text>
        </TouchableOpacity>
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

export default connect(null, {setAuthUser})(HomeNavigation);
