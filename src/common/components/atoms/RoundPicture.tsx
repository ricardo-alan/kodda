import React from 'react';
import {Image, StyleSheet} from 'react-native';

export type RoundPictureProps = {
  uri: string;
};

export const RoundPicture: React.FC<RoundPictureProps> = ({uri}) => {
  return <Image source={{uri}} style={styles.round} />;
};

const styles = StyleSheet.create({
  round: {
    borderRadius: 32,
    height: 64,
    width: 64,
  },
});
