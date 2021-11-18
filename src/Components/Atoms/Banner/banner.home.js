import React from 'react'
import { Container, Col, Row } from 'react-bootstrap'
import ImageBanner from '../../../Assets/images/bannernew.png'

class Bannerhome extends React.Component {
    render() {
        return (
            <Container fluid>
                <Row>
                    <Col md="12" className="banner-style">
                        <div className="image-stylehome" style={{
                            backgroundImage: `url(${ImageBanner})`
                        }} >
                        </div>
                        <div className="box-text-banner">
                            <div className="text-center">
                                <h1 className="arthome title-h1-banner">Fullfill Your Dream House</h1>
                                <h1 className="arthome title-h1-banner">With KB Bukopin</h1>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        )
    }
}

export default Bannerhome