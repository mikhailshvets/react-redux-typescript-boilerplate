import { combineReducers, Reducer } from 'redux'
import { connectRouter, RouterState } from 'connected-react-router'
import auth, { IAuth } from './auth'

export interface IRootReducer {
    auth: IAuth,
    router: RouterState,
}

export default (history: any) : Reducer<IRootReducer> =>
  combineReducers({
    auth,
    router: connectRouter(history)
  } as any);
