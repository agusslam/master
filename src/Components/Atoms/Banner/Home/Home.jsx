import React from 'react'
import { Container, Col, Row } from 'react-bootstrap'

import '../Home/HomeBanner.css'
import ImageBanner from '../../../../Assets/Images/bannernew.png'

class Bannerhome extends React.Component {
    render() {
        return (
            <Container fluid={true} className="p-0">
                <Row>
                    <Col md="12" className="banner-style">
                        <div className="image-stylehome" style={{
                            backgroundImage: `linear-gradient(to right, #545045 , rgba(96, 96, 96, 0)),url(${ImageBanner})`
                        }} >
                        </div>
                        <div className="box-text-banner">
                            <div>
                                <h1 className="text-banner">Fullfill Your Dream</h1>
                                <h1 className="text-banner">House With KB Bukopin</h1>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        )
    }
}

export default Bannerhome