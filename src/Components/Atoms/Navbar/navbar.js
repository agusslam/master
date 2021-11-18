import React from 'react'
import {connect} from 'react-redux'
import { Container, Navbar, NavDropdown, Nav } from 'react-bootstrap'
import { logout } from '../../../Actions/auth'

class navBar extends React.Component {
    
    handleLogout = () => {
        this.props.logoutAct()
    }

    render() {
        return (
            <Container fluid>
                <Navbar bg="light" expand="lg">
                    <Container>
                        <Navbar.Brand href="#home">APP-KU</Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="me-auto">
                                <Nav.Link href="#home">Home</Nav.Link>
                                <Nav.Link href="#link">Simulasi</Nav.Link>
                                <NavDropdown title={this.props.userData} id="basic-nav-dropdown">
                                    <NavDropdown.Item onClick={this.handleLogout}>Sign Out</NavDropdown.Item>
                                </NavDropdown>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </Container>
        )
    }
}

const mapsStateToProps = (state) => ({
    userData: state.rootReducer.user,
    isLogin: state.rootReducer.isLoggedIn,
})

const mapsDispatchToProps = (dispatch) => ({
    logoutAct: () => dispatch(logout())
})


export default connect(mapsStateToProps, mapsDispatchToProps)(navBar)