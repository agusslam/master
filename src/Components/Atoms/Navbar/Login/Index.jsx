import React from 'react'

import { Navbar, Nav, Container } from 'react-bootstrap'
import { NavLink } from 'react-router-dom';
import '../Login/Login.css'
import logo from '../../../../Assets/Images/logo-kbnobg.png'

class NavbarLogin extends React.Component {
    // constructor(props) {
    //     super(props)
    //     console.log(props)
    // }
    render() {
        const homeClass = this.props.location.pathname === "/" ? "activeX" : "style-nav";
        const kprClass = this.props.location.pathname.match(/^\/kpr/) ? "activeX" : "style-nav";
        const aboutClass = this.props.location.pathname.match(/^\/tentang/) ? "activeX" : "style-nav";
        const contactClass = this.props.location.pathname.match(/^\/contact/) ? "activeX" : "style-nav";
        const signinClass = this.props.location.pathname.match(/^\/signin/) ? "activeX" : "style-nav";
        const registerClass = this.props.location.pathname.match(/^\/register/) ? "style-nav-orange-active" : "style-nav-orange";

        return (
            <Container fluid={true} className="p-0">
                <Navbar id="navbar2">
                    <Nav className="logo-white"><img src={logo} alt="Logo" /></Nav>
                    <Nav className="menu">
                        <Nav className="wrapper-list-menu">
                            <NavLink className={homeClass} exact={true} to="/">BERANDA</NavLink>
                            <NavLink className={kprClass} exact={true} to="/kpr">KPR</NavLink>
                            <NavLink className={aboutClass} exact={true} to="/tentang">TENTANG KAMI</NavLink>
                            <NavLink className={contactClass} exact={true} to="/contact">KONTAK</NavLink>
                            <NavLink className={signinClass} exact={true} to="/signin">MASUK</NavLink>
                            <NavLink className={registerClass} exact={true} to="/register">REGISTRASI</NavLink>
                        </Nav>
                    </Nav>
                </Navbar>
            </Container>
        )
    }
}

export default NavbarLogin