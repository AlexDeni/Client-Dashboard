import {ERROR_UPDATE_CLIENTS, UPDATE_CLIENTS, CHOOSE_CLIENT } from "./types";

const initialState = {
    clients: [],
    error: '',
    selectedClientId: null
};

export default function reducerEditClient(state = initialState, action) {
    switch (action.type) {
        case UPDATE_CLIENTS:
            return { ...state, id: action.id};
        case  ERROR_UPDATE_CLIENTS:
            return { ...state, error: action.payload };
        case  CHOOSE_CLIENT:
            return { ...state, selectedClientId: action.payload };
        default:
            return state;
    }
}
