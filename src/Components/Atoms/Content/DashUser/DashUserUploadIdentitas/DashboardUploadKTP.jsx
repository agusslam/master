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

import { Uploadktp, Uploadfoto } from '../../../../../Actions/kpr'
import '../DashUserUploadIdentitas/DashboardUploadKTP.css'

const cookies = new Cookies()

class UserAjukan2 extends React.Component {
    constructor(props) {
        super(props);
        this.handleUploadKTP = this.handleUploadKTP.bind(this);
        this.handleUploadFoto = this.handleUploadFoto.bind(this);
        this.handleNext = this.handleNext.bind(this);
    }

    handleUploadKTP = async (e) => {
        e.preventDefault();

        const data = new FormData();
        let btnImg = document.querySelector('#formFile')
        let ktp = btnImg.files[0]
        if (!ktp) {
            this.props.setDialog()
            this.props.setTextDialog('Mohon untuk memilih file terlebih dahulu')
        } else {
            data.append('ektp', ktp)
            const resUpload = await this.props.uploadKTP(data).catch(err => err)
            console.log(resUpload)
            if (resUpload.status === 200) {
                this.props.setDialog()
                this.props.setTextDialog('Upload Scan KTP Sukses')
                cookies.set('_ktp', resUpload.fileName)
                this.props.isKTPUp()
                this.props.isKTPEnable()
            } else {
                this.props.setDialog()
                this.props.setTextDialog('Maaf terjadi kesalahan Upload')
            }
        }


    }

    handleUploadFoto = async (e) => {
        e.preventDefault();

        const data = new FormData();
        let btnImg = document.querySelector('#formFoto')
        let foto = btnImg.files[0]

        if (!foto) {
            this.props.setDialog()
            this.props.setTextDialog('Mohon untuk memilih file terlebih dahulu')
        } else {
            data.append('foto', foto)
            const resUpload = await this.props.uploadFoto(data).catch(err => err)
            // console.log(resUpload)
            if (resUpload.status === 200) {
                this.props.setDialog()
                this.props.setTextDialog('Upload Foto Sukses')
                cookies.set('_foto', resUpload.fileName)
                cookies.set('_step3', true)
                cookies.set('_stepUploadFoto', true)
                this.props.isFotoUp()
                this.props.next3Action()
                this.props.step3Action()
            } else { alert("Upload Foto Failed") }
        }

    }

    handleNext = () => {
        window.location.href = '/ajukankpr/formslip'
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
                                    <Col md="8" className="wrap-step">
                                        <Lingkaran aktif={this.props.circleS1} />
                                        <Panjang md="2" aktif2={this.props.panjangS1} />
                                        <Lingkaran2 aktif={this.props.circleS2} />
                                        <Panjang2 md="2" aktif2={this.props.panjangS2} />
                                        <Lingkaran3 aktif={this.props.circleS3} />
                                        <Panjang3 md="2" aktif2={this.props.panjangS3} />
                                        <Lingkaran4 aktif={this.props.circleS4} />
                                    </Col>
                                    <Col md="4" className="wrap-search">
                                    </Col>
                                    <Col md="12">
                                        <Row className="wrap-formuploadkpr">
                                            <Col md="12">
                                                <p>Silahkan unggah scan KTP dan Foto Selfie dengan memegang KTP</p>
                                            </Col>
                                            <Col md="12">
                                                <p>1. Unggah Foto Scan KTP</p>
                                            </Col>
                                            <Col md="6">
                                                <form>
                                                    <div>
                                                        <input type="file" id="formFile" />
                                                    </div>
                                                    <br />
                                                    <div>
                                                        <ButtonUpload type="submit" onClick={this.handleUploadKTP} className="btn-upload" aktif={this.props.isKTP}></ButtonUpload>
                                                    </div>
                                                </form>
                                            </Col>
                                            <Col md="6">
                                                {<Spin loading={this.props.isLoading} />}
                                            </Col>
                                            <Col md="12" className="foto-pegang">
                                                <p>2. Unggah Foto diri dengan memegang KTP</p>
                                            </Col>
                                            <Col md="6">
                                                <form>
                                                    <div>
                                                        <input type="file" id="formFoto" />
                                                    </div>
                                                    <br />
                                                    <div>
                                                        <ButtonUpload2 type="submit" onClick={this.handleUploadFoto} className="btn-upload" aktif={this.props.isFoto}></ButtonUpload2>
                                                    </div>
                                                </form>
                                            </Col>
                                            <Col md="6">
                                            </Col>
                                        </Row>
                                    </Col>
                                    <Col className="wrap-button-next">
                                        {<Button className="btn-next" title={'Lanjut'} isNext={this.props.isFill3} onClick={this.handleNext} />}
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
    listKPR: state.rumahReducer.listRum,
    isFill: state.rumahReducer.isFil,
    isFill2: state.rumahReducer.isFil2,
    isFill3: state.rumahReducer.isFil3,
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
})

const mapsDispatchToProps = (dispatch) => {
    return {
        nextAction: () => dispatch({ type: 'CHANGE_NEXT', value: true }),
        centangAction: () => dispatch({ type: 'CHANGE_CHECK', value: true }),
        step1Action: () => dispatch({ type: 'CHANGE_STEP1', value: true }),
        uploadKTP: (data) => dispatch(Uploadktp(data)),
        uploadFoto: (data) => dispatch(Uploadfoto(data)),
        next2Action: () => dispatch({ type: 'CHANGE_NEXT2', value: true }),
        step2Action: () => dispatch({ type: 'CHANGE_STEP2', value: true }),
        next3Action: () => dispatch({ type: 'CHANGE_NEXT3', value: true }),
        step3Action: () => dispatch({ type: 'CHANGE_STEP3', value: true }),
        setDialog: () => dispatch({ type: 'CHANGE_DIALOG', value: true }),
        setTextDialog: (data) => dispatch({ type: 'CHANGE_TEXTDIALOG', value: data }),
        setCloseDialog: () => dispatch({ type: 'CHANGE_DIALOG', value: false }),
        isKTPUp: () => dispatch({ type: 'CHANGE_UPLOADKTP', value: true }),
        isKTPEnable: () => dispatch({ type: 'CHANGE_UPLOADFOTO', value: 0 }),
        isFotoUp: () => dispatch({ type: 'CHANGE_UPLOADFOTO', value: 2 })
    }
}

export default connect(mapsStateToProps, mapsDispatchToProps)(UserAjukan2)