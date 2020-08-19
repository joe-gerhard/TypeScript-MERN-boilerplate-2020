import { RootState } from '../../reducers';
import { IUser } from '../../../@types';

export const selectUser = (state: RootState): IUser => ({
    name: state.user.name,
    email: state.user.email,
    picture: state.user.picture,
});
export const selectUserIsLoggedIn = (state: RootState) =>
    state.user.isLoggedIn;

export const selectUserIsLoading = (state: RootState) =>
    state.user.isLoading;
