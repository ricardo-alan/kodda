import React from 'react';
import {
  StyleSheet,
  Text as RnText,
  TextProps as RnTextProps,
} from 'react-native';

export type TextProps = RnTextProps & {
  variant: 'subtitle' | 'body';
};

export const Text: React.FC<TextProps> = ({children, variant, ...props}) => {
  return (
    <RnText {...props} style={styles[variant]}>
      {children}
    </RnText>
  );
};

const styles = StyleSheet.create({
  subtitle: {
    fontSize: 18,
    color: '#333333',
    fontWeight: 'bold',
  },
  body: {
    fontSize: 16,
    color: '#333333',
  },
});
