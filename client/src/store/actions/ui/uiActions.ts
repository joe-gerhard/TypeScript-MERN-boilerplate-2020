interface ISetModalOpenAction {
    readonly type: 'SET_MODAL_OPEN';
    payload: boolean;
}

export type uiAction = ISetModalOpenAction;
