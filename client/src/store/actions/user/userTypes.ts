import { IUser } from '../../../@types';

export interface ISetUserAction {
    readonly type: 'SET_USER';
    payload: IUser;
}

export interface ILogoutAction {
    readonly type: 'LOGOUT';
}

export interface ISetUserLoadingAction {
    readonly type: 'SET_USER_LOADING';
}

export interface ISetUserErrorAction {
    readonly type: 'SET_USER_ERROR';
}

export type UserAction =
    | ISetUserAction
    | ILogoutAction
    | ISetUserLoadingAction
    | ISetUserErrorAction;
