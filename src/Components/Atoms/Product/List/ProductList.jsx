import React from 'react'
import { Row, Col, Container } from 'react-bootstrap'

import '../List/ProductList.css'

import Image1 from '../../../../Assets/Images/1.jpg'
import Image2 from '../../../../Assets/Images/2.jpg'
import Image3 from '../../../../Assets/Images/3.jpg'
import Image4 from '../../../../Assets/Images/4.jpg'
import Image5 from '../../../../Assets/Images/5.jpg'
import Image6 from '../../../../Assets/Images/6.jpg'
import BG from '../../../../Assets/Images/BG_KPR.png'


class ProductHome extends React.Component {
    render() {
        return (
            <Container fluid={true} className="p-0" style={{
                backgroundImage: `url(${BG})`, backgroundSize: 'cover' 
                }}>
                <Row className="product-style">
                    <Col md="12" className="product-list">
                        <h6 className="text-center">KPR KB BUKOPIN</h6>
                    </Col>
                    <Col md="12">
                        <p className="text-list">Temukan rumah anda dimanapun, ajukan KPR di KB Bukopin. Kami siap menyalurkan dana untuk anda.</p>
                    </Col>
                </Row>
                <Row className="list-style">
                    <Col md="4" className="wrapper-box-detail-home">
                        <Row className="wrapper-box-list-home">
                            <Col md="12" className="img-classhome" style={{
                            backgroundImage: `url(${Image1})` 
                            }}></Col>
                            <Col md="12" className="tittle-class">
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
                            <Col md="12" className="tittle-class">
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
                            <Col md="12" className="tittle-class">
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
                            <Col md="12" className="tittle-class">
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
                            <Col md="12" className="tittle-class">
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
                            <Col md="12" className="tittle-class">
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