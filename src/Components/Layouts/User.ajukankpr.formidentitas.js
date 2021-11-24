import React from 'react'

import { Container, Row, Col } from 'react-bootstrap'
import Cookies from 'universal-cookie'

import { connect } from 'react-redux'

import Spin from '../Atoms/Spinner'
import Button from '../Atoms/Button/Next'
import ButtonUpload from '../Atoms/Button/Upload'

import Sidemenu from '../Atoms/Sidemenu'

import { getRumah } from '../../Actions/kpr'

import Lingkaran from '../Atoms/Additional/Circle'
import Lingkaran2 from '../Atoms/Additional/Circle2'
import Lingkaran3 from '../Atoms/Additional/Circle3'
import Lingkaran4 from '../Atoms/Additional/Circle4'

import Panjang from '../Atoms/Additional/Panjang'
import Panjang2 from '../Atoms/Additional/Panjang2'
import Panjang3 from '../Atoms/Additional/Panjang3'

import { Uploadktp, Uploadfoto } from '../../Actions/kpr'

const cookies = new Cookies()

class UserAjukan1 extends React.Component {
    constructor(props) {
        super(props);
        this.handleUploadKTP = this.handleUploadKTP.bind(this);
        this.handleUploadFoto = this.handleUploadFoto.bind(this);
    }

    handleUploadKTP = async (e) => {
        e.preventDefault();

        const data = new FormData();
        let btnImg = document.querySelector('#formFile')
        let ktp = btnImg.files[0]
        data.append('ektp', ktp)

        const resUpload = await this.props.uploadKTP(data).catch(err => err)
        // console.log(resUpload)
        if (resUpload) {
            // console.log(resUpload)
            cookies.set('_ktp', resUpload.fileName)
            this.props.isUploadKTP()
        } else { alert("Upload KTP Failed") }
    }

    handleUploadFoto = async (e) => {
        e.preventDefault();

        const data = new FormData();
        let btnImg = document.querySelector('#formFoto')
        let foto = btnImg.files[0]
        data.append('foto', foto)

        const resUpload = await this.props.uploadFoto(data).catch(err => err)
        // console.log(resUpload)
        if (resUpload) {
            // console.log(resUpload)
            cookies.set('_foto', resUpload.fileName)
            cookies.set('_step3', true)
            cookies.set('_stepUploadFoto', true)
            this.props.isUploadFot()
            this.props.next3Action()
            this.props.step3Action()
        } else { alert("Upload Foto Failed") }
    }

    componentDidMount() {
        console.log(this.props.isState)
    }

    handleNext = () => {
        window.location.href = '/ajukankpr/formslip'
    }


    render() {
        return (
            <Container fluid id="bg-dashburd">
                <Row className="wrapper-dashburd">
                    <Sidemenu />
                    <Col md="9">
                        <Row className="wrapper-side-right">
                            <Col md="12">
                                <h2 className="title-dashburd">Pengajuan KPR</h2>
                            </Col>
                            <Col md="12" className="wrapper-side-right1">
                                <Row className="wrap-ajukan">
                                    <Col md="12"><h5>Form Pengajuan KPR</h5></Col>
                                    <Col md="12"><h5>Search</h5></Col>
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
                                    <Panjang2 md="2" className="segipanjang" aktif3={this.props.panjangS2} />
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
                                                <p>Silahkan upload scan KTP dan Foto Selfie dengan memegang KTP</p>
                                            </Col>
                                            <Col md="12">
                                                <p>1. Upload Foto Scan KTP</p>
                                            </Col>
                                            <Col md="6">
                                                <form>
                                                    <div>
                                                        <input type="file" id="formFile" />
                                                    </div>
                                                    <br />
                                                    <div>
                                                        <ButtonUpload type="submit" onClick={this.handleUploadKTP} className="btn-upload"></ButtonUpload>
                                                    </div>
                                                </form>
                                            </Col>
                                            <Col md="6">
                                                {<Spin loading={this.props.isLoading} />}
                                            </Col>
                                            <Col md="12" className="foto-pegang">
                                                <p>2. Upload Foto diri dengan memegang KTP</p>
                                            </Col>
                                            <Col md="6">
                                                <form>
                                                    <div>
                                                        <input type="file" id="formFoto" />
                                                    </div>
                                                    <br />
                                                    <div>
                                                        <ButtonUpload type="submit" onClick={this.handleUploadFoto} className="btn-upload" aktif={this.props.isUploadFoto}></ButtonUpload>
                                                    </div>
                                                </form>
                                            </Col>
                                            <Col md="6">
                                                {<Spin loading={this.props.isLoading} />}
                                            </Col>
                                        </Row>
                                    </Col>
                                    <Col className="wrap-button-next">
                                        {<Button className="btn-next" title={'Next'} isNext={this.props.isFill3} onClick={this.handleNext} />}
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
    isUploadKTP: state.rumahReducer.isUplodKTP,
    isUploadFoto: state.rumahReducer.isUplodFoto
})

const mapsDispatchToProps = (dispatch) => {
    return {
        getListRumah: () => dispatch(getRumah()),
        nextAction: () => dispatch({ type: 'CHANGE_NEXT', value: true }),
        centangAction: () => dispatch({ type: 'CHANGE_CHECK', value: true }),
        step1Action: () => dispatch({ type: 'CHANGE_STEP1', value: true }),
        uploadKTP: (data) => dispatch(Uploadktp(data)),
        uploadFoto: (data) => dispatch(Uploadfoto(data)),
        next2Action: () => dispatch({ type: 'CHANGE_NEXT2', value: true }),
        step2Action: () => dispatch({ type: 'CHANGE_STEP2', value: true }),
        next3Action: () => dispatch({ type: 'CHANGE_NEXT3', value: true }),
        step3Action: () => dispatch({ type: 'CHANGE_STEP3', value: true }),
        isUploadKTP: () => dispatch({ type: 'CHANGE_UPLOADKTP', VALUE: true }),
        isUploadFot: () => dispatch({ type: 'CHANGE_UPLOADFOTO', VALUE: true })
    }
}

export default connect(mapsStateToProps, mapsDispatchToProps)(UserAjukan1)