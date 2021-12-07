import React from 'react'
import { Route } from 'react-router-dom'
import Cookies from 'universal-cookie'
import { Container, Row, Col, Form, Button } from 'react-bootstrap'
import '../DashAdminDetail/DashAdmDet.css'
import axios from 'axios'
import FileDownload from 'js-file-download'

import { connect } from 'react-redux'

import Sidemenu from '../../../Sidemenu/admin'
import Spin from '../../../Spinner/index'

import { getDataDebt, FlagStatus } from '../../../../../Actions/admin'
import ModalDialog from '../../../Modals/Alert'

const cookies = new Cookies()
const token = cookies.get('_tKJKASKHDS')

const API_URL = "https://apiauthv1.herokuapp.com"
// const API_URL = "http://localhost:8008"

class DashborAdminDeta extends React.Component {
    state = {
        idkpr: '',
        pengajuan: false,
        setuju: false,
        statusAdmin: false,
        tolakan: ''
    }

    constructor(props) {
        super(props)
        this.state.idkpr = props.match.params.id
        this.handleCheckPengajuan = this.handleCheckPengajuan.bind(this)
        this.handleOptionChange = this.handleOptionChange.bind(this)
        this.handleOptionChange = this.handleOptionChange.bind(this)
        this.handleOptionAksep = this.handleOptionAksep.bind(this)
        this.handleOptionAksep = this.handleOptionAksep.bind(this)
        this.handleOptionalSlik = this.handleOptionalSlik.bind(this)
        this.handleOptionalLegal = this.handleOptionalLegal.bind(this)
        this.handleOptionalKomite = this.handleOptionalKomite.bind(this)
        this.handleCheckSetuju = this.handleCheckSetuju.bind(this)
    }

    componentDidMount() {
        this.props.getDataDebitur(this.state.idkpr).catch(err => err)
        console.log(this.props.isState)
    }

    // componentDidUpdate(){
    //     console.log(this.props.isState)
    // }

    handleCheckPengajuan = (e) => {
        this.props.ubahPengajuan(e.target.checked)
    }

    handleOptionChange = (e) => {
        // this.setState({ administrasi: e.target.value })
        this.props.ubahAdministrasi(e.target.value)
    }

    handleOptionAksep = (e) => {
        // this.setState({ administrasi: e.target.value })
        this.props.ubahAksep(e.target.value)
    }

    handleOptionalSlik = (e) => {
        // this.setState({ administrasi: e.target.value })
        this.props.ubahSlik(e.target.value)
    }

    handleOptionalLegal = (e) => {
        // this.setState({ administrasi: e.target.value })
        this.props.ubahLegal(e.target.value)
    }

    handleOptionalKomite = (e) => {
        // this.setState({ administrasi: e.target.value })
        this.props.ubahKomite(e.target.value)
    }

    handleCheckSetuju = (e) => {
        this.props.ubahSetuju(e.target.checked)
        console.log(this.props.ubahSetuju(e.target.checked))
    }

    handleChangeText = (e) => {
        this.setState({
            [e.target.id]: e.target.value,
        })
    }

    formUnduh = (e) => {
        // console.log(e)
        axios({
            url: `${API_URL}/kpr/formkpr/${e}`,
            method: 'GET',
            headers: { Authorization: `Bearer ${token}` },
            responseType: 'blob', // Important
        }).then((response) => {
            FileDownload(response.data, e);
        });
    }

    ktpUnduh = (e) => {
        // console.log(e)
        axios({
            url: `${API_URL}/kpr/ektp/${e}`,
            method: 'GET',
            headers: { Authorization: `Bearer ${token}` },
            responseType: 'blob', // Important
        }).then((response) => {
            FileDownload(response.data, e);
        });
    }

    slipUnduh = (e) => {
        // console.log(e)
        axios({
            url: `${API_URL}/kpr/slip/${e}`,
            method: 'GET',
            headers: { Authorization: `Bearer ${token}` },
            responseType: 'blob', // Important
        }).then((response) => {
            FileDownload(response.data, e);
        });
    }

    rkUnduh = (e) => {
        // console.log(e)
        axios({
            url: `${API_URL}/kpr/rk/${e}`,
            method: 'GET',
            headers: { Authorization: `Bearer ${token}` },
            responseType: 'blob', // Important
        }).then((response) => {
            FileDownload(response.data, e);
        });
    }

    ClickDebitur = async () => {
        const { tolakan } = this.state
        let data = {
            pengajuan: this.props.stepPengajuan,
            id: this.props.dataDebitur.result._id,
            administrasi: this.props.stepAdmin,
            aksep: this.props.stepAksep,
            slik: this.props.stepSlik,
            legal: this.props.stepLegal,
            komite: this.props.stepKomite,
            setuju: this.props.stepSetuju,
            tolakan: tolakan
        }
        const resUpdate = await this.props.updateFlag(data).catch(err => err)
        if (resUpdate.status === 200) {
            this.props.setDialog()
            this.props.setTextDialog('Data sukses di perbarui')
        }
        else {
            this.props.setDialog()
            this.props.setTextDialog('Gagal perbarui data')
            this.props.changeLod()
        }
    }

    render() {
        return (
            <Container fluid={true} id="bg-dashburd" style={{
                backgroundImage: `url(${require('../../../../../Assets/Images/bgdashboard.png').default})`
                , backgroundSize: 'cover'
            }}>
                <Row className="wrapper-dashburd2">
                    <Route component={Sidemenu} />
                    <ModalDialog show={this.props.isOpenDialog} onHide={this.handleClose} title={this.props.titleD} />
                    <Col md="9">
                        <Row className="wrapper-side-right2">
                            <Col md="12">
                                <h2 className="title-dashburd">My Debitur List - Detail Debitur</h2>
                            </Col>
                            <Col md="12" className="wrapper-side-right1">
                                <Row className="wrap-ajukan">
                                    <Col md="12"><h5>Detail Debitur</h5></Col>
                                    {<Spin loading={this.props.isLoading} />}
                                    <Col md="8" className="detail-debitur">
                                        <Row>
                                            <Col md="5">No Kontrak</Col>
                                            <Col md="1" className="titikdua"><p>:</p></Col>
                                            <Col md="6"><p>
                                                {this.props.dataDebitur
                                                    ? this.props.dataDebitur.result._id
                                                    : null
                                                }</p></Col>
                                        </Row>
                                        <Row>
                                            <Col md="5">Nama debitur</Col>
                                            <Col md="1" className="titikdua"><p>:</p></Col>
                                            <Col md="6"><p>
                                                {this.props.dataDebitur
                                                    ? this.props.dataDebitur.result.uid
                                                    : null
                                                }</p></Col>
                                        </Row>
                                        <Row>
                                            <Col md="5">No CIF</Col>
                                            <Col md="1" className="titikdua"><p>:</p></Col>
                                            <Col md="6"></Col>
                                        </Row>
                                        <Row>
                                            <Col md="5">No Rekening Aktif</Col>
                                            <Col md="1" className="titikdua"><p>:</p></Col>
                                            <Col md="6"></Col>
                                        </Row>
                                        <Row>
                                            <Col md="5">Alamat Debitur</Col>
                                            <Col md="1" className="titikdua"><p>:</p></Col>
                                            <Col md="6"></Col>
                                        </Row>
                                        <Row>
                                            <Col md="5">Nama dan Tipe Rumah</Col>
                                            <Col md="1" className="titikdua"><p>:</p></Col>
                                            <Col md="6"><p>
                                                {this.props.dataDebitur
                                                    ? this.props.dataDebitur.result.idrumah.namarumah
                                                    : null}(
                                                {this.props.dataDebitur
                                                    ? this.props.dataDebitur.result.idrumah.tipe
                                                    : null})</p></Col>
                                        </Row>
                                        <Row>
                                            <Col md="5">Alamat KPR Rumah</Col>
                                            <Col md="1" className="titikdua"><p>:</p></Col>
                                            <Col md="6">
                                                {this.props.dataDebitur
                                                    ? this.props.dataDebitur.result.idrumah.alamat
                                                    : null}</Col>
                                        </Row>
                                        <Row>
                                            <Col md="5">Plafon Harga Rumah</Col>
                                            <Col md="1" className="titikdua"><p>:</p></Col>
                                            <Col md="6">
                                                {this.props.dataDebitur
                                                    ? this.props.dataDebitur.result.idrumah.harga
                                                    : null}</Col>
                                        </Row>
                                        <Row>
                                            <Col md="5">Developer</Col>
                                            <Col md="1" className="titikdua"><p>:</p></Col>
                                            <Col md="6">
                                                {this.props.dataDebitur
                                                    ? this.props.dataDebitur.result.idrumah.developer.namadeveloper
                                                    : null}</Col>
                                        </Row>
                                        <Row className="unduh-style">
                                            <Col md="6">
                                                <p>Unduh <a href="# " onClick={() => this.formUnduh(this.props.dataDebitur ? this.props.dataDebitur.result.formkredit : null)}>Form Pengajuan KPR</a></p>
                                                <p>Unduh <a href="# " onClick={() => this.ktpUnduh(this.props.dataDebitur ? this.props.dataDebitur.result.ektp : null)}>Foto KTP</a></p>
                                                <p>Unduh <a href="# " onClick={() => this.slipUnduh(this.props.dataDebitur ? this.props.dataDebitur.result.slip : null)}>Slip Gaji</a></p>
                                                <p>Unduh <a href="# " onClick={() => this.rkUnduh(this.props.dataDebitur ? this.props.dataDebitur.result.rk : null)}>Mutasi Rekening</a></p>

                                            </Col>
                                            <Col md="6">
                                                <Row>
                                                    <Col md="12">
                                                        <p>Catatan / Alasan di tolak</p>
                                                    </Col>
                                                    <Col md="12">
                                                        <Form.Control 
                                                            as="textarea" 
                                                            rows={3} 
                                                            disabled={((this.props.stepAdmin ? this.props.stepAdmin : null) !== "admin3")&&((this.props.stepAksep ? this.props.stepAksep : null) !== "aksep3")&&((this.props.stepSlik ? this.props.stepSlik : null) !== "slik3")&&((this.props.stepLegal ? this.props.stepLegal : null) !== "legal3")&&((this.props.stepKomite ? this.props.stepKomite : null) !== "komite3")}
                                                            name="tolakan"
                                                            onChange={this.handleChangeText}    
                                                            id="tolakan"                                                        
                                                        />
                                                    </Col>
                                                </Row>
                                            </Col>
                                        </Row>
                                    </Col>
                                    <Col md="4">
                                        <Row>
                                            <Col md="12">
                                                <Form.Check
                                                    inline
                                                    value={this.props.stepPengajuan ? this.props.stepPengajuan : ""}
                                                    label="Pengajuan"
                                                    type="checkbox"
                                                    id="pengajuan"
                                                    defaultChecked={this.props.stepPengajuan ? this.props.stepPengajuan : null}
                                                    onChange={this.handleCheckPengajuan}
                                                />
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col md="12">
                                                <Form.Check
                                                    inline
                                                    label="Persayarat Administrasi"
                                                    type="checkbox"
                                                    disabled={(this.props.stepPengajuan ? this.props.stepPengajuan : null) === null}
                                                    checked={((this.props.stepAdmin ? this.props.stepAdmin : null) === "admin3") || ((this.props.stepAdmin ? this.props.stepAdmin : null) === "admin2")}
                                                    onChange={e => { }}
                                                />
                                            </Col>
                                            <Col md="12" className="radio">
                                                <Form.Check
                                                    inline
                                                    value="admin1"
                                                    label="Diproses"
                                                    type="radio"
                                                    id="admindiproses"
                                                    className="radio-button"
                                                    name="admin"
                                                    disabled={(this.props.stepPengajuan ? this.props.stepPengajuan : null) === null}
                                                    checked={(this.props.stepAdmin ? this.props.stepAdmin : null) === "admin1"}
                                                    onChange={this.handleOptionChange}
                                                />
                                                <Form.Check
                                                    inline
                                                    value="admin2"
                                                    label="Diterima"
                                                    type="radio"
                                                    id="adminditerima"
                                                    className="radio-button"
                                                    name="admin"
                                                    disabled={(this.props.stepPengajuan ? this.props.stepPengajuan : null) === null}
                                                    checked={(this.props.stepAdmin ? this.props.stepAdmin : null) === "admin2"}
                                                    onChange={this.handleOptionChange}
                                                />
                                                <Form.Check
                                                    inline
                                                    value="admin3"
                                                    label="Ditolak"
                                                    type="radio"
                                                    id="adminditolak"
                                                    className="radio-button"
                                                    name="admin"
                                                    disabled={(this.props.stepPengajuan ? this.props.stepPengajuan : null) === null}
                                                    checked={(this.props.stepAdmin ? this.props.stepAdmin : null) === "admin3"}
                                                    onChange={this.handleOptionChange}
                                                />
                                            </Col>
                                        </Row>

                                        <Row>
                                            <Col md="12">
                                                <Form.Check
                                                    inline
                                                    label="Aseptasi Financial"
                                                    type="checkbox"
                                                    disabled={((this.props.stepAdmin ? this.props.stepAdmin : null) === "admin1") || ((this.props.stepAdmin ? this.props.stepAdmin : null) === null) || ((this.props.stepAdmin ? this.props.stepAdmin : null) === "admin3")}
                                                    checked={((this.props.stepAksep ? this.props.stepAksep : null) === "aksep2") || ((this.props.stepAksep ? this.props.stepAksep : null) === "aksep3")}
                                                    onChange={e => { }}
                                                />
                                            </Col>
                                            <Col md="12" className="radio">
                                                <Form.Check
                                                    inline
                                                    value="aksep1"
                                                    label="Diproses"
                                                    type="radio"
                                                    className="radio-button"
                                                    disabled={((this.props.stepAdmin ? this.props.stepAdmin : null) === "admin1") || ((this.props.stepAdmin ? this.props.stepAdmin : null) === null) || ((this.props.stepAdmin ? this.props.stepAdmin : null) === "admin3")}
                                                    checked={(this.props.stepAksep ? this.props.stepAksep : null) === "aksep1"}
                                                    onChange={this.handleOptionAksep}
                                                />
                                                <Form.Check
                                                    inline
                                                    value="aksep2"
                                                    label="Diterima"
                                                    type="radio"
                                                    className="radio-button"
                                                    disabled={((this.props.stepAdmin ? this.props.stepAdmin : null) === "admin1") || ((this.props.stepAdmin ? this.props.stepAdmin : null) === null) || ((this.props.stepAdmin ? this.props.stepAdmin : null) === "admin3")}
                                                    checked={(this.props.stepAksep ? this.props.stepAksep : null) === "aksep2"}
                                                    onChange={this.handleOptionAksep}
                                                />
                                                <Form.Check
                                                    inline
                                                    value="aksep3"
                                                    label="Ditolak"
                                                    type="radio"
                                                    className="radio-button"
                                                    disabled={((this.props.stepAdmin ? this.props.stepAdmin : null) === "admin1") || ((this.props.stepAdmin ? this.props.stepAdmin : null) === null) || ((this.props.stepAdmin ? this.props.stepAdmin : null) === "admin3")}
                                                    checked={(this.props.stepAksep ? this.props.stepAksep : null) === "aksep3"}
                                                    onChange={this.handleOptionAksep}
                                                />
                                            </Col>
                                        </Row>

                                        <Row>
                                            <Col md="12">
                                                <Form.Check
                                                    inline
                                                    label="Pengecekan Slik"
                                                    type="checkbox"
                                                    disabled={((this.props.stepAksep ? this.props.stepAksep : null) === "aksep1") || ((this.props.stepAksep ? this.props.stepAksep : null) === null) || ((this.props.stepAksep ? this.props.stepAksep : null) === "aksep3")}
                                                    checked={((this.props.stepSlik ? this.props.stepSlik : null) === "slik2") || ((this.props.stepSlik ? this.props.stepSlik : null) === "slik3")}
                                                    onChange={e => { }}
                                                />
                                            </Col>
                                            <Col md="12" className="radio">
                                                <Form.Check
                                                    inline
                                                    value="slik1"
                                                    label="Diproses"
                                                    type="radio"
                                                    className="radio-button"
                                                    disabled={((this.props.stepAksep ? this.props.stepAksep : null) === "aksep1") || ((this.props.stepAksep ? this.props.stepAksep : null) === null) || ((this.props.stepAksep ? this.props.stepAksep : null) === "aksep3")}
                                                    checked={(this.props.stepSlik ? this.props.stepSlik : null) === "slik1"}
                                                    onChange={this.handleOptionalSlik}
                                                />
                                                <Form.Check
                                                    inline
                                                    value="slik2"
                                                    label="Diterima"
                                                    type="radio"
                                                    className="radio-button"
                                                    disabled={((this.props.stepAksep ? this.props.stepAksep : null) === "aksep1") || ((this.props.stepAksep ? this.props.stepAksep : null) === null) || ((this.props.stepAksep ? this.props.stepAksep : null) === "aksep3")}
                                                    checked={(this.props.stepSlik ? this.props.stepSlik : null) === "slik2"}
                                                    onChange={this.handleOptionalSlik}
                                                />
                                                <Form.Check
                                                    inline
                                                    value="slik3"
                                                    label="Ditolak"
                                                    type="radio"
                                                    className="radio-button"
                                                    disabled={((this.props.stepAksep ? this.props.stepAksep : null) === "aksep1") || ((this.props.stepAksep ? this.props.stepAksep : null) === null) || ((this.props.stepAksep ? this.props.stepAksep : null) === "aksep3")}
                                                    checked={(this.props.stepSlik ? this.props.stepSlik : null) === "slik3"}
                                                    onChange={this.handleOptionalSlik}
                                                />
                                            </Col>
                                        </Row>

                                        <Row>
                                            <Col md="12">
                                                <Form.Check
                                                    inline
                                                    label="Pengecekan Legal"
                                                    type="checkbox"
                                                    disabled={((this.props.stepSlik ? this.props.stepSlik : null) === "slik1") || ((this.props.stepSlik ? this.props.stepSlik : null) === null) || ((this.props.stepSlik ? this.props.stepSlik : null) === "slik3")}
                                                    checked={((this.props.stepLegal ? this.props.stepLegal : null) === "legal2") || ((this.props.stepLegal ? this.props.stepLegal : null) === "legal3")}
                                                    onChange={e => { }}
                                                />
                                            </Col>
                                            <Col md="12" className="radio">
                                                <Form.Check
                                                    inline
                                                    value="legal1"
                                                    label="Diproses"
                                                    type="radio"
                                                    className="radio-button"
                                                    disabled={((this.props.stepSlik ? this.props.stepSlik : null) === "slik1") || ((this.props.stepSlik ? this.props.stepSlik : null) === null) || ((this.props.stepSlik ? this.props.stepSlik : null) === "slik3")}
                                                    checked={(this.props.stepLegal ? this.props.stepLegal : null) === "legal1"}
                                                    onChange={this.handleOptionalLegal}
                                                />
                                                <Form.Check
                                                    inline
                                                    value="legal2"
                                                    label="Diterima"
                                                    type="radio"
                                                    className="radio-button"
                                                    disabled={((this.props.stepSlik ? this.props.stepSlik : null) === "slik1") || ((this.props.stepSlik ? this.props.stepSlik : null) === null) || ((this.props.stepSlik ? this.props.stepSlik : null) === "slik3")}
                                                    checked={(this.props.stepLegal ? this.props.stepLegal : null) === "legal2"}
                                                    onChange={this.handleOptionalLegal}
                                                />
                                                <Form.Check
                                                    inline
                                                    value="legal3"
                                                    label="Ditolak"
                                                    type="radio"
                                                    className="radio-button"
                                                    disabled={((this.props.stepSlik ? this.props.stepSlik : null) === "slik1") || ((this.props.stepSlik ? this.props.stepSlik : null) === null) || ((this.props.stepSlik ? this.props.stepSlik : null) === "slik3")}
                                                    checked={(this.props.stepLegal ? this.props.stepLegal : null) === "legal3"}
                                                    onChange={this.handleOptionalLegal}
                                                />
                                            </Col>
                                        </Row>

                                        <Row>
                                            <Col md="12">
                                                <Form.Check
                                                    inline
                                                    label="Persetujuan Komite"
                                                    type="checkbox"
                                                    disabled={((this.props.stepLegal ? this.props.stepLegal : null) === "legal1") || ((this.props.stepLegal ? this.props.stepLegal : null) === null) || ((this.props.stepLegal ? this.props.stepLegal : null) === "legal3")}
                                                    checked={((this.props.stepKomite ? this.props.stepKomite : null) === "komite2") || ((this.props.stepKomite ? this.props.stepKomite : null) === "komite3")}
                                                    onChange={e => { }}
                                                />
                                            </Col>
                                            <Col md="12" className="radio">
                                                <Form.Check
                                                    inline
                                                    value="komite1"
                                                    label="Diproses"
                                                    type="radio"
                                                    className="radio-button"
                                                    disabled={((this.props.stepLegal ? this.props.stepLegal : null) === "legal1") || ((this.props.stepLegal ? this.props.stepLegal : null) === null) || ((this.props.stepLegal ? this.props.stepLegal : null) === "legal3")}
                                                    checked={(this.props.stepKomite ? this.props.stepKomite : null) === "komite1"}
                                                    onChange={this.handleOptionalKomite}
                                                />
                                                <Form.Check
                                                    inline
                                                    value="komite2"
                                                    label="Diterima"
                                                    type="radio"
                                                    className="radio-button"
                                                    disabled={((this.props.stepLegal ? this.props.stepLegal : null) === "legal1") || ((this.props.stepLegal ? this.props.stepLegal : null) === null) || ((this.props.stepLegal ? this.props.stepLegal : null) === "legal3")}
                                                    checked={(this.props.stepKomite ? this.props.stepKomite : null) === "komite2"}
                                                    onChange={this.handleOptionalKomite}
                                                />
                                                <Form.Check
                                                    inline
                                                    value="komite3"
                                                    label="Ditolak"
                                                    type="radio"
                                                    className="radio-button"
                                                    disabled={((this.props.stepLegal ? this.props.stepLegal : null) === "legal1") || ((this.props.stepLegal ? this.props.stepLegal : null) === null) || ((this.props.stepLegal ? this.props.stepLegal : null) === "legal3")}
                                                    checked={(this.props.stepKomite ? this.props.stepKomite : null) === "komite3"}
                                                    onChange={this.handleOptionalKomite}
                                                />
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col md="12">
                                                <Form.Check
                                                    inline
                                                    value={this.props.stepSetuju ? this.props.stepSetuju : ""}
                                                    label="KPR Disetujui"
                                                    type="checkbox"
                                                    id="setuju"
                                                    disabled={((this.props.stepKomite ? this.props.stepKomite : null) === "komite1") || ((this.props.stepKomite ? this.props.stepKomite : null) === null) || ((this.props.stepKomite ? this.props.stepKomite : null) === "komite3")}
                                                    defaultChecked={this.props.stepSetuju ? this.props.stepSetuju : null}
                                                    onChange={this.handleCheckSetuju}
                                                />
                                            </Col>
                                            <Col><Button onClick={() => this.ClickDebitur()}>Perbarui</Button></Col>
                                        </Row>


                                    </Col>
                                </Row>

                            </Col>
                        </Row>
                    </Col>
                </Row>
                {/* </Container> */}
            </Container>
        )
    }
}

const mapsStateToProps = (state) => {
    return {
        isLoading: state.rumahReducer.isLoading,
        dataDebitur: state.kprReducer.getDeb,
        stepPengajuan: state.kprReducer.pengajuan,
        stepAdmin: state.kprReducer.administrasi,
        stepAksep: state.kprReducer.aksep,
        stepSlik: state.kprReducer.slik,
        stepLegal: state.kprReducer.legal,
        stepKomite: state.kprReducer.komite,
        stepSetuju: state.kprReducer.setuju,
        isState: state.kprReducer,
        isOpenDialog: state.modalReducer.openDialog,
        titleD: state.modalReducer.titleAlert,
        isOpenDialog2: state.modalReducer.openProfil,
    }
}

const mapsDispatchToProps = (dispatch) => {
    return {
        getDataDebitur: (data) => dispatch(getDataDebt(data)),
        updateFlag: (data) => dispatch(FlagStatus(data)),
        ubahAdministrasi: (data) => dispatch({ type: 'CHANGE_ADMINSTEP', value: data }),
        ubahPengajuan: (data) => dispatch({ type: 'CHANGE_PENGAJUANSTEP', value: data }),
        ubahAksep: (data) => dispatch({ type: 'CHANGE_AKSEPSTEP', value: data }),
        ubahSlik: (data) => dispatch({ type: 'CHANGE_SLIKSTEP', value: data }),
        ubahLegal: (data) => dispatch({ type: 'CHANGE_LEGALSTEP', value: data }),
        ubahKomite: (data) => dispatch({ type: 'CHANGE_KOMITESTEP', value: data }),
        ubahSetuju: (data) => dispatch({ type: 'CHANGE_SETUJUSTEP', value: data }),
        setDialog: () => dispatch({ type: 'CHANGE_DIALOG', value: true }),
        setTextDialog: (data) => dispatch({ type: 'CHANGE_TEXTDIALOG', value: data }),
        setCloseDialog: () => dispatch({ type: 'CHANGE_DIALOG', value: false })
    }
}

export default connect(mapsStateToProps, mapsDispatchToProps)(DashborAdminDeta)