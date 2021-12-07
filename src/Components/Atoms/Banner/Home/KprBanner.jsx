import React from 'react'
import { Container, Col, Row } from 'react-bootstrap'

import '../Home/KprBanner.css'
import ImageBanner from '../../../../Assets/Images/BANNER_KPR.png'

class BannerKpr extends React.Component {
    render() {
        return (
            <Container fluid={true} className="style-banner-kpr">
                <Row>
                    <Col md="12" className="image-stylehome-kpr" style={{
                            backgroundImage: `linear-gradient(to right, #545045 , rgba(96, 96, 96, 0)),url(${ImageBanner})`
                        }}>
                        <div className="box-text-banner-kpr">
                            <div>
                                <h1 className="text-banner-kpr">Beli rumah</h1>
                                <h1 className="text-banner-kpr">tidak harus menunggu kaya</h1>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        )
    }
}

export default BannerKpr