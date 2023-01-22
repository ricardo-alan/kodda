import React from 'react';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import Icon from 'react-native-vector-icons/SimpleLineIcons';

export type PressableIconProps = {
  name: string;
  onPress: () => void;
};

export const PressableIcon: React.FC<PressableIconProps> = ({
  name,
  onPress,
}) => (
  <TouchableOpacity onPress={onPress}>
    <View style={styles.container}>
      <Icon name={name} size={18} />
    </View>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  container: {padding: 4},
});
