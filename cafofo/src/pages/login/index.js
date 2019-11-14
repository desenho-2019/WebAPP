import React, { Component } from "react";
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import ButtonFactory from '../../factory/button/index';
import axios from 'axios'

import { Form, Container } from "./styles";

export default class Login extends Component {
    constructor(props) {
        super(props);

        this.state = {
            email: "",
            password: ""
        };
    }

    validateForm() {
        return this.state.email.length > 0 && this.state.password.length > 0;
    }

    handleChange = event => {
        this.setState({
            [event.target.id]: event.target.value
        });
    }

    handleSubmit = event => {
        event.preventDefault();
        console.log(this.state)
        axios.post('http://localhost:8990/user/api/token/', this.state)
            .then(response => {
                console.log(response)
                localStorage.setItem('token', response.access);
            })
            .catch(error => {
                console.log(error)
            })
    }

    render() {
        const { email, password } = this.state;
        return (
            <Container>
                <Form onSubmit={this.handleSubmit}>
                    <h1>Entrar</h1>
                    <div id="button-factory">
                        {ButtonFactory.factoryMethod('email')}
                        {ButtonFactory.factoryMethod('facebook')}
                        {ButtonFactory.factoryMethod('google')}
                    </div>

                    <input
                        name="email"
                        type="email"
                        placeholder="Endereço de e-mail"
                        onChange={e => this.setState({ email: e.target.value })}
                    />
                    <input
                        name="password"
                        type="password"
                        placeholder="Senha"
                        onChange={e => this.setState({ password: e.target.value })}
                    />
                    <button type="submit">Entrar</button>
                    <Link to="/esqueci-a-senha">Esqueceu sua senha?</Link>

                    <hr />
                    <Link to="/cadastro">Cadastre-se</Link>
                </Form>
            </Container>
        );
    }
}
