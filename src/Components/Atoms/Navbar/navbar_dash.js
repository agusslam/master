import React from 'react'
import { Navbar, Nav, NavDropdown } from 'react-bootstrap'
import { connect } from 'react-redux'
import { logout } from '../../../Actions/auth'

// import '../../../Assets/CSS/style.navbar.css'
import logo from '../../../Assets/images/logo-kbnobg.png'

class NavbarDash extends React.Component {

    handleLogout = () => {
        this.props.logoutAct()
    }

    componentDidMount(){
        console.log(this.props)
    }

    render() {
        if (!this.props.isLogin){
            window.location.href = '/signin';
        }

        return (
            <Navbar id="navbar">
                <Nav className="logo-white"><img src={logo} alt="Logo" /></Nav>
                <Nav className="menu">
                    <Nav className="wrapper-list-menu-white">
                        <NavDropdown title={this.props.userData} id="basic-nav-dropdown">
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
})

const mapsDispatchToProps = (dispatch) => ({
    logoutAct: () => dispatch(logout())
})

export default connect(mapsStateToProps, mapsDispatchToProps)(NavbarDash)