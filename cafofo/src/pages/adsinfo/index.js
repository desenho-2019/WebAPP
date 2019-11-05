import React, { Component, Fragment }  from 'react';
import api from '../../services/api';
import { Slider } from './slider';

import './styles.css';

export default class Adsinfo extends Component {
    state = {
        cafofoAds: []
    };
    
    async componentDidMount() {
        const { id } = this.props.match.params;
 
         const response = await api.get(`/cafofos/${id}`);
 
         this.setState({ cafofoAds: response.data });
 
     }

     render() {
         const { cafofoAds } = this.state;
         
         return (
             <React.Fragment>
             <Slider />
             <div className='info-cafofo' >
                <h1>Nome do Anúncio{cafofoAds.title}</h1>
                <p>Detalhes sobre ele, falando sobre tudo, como acomodações, quantas pessoas moram...</p>
                <br />
                <br />
                <p>Outros detalhes</p>
                <br />
                <br />
                <p>E mais outros</p>
                <br />
                <br />
                <p>Varios</p>
             </div>
             </React.Fragment>
         )
     }
}