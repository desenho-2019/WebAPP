import React, { Component } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import api from '../../services/api'
import axios from 'axios'


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
            status: true,
            owner: '',
            rooms: '',
            bathrooms: '',
            location: '',
            guests: ''
        }
    }

    changeHandler = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    }

    submitHandler = e => {
        e.preventDefault()
        console.log(this.state)
        axios.post('https://5dc0cce395f4b90014ddc92c.mockapi.io/cafofos', this.state)
            .then(response => {
                console.log(response)
            })
            .catch(error => {
                console.log(error)
            })
    }

    render() {
        const { title, description, image, price, expenses, commodities,
            contact, terms, target_gender, status, owner, rooms, bathrooms,
            location, guests } = this.state;
        return (
            <div style={{ flexDirection: "row" }}>
                <h1>Vamos criar seu anúncio</h1>
                <form onSubmit={this.submitHandler}>

                    <input
                        name="title"
                        type="text"
                        placeholder="Título"
                        value={title}
                        onChange={this.changeHandler}
                    />
                    <textarea
                        name="description"
                        placeholder="Descrição"
                        value={description}
                        onChange={this.changeHandler}
                    />

                    <input
                        name="image"
                        type="file"
                        placeholder="Fotos do cafofo"
                        value={image}
                        onChange={this.changeHandler}
                    />

                    <input
                        name="price"
                        type="number"
                        placeholder="Valor do aluguel"
                        value={price}
                        onChange={this.changeHandler}
                    />
                    <textarea
                        name="expenses"
                        placeholder="Despesas"
                        value={expenses}
                        onChange={this.changeHandler}
                    />
                    <textarea
                        name="commodities"
                        placeholder="Comodidades"
                        value={commodities}
                        onChange={this.changeHandler}
                    />
                    <input
                        name="contact"
                        type="tel"
                        placeholder="Telefone"
                        value={contact}
                        onChange={this.changeHandler}
                    />
                    <textarea
                        name="terms"
                        placeholder="Políticas de convivência"
                        value={terms}
                        onChange={this.changeHandler}
                    />
                    <select
                        name="target_gender"
                        onChange={this.changeHandler}
                        value={target_gender}
                    >
                        <option value="ambos">Qualquer</option>
                        <option value="feminino">Feminino</option>
                        <option value="masculino">Masculino</option>
                    </select>

                    {//status = true
                    }


                    {// Tem que mandar este nome via USER
                        //owner = "Anunciante"
                    }

                    <input
                        name="rooms"
                        value={rooms}
                        onChange={this.changeHandler}
                        placeholder="Quantidade de quartos disponíveis"
                    />

                    <input
                        name="bathrooms"
                        value={bathrooms}
                        onChange={this.changeHandler}
                        placeholder="Quantidade de bathrooms disponíveis"

                    />

                    <input
                        name="location"
                        value={location}
                        onChange={this.changeHandler}
                        placeholder="CEP"

                    />

                    <input
                        name="guests"
                        value={guests}
                        onChange={this.changeHandler}
                        placeholder="Vagas"

                    />



                    <button type="submit">Submit</button>


                </form>

            </div>
        )
    }
}
