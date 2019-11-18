import React, { Component } from "react";
import { Link, Redirect } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import ButtonFactory from '../../factory/button/index';
import axios from 'axios'
import { login } from "../../services/auth";
import api from "../../services/api";
import Header from "../../components/header/index";

import { Form, Container, div } from "./styles";

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

    handleSubmit = async e => {
        e.preventDefault();
        console.log(this.state)
        api.post('user/api/token/', this.state)
            .then(response => {
                login(response.data.token);
                this.props.history.push("/");
            })
            .catch(error => {
                console.log(error)
                alert("E-mail ou senha inválidos!");
            })
    }

    render() {
        const { email, password } = this.state;
        return (
            <div>
            <Container>
                <Form onSubmit={this.handleSubmit}>
                    <h1>Entrar</h1>

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
                    <div id="button-factory">
                        {ButtonFactory.factoryMethod('facebook')}
                        {ButtonFactory.factoryMethod('google')}
                    </div>
                    <Link to="/cadastro">Cadastre-se</Link>
                </Form>
            </Container>
            <div className="gambiarra"></div>
            </div>
        );
    }
}
