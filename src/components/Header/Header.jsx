import React from 'react';
import { NavLink } from 'react-router-dom';
import style from './Header.module.css';

const Header = (props) => {
    return <header className={style.header}>
        <img src='https://cdn.scores24.ru/upload/team/w90-h90/975/75a/a6ec0b18d947221764d8721aa9095d8673.png' />

        <div className={style.loginBlock}>
            { props.isAuth ? props.login : <NavLink to='/login'>Login</NavLink> }
        </div>
    </header>
}

export default Header;
