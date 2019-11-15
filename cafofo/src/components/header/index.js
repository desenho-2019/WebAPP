import React, { Component } from 'react';
import { Nav, Navbar, Container, Form, Button, FormControl, NavDropdown } from 'react-bootstrap';
import './styles.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';


class Header extends Component {
	/*
	  Linha de Código para simular usuário logado
	*/
	
	render() {
		//localStorage.removeItem('token')
		localStorage.setItem('token', '1')

		if (localStorage.getItem('token')) {
			//navbar logada
			return (
				<Navbar className="navbar navbar-light" bg="light" expand="lg">
					<Navbar.Brand href="/" id="brand-icon">
						<img
							alt=""
							src="/cafofo_favicon.png"
							width="35"
							height="30"
							className="d-inline-block align-top"
						/>
						<img
							id="logo-letter"
							alt=""
							src="/cafofoLogoLetter.png"
							width="70"
							height="30"
							className="d-inline-block align-top"
						/>
					</Navbar.Brand>
					<Navbar.Toggle aria-controls="basic-navbar-nav" />
					<input className="header-search-bar" type="text" name="search" placeholder="Pesquisar cafofos..."></input>
					<Navbar.Collapse id="justify-content-end">
						<Nav className="ml-auto">
							<Nav.Link className="button-header" href="/">SALVOS</Nav.Link>
							<Nav.Link className="button-header" href="/">AJUDA</Nav.Link>
							<Nav.Link className="button-header" href="/cafofos">CAFOFOS</Nav.Link>
							<Nav.Link className="button-header" href="/register-cafofo">ANUNCIE UM CAFOFO</Nav.Link>
							<NavDropdown className="photo-header" alignRight title={
								<i class="fas fa-adjust fa-2x"></i>
							} 
							id="dropdown-item-button">
								<NavDropdown.Item id="item-photo-header" href="">Perfil</NavDropdown.Item>
								<NavDropdown.Item id="item-photo-header" href="">Conta</NavDropdown.Item>
								<NavDropdown.Divider />
								<NavDropdown.Item id="item-photo-header" href="">Sair</NavDropdown.Item>
							</NavDropdown>
						</Nav>
					</Navbar.Collapse>
				</Navbar>
			)

		} else {
			return (
				<Navbar className="navbar navbar-light" bg="light" expand="lg">
					<Navbar.Brand href="/" id="brand-icon">
						<img
							alt=""
							src="/cafofo_favicon.png"
							width="35"
							height="30"
							className="d-inline-block align-top"
						/>
						<img
							id="logo-letter"
							alt=""
							src="/cafofoLogoLetter.png"
							width="70"
							height="30"
							className="d-inline-block align-top"
						/>
					</Navbar.Brand>
					<Navbar.Toggle aria-controls="basic-navbar-nav" />
					<Navbar.Collapse id="justify-content-end">
						<Nav className="ml-auto">
							<Nav.Link className="button-header" href="/login">LOGIN</Nav.Link>
							<Nav.Link className="button-header" href="/cadastro">CADASTRO</Nav.Link>
							<Nav.Link className="button-active" href="/cadastro" >ANUNCIE UM CAFOFO</Nav.Link>
						</Nav>
					</Navbar.Collapse>
				</Navbar>
			)

		}

	}

}

export default Header;