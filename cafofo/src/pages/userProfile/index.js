import React, { Component } from 'react';
import profileApi from '../../services/profileApi';

export default class userProfile extends Component {
    state = {
        perfil: []
    };


    componentDidMount() {
        this.loadProfile();
    }

    loadProfile = async () => {
        const response = await profileApi.get('/User/1');

        this.setState({ perfil: response.data })
    }

    render() {
        const { perfil } = this.state;

        return (
            <div>
                    <h1>Usuário: {perfil.name}</h1>
            </div>
        )
    }
}