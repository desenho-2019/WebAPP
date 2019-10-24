import React, { Component } from "react";
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import ButtonFactory from '../../factory/button/index';

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
    }

    render() {
        return (
            <Container>
                <Form onSubmit={this.handleSubmit}>
                <h1>Acesse a sua conta</h1>
                <input
                    type="email"
                    placeholder="Endereço de e-mail"
                    onChange={e => this.setState({ email: e.target.value })}
                />
                <input
                    type="password"
                    placeholder="Senha"
                    onChange={e => this.setState({ password: e.target.value })}
                />
                <Link to="/esqueci-a-senha">Esqueceu sua senha?</Link>
                {ButtonFactory.factoryMethod('email')}
                {ButtonFactory.factoryMethod('facebook')}
                {ButtonFactory.factoryMethod('google')}

                <hr />
                <Link to="/cadastro">Cadastre-se</Link>
                </Form>
            </Container>
        );
    }
}
