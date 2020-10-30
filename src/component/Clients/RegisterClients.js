import React from "react";
import {connect} from "react-redux";
import { useHistory } from 'react-router-dom'
import {signRegistr} from "../../store/Registration/action";
import {getAllClients} from "../../store/Clients/action";
import { useForm } from 'react-hook-form';

let SignRegistr = ({signRegistr, updateClients}) => {
    const { register, handleSubmit, errors } = useForm();
    let history = useHistory();

    const onSubmit = (data) => {
        signRegistr(data)
        updateClients()
        history.push("/")
    };

    return (
        <div className="registration_block">
            <h2>
                Регистрация
            </h2>
            <form className="registration_form" onSubmit={handleSubmit(onSubmit)}>
                <div className="register_input">
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
                                message: "Некорректное имя пользователя",
                            },

                        })}
                        placeholder="Имя*"
                        style={{ borderColor: errors.email && "red" }}
                    />
                    <span>{errors.name && errors.name.message}</span>
                </div>
                <div className="register_input">
                    <input
                        name="lastName"
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
                                message: "Некорректная фамилия пользователя",
                            },

                        })}
                        style={{ borderColor: errors.username && "red" }}
                        placeholder="Фамилия*"
                    />
                    <span>{errors.lastName && errors.lastName.message}</span>
                </div>
                <div className="register_input">
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
                        style={{ borderColor: errors.username && "red" }}
                        placeholder="Информация*"
                    />
                    <span>{errors.clientInfo && errors.clientInfo.message}</span>
                </div>
                <div className="registration_btn">
                    <button type="submit" className="btn">Зарегистрировать</button>
                </div>
            </form>

        </div>
    );
}

const mapStateToProps = (state) => {
    return{
        newClient: state.newClient.id
    }
};
const mapDispatchToProps = (dispatch) => {
    return{
        signRegistr: (user) => dispatch(signRegistr(user)),
        updateClients: () => dispatch(getAllClients()),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignRegistr);