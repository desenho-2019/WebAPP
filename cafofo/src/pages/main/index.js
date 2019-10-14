import React, { Component } from 'react';
import api from '../../services/api';
import { Link } from 'react-router-dom';

import './styles.css';

export default class Main extends Component {

    render() {
        return (
            <div className='mainpage'>
              <div id='shadowimage'>
              <form>
              <div className='center'>
              <p>ENCONTRE O CAFOFO IDEAL PARA DIVIDIR! </p>
              <input type="text" name="search" placeholder="Onde você deseja morar?">
              </input>
              <button class="button">BUSCAR</button>
              </div>
              </form>
              </div>
            </div>
        )
    }
}
