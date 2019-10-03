import React, { Component } from 'react';
import api from '../../services/api'

import './styles.css';

export default class Adsinfo extends Component {
    state = {
        cafofoAds: []
    };
    
    async componentDidMount() {
        const { id } = this.props.match.params;
 
         const response = await api.get('/cafofos/${id}');
 
         this.setState({ cafofoAds: response.data });
 
     }
    
     render() {
         const { cafofoAds } = this.state;
         
         return (
             <div className="info-cafofo">
                 <h1>{cafofoAds.title}</h1>
                 <p>{cafofoAds.price}</p>
 
                 <p>
                     Localização: <a href={cafofoAds.location}>{cafofoAds.location}</a>
                 </p>
             </div>
         )
     }
}