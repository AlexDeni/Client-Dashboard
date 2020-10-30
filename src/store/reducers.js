import { combineReducers } from 'redux';
import { firebaseReducer } from "react-redux-firebase";
import { firestoreReducer } from "redux-firestore";
import reducerGetClients from './Clients';
import reducerRegisterClient from './Registration';
import reducerEditClient from './UpdateClients';
import { reducer as formReducer } from 'redux-form'


const rootReducer = combineReducers({
    getClients: reducerGetClients,
    newClient: reducerRegisterClient,
    editClient: reducerEditClient,
    firebase: firebaseReducer,
    firestore: firestoreReducer,
    form: formReducer
});

export default rootReducer;
