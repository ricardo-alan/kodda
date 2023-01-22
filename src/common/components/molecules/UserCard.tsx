import React from 'react';
import {StyleSheet, View} from 'react-native';
import {RoundPicture, Text} from '../atoms';

export type UserCardProps = {
  info: User;
};

export const UserCard: React.FC<UserCardProps> = ({info}) => {
  return (
    <View style={styles.container}>
      <RoundPicture uri={info.picture.medium} />
      <View style={styles.textBlock}>
        <Text variant="subtitle">
          {info.name.first} {info.name.last}
        </Text>
        <Text variant="body">Phone: {info.phone}</Text>
        <Text variant="body">{info.location.country}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    padding: 16,
    alignItems: 'center',
  },
  textBlock: {
    marginLeft: 16,
  },
});
