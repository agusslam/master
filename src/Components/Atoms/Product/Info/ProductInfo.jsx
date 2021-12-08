import React from 'react'
import { Container, Accordion, Row, Col } from 'react-bootstrap'

import '../Info/ProductInfo.css'
import bg_info from '../../../../Assets/Images/BG_INFO.png'

class HomeInf extends React.Component {
    render() {
        return (
            <Container fluid={true} style={{
                backgroundImage: `url(${bg_info})`, backgroundSize: 'cover' 
                }}>
                <Row className="wrapper-homeinfo">
                    <Col sm="12" md="12" className="text-center">
                        <p className="title-info">INFORMASI PRODUK KPR KB BUKOPIN</p>
                    </Col>
                    <Col sm="12" md="12">
                        <Accordion>
                            <Accordion.Item eventKey="0" className="accor-info">
                                <Accordion.Header><strong>SYARAT DAN KETENTUAN</strong></Accordion.Header>
                                <Accordion.Body>
                                    <p>1. WNI Usia minimum 21 tahun atau sudah/pernah menikah</p>
                                    <p>2. Memiliki penghasilan tetap dan atau tidak tetap</p>
                                    <p>3. Karyawan tetap dengan masa kerja minimal 3 tahun</p>
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="1" className="accor-info">
                                <Accordion.Header><strong>HAK DEBITUR</strong></Accordion.Header>
                                <Accordion.Body>
                                    <p>1. Mendapatkan proses KPR yang cepat, tepat dan pasti</p>
                                    <p>2. Menerima rumah sesuai dengan kesepakatan KPR</p>
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="2" className="accor-info">
                                <Accordion.Header><strong>KEWAJIBAN DEBITUR</strong></Accordion.Header>
                                <Accordion.Body>
                                    <p>1. Membayar biaya yang timbul setelah KPR disetujui 1</p>
                                    <p>2. Membayar Angsuran KPR tepat pada waktunya</p>
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="3" className="accor-info">
                                <Accordion.Header><strong>KELENGKAPAN DOKUMEN</strong></Accordion.Header>
                                <Accordion.Body>
                                    <p>1. Identitas diri suami/istri pemohon (KTP)</p>
                                    <p>2. NPWP pemohon</p>
                                    <p>3. Slip gaji terakhir</p>
                                    <p>4. Kartu peserta Jamsostek</p>
                                    <p>4. Untuk PNS/POLRI sesuai dengan ketentuan kepegawaian yang berlaku</p>
                                </Accordion.Body>
                            </Accordion.Item>
                        </Accordion>
                    </Col>
                    <Col sm="12" md="12" className="bottom-info">
                    </Col>
                </Row>
            </Container>
        )
    }
}

export default HomeInf