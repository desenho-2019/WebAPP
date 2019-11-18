import React, { Component } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Form, Container } from "./styles";


export default class ForgotPassword extends Component {
    constructor(props) {
        super(props);

        this.state = {
            email: ""
        };
    }

    validadeForm() {
        return this.state.email.length > 0;
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
                    <h1>Redefinir senha</h1>
                    <a>Insira o endereço de email associado à sua conta que lhe enviaremos um link de redefinição de senha</a>
                    <input
                        type="email"
                        placeholder="Endereço de e-mail"
                        onChange={e => this.setState({ email: e.target.value })}
                    />
                    <button type="submit">Enviar link de redefinição</button>
                    <hr />
                </Form>
            </Container>
        );
    }
}