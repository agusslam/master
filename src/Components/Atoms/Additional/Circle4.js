import React from 'react'

import { Col, Row } from 'react-bootstrap'

const circ4 = ({ aktif }) => {
    if (!aktif) {
        return (<Col md="2" className="outer-grey">
            <Row className="inner">
                <Col md="12" className="step-angka-grey"><h1>4</h1></Col>
            </Row>
        </Col>)
    }
    return (<Col md="2" className="outer">
        <Row className="inner">
            <Col md="12" className="step-angka"><h1>4</h1></Col>
        </Row>
    </Col>)
}

export default circ4