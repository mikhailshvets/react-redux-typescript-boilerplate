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

export interface IAuthBaseAction {
    type: EAuthActionTypes;
    payload?: object
}

export interface ISignInPayload {
    email: string,
    password: string
}

export interface ISignInAction extends IAuthBaseAction {
    type: EAuthActionTypes.SIGN_IN,
    payload: ISignInPayload
}

export interface IUserSignInPayload {
    email?: string,
    token: string
}

export interface IUserSignInAction extends IAuthBaseAction {
    type: EAuthActionTypes.USER_SIGN_IN,
    payload: IUserSignInPayload
}

export interface ISignInRequestFailedAction extends IAuthBaseAction {
    type: EAuthActionTypes.SIGN_IN_REQUEST_FAILED,
}

export interface ISignUpPayload {
    email: string,
    password: string,
    firstName: string,
    lastName: string,
}

export interface ISignUpAction extends IAuthBaseAction {
    type: EAuthActionTypes.SIGN_UP,
    payload: ISignUpPayload
}

export interface ISignUpRequestFailedAction extends IAuthBaseAction {
    type: EAuthActionTypes.SIGN_UP_REQUEST_FAILED,
}

export interface ISignOutAction extends IAuthBaseAction {
    type: EAuthActionTypes.SIGN_OUT,
}

export interface IUserSignOutAction extends IAuthBaseAction {
    type: EAuthActionTypes.USER_SIGN_OUT,
}

export interface ITestAuthAction extends IAuthBaseAction {
    type: EAuthActionTypes.TEST_AUTH,
}

export interface ITestAuthFailedAction extends IAuthBaseAction {
    type: EAuthActionTypes.TEST_AUTH_FAILED,
}
