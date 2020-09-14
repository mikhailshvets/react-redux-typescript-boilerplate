import { combineReducers, Reducer } from 'redux';
import { connectRouter, RouterState } from 'connected-react-router';
import { LocationState, History } from 'history';
import auth, { Auth } from './auth';

export interface RootReducer {
  auth: Auth;
  router: RouterState;
}

export default (history: History<LocationState>): Reducer<RootReducer> =>
  combineReducers({
    auth,
    router: connectRouter(history),
  });
