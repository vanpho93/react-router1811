import { createStore } from 'redux';

function reducer(state = { user: null }, action) {
    if (action.type === 'SIGN_IN') return { user: {} };
    if (action.type === 'SIGN_OUT') return { user: null };
    return state;
}

export const store = createStore(reducer);
