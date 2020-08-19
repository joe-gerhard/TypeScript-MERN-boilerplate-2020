import { combineReducers } from 'redux';

import userReducer from './user/userReducer';
import uiReducer from './ui/uiReducer';

const rootReducer = combineReducers({
    user: userReducer,
    ui: uiReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
