export enum EAuthActionTypes {
  SIGN_UP = 'SIGN_UP',
  SIGN_UP_REQUEST_FAILED = 'SIGN_UP_REQUEST_FAILED',
  SIGN_IN = 'SIGN_IN',
  USER_SIGN_IN = 'USER_SIGN_IN',
  SIGN_IN_REQUEST_FAILED = 'SIGN_IN_REQUEST_FAILED',
  SIGN_OUT = 'SIGN_OUT',
  USER_SIGN_OUT = 'USER_SIGN_OUT',
  TEST_AUTH = 'TEST_AUTH',
  TEST_AUTH_FAILED = 'TEST_AUTH_FAILED',
}

export interface AuthBaseAction {
  type: EAuthActionTypes;
  payload?: object;
}

export interface SignInPayload {
  email: string;
  password: string;
}

export interface SignInAction extends AuthBaseAction {
  type: EAuthActionTypes.SIGN_IN;
  payload: SignInPayload;
}

export interface UserSignInPayload {
  email?: string;
  token: string;
}

export interface UserSignInAction extends AuthBaseAction {
  type: EAuthActionTypes.USER_SIGN_IN;
  payload: UserSignInPayload;
}

export interface SignInRequestFailedAction extends AuthBaseAction {
  type: EAuthActionTypes.SIGN_IN_REQUEST_FAILED;
}

export interface SignUpPayload {
  email: string;
  password: string;
  firstName: string;
  lastName: string;
}

export interface SignUpAction extends AuthBaseAction {
  type: EAuthActionTypes.SIGN_UP;
  payload: SignUpPayload;
}

export interface SignUpRequestFailedAction extends AuthBaseAction {
  type: EAuthActionTypes.SIGN_UP_REQUEST_FAILED;
}

export interface SignOutAction extends AuthBaseAction {
  type: EAuthActionTypes.SIGN_OUT;
}

export interface UserSignOutAction extends AuthBaseAction {
  type: EAuthActionTypes.USER_SIGN_OUT;
}

export interface TestAuthAction extends AuthBaseAction {
  type: EAuthActionTypes.TEST_AUTH;
}

export interface TestAuthFailedAction extends AuthBaseAction {
  type: EAuthActionTypes.TEST_AUTH_FAILED;
}
