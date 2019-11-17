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

    submitHandler = e => {

        if (this.state.user.password !== this.state.user.confirmPassword) {
            alert("Confirmação de senha incorreta");
        }
        else {
            e.preventDefault();
            console.log(this.state)
            axios.post('http://localhost:8990/person/create/', this.state)
                .then(response => {
                    console.log("PERSON CREATE", response)
                    this.props.history.push('/login')
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
                        <option value='1'>Masculino</option>
                        <option value='2'>Feminino</option>
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
                                email: e.target.value,
                                password: this.state.user.password,
                                confirmPassword: this.state.user.confirmPassword
                            }
                        })}
                        required
                    />
                    <input
                        type="password"
                        placeholder="Digite uma Senha"
                        onChange={e => this.setState({
                            user: {
                                email: this.state.user.email,
                                password: e.target.value,
                                confirmPassword: this.state.user.confirmPassword
                            }
                        })}
                        required
                    />
                    <input
                        type="password"
                        placeholder="Confirme sua Senha"
                        onChange={e => this.setState({
                            user: {
                                email: this.state.user.email,
                                password: this.state.user.password,
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
