import {ERROR_EDIT_CLIENTS, EDIT_CLIENTS } from "./types";

export const updateClients = data => {
    return (dispatch, getState, { getFirebase }) => {
        const firestore = getFirebase().firestore();
        firestore
            .collection("clients")
            .doc(data.uid)
            .set(data)
            .then(() => {
                dispatch({
                    type: EDIT_CLIENTS,
                });
            })
            .catch((err) => {
                dispatch({
                    type: ERROR_EDIT_CLIENTS,
                    payload: err

                });
            });
    };
};

export const activeClients = data => {
    console.log('jhj', data)
};