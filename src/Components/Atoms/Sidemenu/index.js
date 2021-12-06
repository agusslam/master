import React from 'react'
import { Col, Row, NavLink } from 'react-bootstrap'
import '../Sidemenu/index.css'
import icoDashboard from '../../../Assets/Images/icon/user/dashboard.png'
import icoSimulasi from '../../../Assets/Images/icon/user/simulasi.png'
import icoAjukan from '../../../Assets/Images/icon/user/ajukan.png'
import icoOur from '../../../Assets/Images/icon/user/our.png'
import icoAbout from '../../../Assets/Images/icon/user/about.png'
import icoContact from '../../../Assets/Images/icon/user/contact.png'

class SideMenu extends React.Component {
    render() {
        const dashClass = this.props.location.pathname === "/dashboardmember" ? "nav-style-user-orange" : "nav-style-user";
        const simulasiClass = this.props.location.pathname === "/simulasi" ? "nav-style-user-orange" : "nav-style-user";
        const ajukanClass = this.props.location.pathname.startsWith("/ajukankpr") ? "nav-style-user-orange" : "nav-style-user";
        const bukopinClass = this.props.location.pathname === "/bukopin" ? "nav-style-user-orange" : "nav-style-user";
        const tentangClass = this.props.location.pathname === "/tentang" ? "nav-style-user-orange" : "nav-style-user";
        const contClass = this.props.location.pathname === "/contact" ? "nav-style-user-orange" : "nav-style-user";
        return (
            <Col md="3" className="wrapper-side-left">
                <Row className="wrapper-side-left-menu">
                    <Col md="12" className="wrap-ico">
                        <NavLink className={dashClass} exact="true" href="/dashboardmember"><img className="ico" src={icoDashboard} alt="dashboard" />Dashboard</NavLink>
                    </Col>
                    <Col md="12" className="wrap-ico">
                        <NavLink className={simulasiClass} exact="true" href="/simulasi"><img className="ico" src={icoSimulasi} alt="simulasi" />Simulasi KPR</NavLink>
                    </Col>
                    <Col md="12" className="wrap-ico">
                        <NavLink className={ajukanClass} exact="true" href="/ajukankpr"><img className="ico" src={icoAjukan} alt="ajukan" />Ajukan KPR</NavLink>
                    </Col>
                    <Col md="12" className="wrap-ico">
                        <NavLink className={bukopinClass} exact="true" href="/bukopin"><img className="ico" src={icoOur} alt="dashboard" />Situs Web</NavLink>
                    </Col>
                    <Col md="12" className="wrap-ico">
                        <NavLink className={tentangClass} exact="true" href="/tentang"><img className="ico" src={icoAbout} alt="dashboard" />Tentang Kami</NavLink>
                    </Col>
                    <Col md="12" className="wrap-ico">
                        <NavLink className={contClass} exact="true" href="/contact"><img className="ico" src={icoContact} alt="dashboard" />Kontak</NavLink>
                    </Col>
                </Row>
            </Col>
        )
    }
}

export default SideMenu