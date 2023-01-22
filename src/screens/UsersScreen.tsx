import React from 'react';
import {ActivityIndicator, FlatList, ListRenderItem} from 'react-native';
import {Divider} from '../common/components/atoms/Divider';
import {UserCard} from '../common/components/molecules/UserCard';
import {UserCardSkeletonList} from '../common/components/molecules/UserCardSkeleton';
import {useGetUsers} from '../queries/users';

export const UsersSecreen = () => {
  const {data, fetchNextPage, isLoading, refetch, isRefetching} = useGetUsers();

  if (!data || isLoading) {
    return <UserCardSkeletonList />;
  }

  const allData = data.pages.flatMap(page => page.results);

  return (
    <FlatList
      data={allData}
      ItemSeparatorComponent={Divider}
      keyExtractor={i => i.email}
      ListFooterComponent={ActivityIndicator}
      onEndReached={() => fetchNextPage()}
      onEndReachedThreshold={0.2}
      onRefresh={refetch}
      refreshing={isRefetching}
      renderItem={UserItem}
    />
  );
};

const UserItem: ListRenderItem<User> = ({item}) => {
  return <UserCard info={item} />;
};
