import { EAuthActionTypes, AuthBaseAction } from '../constants/auth';

export interface User {
  email: string;
  token: string;
}

export interface Auth {
  user: User;
}

const initialState: Auth = {
  user: {
    email: '',
    token: '',
  },
};

const authReducer = (
  state: Auth = initialState,
  { type, payload }: AuthBaseAction
): Auth => {
  switch (type) {
    case EAuthActionTypes.USER_SIGN_IN:
      return {
        ...state,
        user: { ...state.user, ...payload },
      };
    case EAuthActionTypes.USER_SIGN_OUT:
      return {
        ...initialState,
        user: { ...initialState.user },
      };
    default:
      return state;
  }
};

export default authReducer;
