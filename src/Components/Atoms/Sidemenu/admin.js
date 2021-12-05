import React from 'react'
import { Col, Row, NavLink } from 'react-bootstrap'
import '../Sidemenu/admin.css'
import icoDashboard from '../../../Assets/Images/icon/user/dashboard.png'
import icoSimulasi from '../../../Assets/Images/icon/user/simulasi.png'
import icoAjukan from '../../../Assets/Images/icon/user/ajukan.png'

class SideMenu extends React.Component {
    render() {
        const dashAdminClass = this.props.location.pathname === "/dashboardadmin" ? "nav-style-admin-orange" : "nav-style-admin";
        const dashLisAdminClass = this.props.location.pathname.startsWith("/dashboardlistadmin") ? "nav-style-admin-orange" : "nav-style-admin";
        const dashMonAdminClass = this.props.location.pathname === "/monitor" ? "nav-style-admin-orange" : "nav-style-admin";
        return (
            <Col md="3" className="wrapper-side-left-admin">
                <Row className="wrapper-side-left-menu-admin">
                    <Col md="12" className="wrap-ico">
                        <NavLink className={dashAdminClass} exact="true" href="/dashboardadmin"><img className="ico" src={icoDashboard} alt="dashboard" />List Pengajuan</NavLink>
                    </Col>
                    <Col md="12" className="wrap-ico">
                        <NavLink className={dashLisAdminClass} exact="true" href="/dashboardlistadmin"><img className="ico" src={icoSimulasi} alt="dashboard" />Debitur Saya</NavLink>
                    </Col>
                    <Col md="12" className="wrap-ico">
                    <NavLink className={dashMonAdminClass} exact="true" href="/monitor"><img className="ico" src={icoAjukan} alt="dashboard" />Monitoring</NavLink>
                    </Col>
                </Row>
            </Col>
        )
    }
}

export default SideMenu