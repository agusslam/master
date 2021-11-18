import React from 'react'
import { Row, Col, Container } from 'react-bootstrap'
import Image1 from '../../../Assets/images/1.jpg'
import Image2 from '../../../Assets/images/2.jpg'
import Image3 from '../../../Assets/images/3.jpg'
import Image4 from '../../../Assets/images/4.jpg'
import Image5 from '../../../Assets/images/5.jpg'
import Image6 from '../../../Assets/images/6.jpg'


class ProductHome extends React.Component {
    render() {
        return (
            <Container fluid className="product-bg">
                <Row className="product-style">
                    <Col md="12" className="product-list">
                        <h6 className="text-center">KPR KB BUKOPIN</h6>
                    </Col>
                </Row>
                <Row className="list-style">
                    <Col md="4" className="wrapper-box-detail-home">
                        <Row className="wrapper-box-list-home">
                            <Col md="12" className="img-classhome" style={{
                            backgroundImage: `url(${Image1})` 
                            }}></Col>
                            <Col md="12" className="tittle-class text-center">
                                <h6 style={{ fontWeight: 'bold' }}>PROSES CEPAT</h6>
                                <p>Diproses dengan menggunakan sistem scoring</p>
                            </Col>
                        </Row>
                    </Col>
                    <Col md="4" className="wrapper-box-detail-home">
                        <Row className="wrapper-box-list-home">
                            <Col md="12" className="img-classhome" style={{
                            backgroundImage: `url(${Image2})` 
                            }}></Col>
                            <Col md="12" className="tittle-class text-center">
                                <h6 style={{ fontWeight: 'bold' }}>SYARAT MUDAH</h6>
                                <p>Telah menjadi karyawan minimal 1 tahun</p>
                            </Col>
                        </Row>
                    </Col>
                    <Col md="4" className="wrapper-box-detail-home">
                        <Row className="wrapper-box-list-home">
                            <Col md="12" className="img-classhome" style={{
                            backgroundImage: `url(${Image3})` 
                            }}></Col>
                            <Col md="12" className="tittle-class text-center">
                                <h6 style={{ fontWeight: 'bold' }}>MENDAPAT SUBSIDI</h6>
                                <p>Bekerjasama dengan instansi terkait penyedia fasilitas pinjaman</p>
                            </Col>
                        </Row>
                    </Col>

                    <Col md="4" className="wrapper-box-detail-home">
                        <Row className="wrapper-box-list-home">
                            <Col md="12" className="img-classhome" style={{
                            backgroundImage: `url(${Image4})` 
                            }}></Col>
                            <Col md="12" className="tittle-class text-center">
                                <h6 style={{ fontWeight: 'bold' }}>LOKASI RUMAH STRATEGIS</h6>
                                <p>Sesuai dengan wilayah kerjasama developer</p>
                            </Col>
                        </Row>
                    </Col>

                    <Col md="4" className="wrapper-box-detail-home">
                        <Row className="wrapper-box-list-home">
                            <Col md="12" className="img-classhome" style={{
                            backgroundImage: `url(${Image5})` 
                            }}></Col>
                            <Col md="12" className="tittle-class text-center">
                                <h6 style={{ fontWeight: 'bold' }}>PRAKTIS</h6>
                                <p>Pembelian tempat tinggal siap huni</p>
                            </Col>
                        </Row>
                    </Col>


                    <Col md="4" className="wrapper-box-detail-home">
                        <Row className="wrapper-box-list-home">
                            <Col md="12" className="img-classhome" style={{
                            backgroundImage: `url(${Image6})` 
                            }}></Col>
                            <Col md="12" className="tittle-class text-center">
                                <h6 style={{ fontWeight: 'bold' }}>UANG MUKA MURAH</h6>
                                <p>Besarnya minimal 10 % dari harga jual</p>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
        )
    }
}

export default ProductHome