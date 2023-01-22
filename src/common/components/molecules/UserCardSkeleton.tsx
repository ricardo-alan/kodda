import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Divider} from '../atoms';

export const UserCardSkeleton = () => {
  return (
    <View style={styles.container}>
      <View style={styles.image} />
      <View style={styles.textBlock}>
        <View style={styles.title} />
        <View style={styles.body} />
        <View style={styles.body} />
      </View>
    </View>
  );
};

export const UserCardSkeletonList = () => {
  return (
    <>
      {[0, 1, 2, 3, 4, 5, 6, 7, 8].map(a => (
        <View key={a}>
          <UserCardSkeleton />
          <Divider />
        </View>
      ))}
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    padding: 16,
    alignItems: 'center',
    height: 100,
  },
  textBlock: {
    marginLeft: 16,
  },
  title: {
    backgroundColor: '#DDD',
    height: 18,
    marginBottom: 4,
    width: 120,
  },
  body: {
    backgroundColor: '#DDD',
    height: 16,
    marginBottom: 4,
    width: 200,
  },
  image: {
    backgroundColor: '#DDD',
    borderRadius: 32,
    height: 64,
    width: 64,
  },
});
