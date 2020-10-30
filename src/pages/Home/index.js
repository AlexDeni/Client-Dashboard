import React from "react";
import { connect } from "react-redux";
import { Loader} from "../../component/ui/Loader";
import ErrorText from './../../component/ui/ErrorText'
import { ListClients } from '../../component/Clients/ListClients'
import {NavLink} from "react-router-dom";

const Home = ({clients, isLoading, error}) => {
    if (isLoading) {
        return <Loader />;
    }
    if (error) {
        return <div>Ошибка: {error.message}</div>;
    }
    return (
        <>
            <NavLink className="btn_link btn_link_m" to="/registration">Регистрация</NavLink>
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

export default connect(mapStateToProps)(Home);
