import { REGISTER_CLIENTS, ERROR_REGISTER_CLIENTS } from './types';

const initialState = {
    clients: [],
    error: '',
    id: null
};

export default function reducerRegisterClient(state = initialState, action) {
    switch (action.type) {
        case REGISTER_CLIENTS:
            return { ...state, id: action.id};
        case  ERROR_REGISTER_CLIENTS:
            return { ...state, error: action.data };
        default:
            return state;
    }
}
