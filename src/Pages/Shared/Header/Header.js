import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import './Header.css'
import logo from '../../../images/logo.png';

const Header = () => {
    return (
        <div >
            <Navbar collapseOnSelect expand="lg" fixed="top" variant="dark" bg='primary'>
                <Container>
                    <Navbar.Brand href="#home">

                        <img className='w-50 ' src={logo} alt="" />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                        </Nav>
                        <Nav className='header'>
                            <Nav.Link className={({ isActive }) => (isActive ? "active-link" : "header")} href="#home">HOME</Nav.Link>
                            <Nav.Link className={({ isActive }) => (isActive ? "active-link" : "header")} to="/about">ABOUT</Nav.Link>
                            <Nav.Link className={({ isActive }) => (isActive ? "active-link" : "header")} href="home#services">SERVICES</Nav.Link>
                            <Nav.Link className={({ isActive }) => (isActive ? "active-link" : "header")} href="home#experts">EXPERTS</Nav.Link>

                            {/* <Nav.Link href="home#services">Services</Nav.Link> */}
                            {/* <Nav.Link href="home#experts">Experts</Nav.Link> */}
                            <NavLink className={({ isActive }) => (isActive ? "active-link" : "header")} to="/login">LOGIN</NavLink>

                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;