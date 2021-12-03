import React from 'react'
import { Navbar, Nav, NavDropdown } from 'react-bootstrap'
import { connect } from 'react-redux'
import { logout } from '../../../../Actions/auth'
import ModalDialogProfile from '../../Modals/Profile'
import '../Dashboard/Index.css'
import logo from '../../../../Assets/Images/logo-kbnobg.png'
import thumbnail from '../../../../Assets/Images/thumnail.png'

class NavbarDash extends React.Component {
    constructor(props) {
        super(props)
        this.showProfil = this.showProfil.bind(this);
    }

    handleLogout = () => {
        this.props.logoutAct()
    }

    showProfil = () => {
        this.props.setDialog2()
        // this.props.setTextDialog2()
    }

    componentDidMount() {
        console.log(this.state)
    }

    componentDidUpdate() {
        console.log(this.state)
    }

    render() {
        return (
            <Navbar id="navbar">
                <ModalDialogProfile show={this.props.isOpenDialog2} onHide={this.handleClose} title={this.props.titleD} />
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
                        } id="basic-nav-dropdown" onClick={this.showProfil}>
                            {/* <NavDropdown.Item onClick={this.handleLogout}>Sign Out</NavDropdown.Item> */}
                        </NavDropdown>
                        <Nav.Link className="style-nav"></Nav.Link>
                    </Nav>
                </Nav>
            </Navbar>
        )
    }
}

const mapsStateToProps = (state) => ({
    isOpenDialog2: state.modalReducer.openProfil,
    titleD: state.modalReducer.titleAlert,
    isLoading: state.rumahReducer.isLoading,
    userData: state.rootReducer.user,
    isLogin: state.rootReducer.isLoggedIn,
    Role: state.rootReducer.akses
})

const mapsDispatchToProps = (dispatch) => ({
    logoutAct: () => dispatch(logout()),
    setDialog2: () => dispatch({ type: 'CHANGE_PROFIL', value: true }),
    // setTextDialog2: (data) => dispatch({ type: 'CHANGE_TEXTDIALOG', value: data }),
    setCloseDialog: () => dispatch({ type: 'CHANGE_DIALOG', value: false })
})

export default connect(mapsStateToProps, mapsDispatchToProps)(NavbarDash)