import React, {Component} from 'react';
import Login from '../../pages/login/index';
import './styles.css';

import { Link } from 'react-router-dom';


const Header = () =>
    <header id='main-header'>
        <img src="" alt=""></img>
        <a id='title'>
            <Link to={'/'}>Cafofo</Link>
        </a>
        <div id='buttons-header'>
            <div id='signup-container'>
                <Link to={'/cadastrar'}>Cadastrar</Link>
            </div>
            <div id='login-container'>
                <Link to={'/login'}>Login</Link>
            </div>
        </div>
    </header>

export default Header;