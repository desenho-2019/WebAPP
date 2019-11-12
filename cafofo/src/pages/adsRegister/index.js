import React, { Component } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';

export default class AdsRegister extends Component {
    constructor() {
        super();

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
            status: false,
            owner: '',
            rooms: '',
            bathrooms: '',
            location: '',
            guests: ''

        }

        this.title = this.title.bind(this);
        this.description = this.description.bind(this);
        this.image = this.image.bind(this);
        this.price = this.price.bind(this);
        this.expenses = this.expenses.bind(this);
        this.commodities = this.commodities.bind(this);
        this.contact = this.contact.bind(this);
        this.terms = this.terms.bind(this);
        this.target_gender = this.target_gender.bind(this);
        this.status = this.status.bind(this);
        this.owner = this.owner.bind(this);
        this.rooms = this.rooms.bind(this);
        this.bathrooms = this.bathrooms.bind(this);
        this.location = this.location.bind(this);
        this.guests = this.guests.bind(this);
        this.register = this.register.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    title(event) {
        this.setState({ title: event.target.value })
    }
    description(event) {
        this.setState({ description: event.target.value })
    }
    image(event) {
        this.setState({ image: event.target.value })
    }
    price(event) {
        this.setState({ price: event.target.value })
    }
    expenses(event) {
        this.setState({ expenses: event.target.value })
    }
    commodities(event) {
        this.setState({ commodities: event.target.value })
    }
    contact(event) {
        this.setState({ contact: event.target.value })
    }
    terms(event) {
        this.setState({ terms: event.target.value })
    }
    target_gender(event) {
        this.setState({ target_gender: event.target.value })
    }
    status(event) {
        this.setState({ status: event.target.value })
    }
    owner(event) {
        this.setState({ owner: event.target.value })
    }
    rooms(event) {
        this.setState({ rooms: event.target.value })
    }
    bathrooms(event) {
        this.setState({ bathrooms: event.target.value })
    }
    location(event) {
        this.setState({ location: event.target.value })
    }
    guests(event) {
        this.setState({ guests: event.target.value })
    }

    register(event) {

        fetch('https://5dc0cce395f4b90014ddc92c.mockapi.io/cafofos', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({

                title: this.state.title,
                description: this.state.description,
                image: this.state.image,
                price: this.state.price,
                expenses: this.state.expenses,
                commodities: this.state.commodities,
                contact: this.state.contact,
                terms: this.state.terms,
                target_gender: this.state.target_gender,
                status: this.state.status,
                owner: this.state.owner,
                rooms: this.state.rooms,
                bathrooms: this.state.bathrooms,
                location: this.state.location,
                guests: this.state.guests,
            })
        }).then((Response) => Response.json())
            .then((Result) => {
                if (Result.Status == 'Success')
                    this.props.history.push("/cafofos");
                else
                    alert('Usuário não cadastrado!')
            })
    }

    render() {
        return (
            <div>
                <h1>Vamos criar seu anúncio</h1>

                <input
                    type="text"
                    placeholder="Título"
                    onChange={this.title}
                    required
                />

                <textarea onChange={this.description} />

                <input
                    type="file"
                    placeholder="Fotos do cafofo"
                    onChange={this.image}
                />

                <input
                    type="number"
                    placeholder="Preço do aluguel"
                    onChange={this.price}
                />

                <input
                    type="text"
                    placeholder="Despesas"
                    onChange={this.expenses}
                />

                <FormControl onChange={this.target_gender}>
                    <FormLabel>
                        Gênero
                    </FormLabel>

                    <RadioGroup defaultValue="ambos">
                        <FormControlLabel value="ambos" label="ambos" />
                        <FormControlLabel value="faminino" label="feminino" />
                        <FormControlLabel value="masculino" label="masculino" />
                    </RadioGroup>
                </FormControl>
                <button onClick={this.register()}>Adicionar data na API</button>


            </div>
        )
    }
}
