import React from 'react'
import { Route } from 'react-router-dom'

import { Container, Row, Col } from 'react-bootstrap'

import ModalDialog from '../../../Modals/Alert'

import Cookies from 'universal-cookie'

import { connect } from 'react-redux'

import Spin from '../../../Spinner/index'
import Button from '../../../Button/Next'
import ButtonUpload from '../../../Button/Upload'

import Sidemenu from '../../../Sidemenu/index'

import Lingkaran from '../../../Circle/Circle'
import Lingkaran2 from '../../../Circle/Circle2'
import Lingkaran3 from '../../../Circle/Circle3'
import Lingkaran4 from '../../../Circle/Circle4'

import Panjang from '../../../Panjang/Panjang'
import Panjang2 from '../../../Panjang/Panjang2'
import Panjang3 from '../../../Panjang/Panjang3'

import formKPR from '../../../../../Assets/Form/FORM_KPR001.pdf'

import { Uploadfkpr } from '../../../../../Actions/kpr'

const cookies = new Cookies()

class UserAjukan1 extends React.Component {
    constructor(props) {
        super(props);
        console.log(this.props.stateNow)
        this.handleUploadImage = this.handleUploadImage.bind(this);
        this.handleClose = this.handleClose.bind(this);
        this.handleNext = this.handleNext.bind(this);
    }

    handleUploadImage = async (e) => {
        e.preventDefault();


        const data = new FormData();
        let btnImg = document.querySelector('#formFile')
        let formkpr = btnImg.files[0]

        if (!formkpr) {
            this.props.setDialog()
            this.props.setTextDialog('Mohon untuk memilih file terlebih dahulu')
        } else {
            data.append('image', formkpr)
            const resUpload = await this.props.uploadFKPR(data).catch(err => err)
            if (resUpload.status === 200) {
                this.props.setDialog()
                this.props.setTextDialog('Upload Form Kredit Sukses')
                cookies.set('_fkpr', resUpload.fileName)
                cookies.set('_step2', true)
                this.props.next2Action()
                this.props.step2Action()
            } else { 
                this.props.setDialog()
                this.props.setTextDialog('Maaf terjadi kesalahan Upload')
             }
        }
    }

    handleClose = async () => {
        this.props.setCloseDialog()
    }

    handleNext = () => {
        window.location.href = '/ajukankpr/formidentitas'
    }

    componentDidUpdate(){
        console.log(this.props.stateNow)
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
                                                <p>1. Silahkan Download Form Permohonan KPR berikut ini <a href={formKPR} download="FORM_KPR">FormKPR</a> </p>
                                            </Col>
                                            <Col md="12">
                                                <p>2. Isi dan tandatangai Form yang telah di download menggunakan materai Rp.10.000</p>
                                            </Col>
                                            <Col md="12">
                                                <p>3. Scan dan upload form pengajuan yang telah diisi</p>
                                            </Col>
                                            <Col md="6">
                                                <form>
                                                    <div>
                                                        <input type="file" id="formFile" />
                                                    </div>
                                                    <br />
                                                    <div>
                                                        <ButtonUpload type="submit" onClick={this.handleUploadImage} className="btn-upload" aktif={this.props.isUpload}></ButtonUpload>
                                                    </div>
                                                </form>
                                            </Col>
                                            <Col md="6">
                                                {<Spin loading={this.props.isLoading} />}
                                            </Col>
                                        </Row>
                                    </Col>
                                    <Col className="wrap-button-next">
                                        {<Button className="btn-next" title={'Next'} isNext={this.props.isFill2} onClick={this.handleNext} />}
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
    titleD: state.modalReducer.titleAlert,
    isLoading: state.rumahReducer.isLoading,
    isFill: state.rumahReducer.isFil,
    isFill2: state.rumahReducer.isFil2,
    isCent: state.rumahReducer.isCentang,
    circleS1: state.rumahReducer.circleStep1,
    panjangS1: state.rumahReducer.persegiStep1,
    circleS2: state.rumahReducer.circleStep2,
    panjangS2: state.rumahReducer.persegiStep2,
    circleS3: state.rumahReducer.circleStep3,
    panjangS3: state.rumahReducer.persegiStep3,
    circleS4: state.rumahReducer.circleStep4,
    isUpload: state.rumahReducer.isUplodfkpr,
    isOpenDialog: state.modalReducer.openDialog,
})

const mapsDispatchToProps = (dispatch) => {
    return {
        nextAction: () => dispatch({ type: 'CHANGE_NEXT', value: true }),
        centangAction: () => dispatch({ type: 'CHANGE_CHECK', value: true }),
        uploadFKPR: (data) => dispatch(Uploadfkpr(data)),
        next2Action: () => dispatch({ type: 'CHANGE_NEXT2', value: true }),
        step2Action: () => dispatch({ type: 'CHANGE_STEP2', value: true }),
        setDialog: () => dispatch({ type: 'CHANGE_DIALOG', value: true }),
        setTextDialog: (data) => dispatch({ type: 'CHANGE_TEXTDIALOG', value: data }),
        setCloseDialog: () => dispatch({ type: 'CHANGE_DIALOG', value: false })
    }
}

export default connect(mapsStateToProps, mapsDispatchToProps)(UserAjukan1)