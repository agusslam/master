import React from 'react'
import { Container, Col, Row } from 'react-bootstrap'

import '../Home/AboutBanner.css'
import ImageBanner from '../../../../Assets/Images/BG_ABOUT.png'

class BannerAbout extends React.Component {
    render() {
        return (
            <Container fluid={true} className="style-banner-about">
                <Row>
                    <Col md="12" className="image-stylehome-about" style={{
                            backgroundImage: `linear-gradient(to right, #545045 , rgba(96, 96, 96, 0)),url(${ImageBanner})`
                        }}>
                        <div className="box-text-banner-about">
                            <div>
                                <h1 className="text-banner-about">Bersama, Kita</h1>
                                <h1 className="text-banner-about">Bintang Finansialnya!</h1>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        )
    }
}

export default BannerAbout