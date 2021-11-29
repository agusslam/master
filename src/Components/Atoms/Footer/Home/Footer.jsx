import React from 'react'
import { Container, Col, Row } from 'react-bootstrap'

import '../Home/Footer.css'
import logoBlack from '../../../../Assets/Images/logoblack.png'
import HaloBukopin from '../../../../Assets/Images/halobukopin.png'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faFacebook, faTwitter, faYoutube, faInstagram } from '@fortawesome/free-brands-svg-icons';

class Foot extends React.Component {
    render(){
        return(
            <Container fluid={true} className="p-0">
                <Row className="footer">
                    <Col md="4">
                        <p>SIMULASI KPR</p>
                        <p>ABOUT US</p>
                        <p>CONTACT</p>
                        <img className="logoBlack" src={logoBlack} alt="LogoBlack" />
                    </Col>
                    <Col md="4">
                        <p>KANTOR PUSAT</p>
                        <p>Jl. MT. Haryono Kav. 50-51</p>
                        <p>Jakarta 12770</p>
                        <p>Phone. +6221 798 8266, 798 9837</p>
                        <p>Fax. +6221 798 0625, 798 0238, 798 0244</p>
                        <Row className="wrap-connect">
                            <Col md="3" className="style-connect"><p>Connect</p></Col>
                            <Col md="1" className="style-iconbrand"><FontAwesomeIcon icon={faFacebook} size='2x' /></Col>
                            <Col md="1" className="style-iconbrand"><FontAwesomeIcon icon={faTwitter} size='2x' /></Col>
                            <Col md="1" className="style-iconbrand"><FontAwesomeIcon icon={faYoutube} size='2x' /></Col>
                            <Col md="1" className="style-iconbrand"><FontAwesomeIcon icon={faInstagram} size='2x' /></Col>
                        </Row>
                    </Col>
                    <Col md="4" className="logoBukopin">
                    <img src={HaloBukopin} alt="Halo Bukopin" />
                    </Col>
                </Row>
                <Row className="footer-dark">
                    <Col md="12">
                        <p>BANK KB BUKOPIN &copy; 2021 All rights reserved.</p>
                    </Col>
                </Row>
            </Container>
        )
    }
}

export default Foot