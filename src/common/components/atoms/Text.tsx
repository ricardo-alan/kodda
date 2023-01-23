import React from 'react';
import {
  StyleSheet,
  Text as RnText,
  TextProps as RnTextProps,
} from 'react-native';
import {colors} from '../../theme';

export type TextProps = RnTextProps & {
  variant: keyof typeof styles;
};

export const Text: React.FC<TextProps> = ({children, variant, ...props}) => {
  return (
    <RnText {...props} style={[styles[variant], props.style]}>
      {children}
    </RnText>
  );
};

const styles = StyleSheet.create({
  body: {
    fontSize: 16,
    color: colors.black,
  },
  subtitle: {
    fontSize: 18,
    color: colors.black,
    fontWeight: 'bold',
  },
  title: {
    fontSize: 26,
    color: colors.black,
    fontWeight: 'bold',
  },
});
