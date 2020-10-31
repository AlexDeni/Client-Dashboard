import React from 'react';
import { MobileMenu } from './MobileMenu'
import { NavLink } from "react-router-dom";
import logo from "../../static/logo.png";

const Menu = () => {

    return (
        <div className="container">
            <div className="header_block">
                <div className="logo">
                    <NavLink to="/">
                        <img src={logo} alt="logo"/>
                        <span>Clients Dashboard</span>
                    </NavLink>
                </div>
                <nav className="nav_header">
                    <NavLink to="/">Главная</NavLink>
                    <NavLink to="/registration">Регистрация</NavLink>
                    <NavLink to="/editor">Редактирования</NavLink>
                    <NavLink to="/author">Автор</NavLink>
                </nav>
            </div>

        </div>
    )
}

const Header = () => {
    return (
        <header>
            <MobileMenu/>
            <Menu/>
        </header>
    );
};


export { Header };
