import React, { Component } from 'react';
import api from '../../services/api';
import { Link } from 'react-router-dom';

import './styles.css';

export default class Adslist extends Component {
    state = {
        cafofoAds: []
    };

    //Executa a ação quando o elemento já é renderizado na tela
    componentDidMount() {
        this.loadAds();
    }

    loadAds = async () => {
        const response = await api.get('/ads');
        
        this.setState({ cafofoAds: response.data })
        //.data serve para ler as datas dentro das requisições de Docs 
        // Mudar de acordo com o banco de dados, junto com o BASEURL em api.js
    };

    isAvailable = (status) => {
        if (status == true) {
            return (
                <h3>Disponível</h3>
            )
        } else {
            return (
                <a>Indisponível </a>
            )
        }
    }

    render() {

        const { cafofoAds } = this.state;

        return (
            //Adicionando lista de anúncios
            <div className="listads">
                {cafofoAds.map(ads => (
                    //Para executar o .map é necessário adicionar uma key com valor único para cada elemento.
                    //Nesse caso, usamos o ID
                    <article key={ads.id}>
                        {ads.id}
                        <h1>{ads.title}</h1>
                        <h2>R$ {ads.price}</h2>
                        {this.isAvailable(ads.status)}
                        <Link to={`/cafofos/${ads.id}`}>Detalhes</Link>
                    </article>
                ))}
            </div>
        )




    }
}