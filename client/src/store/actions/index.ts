import { UserAction } from './user/userTypes';
import { uiAction } from './ui/uiActions';
import { ThunkAction } from 'redux-thunk';

export type AnyAction = UserAction | uiAction;
