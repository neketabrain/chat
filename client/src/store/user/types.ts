import { UserInfo } from 'src/services/users';

export type UserState = {
  isAuthorized: boolean;
  info?: UserInfo;
};

export enum UserActionTypes {
  setUser = 'SET_USER',
  clearUser = 'CLEAR_USER',
}

export type UserActions = { type: UserActionTypes.setUser; payload: UserInfo } | { type: UserActionTypes.clearUser };
