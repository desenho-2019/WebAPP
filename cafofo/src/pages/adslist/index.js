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
        const response = await api.get('/cafofos');
    
        this.setState({ cafofoAds: response.data })
        //.data.docs serve para ler as datas dentro das requisições de Docs 
        // Mudar de acordo com o banco de dados, junto com o BASEURL em api.js
    };

    render() {

        const { cafofoAds } = this.state;

        return (
            //Adicionando lista de anúncios
            <div className="container-ads wrap"> 
                {cafofoAds.map(ads => (
                    //Para executar o .map é necessário adicionar uma key com valor único para cada elemento.
                    //Nesse caso, usamos o ID
                    <div key={ads.id}>
                        <Link to={`/cafofos/${ads.id}`}>
                            <img src={ads.img}/>
                            <strong>{ads.title}</strong>
                            <h2>{ads.addres}</h2>
                            <h4>Quartos {ads.room} • Banheiros {ads.bathroom}</h4>
                            <h3> R$ {ads.price}</h3>
                        </Link>
                    </div>
                ))}
            </div>
        )
    }
}