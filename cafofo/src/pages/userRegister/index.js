import React, { Component } from "react";
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import { ToggleButtonGroup, ToggleButton } from 'react-bootstrap'

import { Form, Container } from "./styles";

export default class userRegister extends Component {
    constructor(props) {
        super(props);

        this.state = {
            nome: "",
            email: "",
            genero: "",
            nascimento: "",
            celular: "",
            foto: "",
            redesSociais: [],
            nacionalidade: "",
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
                <h1>Cadastre-se</h1>
                <input
                    type="text"
                    placeholder="Nome completo"
                    onChange={e => this.setState({ nome: e.target.value })}
                />
                <input
                    type="email"
                    placeholder="Endereço de e-mail"
                    onChange={e => this.setState({ email: e.target.value })}
                />
                <ToggleButtonGroup type="checkbox">
                    <ToggleButton>Masculino</ToggleButton>
                    <ToggleButton>Feminino</ToggleButton>
                </ToggleButtonGroup>
                <input
                    type="date"
                    placeholder="Data de nascimento"
                    onChange={e => this.setState({ nascimento: e.target.value })}
                />
                <input
                    type="phone"
                    placeholder="Telefone"
                    onChange={e => this.setState({ telefone: e.target.value })}
                />
                <input
                    type="file"
                    placeholder="Foto de perfil"
                    onChange={e => this.setState({ foto: e.target.value })}
                />
                <input
                    type="text"
                    placeholder="Nacionalidade"
                    onChange={e => this.setState({ nacionalidade: e.target.value })}
                />
                <input
                    type="password"
                    placeholder="Senha"
                    onChange={e => this.setState({ password: e.target.value })}
                />
                <button type="submit">Cadastrar</button>
                <hr />
                <Link to="/login">Já possui conta? Faça Login</Link>
                </Form>
            </Container>
        );
    }
}
