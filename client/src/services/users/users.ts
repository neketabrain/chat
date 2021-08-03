import { AxiosResponse } from 'axios';

import agent from 'src/agent';

import { UserInfo } from './users.types';

export const getUserInfo = (): Promise<AxiosResponse<UserInfo>> => {
  return agent.get('/users/me');
};
