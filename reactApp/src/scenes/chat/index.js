import React from 'react';
import {StyleSheet, View, ActivityIndicator} from 'react-native';
import {WebView} from 'react-native-webview';
import {TAWK_TO_PROPERTY_ID, TAWK_TO_KEY} from '@env';

export default function Chat() {
  const tawkToPropertyId = TAWK_TO_PROPERTY_ID;
  const tawkToKey = TAWK_TO_KEY;

  const ActivityIndicatorElement = () => {
    return (
      <ActivityIndicator
        color="#009688"
        size="large"
        style={styles.activityIndicatorStyle}
      />
    );
  };

  return (
    <View style={styles.container}>
      <WebView
        source={{uri: `https://tawk.to/chat/${tawkToPropertyId}/${tawkToKey}`}}
        javaScriptEnabled={true}
        domStorageEnabled={true}
        renderLoading={ActivityIndicatorElement}
        startInLoadingState={true}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingBottom: 125,
  },
  activityIndicatorStyle: {
    flex: 1,
    justifyContent: 'center',
    paddingBottom: 125,
  },
});
