import React from 'react'
import { Col, Row, Nav } from 'react-bootstrap'
import '../Sidemenu/index.css'
import icoDashboard from '../../../Assets/Images/icon/user/dashboard.png'
import icoSimulasi from '../../../Assets/Images/icon/user/simulasi.png'
import icoAjukan from '../../../Assets/Images/icon/user/ajukan.png'
import icoOur from '../../../Assets/Images/icon/user/our.png'
import icoAbout from '../../../Assets/Images/icon/user/about.png'
import icoContact from '../../../Assets/Images/icon/user/contact.png'

class SideMenu extends React.Component {
    render() {
        return (
            <Col md="3" className="wrapper-side-left">
                <Row className="wrapper-side-left-menu">
                    <Col md="12" className="wrap-ico">
                        <Nav.Link className="nav-style-user" href="/dashboardmember" active={this.props.location.pathname.startsWith('/dashboardmember')}><img className="ico" src={icoDashboard} alt="dashboard" />Dashboard</Nav.Link>
                    </Col>
                    <Col md="12" className="wrap-ico">
                    <Nav.Link className="nav-style-user" href="/simulasi" active={this.props.location.pathname.startsWith('/simulasi')}><img className="ico" src={icoSimulasi} alt="simulasi" />Simulasi KPR</Nav.Link>
                    </Col>
                    <Col md="12" className="wrap-ico">
                        <Nav.Link className="nav-style-user" href="/ajukankpr" active={this.props.location.pathname.startsWith('/ajukankpr')}><img className="ico" src={icoAjukan} alt="ajukan" />Ajukan KPR</Nav.Link>
                    </Col>
                    <Col md="12" className="wrap-ico">
                        <Nav.Link className="nav-style-user" href="/bukopin" active={this.props.location.pathname.startsWith('/bukopin')}><img className="ico" src={icoOur} alt="our website" />Our Website</Nav.Link>
                    </Col>
                    <Col md="12" className="wrap-ico">
                        <Nav.Link className="nav-style-user" href="/aboutus" active={this.props.location.pathname.startsWith('/aboutus')}><img className="ico" src={icoAbout} alt="about us" />About Us</Nav.Link>
                    </Col>
                    <Col md="12" className="wrap-ico">
                        <Nav.Link className="nav-style-user" href="/contact" active={this.props.location.pathname.startsWith('/contact')}><img className="ico" src={icoContact} alt="login-pro" />Contact</Nav.Link>
                    </Col>
                </Row>
            </Col>
        )
    }
}

export default SideMenu