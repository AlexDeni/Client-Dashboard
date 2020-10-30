import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './store/reducers';
import firebase from "./helpers/firebase";
import {createFirestoreInstance} from "redux-firestore";
import { getFirebase } from "react-redux-firebase";

export const store = createStore(
    rootReducer,
    applyMiddleware(thunk.withExtraArgument({ getFirebase }))
);

export const rrfProps = {
    firebase,
    config: {},
    dispatch: store.dispatch,
    createFirestoreInstance,
};


