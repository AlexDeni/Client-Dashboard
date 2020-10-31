import React from 'react';
import PropTypes from 'prop-types';
import Client from "./Client";

const ListClients = ({ clients }) => {
    return (
        <>
            {clients.map((client) => {
                const { id, name, lastName, uid, clientInfo} = client;
                return (
                    <Client
                        key={id}
                        uId={uid}
                        id={id}
                        name={name}
                        lastName={lastName}
                        clientInfo={clientInfo}
                    />
                );
            })}
        </>
    );
};

ListClients.propTypes = {
    books: PropTypes.array,
};

export { ListClients };
