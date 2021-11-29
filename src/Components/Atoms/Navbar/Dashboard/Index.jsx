import React from 'react'
import { Navbar, Nav, NavDropdown } from 'react-bootstrap'
import Cookies from 'universal-cookie'
import { connect } from 'react-redux'
import { logout } from '../../../../Actions/auth'

// const cookies = new Cookies()
import '../Dashboard/Index.css'
import logo from '../../../../Assets/Images/logo-kbnobg.png'
import thumbnail from '../../../../Assets/Images/thumnail.png'

class NavbarDash extends React.Component {

    handleLogout = () => {
        this.props.logoutAct()
    }

    componentDidMount() {
        console.log(this.props)
    }

    render() {
        return (
            <Navbar id="navbar">
                <Nav className="logo-white"><img src={logo} alt="Logo" /></Nav>
                <Nav className="menu">
                    <Nav className="wrapper-list-menu-white">
                        <NavDropdown title={
                            <div className="pull-left">
                                {this.props.userData}
                                <img className="thumbnail-image"
                                    src={thumbnail}
                                    alt="user pic"
                                />                                
                            </div>
                        } id="basic-nav-dropdown">
                            <NavDropdown.Item onClick={this.handleLogout}>Sign Out</NavDropdown.Item>
                        </NavDropdown>
                        <Nav.Link className="style-nav"></Nav.Link>
                    </Nav>
                </Nav>
            </Navbar>
        )
    }
}

const mapsStateToProps = (state) => ({
    isLoading: state.rumahReducer.isLoading,
    userData: state.rootReducer.user,
    isLogin: state.rootReducer.isLoggedIn,
    Role: state.rootReducer.akses
})

const mapsDispatchToProps = (dispatch) => ({
    logoutAct: () => dispatch(logout())
})

export default connect(mapsStateToProps, mapsDispatchToProps)(NavbarDash)