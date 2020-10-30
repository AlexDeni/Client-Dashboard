import React from "react";
import {connect} from "react-redux";
import { useForm } from 'react-hook-form';
import { updateClients } from '../../store/UpdateClients/action'
import { getAllClients } from '../../store/Clients/action'

const UpdateClient = ({clientId, clients, updateClients }) => {
    const { register, handleSubmit, errors } = useForm();

    const chooseClients = clients.find(function (e) {
        return e.uid === clientId;
    });

    const onSubmit = data => {
        updateClients({...data, id: chooseClients.id, uid: chooseClients.uid})
        getAllClients()
    };

    return (
        <div className="update_block">
            <form className="update_form" onSubmit={handleSubmit(onSubmit)}>
                <div className="update_input">
                    <input
                        name="name"
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
                                value: /^[A-Za-z]+$/i,
                                message: "Incorrect user name",
                            },

                        })}
                        placeholder="Новое имя*"
                    />
                    <span>{errors.name && errors.name.message}</span>
                </div>
                <div className="update_input">
                    <input
                        name="lastName"
                        defaultValue=""
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
                                value: /^[A-Za-z]+$/i,
                                message: "Incorrect user name",
                            },

                        })}
                        placeholder="Новая Фамилия*"
                    />
                    <span>{errors.lastName && errors.lastName.message}</span>
                </div>
                <div className="update_input">
                    <input
                        name="clientInfo"
                        type="text"
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
                    <span>{errors.lastName && errors.lastName.message}</span>
                </div>
                <div className="registration_btn">
                    <button type="submit" className="btn">Редактировать</button>
                </div>
            </form>

        </div>
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
        getAllClients: () => dispatch(getAllClients()),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UpdateClient);