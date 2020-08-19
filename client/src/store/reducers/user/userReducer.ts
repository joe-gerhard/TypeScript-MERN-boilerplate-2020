import { UserAction } from '../../actions/user/userTypes';

export interface IUserState {
    name: string;
    email: string;
    picture: string;
    isLoggedIn: boolean;
    isLoading: boolean;
}

const initialState: IUserState = {
    name: '',
    email: '',
    picture: '',
    isLoggedIn: false,
    isLoading: true,
};

const userReducer = (
    state: IUserState = initialState,
    action: UserAction,
) => {
    switch (action.type) {
        case 'SET_USER':
            return {
                ...state,
                ...action.payload,
                isLoggedIn: true,
                isLoading: false,
            };
        case 'SET_USER_LOADING':
            return {
                ...state,
                isLoading: true,
            };
        case 'SET_USER_ERROR':
            return {
                ...state,
                isLoading: false,
            };
        case 'LOGOUT':
            return {
                ...initialState,
                isLoading: false,
            };
        default:
            return state;
    }
};

export default userReducer;
