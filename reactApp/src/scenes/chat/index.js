import React from 'react';
import {StyleSheet, View} from 'react-native';
import {WebView} from 'react-native-webview';

export default function Chat() {
  const tawkToPropertyId = '60b697cbde99a4282a1ad72d';
  const tawkToKey = '1f74k1tfp';

  return (
    <View style={styles.container}>
      <WebView
        source={{uri: `https://tawk.to/chat/${tawkToPropertyId}/${tawkToKey}`}}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingBottom: 125,
  },
});
