import React, { Component } from "react";
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from "axios";

import { Form, Container } from "./styles";

export default class userRegister extends Component {
    constructor(props) {
        super(props);

        this.state = {
            user: {
                email: "",
                password: "",
                confirmPassword: "",
            },
            first_name: "",
            gender: "",
            date_of_birth: "",
            phone: "",
            photo: "",
            facebook: "",
            google: "",
            nationality: "",
            surname: "a",
        };
    }

    componentDidMount() {

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
        /*
        if (this.state.user !== this.state.confirmPassword) {
            alert("Confirmação de senha incorreta");
        }
        else */{
            e.preventDefault();
            console.log(this.state)
            axios.post('http://localhost:8990/person/create/', this.state)
                .then(response => {
                    console.log("PERSON CREATE", response)

                    /*
                    axios.get('http://localhost:8990/user/list/')
                        .then(response => {
                            console.log("USER LIST", response)
                            const lista = response.data
                            const mapa = lista.map(
                                (user) => {
                                    console.log(user.id, user.email);
                                    if (user.email === this.state.email) {
                                        this.setState({ user: user.id })
                                    }
                                }
                            )
                    */  /*
                            axios.post(`http://localhost:8990/person/all/`, this.state)
                                .then(res => {
                                    console.log("PERSON", res)
                                })
                                .catch(error => {
                                    console.log(error)
                                })
                               

                        })
                        .catch(error => {
                            console.log(error)
                        })
                         */

                })
                .catch(error => {
                    console.log(error)
                })
        }
    }

    render() {

        return (
            <Container>
                <Form onSubmit={this.submitHandler}>
                    <h1>Cadastre-se</h1>
                    <hr />
                    <br></br>

                    <input
                        type="text"
                        placeholder="Nome completo"
                        onChange={e => this.setState({ first_name: e.target.value })}
                        required
                    />
                    <select
                        type="select"
                        onChange={e => this.setState({ gender: e.target.value })}
                        required>
                        <option>Selecione</option>
                        <option>Masculino</option>
                        <option>Feminino</option>
                    </select>
                    <input
                        type="date"
                        placeholder="Data de nascimento"
                        onChange={e => this.setState({ date_of_birth: e.target.value })}
                        required
                    />
                    <input
                        type="phone"
                        placeholder="Telefone"
                        onChange={e => this.setState({ phone: e.target.value })}
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
                        onChange={e => this.setState({ photo: e.target.value })}
                    />
                    <input
                        type="text"
                        placeholder="Nacionalidade"
                        onChange={e => this.setState({ nationality: e.target.value })}
                    />
                    <input
                        type="email"
                        placeholder="Endereço de e-mail"
                        onChange={e => this.setState({
                            user: {
                                email: e.target.value
                            }
                        })}
                        required
                    />
                    <input
                        type="password"
                        placeholder="Digite uma Senha"
                        onChange={e => this.setState({
                            user: {
                                password: e.target.value
                            }
                        })}
                        required
                    />
                    <input
                        type="password"
                        placeholder="Confirme sua Senha"
                        onChange={e => this.setState({
                            user: {
                                confirmPassword: e.target.value
                            }
                        })}
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
