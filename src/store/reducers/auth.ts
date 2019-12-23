import { EAuthActionTypes, IAuthBaseAction } from "../constants/auth";

export interface IUser {
    email: string,
    token: string,
}

export interface IAuth {
    user: IUser,
}

const initialState: IAuth = {
    user: {
        email: '',
        token: ''
    }
};


const authReducer = (state: IAuth = initialState, {type, payload}: IAuthBaseAction): IAuth => {
    switch (type) {
        case EAuthActionTypes.USER_SIGN_IN:
            return {
                ...state,
                user: {...state.user, ...payload}
            };
        case EAuthActionTypes.USER_SIGN_OUT:
            return {
                ...initialState,
                user: {...initialState.user}
            };
        default:
            return state

    }

}

export default authReducer
