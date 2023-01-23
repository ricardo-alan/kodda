import React from 'react';
import {Pressable, StyleSheet} from 'react-native';
import {colors} from '../../theme';
import {Text} from './Text';

export type RoundButtonProps = {
  onPress: () => void;
  title: string;
};

export const RoundButton: React.FC<RoundButtonProps> = ({onPress, title}) => {
  return (
    <Pressable style={styles.container} onPress={onPress}>
      <Text variant="subtitle" style={styles.text}>
        {title}
      </Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: colors.primary,
    borderRadius: 20,
    padding: 16,
  },
  text: {
    color: colors.white,
  },
});
