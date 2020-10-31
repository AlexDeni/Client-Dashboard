import { REGISTER_CLIENTS, ERROR_REGISTER_CLIENTS, REMOVE_CLIENT, REMOVE_CLIENT_ERR } from './types';

const initialState = {
    id: [],
    clients: true,
    error: '',
};

export default function reducerRegisterClient(state = initialState, action) {
    switch (action.type) {
        case REGISTER_CLIENTS:
            return { ...state, id: action.id};
        case  ERROR_REGISTER_CLIENTS:
            return { ...state, error: action.data, clients: false };
        case REMOVE_CLIENT:
            return { ...state, id: action.id};
        case  REMOVE_CLIENT_ERR:
            return { ...state, error: action.data, clients: false };
        default:
            return state;
    }
}
