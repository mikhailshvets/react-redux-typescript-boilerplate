import {
    EAuthActionTypes,
    ISignInAction,
    ISignInPayload,
    ISignInRequestFailedAction,
    ISignOutAction,
    ISignUpAction,
    ISignUpPayload,
    ISignUpRequestFailedAction,
    ITestAuthAction,
    ITestAuthFailedAction,
    IUserSignInAction,
    IUserSignInPayload,
    IUserSignOutAction
} from '../constants/auth';


export function signInAction(payload: ISignInPayload): ISignInAction {
    return {
        type: EAuthActionTypes.SIGN_IN,
        payload
    }
}

export function userSignIn(payload: IUserSignInPayload): IUserSignInAction {
    return {
        type: EAuthActionTypes.USER_SIGN_IN,
        payload
    }
}

export function signInRequestFailedAction(): ISignInRequestFailedAction {
    return {
        type: EAuthActionTypes.SIGN_IN_REQUEST_FAILED,
    }
}

export function signUpAction(payload: ISignUpPayload): ISignUpAction {
    return {
        type: EAuthActionTypes.SIGN_UP,
        payload
    }
}

export function signUpRequestFailedAction(): ISignUpRequestFailedAction {
    return {
        type: EAuthActionTypes.SIGN_UP_REQUEST_FAILED,
    }
}

export function signOutAction(): ISignOutAction {
    return {
        type: EAuthActionTypes.SIGN_OUT,
    }
}

export function userSignOut(): IUserSignOutAction {
    return {
        type: EAuthActionTypes.USER_SIGN_OUT,
    }
}

export function testAuthAction(): ITestAuthAction {
    return {
        type: EAuthActionTypes.TEST_AUTH,
    }
}

export function testAuthRequestFailedAction(): ITestAuthFailedAction {
    return {
        type: EAuthActionTypes.TEST_AUTH_FAILED,
    }
}
