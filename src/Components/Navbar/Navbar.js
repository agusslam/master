import React from 'react'
import { Navbar, Nav } from 'react-bootstrap';

class NavbarProduct extends React.Component {
    render() {
        return (
            <Navbar id="navbar">
                <Nav.Link className="logo-white" href="http://localhost:8009/"></Nav.Link>
                <Nav className="menu">
                    <Nav className="wrapper-list-menu-white">
                        <Nav.Link className="style-nav">HOME</Nav.Link>
                        <Nav.Link className="style-nav">KPR</Nav.Link>
                        <Nav.Link className="style-nav">ABOUT</Nav.Link>
                        <Nav.Link className="subscribe">CONTACT US</Nav.Link>
                        <Nav.Link className="subscribe">DAFTAR</Nav.Link>
                        <Nav.Link className="subscribe">LOGIN</Nav.Link>
                    </Nav>
                </Nav>
            </Navbar>

        )
    }
}

export default NavbarProduct

// Ga usah dipake 