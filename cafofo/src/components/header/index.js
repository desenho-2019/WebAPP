import React, {Component} from 'react';
import { Nav, Navbar, Container } from 'react-bootstrap';
import './styles.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';


const Header = () =>

<Navbar className="navbar navbar-light" bg="light" expand="lg">
<Navbar.Brand href="/" id="brand-icon">
      <img
        alt=""
        src="/cafofo_favicon.png"
        width="30"
        height="25"
        className="d-inline-block align-top"
      />
      {' Cafofo'}
</Navbar.Brand>
<Navbar.Toggle aria-controls="basic-navbar-nav" />
<Navbar.Collapse id="justify-content-end">
  <Nav className="ml-auto">
    <Nav.Link className="button-header" href="/login">LOGIN</Nav.Link>
    <Nav.Link className="button-header" href="/cadastro">CADASTRO</Nav.Link>
    <Nav.Link className="button-active" href="/cadastro">ANUNCIE UM CAFOFO</Nav.Link>
  </Nav>
</Navbar.Collapse>
</Navbar>

export default Header;