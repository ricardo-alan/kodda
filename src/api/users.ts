import {api} from './instance';

export const getUsers = async ({pageParam}: {pageParam: number}) => {
  const {data} = await api.get<UsersResponse>('', {
    params: {
      page: pageParam,
      results: 10,
    },
  });
  return data;
};
