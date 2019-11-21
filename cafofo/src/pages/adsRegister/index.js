import React, { Component } from 'react'
import axios from 'axios'
import { Form, Container } from "./styles";
import Header from "../../components/header/index";
import api from "../../services/api"
import { getToken, TOKEN_KEY } from "../../services/auth"
import InputMask from 'react-input-mask';

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
            owner: 'eu',
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
                                    placeholder="Quarto 20m² no Condomínio... "
                                    value={title}
                                    onChange={this.changeHandler}
                                    required
                                />
                                <h5>Descrição:<h6>*</h6></h5>
                                <span>Insira a descrição do seu anúncio.</span>
                                <textarea
                                    name="description"
                                    placeholder="Quarto totalmente decorado e mobiliado...  "
                                    value={description}
                                    onChange={this.changeHandler}
                                    required
                                />
                                <h5>CEP:<h6>*</h6></h5>
                                <span>Insira o CEP do seu cafofo.</span>
                                <InputMask
                                    name="location"
                                    value={location}
                                    onChange={this.changeHandler}
                                    placeholder="00000-000"
                                    mask="99999-999"
                                    maskChar={null}
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
                                <InputMask
                                    name="price"
                                    type="number"
                                    maskChar={null}
                                    // placeholder="750,00"
                                    value={price}
                                    onChange={this.changeHandler}
                                    required
                                />
                                <h5>Telefone para contato:<h6>*</h6></h5>
                                <span>Insira o telefone para contato do seu anúncio.</span>
                                <InputMask
                                    name="contact"
                                    type="tel"
                                    mask="(99)99999-9999"
                                    maskChar={null}
                                    placeholder="(00)00000-0000"
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
                                    // placeholder="2"

                                />
                            </div>

                            <div className="forms-collumn-2">
                                <h5>Despesas:<h6>*</h6></h5>
                                <span>Insira as despesas inclusas no valor de aluguel definido.</span>
                                <textarea
                                    name="expenses"
                                    placeholder="Água, Luz, Internet..."
                                    value={expenses}
                                    onChange={this.changeHandler}
                                    required
                                />
                                <h5>Comodidades:<h6>*</h6></h5>
                                <span>Insira as comodidades inclusas no valor de aluguel definido.</span>
                                <textarea
                                    name="commodities"
                                    placeholder="Cozinha, Academia, TV, Piscina, Ar-condicionado..."
                                    value={commodities}
                                    onChange={this.changeHandler}
                                    required
                                />
                                <h5>Políticas de Convivência:<h6>*</h6></h5>
                                <span>Insira as políticas de convivência do seu cafofo.</span>
                                <textarea
                                    name="terms"
                                    placeholder="Proibido fumar, Permitida a entrada de animais, Silêncio após as 22h, ..."
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
                                    // placeholder="Ex.: 5 quartos"
                                />
                                <h5>Banheiros:</h5>
                                <span>Insira a quantidade de banheiros disponíveis no seu cafofo.</span>
                                <input
                                    name="bathrooms"
                                    value={bathrooms}
                                    onChange={this.changeHandler}
                                    // placeholder="Ex.: 3 banheiros"
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
