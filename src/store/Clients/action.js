import { GET_CLIENTS, ERROR_GET_CLIENTS } from './types';

export const getAllClients = () => {
    return (dispatch, getState, { getFirebase }) => {
        const firestore = getFirebase().firestore();
        firestore.collection("clients")
            .get()
            .then(function(querySnapshot) {
                let clients = [];

                querySnapshot.forEach(doc =>
                    clients.push({ ...doc.data(), uid: doc.id }),
                );

                dispatch({
                    type: GET_CLIENTS,
                    clients,
                });
            })
            .catch((err) => {
                dispatch({
                    type: ERROR_GET_CLIENTS,
                    err,
                });
            });
    }
}