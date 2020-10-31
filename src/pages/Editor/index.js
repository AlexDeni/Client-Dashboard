import React from "react";
import { connect } from "react-redux";
import { Loader} from "../../component/ui/Loader";
import ErrorText from './../../component/ui/ErrorText'
import { ListClients } from '../../component/Clients/ListClients'

const Editor = ({clients, isLoading, error}) => {

    if (isLoading) {
        return <Loader />;
    }
    if (error) {
        return <ErrorText errorText={error} />;
    }
    return (
        <div className="edit_section">
            <div className="update_card update_card_title">
                <div className="update_card_block">
                    <p>Имя</p>
                </div>
                <div className="update_card_block">
                    <p>Фамилия</p>
                </div>
                <div className="update_card_block update_card_content">
                    <p>Информация</p>
                </div>
                <div className="update_card_block">
                    <p>Дата создания</p>
                </div>
                <div className="update_card_block"/>
            </div>
            <ListClients clients={clients} />
        </div>
    );
}

function mapStateToProps(state) {
    return {
        clients: state.getClients.clients,
        isLoading: state.getClients.isLoading,
        error: state.getClients.error,
    };
}

export default connect(mapStateToProps)(Editor);