import React from 'react'
// import {Link} from 'react-router-dom'
import { Navbar, Nav } from 'react-bootstrap'
// import '../../../Assets/CSS/style.navbar.css'
import logo from '../../../Assets/images/logo-kbnobg.png'

class NavbarLogin extends React.Component {
    render(){
        return (
            <Navbar id="navbar">
                <Nav className="logo-white"><img src={logo} alt="Logo" /></Nav>
                <Nav className="menu">
                    <Nav className="wrapper-list-menu-white">
                        <Nav.Link className="style-nav" href="/">HOME</Nav.Link>
                        <Nav.Link className="style-nav">KPR</Nav.Link>
                        <Nav.Link className="style-nav">ABOUT US</Nav.Link>
                        <Nav.Link className="style-nav">CONTACT</Nav.Link>
                        <Nav.Link className="style-nav" href="/signin">SIGN IN</Nav.Link>
                        <Nav.Link className="style-nav" href="/register">SIGN UP</Nav.Link>
                    </Nav>
                </Nav>
            </Navbar>
        )
    }
}

export default NavbarLogin