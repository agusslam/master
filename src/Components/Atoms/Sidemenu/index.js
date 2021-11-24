import React from 'react'
import { Col, Row, Nav } from 'react-bootstrap'

import icoDashboard from '../../../Assets/images/icon/user/dashboard.png'
import icoSimulasi from '../../../Assets/images/icon/user/simulasi.png'
import icoAjukan from '../../../Assets/images/icon/user/ajukan.png'
import icoOur from '../../../Assets/images/icon/user/our.png'
import icoAbout from '../../../Assets/images/icon/user/about.png'
import icoContact from '../../../Assets/images/icon/user/contact.png'

class SideMenu extends React.Component {
    render() {
        return (
            <Col md="3" className="wrapper-side-left">
                <Row className="wrapper-side-left-menu">
                    <Col md="12" className="wrap-ico">
                        <img className="ico" src={icoDashboard} alt="dashboard" /><Nav.Link href="/dashboardmember">Dashboard</Nav.Link>
                    </Col>
                    <Col md="12" className="wrap-ico">
                        <img className="ico" src={icoSimulasi} alt="simulasi" /><Nav.Link href="/simulasikpr">Simulasi KPR</Nav.Link>
                    </Col>
                    <Col md="12" className="wrap-ico">
                        <img className="ico" src={icoAjukan} alt="ajukan" /><Nav.Link href="/ajukankpr">Ajukan KPR</Nav.Link>
                    </Col>
                    <Col md="12" className="wrap-ico">
                        <img className="ico" src={icoOur} alt="our website" /><Nav.Link href="/bukopin">Our Website</Nav.Link>
                    </Col>
                    <Col md="12" className="wrap-ico">
                        <img className="ico" src={icoAbout} alt="about us" /><Nav.Link href="/aboutus">About Us</Nav.Link>
                    </Col>
                    <Col md="12" className="wrap-ico">
                        <img className="ico" src={icoContact} alt="login-pro" /><Nav.Link href="/contact">Contact</Nav.Link>
                    </Col>
                </Row>
            </Col>
        )
    }
}

export default SideMenu