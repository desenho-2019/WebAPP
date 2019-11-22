import React, { Component } from 'react';
import api from '../../services/api';
import { Link } from 'react-router-dom';
import Range from 'rc-slider';
import { Multiselect } from "multiselect-react-dropdown";
import 'rc-slider/assets/index.css';
import Header from "../../components/header/index";
import { images } from "../adsinfo/images";


import './styles.css';

export default class Adslist extends Component {

    state = {
        cafofoAds: [],
        objectArray: [
            { key: "Piscina", id: 1 },
            { key: "Máquina de lavar", id: 2 },
            { key: "Mobiliado", id: 3 },
            { key: "Ferro de passar", id: 4 },
        ],
    }

    //Executa a ação quando o elemento já é renderizado na tela
    componentDidMount() {
        this.loadAds();
    };

    loadAds = () => {
        api.get('cards/personal/')
            .then(response => {
                console.log("Teste", response)
                this.setState({ cafofoAds: response.data })
            })
            .catch(e => {
                console.log(e)
            })
    };

    getRandom(e) {
        return (Math.floor(Math.random() * e + 1))
    }

    render() {

        const { plainArray, objectArray, selectedValues } = this.state;
        const { cafofoAds } = this.state;

        return (
            <div>
                <Header />
                <div className="filter-bar">
                    <div className="filter-price">
                        <label>Preço</label><br />
                        <Range min={0} max={20} defaultValue={[3, 10]} tipFormatter={value => `${value}%`} />
                    </div>
                    <div className="filter-genre">
                        <label>Gênero</label><br />
                        <form>
                            <select id="genre" name="genre">
                                <option value="masc">Apenas Masculino</option>
                                <option value="fem">Apenas Feminino</option>
                                <option value="indef">Indefinido</option>
                            </select>
                        </form>
                    </div>
                    <div class="filter-amenities">
                        <label>Comodidades</label><br />
                        <Multiselect
                            options={objectArray}
                            displayValue="key"
                        // selectedValues={selectedValues}
                        />
                    </div>
                </div>
                <hr />
                <div className="container-ads wrap">
                    {cafofoAds.map(ads => (
                        //Para executar o .map é necessário adicionar uma key com valor único para cada elemento.
                        //Nesse caso, usamos o ID
                        <div key={ads.pk}>
                            <Link to={`/cafofos/${ads.pk}`}>
                                <img src={images[ads.pk]} />
                                <div id="container-ads-text">
                                    <strong>{ads.title}</strong>
                                    <h2>{ads.location}</h2>
                                    <h2>{ads.addres}</h2>
                                    <h4>{ads.rooms} {this.getRandom(2)} Quartos • {this.getRandom(2)} Banheiro</h4>
                                    {ads.vacancies.map(prices => <h3>R${prices.price}</h3>)}
                                </div>
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        )
    }
}