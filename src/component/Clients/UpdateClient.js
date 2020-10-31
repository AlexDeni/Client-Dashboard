import React from "react";
import {connect} from "react-redux";
import { useForm } from 'react-hook-form';
import { updateClients } from '../../store/UpdateClients/action'
import { getAllClients } from '../../store/Clients/action'

const UpdateClient = ({clientId, clients, updateClients, getClients }) => {
    const { register, handleSubmit, errors } = useForm();

    const chooseClients = clients.find(function (e) {
        return e.uid === clientId;
    });

    const onSubmit = data => {
        updateClients({...data, id: chooseClients.id, uid: chooseClients.uid})
        getClients()
    };

    return (
        <form className="update_card update_card_editor" onSubmit={handleSubmit(onSubmit)}>
            <div className="update_card_block update_input">
                <input
                    name="name"
                    defaultValue={chooseClients.name}
                    ref={register({
                        required: {
                            value: true,
                            message: "Поле обязательное",
                        },
                        minLength: {
                            value: 3,
                            message: "Минимальная длинна 3",
                        },
                        maxLength: {
                            value: 20,
                            message: "Максимальная длинна 20",
                        },
                        pattern: {
                            value: /^[a-zA-Zа-яА-Я'][a-zA-Zа-яА-Я-' ]+[a-zA-Zа-яА-Я']?$/,
                            message: "Incorrect user name",
                        },

                    })}
                    placeholder="Новое имя*"
                />
                <span>{errors.name && errors.name.message}</span>
            </div>
            <div className="update_card_block update_input">
                <input
                    name="lastName"
                    defaultValue={chooseClients.lastName}
                    ref={register({
                        required: {
                            value: true,
                            message: "Поле обязательное",
                        },
                        minLength: {
                            value: 3,
                            message: "Минимальная длинна 20",
                        },
                        maxLength: {
                            value: 20,
                            message: "Максимальная длинна 20",
                        },
                        pattern: {
                            value: /^[a-zA-Zа-яА-Я'][a-zA-Zа-яА-Я-' ]+[a-zA-Zа-яА-Я']?$/,
                            message: "Incorrect user name",
                        },

                    })}
                    placeholder="Новая Фамилия*"
                />
                <span>{errors.lastName && errors.lastName.message}</span>
            </div>
            <div className="update_card_block update_card_content update_input">
                <input
                    name="clientInfo"
                    defaultValue={chooseClients.clientInfo}
                    ref={register({
                        required: {
                            value: true,
                            message: "Поле обязательное",
                        },
                        minLength: {
                            value: 3,
                            message: "Минимальная длинна 3",
                        },
                        maxLength: {
                            value: 150,
                            message: "Максимальная длинна 150",
                        },
                    })}
                    placeholder="Информация*"
                />
                <span>{errors.clientInfo && errors.clientInfo.message}</span>
            </div>
            <div className="update_card_block" />
            <div className="update_card_block registration_btn">
                <button type="submit" className="btn">Редактировать</button>
            </div>
        </form>
    );
}

const mapStateToProps = (state) => {
    return{
        clients: state.getClients.clients,
        isLoading: state.getClients.isLoading,
        error: state.getClients.error,
    }
};
const mapDispatchToProps = (dispatch) => {
    return{
        updateClients: (clientId) => dispatch(updateClients(clientId)),
        getClients: () => dispatch(getAllClients()),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UpdateClient);