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
               <div className="first-line">
                    <div className="title-cafofo">
                        <h1>{adsDetail.title}</h1>
                    </div>
                    <div id="favorite-cafofo">
                        <i className="far fa-heart fa-3x"></i>
                    </div>
                </div>
                <div className='adress-cafofo'>
                    <div id='text-adress'>
                        <h6>{adsDetail.addres}</h6>
                    </div>
                    <div id="rate-cafofo">
                        <i className="fas fa-star"></i><h5>4,3</h5>
                    </div>
                </div>
                <div className="second-line">
                    <div className="owner-cafofo">
                        <i className="fas fa-circle fa-3x"></i><h5>{adsDetail.creator}</h5>
                    </div>
                    <div className="price-cafofo">
                        <h3>ALUGUEL DE</h3>
                        <h1>R$ {adsDetail.price}</h1>
                    </div>
                </div>
                <div className="third-line">
                    <div className="general-detail">
                        <i className="fas fa-mars fa-3x" id="male"></i>
                        <i className="fas fa-venus fa-3x" id="female"></i>    
                        <h5>3 HOSPEDES</h5>
                        <h5>2 QUARTOS</h5>
                        <h5>1 BANHEIRO</h5>
                    </div>
                    <div className="share-buttons">
                        <i className="fas fa-share-alt fa-3x" id="share"></i>
                        <i className="fas fa-phone-alt fa-3x" id="call"></i>
                        <i className="fab fa-whatsapp fa-3x" id="whatsapp"></i>
                    </div>
                </div>
                <div className="categories-cafofo">
                    <h5>DESCRIÇÃO:</h5>
                    <p>
                    {adsDetail.description}
                    {/*
                        1 quarto com banho de sol com um banho de sol tem todo o charme 
                        de um hotel, mas com o calor da casa. O quarto inclui um quintal 
                        privado com churrasqueira e sala de estar confortável e cozinha. 
                        1 bloco / 3 avenidas do ônibus / trem. 40 minutos para a Times Square.
                        */
                    }
                        
                    </p>
                </div>

                <div className="categories-cafofo">
                    <h5>DESPESAS INCLUSAS:</h5>
                    <table>
                        <tr>
                            <td>ÁGUA</td>
                            <td>INTERNET 120G</td>
                        </tr>
                        <tr>
                            <td>LUZ</td>
                            <td>CONDOMÍNIO</td>
                        </tr>
                    </table>
                </div>

                <div className="categories-cafofo">
                    <h5>COMODIDADES:</h5>
                    <table>
                        <tr>
                            <td>PISCINA</td>
                            <td>AR CONDICIONADO</td>
                            <td>GELADEIRA</td>
                        </tr>
                        <tr>
                            <td>MÁQUINA DE LAVAR</td>
                            <td>ACADEMIA</td>
                            <td>ELEVADOR</td>
                        </tr>
                    </table>
                </div>

                <div className="categories-cafofo">
                    <h5>POLÍTICAS DE CONVIVÊNCIA:</h5>
                    <table>
                        <tr>
                            <td>PROIBIDO FUMAR</td>
                            <td>SILÊNCIO APÓS AS 22H</td>
                        </tr>
                        <tr>
                            <td>LIBERADO ANIMAIS</td>
                        </tr>
                    </table>
                </div>

                
                <br />
               
             </div>
             </React.Fragment>
         )
     }
}