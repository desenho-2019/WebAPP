import React, { Component } from 'react';
import api from '../../services/api';

import './styles.css';

export default class Main extends Component {
    state = {
        ads: []
    };
    
    //Executa a ação quando o elemento já é renderizado na tela
    componentDidMount() {
        this.loadAds();
    }

    loadAds = async () => {
        const response = await api.get('/ads');

        this.setState({ ads: response.data.docs })
        //.data.docs serve para ler as datas dentro das requisições de Docs 
        // Mudar de acordo com o banco de dados, junto com o BASEURL em api.js
    };

    render() {

        const { ads } = this.state;

        return (
            //Adicionando lista de anúncios
            <div className="ads-list"> 
                {ads.map(ads => (
                    //Para executar o .map é necessário adicionar uma key com valor único para cada elemento.
                    //Nesse caso, usamos o ID
                    <article key={ads._id}>
                        <strong>{ads.title}</strong>
                        <h2>{ads.price}</h2>
                        <h3>{ads.status}</h3>
                    </article>
                ))}
            </div>
        )
    }
}