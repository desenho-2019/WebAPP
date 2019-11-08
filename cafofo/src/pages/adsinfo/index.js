import React, { Component, Fragment }  from 'react';
import api from '../../services/api';
import { Slider } from './slider';

import './styles.css';

export default class Adsinfo extends Component {
    state = {
        adsDetail: []
    };
    
    async componentDidMount() {
        
        const { id } = this.props.match.params;
 
         const response = await api.get(`/cafofos/${id}`);
 
         this.setState({ adsDetail: response.data });
     }

     isAvailable = (status) => {
        if (status == true) {
            return (
                <p id="status-dis">DISPONÍVEL</p>
            )
        } else {
            return (
                <p id="status-indis">INDISPONÍVEL</p>
            )
        }
    }

     render() {
         const { adsDetail } = this.state;
         
         return (
             <React.Fragment>
             <Slider />
             <div className='info-cafofo' key={adsDetail.id}>
                <div className='status-cafofo'>
                    {this.isAvailable(adsDetail.status)}
                </div>
               <div className="second-line">
                    <div className="title-cafofo">
                        <h1>1 QUARTO 20m² NO CONDOMÍNIO GAMAGGIORE</h1>
                    </div>
                    <div id="favorite-cafofo">
                        <i className="far fa-heart fa-5x"></i>
                    </div>
                </div>
                <div className='adress-cafofo'>
                    <div id='text-adress'>
                        <h6>CONDOMÍNIO GAMAGGIORE - SETOR INDUSTRIAL - GAMA/DF</h6>
                    </div>
                    <div id="rate-cafofo">
                        <h5>4,3</h5>
                    </div>
                </div>
                <br />
               
             </div>
             </React.Fragment>
         )
     }
}