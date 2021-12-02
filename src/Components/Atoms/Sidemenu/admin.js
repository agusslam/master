import React from 'react'
import { Col, Row, Nav } from 'react-bootstrap'
import '../Sidemenu/admin.css'
import icoDashboard from '../../../Assets/Images/icon/user/dashboard.png'
import icoSimulasi from '../../../Assets/Images/icon/user/simulasi.png'
import icoAjukan from '../../../Assets/Images/icon/user/ajukan.png'

class SideMenu extends React.Component {
    render() {
        return (
            <Col md="3" className="wrapper-side-left">
                <Row className="wrapper-side-left-menu">
                    <Col md="12" className="wrap-ico">
                        <Nav.Link className="nav-style-user" href="/dashboardadmin" active={this.props.location.pathname.startsWith('/dashboardadmin')}><img className="ico" src={icoDashboard} alt="dashboard" />List Pengajuan</Nav.Link>
                    </Col>
                    <Col md="12" className="wrap-ico">
                    <Nav.Link className="nav-style-user" href="/dashboardlistadmin" active={this.props.location.pathname.startsWith('/dashboardlistadmin')}><img className="ico" src={icoSimulasi} alt="debiturlst" />Debitur Saya</Nav.Link>
                    </Col>
                    <Col md="12" className="wrap-ico">
                        <Nav.Link className="nav-style-user" href="/monitor" active={this.props.location.pathname.startsWith('/monitor')}><img className="ico" src={icoAjukan} alt="monitor" />Monitoring</Nav.Link>
                    </Col>
                </Row>
            </Col>
        )
    }
}

export default SideMenu