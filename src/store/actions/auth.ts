import {
  EAuthActionTypes,
  SignInAction,
  SignInPayload,
  SignInRequestFailedAction,
  SignOutAction,
  SignUpAction,
  SignUpPayload,
  SignUpRequestFailedAction,
  TestAuthAction,
  TestAuthFailedAction,
  UserSignInAction,
  UserSignInPayload,
  UserSignOutAction,
} from '../constants/auth';

export function signInAction(payload: SignInPayload): SignInAction {
  return {
    type: EAuthActionTypes.SIGN_IN,
    payload,
  };
}

export function userSignIn(payload: UserSignInPayload): UserSignInAction {
  return {
    type: EAuthActionTypes.USER_SIGN_IN,
    payload,
  };
}

export function signInRequestFailedAction(): SignInRequestFailedAction {
  return {
    type: EAuthActionTypes.SIGN_IN_REQUEST_FAILED,
  };
}

export function signUpAction(payload: SignUpPayload): SignUpAction {
  return {
    type: EAuthActionTypes.SIGN_UP,
    payload,
  };
}

export function signUpRequestFailedAction(): SignUpRequestFailedAction {
  return {
    type: EAuthActionTypes.SIGN_UP_REQUEST_FAILED,
  };
}

export function signOutAction(): SignOutAction {
  return {
    type: EAuthActionTypes.SIGN_OUT,
  };
}

export function userSignOut(): UserSignOutAction {
  return {
    type: EAuthActionTypes.USER_SIGN_OUT,
  };
}

export function testAuthAction(): TestAuthAction {
  return {
    type: EAuthActionTypes.TEST_AUTH,
  };
}

export function testAuthRequestFailedAction(): TestAuthFailedAction {
  return {
    type: EAuthActionTypes.TEST_AUTH_FAILED,
  };
}
