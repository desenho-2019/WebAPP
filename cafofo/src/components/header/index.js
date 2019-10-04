import React, {Component} from 'react';
import Login from '../../pages/login/index';
import './styles.css';

import { Link } from 'react-router-dom';


const Header = () =>
    <header id='main-header'>
        <div id='logo-container'>
            Logo
        </div>
        <a id='title'>
            <Link to={'/'}>Cafofo</Link>
        </a>
        <div id='login-container'>
            <Link to={'/login'}>Login</Link>
        </div>
    </header>

export default Header;