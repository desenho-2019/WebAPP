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
            <div>
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

                    <button type="submit">Submit</button>


                </form>

            </div>
        )
    }
}
