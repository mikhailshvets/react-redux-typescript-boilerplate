import { call } from 'redux-saga/effects'
import api from 'utils/api'

class ApiSaga {
  get = function* get(endpoint: string, options?: object) {
    try {
      return yield call(api.get, endpoint, options || {})
    } catch (error) {
      console.log(error)
    }
  };

  post = function* post(endpoint: string, data?: object, options?: object) {
    try {
      return yield call(api.post, endpoint, data, options || {})
    } catch (error) {
      console.log(error)
    }
  }

  put = function* put(endpoint: string, data: object, options?: object) {
    try {
      return yield call(api.put, endpoint, data, options || {})
    } catch (error) {
      console.log(error)
    }
  }

  delete = function* deleteSaga(endpoint: string, options?: object) {
    try {
      return yield call(api.delete, endpoint, options || {})
    } catch (error) {
      console.log(error)
    }
  }

  setAuthToken = api.setAuthToken;
  resetAuthToken = api.resetAuthToken;
};

const apiSaga = new ApiSaga();

export default apiSaga;
