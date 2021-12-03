import React from 'react'
import { Row, Col, Modal, Button, Form, FloatingLabel } from 'react-bootstrap'
import '../Modals/Contac.css'
import { connect } from 'react-redux'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimesCircle } from '@fortawesome/free-solid-svg-icons'

class modalAlert extends React.Component {
    constructor(props) {
        super(props)
        console.log(props)
    }

    handleClose = async () => {
        this.props.setCloseDialog()
    }

    render() {
        return (
            <>
                <Modal
                    show={this.props.isOpenDialog}
                    onHide={this.handleClose}
                    backdrop="static"
                    keyboard={false}
                    centered
                    size="lg"
                >
                    <Row>
                        <Col md="12" className="wrap-close-ico"><FontAwesomeIcon icon={faTimesCircle} size="3x" onClick={this.handleClose} className="style-cursor-contact" /></Col>
                        <Col md="12" className="text-center"><h2>Kirim Keluhan/Saran/Informasi </h2></Col>
                        <Col md="12">
                            <Row className="wrap-content-con">
                                <Col md="5" className="wrap-des-contact"><h6>Kategori</h6></Col>
                                <Col md="7" className="wrap-inp-contact">
                                    <Form.Select aria-label="Default select example">
                                        <option>Select</option>
                                        <option value="1">Kategori1</option>
                                        <option value="2">Kategori2</option>
                                    </Form.Select>
                                </Col>
                                <Col md="5" className="wrap-des-contact"><h6>Nama Lengkap</h6></Col>
                                <Col md="7" className="wrap-inp-contact"><Form.Control type="text" placeholder="Masukkan nama Anda" /></Col>
                                <Col md="5" className="wrap-des-contact"><h6>No. Identitas</h6></Col>
                                <Col md="7" className="wrap-inp-contact"><Form.Control type="text" placeholder="KTP/SIM/Pasport" /></Col>
                                <Col md="5" className="wrap-des-contact"><h6>No. Identitas di Bank</h6></Col>
                                <Col md="7" className="wrap-inp-contact"><Form.Control type="text" placeholder="Nomor Rekening" /></Col>
                                <Col md="5" className="wrap-des-contact"><h6>Alamat</h6></Col>
                                <Col md="7" className="wrap-inp-contact">
                                    <Form.Control
                                        as="textarea"
                                        placeholder="Masukkan alamat Anda"
                                        style={{ height: '100px' }}
                                    />
                                </Col>
                                <Col md="5" className="wrap-des-contact"><h6>No. Telepon/Ponsel *</h6></Col>
                                <Col md="7" className="wrap-inp-contact"><Form.Control type="text" placeholder="Masukkan nomor telepon/ponsel Anda" /></Col>
                                <Col md="5" className="wrap-des-contact"><h6>Alamat Email *</h6></Col>
                                <Col md="7" className="wrap-inp-contact"><Form.Control type="text" placeholder="Masukkan alamat email Anda" /></Col>
                                <Col md="5" className="wrap-des-contact"><h6>Topik</h6></Col>
                                <Col md="7" className="wrap-inp-contact">
                                    <Form.Select aria-label="Default select example">
                                        <option>Select</option>
                                        <option value="1">Topik1</option>
                                        <option value="2">Topik2</option>
                                    </Form.Select>
                                </Col>
                                <Col md="5" className="wrap-des-contact"><h6>Produk</h6></Col>
                                <Col md="7" className="wrap-inp-contact">
                                    <Form.Select aria-label="Default select example">
                                        <option>Select</option>
                                        <option value="1">Produk1</option>
                                        <option value="2">Produk2</option>
                                    </Form.Select>
                                </Col>
                                <Col md="5" className="wrap-des-contact"><h6>Jenis Masalah</h6></Col>
                                <Col md="7" className="wrap-inp-contact">
                                    <Form.Select aria-label="Default select example">
                                        <option>Select</option>
                                        <option value="1">Masalah1</option>
                                        <option value="2">Masalah2</option>
                                    </Form.Select>
                                </Col>
                                <Col md="5" className="wrap-des-contact"><h6>Jenis Masalah</h6></Col>
                                <Col md="7" className="wrap-inp-contact">
                                    <Form.Select aria-label="Default select example">
                                        <option>Select</option>
                                        <option value="1">Masalah1</option>
                                        <option value="2">Masalah2</option>
                                    </Form.Select>
                                </Col>
                                <Col md="5" className="wrap-des-contact"><h6>Pesan Anda</h6></Col>
                                <Col md="7" className="wrap-inp-contact">
                                    <Form.Control
                                        as="textarea"
                                        placeholder="Masukkan keluhan/saran/informasi Anda"
                                        style={{ height: '100px' }}
                                    />
                                </Col>
                                <Col md="5" className="wrap-des-contact"><h6>Lampiran</h6></Col>
                                <Col md="7" className="wrap-inp-contact">
                                    <Form.Group controlId="formFile" className="mb-3">
                                        <Form.Control type="file" />
                                    </Form.Group>
                                </Col>
                                <Col md="5" className="wrap-des-contact"></Col>
                                <Col md="7"><p>Untuk tanda yang menggunakan (*) ini menjadi mandatory yang harus
diisi nasabah.</p></Col>
                                <Col md="12" className="wrap-btn-contact">
                                <Button className="btn-profile-kirim" onClick={this.handleLogout}>Kirim</Button>
                                </Col>
                            </Row>
                        </Col>
                    </Row>

                </Modal>
            </>
        )
    }
}

const mapsStateToProps = (state) => ({
    isOpenDialog: state.modalReducer.openDialog
})

const mapsDispatchToProps = (dispatch) => {
    return {
        setCloseDialog: () => dispatch({ type: 'CHANGE_DIALOG', value: false })
    }
}

export default connect(mapsStateToProps, mapsDispatchToProps)(modalAlert)




