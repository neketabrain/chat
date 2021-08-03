import { UserActionTypes, UserActions, UserState } from './types';

const initialState: UserState = {
  isAuthorized: false,
};

const reducer = (state = initialState, action: UserActions): UserState => {
  switch (action.type) {
    case UserActionTypes.setUser: {
      return { isAuthorized: true, info: action.payload };
    }

    case UserActionTypes.clearUser: {
      return initialState;
    }

    default: {
      return state;
    }
  }
};

export default reducer;
