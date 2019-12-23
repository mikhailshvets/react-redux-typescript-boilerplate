import {
  put,
  call,
  all,
  takeLatest,
  takeEvery,
  select,
} from 'redux-saga/effects'
import { replace } from 'connected-react-router'

import * as api from './api'
import * as actions from '../actions'
import { ISignInAction, ISignUpAction, EAuthActionTypes } from "../constants/auth";
import { IRootReducer } from "../reducers";

const getToken = (state: IRootReducer) => state.auth.user.token;

function* signIn({ payload } : ISignInAction) {
  try {
    yield put(actions.userSignIn({ email: payload.email, token: 'true' } ))
    yield call(testAuth)
  } catch (error) {
    yield put(actions.signInRequestFailedAction())
  }
}

function* signUp({ payload } : ISignUpAction) {
  try {
    yield put(actions.userSignIn({ email: payload.email, token: 'true' } ))
    yield call(testAuth)
  } catch (error) {
    yield put(actions.signUpRequestFailedAction())
  }
}

function* signOut() {
  yield put(actions.userSignOut())
  yield put(replace('/protected'))
}

function* testAuth() {
  try {
    const accessToken: string = yield call(setAccessTokenToHeader);

    if (accessToken) {
      yield put(actions.userSignIn({ token: accessToken }));
      yield put(replace('/protected'))
    }
  } catch (error) {
    yield put(actions.testAuthRequestFailedAction())
  }
}

function* setAccessTokenToHeader() {
  const token = yield select(getToken)

  yield call(api.setAuthToken, token);

  return token
}

export default function* authSagas() {
  yield all([
    yield takeLatest(EAuthActionTypes.SIGN_IN, signIn),
    yield takeLatest(EAuthActionTypes.SIGN_UP, signUp),
    yield takeLatest(EAuthActionTypes.SIGN_OUT, signOut),
    yield takeEvery(EAuthActionTypes.TEST_AUTH, testAuth)
  ])
}
