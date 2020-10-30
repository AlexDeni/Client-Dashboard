import React, { useState, useRef, useEffect  } from 'react';
import {NavLink} from "react-router-dom";

export const MenuButton = ({handleClick, isMenuOpen}) => {
    const handle = () => {
        return isMenuOpen
    }
    return(
        <div id="header_menu_icon"
             className={isMenuOpen ? 'active' : ''}
             onClick={() => { handleClick(handle())}}
        >
            <span/>
            <span/>
            <span/>
        </div>
    )
}

export const MobileMenu = () => {
    const [isMenuBlock, toggleBlock] = useState(false);
    const node = useRef();

    const toggleMenu = (value) => {
        toggleBlock(!value)
    }

    useOnClickOutside(node, () => {
        if (isMenuBlock) {
            toggleMenu(true)
        }
    });

    return(
        <div ref={node} className="mob_menu">
            <MenuButton handleClick={toggleMenu} isMenuOpen={isMenuBlock} />
            <div className={isMenuBlock ? 'open_menu' : 'close_menu'}>
                <div className="mob_menu_nan">
                    <NavLink onClick={toggleMenu} to="/">Главная</NavLink>
                    <NavLink onClick={toggleMenu} to="/registration">Регистрация</NavLink>
                    <NavLink to="/editor">Редактирования</NavLink>
                    <NavLink onClick={toggleMenu} to="/author">Автор</NavLink>
                </div>
            </div>
        </div>
    )
}

export const useOnClickOutside = (ref, handler) => {
    useEffect(() => {
        const listener = event => {
            if (!ref.current || ref.current.contains(event.target)) {
                return null;
            }
            handler();
        };
        document.addEventListener('mousedown', listener);
    }, [ref, handler]);
};