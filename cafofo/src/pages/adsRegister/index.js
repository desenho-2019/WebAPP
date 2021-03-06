import React, { Component } from 'react'
import axios from 'axios'
import { Form, Container } from "./styles";
import Header from "../../components/header/index";
import api from "../../services/api"
import { getToken, TOKEN_KEY } from "../../services/auth"

export default class AdsRegister extends Component {
    constructor(props) {
        super(props)

        this.state = {
            title: '',
            description: '',
            image: '',
            price: '',
            expenses: '',
            commodities: '',
            contact: '',
            terms: '',
            target_gender: '',
            owner: '',
            rooms: '',
            bathrooms: '',
            location: '',
            guests: '',
            area: 20,

        }
    }

    changeHandler = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    }


    submitHandler = e => {
        e.preventDefault()
        console.log(this.state)

        api.post('/cards/mycards/', this.state)
            .then(response => {
                console.log(response)
                api.post(`vacancy/${response.data.pk}/leaf`, this.state)
                    .then(res => {
                        console.log(res)
                    })
                    .catch(error => {
                        console.log(error)
                    })
            })
            .catch(error => {
                console.log(error)
                alert(error)
            })

    }

    render() {
        const { title, description, image, price, expenses, commodities,
            contact, terms, target_gender, status, owner, rooms, bathrooms,
            location, guests } = this.state;
        return (
            <>
                <Header />
                <Container>
                    <Form onSubmit={this.submitHandler}>
                        <h1>VAMOS CRIAR SEU ANÚNCIO!</h1>
                        <hr />
                        <br />
                        <div id='forms-subtitle'>
                            <p>Insira as informações do seu anúncio para que seu cafofo esteja completo! </p>
                            <p>Quanto mais detalhes sobre a vaga, maior a chance de seu anúncio receber visitas!</p>
                            <br />
                        </div>
                        <div className="forms-container">
                            <div className="forms-collumn-1">
                                <h5>Título: <h6>*</h6></h5>
                                <span>Insira o título do seu anúncio.</span>
                                <input
                                    name="title"
                                    type="text"
                                    placeholder="Ex.: Quarto 20m² no Condomínio... "
                                    value={title}
                                    onChange={this.changeHandler}
                                    required
                                />
                                <h5>Descrição:<h6>*</h6></h5>
                                <span>Insira a descrição do seu anúncio.</span>
                                <textarea
                                    name="description"
                                    placeholder="Ex.: Quarto localizado no condomínio X, quadra X, totalmente decorado e mobiliado...  "
                                    value={description}
                                    onChange={this.changeHandler}
                                    required
                                />
                                <h5>CEP:<h6>*</h6></h5>
                                <span>Insira o CEP do seu cafofo.</span>
                                <input
                                    name="location"
                                    value={location}
                                    onChange={this.changeHandler}
                                    placeholder="Ex.: 00.000-000"
                                    required

                                />
                                <h5>Fotos do Cafofo:</h5>
                                <span>Insira fotos do cafofo anunciado.</span>
                                <br />
                                <input
                                    name="file"
                                    type="file"
                                    placeholder="Fotos do cafofo"
                                    value={image}
                                    onChange={this.changeHandler}
                                    className="inputfile"
                                    id='file'
                                />
                                <label for="file">Escolher imagens</label>

                                <h5>Valor do Aluguel:<h6>*</h6></h5>
                                <span>Insira o valor final de aluguel a ser pago.</span>
                                <input
                                    name="price"
                                    type="number"
                                    placeholder="Ex.: R$ 750,00"
                                    value={price}
                                    onChange={this.changeHandler}
                                    required
                                />
                                <h5>Telefone para contato:<h6>*</h6></h5>
                                <span>Insira o telefone para contato do seu anúncio.</span>
                                <input
                                    name="contact"
                                    type="tel"
                                    placeholder="Ex.: (XX) 9 XXXX-XXXX"
                                    value={contact}
                                    onChange={this.changeHandler}
                                    required
                                />
                                <h5>Vagas:</h5>
                                <span>Insira a quantidade de vagas no seu cafofo.</span>
                                <input
                                    name="guests"
                                    value={guests}
                                    onChange={this.changeHandler}
                                    placeholder="Ex.: 2 Vagas"

                                />
                            </div>

                            <div className="forms-collumn-2">
                                <h5>Despesas:<h6>*</h6></h5>
                                <span>Insira as despesas inclusas no valor de aluguel definido.</span>
                                <textarea
                                    name="expenses"
                                    placeholder="Ex.: Água, Luz, Internet, ..."
                                    value={expenses}
                                    onChange={this.changeHandler}
                                    required
                                />
                                <h5>Comodidades:<h6>*</h6></h5>
                                <span>Insira as comodidades inclusas no valor de aluguel definido.</span>
                                <textarea
                                    name="commodities"
                                    placeholder="Ex.: Cozinha, Academia, TV, Piscina, Ar-condicionado, Estacionamento, ..."
                                    value={commodities}
                                    onChange={this.changeHandler}
                                    required
                                />
                                <h5>Políticas de Convivência:<h6>*</h6></h5>
                                <span>Insira as políticas de convivência do seu cafofo.</span>
                                <textarea
                                    name="terms"
                                    placeholder="Ex.: Proibido fumar, Permitida a entrada de animais, Silêncio após as 22h, ..."
                                    value={terms}
                                    onChange={this.changeHandler}
                                    required
                                />
                                <h5>Gênero:<h6>*</h6></h5>
                                <span>Insira qual gênero é permitido no seu cafofo.</span>
                                <select
                                    name="target_gender"
                                    onChange={this.changeHandler}
                                    value={target_gender}
                                    required
                                >
                                    <option value="ambos">Qualquer gênero</option>
                                    <option value="feminino">Apenas feminino</option>
                                    <option value="masculino">Apenas masculino</option>
                                </select>

                                {//status = true
                                }


                                {// Tem que mandar este nome via USER
                                    //owner = "Anunciante"
                                }
                                <h5>Quartos:</h5>
                                <span>Insira a quantidade de quartos disponíveis no seu cafofo.</span>
                                <input
                                    name="rooms"
                                    value={rooms}
                                    onChange={this.changeHandler}
                                    placeholder="Ex.: 5 quartos"
                                />

                            </div>
                        </div>
                        <button type="submit">Cadastrar anúncio</button>

                    </Form>
                </Container>
            </>
        )
    }
}
