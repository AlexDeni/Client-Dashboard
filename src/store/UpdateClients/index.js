import {ERROR_EDIT_CLIENTS, EDIT_CLIENTS } from "./types";

const initialState = {
    clients: [],
    error: '',
    id: null
};

export default function reducerEditClient(state = initialState, action) {
    switch (action.type) {
        case EDIT_CLIENTS:
            return { ...state, id: action.id};
        case  ERROR_EDIT_CLIENTS:
            return { ...state, error: action.payload };
        default:
            return state;
    }
}
