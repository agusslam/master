import React from 'react'
import { connect } from 'react-redux'
import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap'
import { NavLink } from 'react-router-dom';
import ModalDialogProfile from '../../Modals/Profile'
import { logout } from '../../../../Actions/auth'
import '../Login/Login.css'
import logo from '../../../../Assets/Images/logo-kbnobg.png'
import thumbnail from '../../../../Assets/Images/thumnail.png'

class NavbarLogin extends React.Component {
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

    componentDidMount(){
        console.log(this.props.userData)
    }

    render() {
        const homeClass = this.props.location.pathname === "/" ? "activeX" : "style-nav";
        const kprClass = this.props.location.pathname.match(/^\/kpr/) ? "activeX" : "style-nav";
        const aboutClass = this.props.location.pathname.match(/^\/tentang/) ? "activeX" : "style-nav";
        const contactClass = this.props.location.pathname.match(/^\/contact/) ? "activeX" : "style-nav";
        const signinClass = this.props.location.pathname.match(/^\/signin/) ? "activeX" : "style-nav";
        const registerClass = this.props.location.pathname.match(/^\/register/) ? "style-nav-orange-active" : "style-nav-orange";
        if (this.props.isLogin) {
            return (
                <Container fluid={true}>
                    <ModalDialogProfile show={this.props.isOpenDialog2} onHide={this.handleClose} title={this.props.titleD} />
                    <Navbar id="navbar2">
                        <Nav className="logo-white"><img src={logo} alt="Logo" /></Nav>
                        <Nav className="menu">
                            <Nav className="wrapper-list-menu">
                                <NavLink className={homeClass} exact={true} to="/">BERANDA</NavLink>
                                <NavLink className={kprClass} exact={true} to="/signin">KPR</NavLink>
                                <NavLink className={aboutClass} exact={true} to="/tentang">TENTANG KAMI</NavLink>
                                <NavLink className={contactClass} exact={true} to="/contact">KONTAK</NavLink>
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
                            </Nav>
                        </Nav>
                    </Navbar>
                </Container>
            )
        } else {
            return (
                <Container fluid={true}>
                    <Navbar id="navbar2">
                        <Nav className="logo-white"><img src={logo} alt="Logo" /></Nav>
                        <Nav className="menu">
                            <Nav className="wrapper-list-menu">
                                <NavLink className={homeClass} exact={true} to="/">BERANDA</NavLink>
                                <NavLink className={kprClass} exact={true} to="/signin">KPR</NavLink>
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
}

const mapsStateToProps = (state) => ({
    isLoading: state.rumahReducer.isLoading,
    userData: state.rootReducer.user,
    isLogin: state.rootReducer.isLoggedIn,
    isOpenDialog2: state.modalReducer.openProfil,
    titleD: state.modalReducer.titleAlert,
})

const mapsDispatchToProps = (dispatch) => ({
    logoutAct: () => dispatch(logout()),
    setDialog2: () => dispatch({ type: 'CHANGE_PROFIL', value: true }),
    // setTextDialog2: (data) => dispatch({ type: 'CHANGE_TEXTDIALOG', value: data }),
    setCloseDialog: () => dispatch({ type: 'CHANGE_DIALOG', value: false })
})

export default connect(mapsStateToProps, mapsDispatchToProps)(NavbarLogin)