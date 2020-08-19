import axios from 'axios';

import { IUser } from '../../../@types';
import {
    ISetUserAction,
    ILogoutAction,
    ISetUserLoadingAction,
    ISetUserErrorAction,
    UserAction,
} from './userTypes';
import { ThunkAction } from 'redux-thunk';

export const setUser = (user: IUser): ISetUserAction => ({
    type: 'SET_USER',
    payload: user,
});

export const logout = (): ILogoutAction => ({
    type: 'LOGOUT',
});

export const setUserLoading = (): ISetUserLoadingAction => ({
    type: 'SET_USER_LOADING',
});

export const setUserError = (): ISetUserErrorAction => ({
    type: 'SET_USER_ERROR',
});

export const getUser = (): ThunkAction<
    Promise<UserAction>,
    {},
    {},
    UserAction
> => async (dispatch) => {
    dispatch(setUserLoading());

    try {
        const response = await axios.get('/user');

        const { name, email, picture } = response.data;

        if (
            typeof name === 'string' &&
            typeof email === 'string' &&
            typeof picture === 'string'
        ) {
            const user: IUser = {
                name,
                email,
                picture,
            };

            return dispatch(setUser(user));
        }

        return dispatch(setUserError());
    } catch (error) {
        return dispatch(setUserError());
    }
};
