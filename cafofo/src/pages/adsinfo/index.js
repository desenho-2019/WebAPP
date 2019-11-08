import React, { Component } from 'react';
import api from '../../services/api'

import { Form, Container } from './styles';

export default class Adsinfo extends Component {
    state = {
        cafofoAds: []
    };
    
    async componentDidMount() {
        const { id } = this.props.match.params;
 
         const response = await api.get('/cafofos/${id}');
 
         this.setState({ cafofoAds: response.data });
 
     }
    
     render() {
         return (
            <Container> 
                <Form>  
                    <h1>Cafofo</h1>
                </Form>
            </Container>
         );
     }
}