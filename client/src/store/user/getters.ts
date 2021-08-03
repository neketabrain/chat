import { AppStore } from '../types';

export const getUserState = (state: AppStore) => {
  return state.user;
};

export const getUserInfoState = (state: AppStore) => {
  const userState = getUserState(state);
  return userState.info;
};

export const getUserAuthorizedState = (state: AppStore) => {
  const userState = getUserState(state);
  return userState.isAuthorized;
};
