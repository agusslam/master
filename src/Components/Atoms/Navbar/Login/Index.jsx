import React from 'react'

import { Navbar, Nav, Container } from 'react-bootstrap'

import '../Login/Login.css'
import logo from '../../../../Assets/Images/logo-kbnobg.png'

class NavbarLogin extends React.Component {
    constructor(props){
        super(props)
        console.log(props)
    }
    render() {
        return (
            <Container fluid={true} className="p-0">
                <Navbar id="navbar2">
                    <Nav className="logo-white"><img src={logo} alt="Logo" /></Nav>
                    <Nav className="menu">
                        <Nav className="wrapper-list-menu-white">
                            {/* <Nav.Link className="style-nav" href="/" activeClassName="style-nav-active" active={this.props.location.pathname === '/'}>BERANDA</Nav.Link> */}
                            <Nav.Link className="style-nav" href="/" active={this.props.location.pathname === '/'}>BERANDA</Nav.Link>
                            <Nav.Link className="style-nav">KPR</Nav.Link>
                            <Nav.Link className="style-nav" href="/tentang" active={this.props.location.pathname.startsWith('/tentang')}>TENTANG KAMI</Nav.Link>
                            <Nav.Link className="style-nav" href="/contact" active={this.props.location.pathname === '/contact'} >KONTAK</Nav.Link>
                            <Nav.Link className="style-nav" href="/signin" active={this.props.location.pathname.startsWith('/signin')}>MASUK</Nav.Link>
                            <Nav.Link className="style-nav-orange" href="/register" active={this.props.location.pathname.startsWith('/register')}>DAFTAR</Nav.Link>
                        </Nav>
                    </Nav>
                </Navbar>
            </Container>
        )
    }
}

export default NavbarLogin