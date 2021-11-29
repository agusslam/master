import React from 'react'

import { Navbar, Nav, Container } from 'react-bootstrap'

import '../Login/Login.css'
import logo from '../../../../Assets/Images/logo-kbnobg.png'

class NavbarLogin extends React.Component {
    render() {
        return (
            <Container fluid={true} className="p-0">
                <Navbar id="navbar2">
                    <Nav className="logo-white"><img src={logo} alt="Logo" /></Nav>
                    <Nav className="menu">
                        <Nav className="wrapper-list-menu-white">
                            <Nav.Link className="style-nav" href="/" active={this.props.location.pathname.startsWith('/home')}>HOME</Nav.Link>
                            <Nav.Link className="style-nav">KPR</Nav.Link>
                            <Nav.Link className="style-nav">ABOUT US</Nav.Link>
                            <Nav.Link className="style-nav" href="/contact" active={this.props.location.pathname.startsWith('/contact')} >CONTACT</Nav.Link>
                            <Nav.Link className="style-nav" href="/signin" active={this.props.location.pathname.startsWith('/signin')}>SIGN IN</Nav.Link>
                            <Nav.Link className="style-nav" href="/register" active={this.props.location.pathname.startsWith('/register')}>SIGN UP</Nav.Link>
                        </Nav>
                    </Nav>
                </Navbar>
            </Container>

        )
    }
}

export default NavbarLogin