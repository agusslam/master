import React from 'react'
import { Container, Col, Row } from 'react-bootstrap'

import '../Home/ContactBanner.css'
import ImageBanner from '../../../../Assets/Images/BG_BANNER_CONTACT.png'

class Bannerhome extends React.Component {
    render() {
        return (
            <Container fluid={true} className="style-banner">
                <Row>
                    <Col md="12" className="image-stylehome" style={{
                            backgroundImage: `linear-gradient(to right, #545045 , rgba(96, 96, 96, 0)),url(${ImageBanner})`
                        }}>
                        <div className="box-text-banner">
                            <div>
                                <h1 className="text-banner">Apapun Masalahnya</h1>
                                <h1 className="text-banner">Halo KB Bukopin Jawabannya</h1>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        )
    }
}

export default Bannerhome