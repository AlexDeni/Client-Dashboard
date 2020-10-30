import React, {useState} from 'react';
import {connect} from "react-redux";
import { useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import { DateTime} from "../../helpers/correctDates";
import UpdateClient from '../Clients/UpdateClient'
import {removeClient} from "../../store/Registration/action";
import {getAllClients} from "../../store/Clients/action";

const Client = ({ name, lastName, id, removeClient, uId, clientInfo, updateClients }) => {
    const [status, setStatus] = useState(false);
    const [clientId, setClientId] = useState(false);
    const location = useLocation();

    const handleRemove = (clientId) => {
        removeClient(clientId)
        updateClients()
    }

    const handleEdit= (clientId) => {
        setStatus(!status)
        setClientId(clientId)
    }
    if(location.pathname === '/editor'){
        return (
            <div className="client_card">
                <h3 className="client_title">{name}</h3>
                <p className="client_serName">{lastName}</p>
                <p className="client_info">{clientInfo}</p>
                <p className="client_register_date">{DateTime(id)}</p>
                <button className="btn_link_m" onClick={()=>{handleRemove(uId)}}>Удалить</button>
                <button className="btn_link_m" onClick={()=>{handleEdit(uId)}}>Редактировать</button>
                {status ? <UpdateClient  clientId={clientId} />: ''}
            </div>
        );
    }
    return (
        <div className="client_card">
            <h3 className="client_title">{name}</h3>
            <p className="client_serName">{lastName}</p>
            <p className="client_info">{clientInfo}</p>
            <p className="client_register_date">{DateTime(id)}</p>
        </div>
    );

};

const mapDispatchToProps = (dispatch) => {
    return{
        removeClient: (user) => dispatch(removeClient(user)),
        updateClients: () => dispatch(getAllClients())
    }
}

Client.propTypes = {
    id: PropTypes.number,
    name: PropTypes.string.isRequired,
    lastName: PropTypes.string.isRequired,
};

export default connect(null, mapDispatchToProps)(Client);