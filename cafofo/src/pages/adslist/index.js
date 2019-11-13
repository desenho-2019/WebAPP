import React, { Component } from 'react';
import api from '../../services/api';
import { Link } from 'react-router-dom';
import DateFilter from '../../components/day-picker';
import NumericInput from 'react-numeric-input';
import Range from 'rc-slider';
import 'rc-slider/assets/index.css';

import './styles.css';

export default class Adslist extends React.Component {
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

            <div>
                <div className="filter-bar">
                    <div className="filter-date">
                        <label>Data</label><br/>
                        <DateFilter/>
                    </div>
                    <div className="filter-price">
                        <label>Preço</label><br/>
                        <Range min={0} max={20} defaultValue={[3, 10]} tipFormatter={value => `${value}%`} />
                    </div>
                    <div className="filter-bedroom">
                        <label>Quartos</label><br/>
                        <NumericInput mobile min={1} value={1}/>
                    </div>
                    <div className="filter-bathroom">
                        <label>Banheiros</label><br/>
                        <NumericInput mobile min={1} value={1}/>
                    </div>
                </div>
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
                                <h3>R$ {ads.price}</h3>
                            </Link>
                        </div>
                    ))}
                </div>
            </div>

        )
    }
}