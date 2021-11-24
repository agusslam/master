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

import formKPR from '../../Assets/Form/FORM_KPR001.pdf'

import { Uploadfkpr } from '../../Actions/kpr'

const cookies = new Cookies()

class UserAjukan1 extends React.Component {
    constructor(props) {
        super(props);
        this.handleUploadImage = this.handleUploadImage.bind(this);
    }

    handleUploadImage = async (e) => {
        e.preventDefault();

        const data = new FormData();
        let btnImg = document.querySelector('#formFile')
        let formkpr = btnImg.files[0]

        data.append('image', formkpr)
        const resUpload = await this.props.uploadFKPR(data).catch(err => err)
        console.log(resUpload)
        if (resUpload) {
            // console.log(resUpload)
            cookies.set('_fkpr', resUpload.fileName)
            cookies.set('_step2', true)
            this.props.next2Action()
            this.props.step2Action()
        } else { alert("Somethink Error") }
    }

    componentDidMount() {
        console.log(this.props.isState)
    }

    handleNext = () => {
        window.location.href = '/ajukankpr/formidentitas'
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
    isLoading: state.rumahReducer.isLoading,
    listKPR: state.rumahReducer.listRum,
    isFill: state.rumahReducer.isFil,
    isFill2: state.rumahReducer.isFil2,
    isCent: state.rumahReducer.isCentang,
    isState: state.rumahReducer,
    circleS1: state.rumahReducer.circleStep1,
    panjangS1: state.rumahReducer.persegiStep1,
    circleS2: state.rumahReducer.circleStep2,
    panjangS2: state.rumahReducer.persegiStep2,
    circleS3: state.rumahReducer.circleStep3,
    panjangS3: state.rumahReducer.persegiStep3,
    circleS4: state.rumahReducer.circleStep4,
    isUpload: state.rumahReducer.isUplodfkpr
})

const mapsDispatchToProps = (dispatch) => {
    return {
        getListRumah: () => dispatch(getRumah()),
        nextAction: () => dispatch({ type: 'CHANGE_NEXT', value: true }),
        centangAction: () => dispatch({ type: 'CHANGE_CHECK', value: true }),
        step1Action: () => dispatch({ type: 'CHANGE_STEP1', value: true }),
        uploadFKPR: (data) => dispatch(Uploadfkpr(data)),
        next2Action: () => dispatch({ type: 'CHANGE_NEXT2', value: true }),
        step2Action: () => dispatch({ type: 'CHANGE_STEP2', value: true }),
    }
}

export default connect(mapsStateToProps, mapsDispatchToProps)(UserAjukan1)