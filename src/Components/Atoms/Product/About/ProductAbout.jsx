import React from 'react'
import { Row, Col, Container } from 'react-bootstrap'

import '../About/ProductAbout.css'
import Image1 from '../../../../Assets/Images/rumahku.jpg'
import Image2 from '../../../../Assets/Images/carirumah.png'
import Image3 from '../../../../Assets/Images/ajukan.png'
import bg_tentukan from '../../../../Assets/Images/BG_TENTUKAN.png'


class ProductHome extends React.Component {
    render() {
        return (
            <Container fluid={true} className="adjust-height" style={{
                backgroundImage: `url(${bg_tentukan})`, backgroundSize: 'cover' 
                }}>
                <Row className="product-style2">                 
                    <Col md="12" className="product-list2">
                        <h6 className="text-center">TENTUKAN PILIHANMU</h6>
                    </Col>
                </Row>
                <Row className="list-style2">
                    <Col md="4" className="wrapper-box-detail-home2">
                        <Row className="wrapper-box-list-home2">
                            <Col md="12" className="img-classhome" style={{
                                backgroundImage: `url(${Image1})`
                            }}></Col>
                            <Col md="12" className="title-class2 text-center">
                                <h6 style={{ fontWeight: 'bold' }}>SIMULASI KPR</h6>
                                <p>Ragu tidak bisa beli rumah?, bisa coba simulasi disini</p>
                                <a href="/simulasi" className="view-detail">Coba Simulasi</a>
                            </Col>
                        </Row>
                    </Col>
                    <Col md="4" className="wrapper-box-detail-home2">
                        <Row className="wrapper-box-list-home2">
                            <Col md="12" className="img-classhome" style={{
                                backgroundImage: `url(${Image2})`
                            }}></Col>
                            <Col md="12" className="title-class2 text-center">
                                <h6 style={{ fontWeight: 'bold' }}>CARI RUMAH</h6>
                                <p>Jaringan kerjasama yang luas dengan developer</p>
                                <a href="/simulasi" className="view-detail">Cari Sekarang</a>
                            </Col>
                        </Row>
                    </Col>
                    <Col md="4" className="wrapper-box-detail-home2">
                        <Row className="wrapper-box-list-home2">
                            <Col md="12" className="img-classhome" style={{
                                backgroundImage: `url(${Image3})`
                            }}></Col>
                            <Col md="12" className="title-class2 text-center">
                                <h6 style={{ fontWeight: 'bold' }}>AJUKAN KPR</h6>
                                <p>Segera wujudkan rumah impian dengan ajukan KPR</p>
                                <a href="/signin" className="view-detail">Beli Rumah</a>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
        )
    }
}

export default ProductHome