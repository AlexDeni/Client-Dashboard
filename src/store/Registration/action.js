import {ERROR_REGISTER_CLIENTS, REGISTER_CLIENTS, REMOVE_CLIENT, REMOVE_CLIENT_ERR } from "./types";

export const signRegistr = data => {
    return (dispatch, getState, { getFirebase }) => {
        const firestore = getFirebase().firestore();
        firestore
            .collection("clients")
            .add({
                ...data,
                id: new Date().getTime(),
                date: new Date(),
            })
            .then(() => {
                dispatch({
                    type: REGISTER_CLIENTS,
                    id: new Date().getTime(),
                    data,
                });
            })
            .catch((err) => {
                dispatch({
                    type: ERROR_REGISTER_CLIENTS,
                    err,
                });
            });
    };
};


export const removeClient = uId => {
    return (dispatch, getState, { getFirebase }) => {
        const firestore = getFirebase().firestore();
        firestore
            .collection("clients")
            .doc(uId)
            .delete()
            .then(() => {
                dispatch({
                    type: REMOVE_CLIENT,
                });
            })
            .catch((err) => {
                dispatch({
                    type: REMOVE_CLIENT_ERR,
                    err,
                });
            });
    };
};
