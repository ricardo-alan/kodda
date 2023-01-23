import React from 'react';
import Lottie from 'lottie-react-native';
import {StyleSheet, View} from 'react-native';

export const MonsterAnimation = () => {
  return (
    <View style={styles.container}>
      <Lottie
        autoPlay
        autoSize
        loop
        source={require('../../../animations/typing.json')}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {alignItems: 'center'},
});
