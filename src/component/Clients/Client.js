import React, {useState} from 'react';
import {connect} from "react-redux";
import { useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import { DateTime} from "../../helpers/correctDates";
import UpdateClient from '../Clients/UpdateClient'
import {removeClient} from "../../store/Registration/action";
import {getAllClients} from "../../store/Clients/action";
import { selectedClientId } from "../../store/UpdateClients/action";

const Client = ({ name, lastName, id, removeClient, uId, clientInfo, updateClients, selectedClientId }) => {
    const [status, setStatus] = useState(false);
    const location = useLocation();

    const handleRemove = (clientId) => {
        removeClient(clientId)
        updateClients()
    }

    const handleEdit= (clientId) => {
        setStatus(!status)
        selectedClientId(clientId)
    }
    if(location.pathname === '/editor'){
        return (
            <>
                <div className="update_card">
                    <div className="update_card_block">
                        <p className="client_update_name">{name}</p>
                    </div>
                    <div className="update_card_block">
                        <p className="client_update_lastName">{lastName}</p>
                    </div>
                    <div className="update_card_block update_card_content">
                        <p className="client_update_info">{clientInfo}</p>
                    </div>
                    <div className="update_card_block">
                        <p className="client_update_date">{DateTime(id)}</p>
                    </div>
                    <div className="update_card_block update_card_btn">
                        <button className="btn_link_m" onClick={()=>{handleRemove(uId)}}>Удалить</button>
                        <button className="btn_link_m" onClick={()=>{handleEdit(uId)}}>
                            {status ? <span>Свернуть</span> : <span>Редактировать</span> }
                        </button>
                    </div>
                </div>
                {status ? <UpdateClient />: ''}
            </>
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
        updateClients: () => dispatch(getAllClients()),
        selectedClientId: (clientId) => dispatch(selectedClientId(clientId)),
    }
}

Client.propTypes = {
    id: PropTypes.number,
    name: PropTypes.string.isRequired,
    lastName: PropTypes.string.isRequired,
    clientInfo: PropTypes.string.isRequired,
};

export default connect(null, mapDispatchToProps)(Client);