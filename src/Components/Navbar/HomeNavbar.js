import React from 'react'
import { Navbar, Nav } from 'react-bootstrap';
import logo from '../../Assets/Images/logo-kbnobg.png'

class NavbarHomepage extends React.Component {
    render() {
        return (
            <Navbar id="navbarhome" className="navbar-light bg-calm">
                <Nav.Link className="style-logo"><img src={logo} alt="Logo KB"></img></Nav.Link>
                <Nav className="menu">
                    <Nav className="wrapper-list-menu-white">
                        <Nav.Link className="style-navhome">HOME</Nav.Link>
                        <Nav.Link className="style-navhome">KPR</Nav.Link>
                        <Nav.Link className="style-navhome">ABOUT</Nav.Link>
                        <Nav.Link className="style-navhome">CONTACT US</Nav.Link>
                        <Nav.Link className="style-navhome">SIGN IN</Nav.Link>
                        <Nav.Link className="subscribe">SIGN UP</Nav.Link>
                    </Nav>
                </Nav>
            </Navbar>

        )
    }
}

export default NavbarHomepage