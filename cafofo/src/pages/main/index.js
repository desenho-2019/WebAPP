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
                            <div className='search-bar'>
                                <p className="line-1 anim-typewriter">ENCONTRE O CAFOFO IDEAL PARA DIVIDIR!</p>
                                <input id="location-insert" type="text" name="search" placeholder="Onde você deseja morar?">
                                </input>
                                <button className="button" id="search-button"><i class="fa fa-search"></i></button>
                            </div>
                            <Link to="/cafofos">
                                <button className="button" id="list-button"><i>IR PARA CAFOFOS</i></button>

                            </Link>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}
