import { UserInfo } from 'src/services/users';

import { UserActionTypes, UserActions } from './types';

export const setUserStateAction = (data: UserInfo): UserActions => {
  return {
    type: UserActionTypes.setUser,
    payload: data,
  };
};

export const clearUserStateAction = (): UserActions => {
  return {
    type: UserActionTypes.clearUser,
  };
};
