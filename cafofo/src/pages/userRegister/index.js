import React, { Component } from "react";
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from "axios";

import { Form, Container } from "./styles";

export default class userRegister extends Component {
    constructor(props) {
        super(props);

        this.state = {
            nome: "",
            genero: "",
            nascimento: "",
            celular: "",
            foto: "",
            facebook: "",
            nacionalidade: "",
            email: "",
            password: "",
            confirmPassword: ""
        };
    }

    validateForm() {
        return this.state.email.length > 0 && this.state.password.length > 0;
    }

    changeHandler = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    }

    handleConfirmPassword = (event) => {
        if (event.target.value !== this.state.password) {
            alert("Confirmação de senha incorreta");
            this.setState({ confirmPassword: event.target.value })
        }
    }

    handleSubmit = (event) => {
        if (this.state.password !== this.state.confirmPassword) {
            alert("Confirmação de senha incorreta");
        }
        else {
            event.preventDefault();
            ;
        }
    }

    submitHandler = e => {
        e.preventDefault()
        console.log(this.state)
        axios.post('http://localhost:8990/user/create/', [this.state.email, this.state.password])
            .then(response => {
                console.log(response)
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
                    <h1>Cadastre-se</h1>
                    <hr />
                    <br></br>
                    <input
                        type="text"
                        placeholder="Nome completo"
                        onChange={e => this.setState({ nome: e.target.value })}
                        required
                    />
                    <select
                        type="select"
                        onChange={e => this.setState({ genero: e.target.value })}
                        required>
                        <option>Selecione</option>
                        <option>Masculino</option>
                        <option>Feminino</option>
                        <option>Outro</option>
                    </select>
                    <input
                        type="date"
                        placeholder="Data de nascimento"
                        onChange={e => this.setState({ nascimento: e.target.value })}
                        required
                    />
                    <input
                        type="phone"
                        placeholder="Telefone"
                        onChange={e => this.setState({ telefone: e.target.value })}
                        required
                    />
                    <input
                        type="text"
                        placeholder="Facebook"
                        onChange={e => this.setState({ facebook: e.target.value })}
                    />

                    <input
                        id="file"
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
                        name="email"
                        type="email"
                        placeholder="Endereço de e-mail"
                        onChange={e => this.setState({ email: e.target.value })}
                        required
                    />
                    <input
                        name="password"
                        type="password"
                        placeholder="Digite uma Senha"
                        onChange={e => this.setState({ password: e.target.value })}
                        required
                    />
                    <input
                        type="password"
                        placeholder="Confirme sua Senha"
                        onChange={e => this.setState({ confirmPassword: e.target.value })}
                        required
                    />
                    <button type="submit">Cadastrar</button>
                    <hr />
                    <Link to="/login">Já possui conta? Faça Login</Link>
                </Form>
            </Container>
        );
    }
}
