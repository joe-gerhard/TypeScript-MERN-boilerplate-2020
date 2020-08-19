import { uiAction } from '../../actions/ui/uiActions';

export interface IuiState {
    modalOpen: boolean;
}

const initialState: IuiState = {
    modalOpen: false,
};

const uiReducer = (state = initialState, action: uiAction) => {
    switch (action.type) {
        case 'SET_MODAL_OPEN':
            return {
                ...state,
                modalOpen: action.payload,
            };
        default:
            return state;
    }
};

export default uiReducer;
