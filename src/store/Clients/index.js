import { GET_CLIENTS, ERROR_GET_CLIENTS} from './types';

const initialState = {
    clients: [],
    isLoading: true,
    error: '',
};

export default function reducerGetBooks(state = initialState, action) {
    switch (action.type) {
        case GET_CLIENTS:
            return { ...state, clients: action.clients, isLoading: false };
        case  ERROR_GET_CLIENTS:
            return { ...state, isLoading: false, error: action.data };
        default:
            return state;
    }
}
