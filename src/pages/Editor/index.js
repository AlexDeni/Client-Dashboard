import React from "react";
import { connect } from "react-redux";
import { Loader} from "../../component/ui/Loader";
import ErrorText from './../../component/ui/ErrorText'
import { ListClients } from '../../component/Clients/ListClients'

const Editor = ({clients, isLoading, error}) => {

    if (isLoading) {
        return <Loader />;
    }
    return (
        <>
            <ErrorText errorText={error} />
            <ListClients clients={clients} />
        </>
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