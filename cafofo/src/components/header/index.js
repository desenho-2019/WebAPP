import React, {Component} from 'react';
import { Nav, Navbar } from 'react-bootstrap'
import './styles.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';


const Header = () =>
<Navbar bg="light" expand="lg">
<Navbar.Brand href="/">
      <img
        alt=""
        src="/cafofo_favicon.png"
        width="30"
        height="25"
        className="d-inline-block align-top"
      />
      {'Cafofo'}
</Navbar.Brand>
<Navbar.Toggle aria-controls="basic-navbar-nav" />
<Navbar.Collapse id="basic-navbar-nav">
  <Nav className="mr-auto">
    <Nav.Link href="/login">Login</Nav.Link>
    <Nav.Link href="/cadastro">Cadastro</Nav.Link>
  </Nav>
</Navbar.Collapse>
</Navbar>

{/* <header id='main-header'>
    <div id='logo-container'>
        Logo
    </div>
    <a id='title'>
        <Link to={'/'}>Cafofo</Link>
    </a>
    <div id='login-container'>
        <Link to={'/login'}>Login</Link>
    </div>
</header> */}

export default Header;