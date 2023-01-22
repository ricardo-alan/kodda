import {useInfiniteQuery} from 'react-query';
import {getUsers} from '../api/users';

export const useGetUsers = () => {
  return useInfiniteQuery({
    queryKey: ['users'],
    queryFn: ({pageParam = 1}) => getUsers({pageParam}),
    getNextPageParam: lastPage => lastPage.info.page + 1,
  });
};
