import React from 'react'
import { Row, Col, Container,Button } from 'react-bootstrap'
import Image1 from '../../../Assets/images/rumahku.jpg'
import Image2 from '../../../Assets/images/carirumah.png'
import Image3 from '../../../Assets/images/ajukan.png'


class ProductHome extends React.Component {
    render() {
        return (
            <Container fluid className="product-bg1">
                <Row className="product-style">                 
                    <Col md="12" className="product-list">
                        <h6 className="text-center">TENTUKAN PILIHANMU</h6>
                    </Col>
                </Row>
                <Row className="list-style">
                    <Col md="4" className="wrapper-box-detail-home">
                        <Row className="wrapper-box-list-home">
                            <Col md="12" className="img-classhome" style={{
                                backgroundImage: `url(${Image1})`
                            }}></Col>
                            <Col md="12" className="tittle-class text-center">
                                <h6 style={{ fontWeight: 'bold' }}>SIMULASI KPR</h6>
                                <p >Ragu tidak bisa beli rumah?, bisa coba simulasi disini</p>
                                <Button type="button-simulasi" variant="outline-warning" className="simulasi btn-lg mb-3 mx-2"><strong>SIMULASI</strong></Button>
                            </Col>
                        </Row>
                    </Col>
                    <Col md="4" className="wrapper-box-detail-home">
                        <Row className="wrapper-box-list-home">
                            <Col md="12" className="img-classhome" style={{
                                backgroundImage: `url(${Image2})`
                            }}></Col>
                            <Col md="12" className="tittle-class text-center">
                                <h6 style={{ fontWeight: 'bold' }}>CARI RUMAH</h6>
                                <p>Jaringan kerjasama yang luas dengan developer</p>
                                <Button type="button-cari" variant="outline-warning" className="cari btn-lg mb-3 mx-2"><strong>CARI RUMAH</strong></Button>
                            </Col>
                        </Row>
                    </Col>
                    <Col md="4" className="wrapper-box-detail-home">
                        <Row className="wrapper-box-list-home">
                            <Col md="12" className="img-classhome" style={{
                                backgroundImage: `url(${Image3})`
                            }}></Col>
                            <Col md="12" className="tittle-class text-center">
                                <h6 style={{ fontWeight: 'bold' }}>AJUKAN KPR</h6>
                                <p>Segera wujudkan rumah impian dengan ajukan KPR</p>
                                <Button type="button-kpr" variant="outline-warning" className="kpr btn-lg mb-3 mx-2"><strong>SUBMIT KPR</strong></Button>
                            </Col>
                        </Row>
                    </Col>

                </Row>
            </Container>
        )
    }
}

export default ProductHome