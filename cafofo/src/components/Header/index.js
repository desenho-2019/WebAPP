import React, {Component} from 'react';
import Login from '../../pages/login/index'
import './styles.css';



const Header = () =>
    <header id='main-header'>
        <div id='logo-container'>
            Logo
        </div>
        <a id='title'>
            Cafofo
        </a>
        <div id='login-container'>
            <a id='login-button' href={<Login/>} >Entrar</a>
        </div>
    </header>

export default Header;