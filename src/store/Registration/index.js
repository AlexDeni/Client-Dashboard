import { REGISTER_CLIENTS, ERROR_REGISTER_CLIENTS, REMOVE_CLIENT, REMOVE_CLIENT_ERR } from './types';

const initialState = {
    id: [],
    register: true,
    error: '',
};

export default function reducerRegisterClient(state = initialState, action) {
    switch (action.type) {
        case REGISTER_CLIENTS:
            return { ...state, id: action.id, clients: true};
        case  ERROR_REGISTER_CLIENTS:
            return { ...state, error: action.data, register: false };
        case REMOVE_CLIENT:
            return { ...state, id: action.id, clients: true};
        case  REMOVE_CLIENT_ERR:
            return { ...state, error: action.data, register: false };
        default:
            return state;
    }
}
