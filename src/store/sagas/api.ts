import { call } from 'redux-saga/effects'
import * as api from 'utils/api'

export function* get(endpoint: string, options?: object) {
  try {
    return yield call(api.get, endpoint, options || {})
  } catch (error) {
    console.log(error)
  }
}

export function* post(endpoint: string, data?: object, options?: object) {
  try {
    return yield call(api.post, endpoint, data, options || {})
  } catch (error) {
    console.log(error)
  }
}

export function* put(endpoint: string, data: object, options?: object) {
  try {
    return yield call(api.put, endpoint, data, options || {})
  } catch (error) {
    console.log(error)
  }
}

export function* deleteSaga(endpoint: string, options?: object) {
  try {
    return yield call(api.deleteRequest, endpoint, options || {})
  } catch (error) {
    console.log(error)
  }
}

export const { setAuthToken, resetAuthToken } = api;
