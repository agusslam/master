import React from 'react'
import { Route } from 'react-router-dom'

import { Container, Row, Col } from 'react-bootstrap'
import ModalDialog from '../../../Modals/Alert'

import Cookies from 'universal-cookie'

import { connect } from 'react-redux'

import Spin from '../../../Spinner/index'
import Button from '../../../Button/Next'
import ButtonUpload from '../../../Button/Upload'
import ButtonUpload2 from '../../../Button/Upload2'

import Sidemenu from '../../../Sidemenu/index'

import Lingkaran from '../../../Circle/Circle'
import Lingkaran2 from '../../../Circle/Circle2'
import Lingkaran3 from '../../../Circle/Circle3'
import Lingkaran4 from '../../../Circle/Circle4'

import Panjang from '../../../Panjang/Panjang'
import Panjang2 from '../../../Panjang/Panjang2'
import Panjang3 from '../../../Panjang/Panjang3'

import { Uploadrk, UploadSlip, CreateKPR } from '../../../../../Actions/kpr'
import {getDebtInfo} from '../../../../../Actions/auth'

const cookies = new Cookies()

class UserUpldSlip extends React.Component {
    constructor(props) {
        super(props);
        this.handleUploadRK = this.handleUploadRK.bind(this);
        this.handleUploadSlip = this.handleUploadSlip.bind(this);
        this.handleNext = this.handleNext.bind(this);
    }

    handleUploadRK = async (e) => {
        e.preventDefault();

        const data = new FormData();
        let btnImg = document.querySelector('#formFile')
        let rk = btnImg.files[0]

        if (!rk) {
            this.props.setDialog()
            this.props.setTextDialog('Mohon untuk memilih file terlebih dahulu')
        } else {
            data.append('rk', rk)
            const resUpload = await this.props.uploadRK(data).catch(err => err)
            if (resUpload.status === 200) {
                this.props.setDialog()
                this.props.setTextDialog('Upload Rekening Koran Sukses')
                cookies.set('_rk', resUpload.fileName)
                this.props.isRK()
                this.props.isSlipEnable()
            } else {
                this.props.setDialog()
                this.props.setTextDialog('Maaf terjadi kesalahan Upload')
            }
        }

    }

    handleUploadSlip = async (e) => {
        e.preventDefault();

        const data = new FormData();
        let btnImg = document.querySelector('#formFoto')
        let slip = btnImg.files[0]

        if (!slip) {
            this.props.setDialog()
            this.props.setTextDialog('Mohon untuk memilih file terlebih dahulu')
        } else {
            data.append('slip', slip)
            const resUpload = await this.props.uploadSlip(data).catch(err => err)
            if (resUpload.status === 200) {
                this.props.setDialog()
                this.props.setTextDialog('Upload Slip Gaji Sukses')
                cookies.set('_slip', resUpload.fileName)
                cookies.set('_step4', true)
                cookies.set('_stepUploadSlip', true)
                this.props.isSlip()
                this.props.next4Action()
                this.props.step4Action()
            } else { alert("Upload Foto Failed") }
        }
    }

    handleNext = async () => {        

        const infoDebtr = await this.props.getDet().catch(err => err)
        if (infoDebtr.status === 200) {
            // console.log(infoDebtr.result._id)
            let data = {
                fkpr: cookies.get('_fkpr'),
                ktp: cookies.get('_ktp'),
                foto: cookies.get('_foto'),
                slip: cookies.get('_slip'),
                rk: cookies.get('_rk'),
                id: cookies.get('_sel'),
                idDebitur: infoDebtr.result._id,
                namadebitur: infoDebtr.result.nama
            }
            const resText = await this.props.newKPR(data).catch(err => err)
            if (resText.status === 200) {
                this.props.setDialog()
                this.props.setTextDialog('Sukses Simpan Pengajuan KPR KB Bukopin')
                // console.log(resText.message)
                cookies.remove('_sel', { path: '/' })
                cookies.remove('_slip', { path: '/ajukankpr' })
                cookies.remove('_stepUploadSlip', { path: '/ajukankpr' })
                cookies.remove('_rk', { path: '/ajukankpr' })
                cookies.remove('_step4', { path: '/ajukankpr' })
                cookies.remove('_step1', { path: '/ajukankpr' })
                cookies.remove('_stepUploadFoto', { path: '/ajukankpr' })
                cookies.remove('_fkpr', { path: '/ajukankpr' })
                cookies.remove('_foto', { path: '/ajukankpr' })
                cookies.remove('_ktp', { path: '/ajukankpr' })
                cookies.remove('_step2', { path: '/ajukankpr' })
                cookies.remove('_step3', { path: '/ajukankpr' })
                cookies.remove('_step1', { path: '/' })
                window.location.href = '/dashboardmember'
            } else {
                this.props.setDialog()
                this.props.setTextDialog('Maaf terjadi kesalahan Upload')
            }
        }else {
            this.props.setDialog()
                this.props.setTextDialog('Maaf terjadi kesalahan Get Info Debitur')
        }

    }

    render() {
        return (
            <Container fluid={true} id="bg-dashburd" style={{
                backgroundImage: `url(${require('../../../../../Assets/Images/bgdashboard.png').default})`
                , backgroundSize: 'cover'
            }}>
                <Row className="wrapper-dashburd">
                    <Route component={Sidemenu} />
                    <ModalDialog show={this.props.isOpenDialog} onHide={this.handleClose} title={this.props.titleD} />
                    <Col md="9">
                        <Row className="wrapper-side-right">
                            <Col md="12">
                                <h2 className="title-dashburd">Pengajuan KPR</h2>
                            </Col>
                            <Col md="12" className="wrapper-side-right1">
                                <Row className="wrap-ajukan">
                                    <Col md="12"><h5>Form Pengajuan KPR</h5></Col>
                                    <Lingkaran md="2" className="outer" aktif={this.props.circleS1}>
                                        <Row className="inner">
                                            <Col md="12" className="step-angka"><h1>1</h1></Col>
                                        </Row>
                                    </Lingkaran>
                                    <Panjang md="2" className="segipanjang" aktif2={this.props.panjangS1}></Panjang>
                                    <Lingkaran2 md="2" className="outer" aktif={this.props.circleS2}>
                                        <Row className="inner">
                                            <Col md="12" className="step-angka"><h1>2</h1></Col>
                                        </Row>
                                    </Lingkaran2>
                                    <Panjang2 md="2" className="segipanjang" aktif2={this.props.panjangS2} />
                                    <Lingkaran3 md="2" className="outer" aktif={this.props.circleS3}>
                                        <Row className="inner">
                                            <Col md="12" className="step-angka"><h1>3</h1></Col>
                                        </Row>
                                    </Lingkaran3>
                                    <Panjang3 md="2" className="segipanjang" aktif2={this.props.panjangS3}></Panjang3>
                                    <Lingkaran4 md="2" className="outer" aktif={this.props.circleS4}>
                                        <Row className="inner">
                                            <Col md="12" className="step-angka"><h1>4</h1></Col>
                                        </Row>
                                    </Lingkaran4>
                                    <Col md="12">
                                        <Row className="wrap-formuploadkpr">
                                            <Col md="12">
                                                <p>Silahkan unggah Rekening koran 3 bulan terakhir dan slip gaji</p>
                                            </Col>
                                            <Col md="12">
                                                <p>1. Unggah scan rekening koran</p>
                                            </Col>
                                            <Col md="6">
                                                <form>
                                                    <div>
                                                        <input type="file" id="formFile" />
                                                    </div>
                                                    <br />
                                                    <div>
                                                        <ButtonUpload type="submit" onClick={this.handleUploadRK} className="btn-upload" aktif={this.props.isUploadRek}></ButtonUpload>
                                                    </div>
                                                </form>
                                            </Col>
                                            <Col md="6">
                                                {<Spin loading={this.props.isLoading} />}
                                            </Col>
                                            <Col md="12" className="foto-pegang">
                                                <p>2. Unggah scan slip gaji 3 bulan terakhir</p>
                                            </Col>
                                            <Col md="6">
                                                <form>
                                                    <div>
                                                        <input type="file" id="formFoto" />
                                                    </div>
                                                    <br />
                                                    <div>
                                                        <ButtonUpload2 type="submit" onClick={this.handleUploadSlip} className="btn-upload" aktif={this.props.isUploadslip}></ButtonUpload2>
                                                    </div>
                                                </form>
                                            </Col>
                                            <Col md="6">
                                            </Col>
                                        </Row>
                                    </Col>
                                    <Col className="wrap-button-next">
                                        {<Button className="btn-next" title={'Kirim'} loading={this.props.isLoading} isNext={this.props.isFill4} onClick={this.handleNext} />}
                                    </Col>

                                </Row>
                            </Col>
                            <Col md="12" className="wrapper-side-right2">

                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>

        )
    }
}

const mapsStateToProps = (state) => ({
    isLoading: state.rumahReducer.isLoading,
    isFill: state.rumahReducer.isFil,
    isFill2: state.rumahReducer.isFil2,
    isFill3: state.rumahReducer.isFil3,
    isFill4: state.rumahReducer.isFil4,
    isCent: state.rumahReducer.isCentang,
    isState: state.rumahReducer,
    circleS1: state.rumahReducer.circleStep1,
    panjangS1: state.rumahReducer.persegiStep1,
    circleS2: state.rumahReducer.circleStep2,
    panjangS2: state.rumahReducer.persegiStep2,
    circleS3: state.rumahReducer.circleStep3,
    panjangS3: state.rumahReducer.persegiStep3,
    circleS4: state.rumahReducer.circleStep4,
    isUpload: state.rumahReducer.isUplodfkpr,
    isKTP: state.rumahReducer.isUplodKTP,
    isFoto: state.rumahReducer.isUplodFoto,
    isOpenDialog: state.modalReducer.openDialog,
    titleD: state.modalReducer.titleAlert,
    isUploadRek: state.rumahReducer.isUplodrk,
    isUploadslip: state.rumahReducer.isUplodslip
})

const mapsDispatchToProps = (dispatch) => {
    return {
        nextAction: () => dispatch({ type: 'CHANGE_NEXT', value: true }),
        centangAction: () => dispatch({ type: 'CHANGE_CHECK', value: true }),
        uploadRK: (data) => dispatch(Uploadrk(data)),
        uploadSlip: (data) => dispatch(UploadSlip(data)),
        newKPR: (data) => dispatch(CreateKPR(data)),
        next2Action: () => dispatch({ type: 'CHANGE_NEXT2', value: true }),
        step2Action: () => dispatch({ type: 'CHANGE_STEP2', value: true }),
        next3Action: () => dispatch({ type: 'CHANGE_NEXT3', value: true }),
        step3Action: () => dispatch({ type: 'CHANGE_STEP3', value: true }),
        next4Action: () => dispatch({ type: 'CHANGE_NEXT4', value: true }),
        step4Action: () => dispatch({ type: 'CHANGE_STEP4', value: true }),
        setDialog: () => dispatch({ type: 'CHANGE_DIALOG', value: true }),
        setTextDialog: (data) => dispatch({ type: 'CHANGE_TEXTDIALOG', value: data }),
        setCloseDialog: () => dispatch({ type: 'CHANGE_DIALOG', value: false }),
        isSlipEnable: () => dispatch({ type: 'CHANGE_UPLOADSLIP', value: 0 }),
        isRK: () => dispatch({ type: 'CHANGE_UPLOADRK', value: true }),
        isSlip: () => dispatch({ type: 'CHANGE_UPLOADSLIP', value: 2 }),
        getDet: () => dispatch(getDebtInfo())

    }
}

export default connect(mapsStateToProps, mapsDispatchToProps)(UserUpldSlip)