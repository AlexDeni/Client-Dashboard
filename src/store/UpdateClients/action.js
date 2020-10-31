import {ERROR_UPDATE_CLIENTS, UPDATE_CLIENTS, CHOOSE_CLIENT } from "./types";

export const updateClients = data => {
    return (dispatch, getState, { getFirebase }) => {
        const firestore = getFirebase().firestore();
        firestore
            .collection("clients")
            .doc(data.uid)
            .set(data)
            .then(() => {
                dispatch({
                    type: UPDATE_CLIENTS,
                });
            })
            .catch((err) => {
                dispatch({
                    type: ERROR_UPDATE_CLIENTS,
                    payload: err

                });
            });
    };
};


export const selectedClientId = (id) => {
    return {
        type: CHOOSE_CLIENT,
        payload: id,
    };
};