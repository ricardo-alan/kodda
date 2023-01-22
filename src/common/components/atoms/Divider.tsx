import React from 'react';
import {StyleSheet, View} from 'react-native';

export const Divider = () => {
  return <View style={styles.divider} />;
};

const styles = StyleSheet.create({
  divider: {
    borderBottomColor: '#AAA',
    borderBottomWidth: StyleSheet.hairlineWidth,
    marginHorizontal: 16,
  },
});
