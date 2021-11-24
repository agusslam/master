import React from 'react'

import { Container, Row, Col } from 'react-bootstrap'

import Sidemenu from '../Atoms/Sidemenu'

class Userdashboard extends React.Component {
    render() {
        return (
            <Container fluid id="bg-dashburd">
                <Row className="wrapper-dashburd">
                    <Sidemenu />
                    <Col md="9">
                        <Row className="wrapper-side-right">
                            <Col md="12">
                                <h2 className="title-dashburd">Dashboard</h2>
                            </Col>
                            <Col md="12" className="wrapper-side-right1">

                            </Col>
                            <Col md="12" className="wrapper-side-right2">

                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>

        )
    }
}

export default Userdashboard